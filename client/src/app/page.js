// File path: src/app/page.js
"use client"; // Ensure this is marked as a client component if using hooks

import React, { useEffect, useState, Suspense, lazy, useCallback, useMemo } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import bg from "../assets/backgroundimg.webp";
import Loader from "@/components/Loader/Loader.js";
import PreloadResources from "./components/PreloadResources";

// Conditionally import WDYR only in development
if (process.env.NODE_ENV === 'development') {
  import('./wdyr');
}

// Import critical components normally - the main page header is most important for user perception
import MainPg from "@/components/MainPg/MainPg.js";

// Use dynamic imports with loading priority for non-critical components
// Loading priority: 1) Above the fold, 2) User interaction components, 3) Content below the fold
// First priority - components likely to be above the fold
const AboutUs = dynamic(() => import("@/components/About_Us/AboutUs.js"), { 
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-black bg-opacity-50 animate-pulse" />
});

// Second priority - key interactive components
const Theme = dynamic(() => import("@/components/Tracks_new/Track"), { 
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-black bg-opacity-50 animate-pulse" /> 
});
const Faqs = dynamic(() => import("@/components/Faq/faq"), { 
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-black bg-opacity-50 animate-pulse" />
});

// Third priority - content components below the fold
const Slider = dynamic(() => import("@/components/events_gallery/slider.js"), { ssr: false });
const Timeline = dynamic(() => import("@/components/Timeline/timeline"), { ssr: false });
const Sponsors1 = dynamic(() => import("@/components/Sponsors/Sponsers1"), { ssr: false });
const Sponsors2 = dynamic(() => import("@/components/Sponsors/Sponsors2"), { ssr: false });
const SliderT = dynamic(() => import("@/components/Testimonials/slider"), { ssr: false });
const JudgesSection = dynamic(() => import("../components/JudgesSection/JudgesSection.js"), { ssr: false });
const Organizers = dynamic(() => import("@/components/Organizers/Organizer"), { ssr: false });
const Challenges = dynamic(() => import("@/components/Challenges/Challenges.jsx"), { ssr: false });
const Prizes = dynamic(() => import("@/components/Prizes/Prizes"), { ssr: false });
const RunofShow = dynamic(() => import("@/components/RunofShow/ScrollingTextShow.jsx"), { ssr: false });

// Footer loaded last but with better placeholder
const Footer = dynamic(() => import("@/components/contact_us/Footer"), { 
  ssr: false,
  loading: () => <div className="h-[200px] bg-black" />
});

// Add display names to all dynamic components to fix ESLint errors
AboutUs.displayName = 'DynamicAboutUs';
Theme.displayName = 'DynamicTheme';
Faqs.displayName = 'DynamicFaqs';
Slider.displayName = 'DynamicSlider';
Timeline.displayName = 'DynamicTimeline';
Sponsors1.displayName = 'DynamicSponsors1';
Sponsors2.displayName = 'DynamicSponsors2';
SliderT.displayName = 'DynamicSliderT';
JudgesSection.displayName = 'DynamicJudgesSection';
Organizers.displayName = 'DynamicOrganizers';
Challenges.displayName = 'DynamicChallenges';
Prizes.displayName = 'DynamicPrizes';
RunofShow.displayName = 'DynamicRunofShow';
Footer.displayName = 'DynamicFooter';

// Define section names outside the component to avoid recreation on each render
const SECTION_NAMES = [
  'aboutUs', 'slider', 'judges', 'theme', 'prizes', 'challenges',
  'timeline', 'runOfShow', 'sponsors1', 'sponsors2', 'sliderT',
  'organizers', 'faqs', 'footer'
];

// Create a placeholder component for lazy loading to reduce unnecessary DOM nodes
const Placeholder = React.memo(({ height = 400 }) => (
  <div className="bg-black bg-opacity-30" style={{ height: `${height}px` }} />
));
Placeholder.displayName = 'Placeholder';

function Home() {
  const [loading, setLoading] = useState(true);
  
  // Use reducer instead of multiple state updates to reduce rendering cycles
  const [visibleSections, dispatchVisibleSection] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_VISIBLE':
          return { ...state, [action.sectionKey]: true };
        default:
          return state;
      }
    },
    // Initial state - all sections hidden
    SECTION_NAMES.reduce((acc, name) => ({ ...acc, [name]: false }), {})
  );

  // Create refs with useMemo to prevent recreation on each render
  const sectionRefs = useMemo(() => {
    return SECTION_NAMES.reduce((acc, name) => {
      acc[name] = React.createRef();
      return acc;
    }, {});
  }, []); // Empty dependency array ensures this runs only once

  // Optimize initial loading - reduced from 300ms to 200ms for faster LCP
  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      // Just enough time for initial rendering (reduced from 300ms to 200ms)
      await new Promise((resolve) => setTimeout(resolve, 200)); 
      if (isMounted) setLoading(false);
    };

    fetchData();
    
    // Cleanup function to prevent state updates after unmount
    return () => { isMounted = false; };
  }, []);

  // Memoize the intersection observer setup to reduce function creation cost
  const setupObservers = useCallback(() => {
    if (loading) return () => {};

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 400px 0px', // Increased preloading distance for smoother experience
      threshold: 0.05 // Lower threshold to trigger loading sooner
    };

    const observers = {};
    
    // Use forEach instead of Object.entries for better performance
    SECTION_NAMES.forEach(key => {
      const ref = sectionRefs[key];
      if (!ref?.current) return;
      
      observers[key] = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            dispatchVisibleSection({ type: 'SET_VISIBLE', sectionKey: key });
            observers[key].unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      observers[key].observe(ref.current);
    });

    return () => {
      // Cleanup observers on component unmount
      Object.values(observers).forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, [loading, sectionRefs]);

  // Set up observers after initial render
  useEffect(setupObservers, [setupObservers]);

  // Memoize the renderSection function to prevent recreation on each render
  const renderSection = useCallback((sectionKey, Component, alwaysRender = false) => {
    const isVisible = visibleSections[sectionKey] || alwaysRender;
    
    return (
      <div ref={sectionRefs[sectionKey]}>
        {isVisible ? <Component /> : <Placeholder height={400} />}
      </div>
    );
  }, [visibleSections, sectionRefs]);

  // Memoize the background style to prevent recreation on each render
  const backgroundStyle = useMemo(() => ({ backgroundImage: `url(${bg.src})` }), []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Preload critical resources */}
      <PreloadResources />
      
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <div
          className="relative scroll-smooth bg-cover bg-center bg-fixed h-full overflow-y-auto space-y-20"
          style={backgroundStyle}
        >
          {/* MainPg is critical, so always render it */}
          <Suspense fallback={<Placeholder height={600} />}>
            <MainPg />
          </Suspense>
          
          {/* Lazily render other components as they become visible */}
          {renderSection('aboutUs', AboutUs)}
          {renderSection('slider', Slider)}
          {renderSection('judges', JudgesSection)}
          {renderSection('theme', Theme)}
          {renderSection('prizes', Prizes)}
          {renderSection('challenges', Challenges)}
          {renderSection('timeline', Timeline)}
          {renderSection('runOfShow', RunofShow)}
          {renderSection('sponsors1', Sponsors1)}
          {renderSection('sponsors2', Sponsors2)}
          {renderSection('sliderT', SliderT)}
          {renderSection('organizers', Organizers)}
          {renderSection('faqs', Faqs)}
          {renderSection('footer', Footer)}
        </div>
      )}
    </div>
  );
}

export default React.memo(Home);
