import React from "react";
import Nav from "../../common/All/nav";
import Footer from "../../common/All/Footer";
import ImageComponent from "./icon1";
import creator from '../../assets/icons/creator.png';
import "./card0.css";
import AnimatedHeadings from "./effectCard";
import HeaderBack from "../HeaderBack";

const Card0 = () => {
  return (
    <div className="tw-relative">
      {/*<Nav />*/}
      <HeaderBack/>
      <img src="/src/assets/bg_home.png" alt="background"></img>

      
      <div className="tw-hidden md:tw-block">
        <AnimatedHeadings  />
      </div>
      <div className="tw-flex tw-h-screen tw-items-center tw-justify-center">
        <div className="tw-w-1/3 tw-bg-blue tw-flex tw-flex-col tw-justify-center tw-items-center">
          <div className="options-wrapper tw-px-12">
            <div className="b tw-text-center tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">
              <h4>
                your request is sent successfully, please check your email, you'll receive an answer in few 15 days.
              </h4>
            </div>
            <div className="ic tw-hidden md:tw-block">
              <ImageComponent src={creator} width={85} height={85} x={1000} y={250} />
            </div>
          </div>
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  );
};

export default Card0;
