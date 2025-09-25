"use client";

import { useEffect } from 'react';

/**
 * Component to reduce main-thread work by efficiently managing resources
 * This helps improve LCP and minimize main thread work
 */
export function PreloadResources() {
  useEffect(() => {
    // Skip in development to avoid interfering with dev tools
    if (process.env.NODE_ENV === 'development') return;

    // Suppress message channel errors that come from browser extensions
    const suppressMessageChannelErrors = () => {
      const originalAddEventListener = window.addEventListener;
      const originalPostMessage = window.postMessage;
      
      // Track active message channels
      const activeChannels = new Set();

      // Safe event listener that prevents message channel errors
      window.addEventListener = function(type, listener, options) {
        if (type === 'message') {
          // Wrap message listeners to prevent channel closure errors
          const wrappedListener = function(event) {
            try {
              return listener.apply(this, arguments);
            } catch (err) {
              if (!err.message?.includes('message channel closed')) {
                console.error('Message listener error:', err);
              }
              return false; // Don't indicate async response
            }
          };
          return originalAddEventListener.call(this, type, wrappedListener, options);
        }
        return originalAddEventListener.call(this, type, listener, options);
      };
      
      // Return cleanup function
      return () => {
        window.addEventListener = originalAddEventListener;
        window.postMessage = originalPostMessage;
      };
    };

    // Set up error suppression
    const cleanupErrorSuppression = suppressMessageChannelErrors();

    // Function that runs critical optimizations first, then less critical ones
    const optimizeMainThreadWork = () => {
      // ---- CRITICAL: Run immediately ----
      // 1. Disable non-critical animations until content loads
      document.documentElement.classList.add('reduce-animation');
      
      // 2. Use passive event listeners for better scroll performance
      const supportsPassive = () => {
        let supports = false;
        try {
          window.addEventListener('test', null, {
            get passive() { supports = true; return true; }
          });
        } catch (e) {}
        return supports;
      };
      
      const passiveIfSupported = supportsPassive() ? { passive: true } : false;
      window.addEventListener('scroll', () => {}, passiveIfSupported);
      
      // ---- SECONDARY: Run during browser idle time ----
      const runWhenIdle = (callback, timeout = 2000) => {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(callback, { timeout });
        } else {
          setTimeout(callback, 1);
        }
      };
      
      // Run less critical optimizations during idle time
      runWhenIdle(() => {
        // 1. Identify and defer non-critical third-party scripts
        const deferThirdPartyScripts = () => {
          // Find third-party scripts (e.g., analytics)
          const nonCriticalScripts = Array.from(document.querySelectorAll(
            'script[src*="extension://"], script[src*="cdn."], script[defer]'
          )).filter(script => !script.hasAttribute('data-critical'));
          
          // Store script information and remove from DOM temporarily
          const scriptsInfo = nonCriticalScripts.map(script => {
            const scriptData = {
              src: script.src,
              async: script.async,
              defer: script.defer,
              type: script.type,
              innerHTML: script.innerHTML
            };
            
            // Remove the script if it has a parent
            if (script.parentNode) {
              script.parentNode.removeChild(script);
            }
            
            return scriptData;
          });
          
          // Re-add scripts after initial content load
          setTimeout(() => {
            scriptsInfo.forEach(info => {
              const script = document.createElement('script');
              if (info.src) script.src = info.src;
              if (info.innerHTML) script.innerHTML = info.innerHTML;
              script.async = true; // Force async
              script.defer = true; // Force defer
              if (info.type) script.type = info.type;
              
              document.body.appendChild(script);
            });
          }, 3000); // Wait for initial content to be interactive
        };
        
        // 2. Optimize garbage collection by clearing unnecessary references
        const optimizeMemory = () => {
          // Clear console in production
          if (typeof console !== 'undefined' && console.clear) {
            console.clear();
          }
          
          // Schedule regular memory cleanup
          setInterval(() => {
            // We can't directly control GC, but we can help by clearing references
            if (window._cachedData) {
              window._cachedData = {};
            }
          }, 60000); // Every minute
        };
        
        // Execute optimizations
        deferThirdPartyScripts();
        optimizeMemory();
        
        // Re-enable animations after content loads
        setTimeout(() => {
          document.documentElement.classList.remove('reduce-animation');
        }, 2000);
      }, 1000); // Run after 1 second of idle time
    };
    
    // Start optimizations if we're in the browser
    if (typeof window !== 'undefined') {
      // Handle unhandled promise rejections that might be coming from message channels
      const handleUnhandledRejection = (event) => {
        // Check if it's a message channel error and prevent it from showing in console
        if (event.reason && event.reason.message && 
            event.reason.message.includes('message channel closed')) {
          event.preventDefault();
        }
      };
      
      window.addEventListener('unhandledrejection', handleUnhandledRejection);
      
      // Start optimizations
      optimizeMainThreadWork();
    }
    
    return () => {
      // Cleanup if component unmounts
      document.documentElement.classList.remove('reduce-animation');
      
      // Remove error handling
      if (typeof window !== 'undefined') {
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        cleanupErrorSuppression();
      }
    };
  }, []);

  return null; // This component doesn't render anything
}

export default PreloadResources;
