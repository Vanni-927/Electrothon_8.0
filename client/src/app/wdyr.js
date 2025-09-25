import React from 'react';

// Only run in development, client-side, and with explicit query parameter
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  // Only activate WDYR when explicitly requested via URL parameter
  const shouldActivateWDYR = () => {
    // Check if running in browser and URL has enableWDYR=true
    return typeof window !== 'undefined' && 
           window.location.search.includes('enableWDYR=true');
  };
  
  if (shouldActivateWDYR()) {
    try {
      // Use a more performant configuration
      const whyDidYouRender = require('@welldone-software/why-did-you-render');
      
      whyDidYouRender(React, {
        trackAllPureComponents: false,   // Significant performance boost
        trackHooks: false,               // Only enable when explicitly debugging hooks
        trackExtraHooks: [],             // No extra hooks tracking
        logOnDifferentValues: true,      // Log only when values change
        hotReloadBufferMs: 500,          // Buffer for hot reloading
        onlyLogs: true,                  // Only log, don't break on differences
        // Only track specific components that need debugging
        include: [
          // Add specific component names here when debugging
          // /ComponentName$/
        ],
      });
      
      console.log('Why Did You Render initialized in debug mode');
    } catch (e) {
      console.error('Error initializing Why Did You Render:', e);
    }
  }
}