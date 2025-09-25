"use client";

import { useEffect } from 'react';

/**
 * Utility to suppress common message channel errors
 * These errors typically occur with browser extensions or embedded content
 */
export function suppressMessageChannelErrors() {
  if (typeof window === 'undefined') return { cleanup: () => {} };
  
  // Store original methods
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;
  const originalPostMessage = window.postMessage;
  
  // Replace addEventListener to handle message events more safely
  window.addEventListener = function(type, listener, options) {
    if (type === 'message') {
      // Create a wrapper that prevents returning true for async responses
      const wrappedListener = function(event) {
        try {
          const result = listener.apply(this, arguments);
          // Prevent returning true (which indicates async response)
          return typeof result === 'boolean' ? false : result;
        } catch (err) {
          console.error('Error in message listener:', err);
          return false;
        }
      };
      return originalAddEventListener.call(this, type, wrappedListener, options);
    }
    return originalAddEventListener.call(this, type, listener, options);
  };
  
  // Add a global error handler for unhandled promise rejections
  const handleUnhandledRejection = (event) => {
    if (event.reason && 
        typeof event.reason.message === 'string' && 
        event.reason.message.includes('message channel closed')) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  
  // Install the handler
  window.addEventListener('unhandledrejection', handleUnhandledRejection);
  
  // Return a cleanup function
  return {
    cleanup: () => {
      window.addEventListener = originalAddEventListener;
      window.removeEventListener = originalRemoveEventListener;
      window.postMessage = originalPostMessage;
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    }
  };
}

/**
 * Use this in components with iframes or third-party embeds that might cause message channel errors
 */
export function useMessageChannelErrorSuppression() {
  useEffect(() => {
    const { cleanup } = suppressMessageChannelErrors();
    return cleanup;
  }, []);
}
