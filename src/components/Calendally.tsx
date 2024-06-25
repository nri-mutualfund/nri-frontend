import { useEffect } from "react";
const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/hello-sapiencapital/30min?text_color=424242&primary_color=00965a"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};
export default CalendlyWidget;