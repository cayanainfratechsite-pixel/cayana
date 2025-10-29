"use client";

import Script from "next/script";

const AisensyWhatsApp = () => {
  return (
    <>
      {/* ✅ Load the AiSensy integration script */}
      <head>
        {/* ✅ AiSensy WhatsApp Script */}
        <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="aaao9r"
        ></script>
      </head>
    </>
  );
};

export default AisensyWhatsApp;
