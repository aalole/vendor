import React, { Fragment } from "react";
import { Footer } from "./components/Footer";
import Banner from "./components/Banner";
import Teaser from "./components/Teaser";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import News from "./components/News";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Banner />
      <Teaser />
      <Gallery />
      <Services />
      <News />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
