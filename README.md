# AdBlocker

## Installation on Microsoft Edge and Google Chrome:

1. **Turn on Developer Mode**:
   - Open your browser and go to the extension settings (for Edge: `edge://extensions/`, for Chrome: `chrome://extensions/`).
   - Look for a switch labeled "Developer mode" and toggle it on.

2. **Install the Extension**:
   - Click on "Load unpacked" and select the AdBlocker folder.

## How to Verify Ad Blocking:

Follow these steps to make sure your ad blocker is working:

1. **Check Network Requests**:
   - Open Developer Tools by right-clicking on a webpage and selecting "Inspect".
   - Go to the Network tab.
   - Reload the page to see all the requests made by the webpage. Your ad blocker should stop requests to ad-related domains like doubleclick.net and googlesyndication.com.

2. **View Errors from the Extension**:
   - If there are any errors or issues with the ad blocker, you can check for them directly from the Extensions page:
     - Open your browser and go to the extensions.
     - Look for your ad blocker extension and click on "Details" or "More options".
     - If there are any errors, they will be displayed here.

3. **Visual Check**:
   - Visit websites known for displaying ads, like news sites.
   - See if ad spaces are empty or missing.

4. **Test on Ad Blocker Test Websites**:
   - Go to sites like AdBlock Tester (https://adblock-tester.com/) to check your ad blocker's effectiveness.

## Customizing Ad Blocking by Modifying `rules.json`:
   - If you want to block or allow ads on specific websites, you'll need to edit the `rules.json` file in the 'AdBlocker' folder.
