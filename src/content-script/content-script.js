import browser from 'webextension-polyfill';

/**
 * This just handles redirecting the current tab to the current
 * site's homepage after a successful registration + login.
 */
(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;


})();
