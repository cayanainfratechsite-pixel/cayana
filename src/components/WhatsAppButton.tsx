"use client";

import Script from "next/script";

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
};

export default AisensyWhatsApp;
