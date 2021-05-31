import React from "react";
import SimpleFooter from "../components/Footer/SimpleFooter";
import SingIn from "../components/SingIn/SingIn";
import ScrollToTop from "../ScrollToTop";

function SingInPage() {
  return (
    <>
      <ScrollToTop />
      <SingIn />
      <SimpleFooter />
    </>
  );
}

export default SingInPage;
