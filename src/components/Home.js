import React from "react";
import Profile from "./profile";
import dataSelector from "../redux/selectors/dataSelector";
import mainColor from "../redux/selectors/mainColSelector";
import { useSelector } from "react-redux";
import Experience from "./experience";
import Education from "./education";
import Skils from "./skils";
import Languages from "./languages";
import Contact from "./contact";
import Footer from "./footer";
import { BrowserRouter as Router } from "react-router-dom";

function Home() {
  const { profile, experience, education, languages, contact } = useSelector(
    dataSelector
  );
  const { color, second } = useSelector(mainColor);

  return (
    <Router>
      <Profile profile={profile} color={color} second={second} />
      <Experience experience={experience} color={color} />
      <Education education={education} color={color} />
      <Skils />
      <Languages languages={languages} color={color} second={second} />
      <Contact contact={contact} color={color} />
      <Footer />
    </Router>
  );
}

export default Home;
