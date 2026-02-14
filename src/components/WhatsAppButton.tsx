// "use client";

// import Script from "next/script";

// const AisensyWhatsApp = () => {
//   return (
//     <>
//       {/* ✅ Load the AiSensy integration script */}
//       <head>
//         {/* ✅ AiSensy WhatsApp Script */}
//         <script
//           type="text/javascript"
//           src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
//           id="aisensy-wa-widget"
//           widget-id="aaao9r"
//         ></script>
//       </head>
//     </>
//   );
// };

// export default AisensyWhatsApp;

"use client";
import { useEffect } from "react";

const AisensyWhatsApp = () => {
  useEffect(() => {
    // Add delay before loading the script (e.g., 2 seconds)
    const timer = setTimeout(() => {
      const existingScript = document.querySelector(
        'script[src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"]',
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src =
          "https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js";
        script.id = "aisensy-wa-widget";
        script.setAttribute("widget-id", "aaao9r");
        script.async = true;
        document.body.appendChild(script);
      }
    }, 2000); // 2 second delay

    // Cleanup function to remove the script and widget when component unmounts
    return () => {
      clearTimeout(timer);

      // Remove all AiSensy/Dashly widget elements by ID
      const selectors = [
        "#aisensy-wa-widget", // Initial script tag
        "#df-script", // Main widget plugin script
        "#df-style", // Widget styles
        "#df-btn-cont", // Main container for the WhatsApp button
        "#preact-border-shadow-host", // Shadow DOM host
      ];

      selectors.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element) {
          element.remove();
        }
      });

      // Remove any elements with classes starting with 'df-'
      const dfElements = document.querySelectorAll(
        '[class^="df-"], [class*=" df-"]',
      );
      dfElements.forEach((element) => element.remove());

      // Clean up global variables to prevent widget re-injection
      if (typeof window !== "undefined") {
        try {
          delete (window as any).aisensyLink;
        } catch {
          (window as any).aisensyLink = undefined;
        }
        try {
          delete (window as any).aisensyWidgetOptions;
        } catch {
          (window as any).aisensyWidgetOptions = undefined;
        }
        try {
          delete (window as any).dfToggled;
        } catch {
          (window as any).dfToggled = undefined;
        }
        try {
          delete (window as any).dfToggle;
        } catch {
          (window as any).dfToggle = undefined;
        }
      }
    };
  }, []);

  return null;
};

export default AisensyWhatsApp;
