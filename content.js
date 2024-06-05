const blockedScripts = [
    "sentry.io",
    "bugsnag.com",
    "yandex.net",
    "doubleclick.net",
    "googlesyndication.com",
    "googleadservices.com"
  ];
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName && node.tagName.toLowerCase() === 'script') {
          blockedScripts.forEach((pattern) => {
            if (node.src.includes(pattern)) {
              node.type = 'javascript/blocked';
              node.parentElement.removeChild(node);
              console.log(`Blocked script execution: ${node.src}`);
            }
          });
        }
      });
    });
  });
  
  observer.observe(document.documentElement, { childList: true, subtree: true });
  