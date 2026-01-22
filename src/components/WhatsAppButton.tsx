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
  return (
    <>
      {/* ✅ Load the AiSensy integration script */}
      <Script
        type="text/javascript"
        src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
        id="aisensy-wa-widget"
        strategy="afterInteractive"
        onLoad={() => {
          // Set the widget-id attribute after script loads
          const script = document.getElementById('aisensy-wa-widget');
          if (script) {
            script.setAttribute('widget-id', 'aaao9r');
          }
        }}
      />
    </>
  );
  useEffect(() => {
    // Add delay before loading the script (e.g., 2 seconds)
    const timer = setTimeout(() => {
      const existingScript = document.querySelector(
        'script[src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js";
        script.id = "aisensy-wa-widget";
        script.setAttribute("widget-id", "aaao9r");
        script.async = true;
        document.body.appendChild(script);
      }
    }, 2000); // 2 second delay

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null; 
};

export default AisensyWhatsApp;