import React, { useEffect } from "react";
import { ThankYou } from "../components/ThankYou/ThankYou";
import ReactPixel from "react-facebook-pixel";

export default function ThankYouPage() {
  const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
  };
  ReactPixel.init("935971993835238", options);

  useEffect(() => {
    ReactPixel.pageView(); // For tracking page view
    ReactPixel.track("Lead"); // For tracking default events.
  }, []);

  return <ThankYou />;
}
