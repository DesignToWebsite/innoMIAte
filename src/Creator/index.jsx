import Nav from "../common/All/nav";
import Card from "../common/cards/organisersOption/card";
import icons from "../constants/icons";

import HeaderBack from "./HeaderBack";
import GuidesWrapper from "./GuidesWrapper";
import ShortCutsWrapper from "./ShortCutsWrapper";
import Footer from "../common/All/Footer";
import GlobalStyle from "../style/GlobalStyle";
import { Link } from "react-router-dom";

const Index = () => {
  const creatorCardText =
    "Get ready to innovate and inspire. Create your hackathon now!";
  const expertsCardText =
    "Experts act as judges and mentors in hackathons.  Join The Innovation! ";
  const creatorButtonText = "Creator";
  const expertButtonText = "Expert";
  return (
    <>
    <GlobalStyle />
    <div className="tw-relative ">
      <HeaderBack />
      <img src="/src/assets/bg_home.png" alt="background"></img>
      {/* <Nav /> */}
      <div className="tw-flex tw-h-screen ">
        <div className="tw-w-0 sm:tw-w-2/3">
          <div className="div-empty"></div>
        </div>
        <div className="tw-w-1/3  tw-pt-1 tw-bg-blue tw-flex tw-flex-col tw-justify-center ">
          <div className="options-wrapper tw-px-12  ">
            <Card
              iconUrl={icons.creator}
              cardText={creatorCardText}
              buttonText={
                <Link to="/requestForm">
                  {creatorButtonText}
                </Link>
              }
            />
            <Card
              iconUrl={icons.expert}
              cardText={expertsCardText}
              buttonText={expertButtonText}
            />
          </div>
        </div>
      </div>
      <GuidesWrapper />
      <div className="tw-h-screen tw-p-8 tw-m-16">
        <ShortCutsWrapper />
      </div>
      {/* <Footer /> */}
    </div>
    </>
    
  );
};
export default Index;
