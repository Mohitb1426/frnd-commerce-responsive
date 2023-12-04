import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import owner1 from "@/assets/images/owner1.svg";
import owner2 from "@/assets/images/owner2.svg";
import logo from "@/assets/images/logo.svg";
import "../../../src/styles/scss/_main.scss";
import Testimonials from "@/components/Testimonials";
import Disclaimer from "@/components/Disclaimer";

const AboutUs = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const closeDisclaimer = () => {
    setShowDisclaimer(false);
  };
  return (
    <>
      {showDisclaimer && <Disclaimer onClose={() => closeDisclaimer()} />}
      <Header />
      <div className="aboutUsTopContainer">
        <div className="aboutUsTopSection">
          <div className="aboutUsTopSection_heading">
            Transforming tech education for the next generation of developers
          </div>
          <div className="aboutUsTopSection_imageContainer">
            <div className="aboutUsTopSection_imageContainer_tutor1">
              <Image
                src={owner1}
                alt="owner1"
                className="image1"
                style={{ width: "100%", height: "100%" }}
              />{" "}
            </div>
            <div className="aboutUsTopSection_imageContainer_tutor2">
              <Image
                src={owner2}
                alt="owner1"
                className="image2"
                style={{ width: "100%", height: "100%" }}
              />{" "}
            </div>
          </div>
        </div>
        <div className="aboutUsStatsSection">
          <ul>
            <li>
              {" "}
              <span>200K+</span> Suscribers on Youtube
            </li>
            <li>
              <span>100K+</span> Followers on Instagram
            </li>

            <li>
              <span>400K+</span> Followers on Facebook
            </li>
            <li>
              {" "}
              <span>700K+</span> Followers on Linkedin
            </li>
          </ul>
        </div>
        <div className="aboutUsStorySection">
          <div className="aboutUsStoryContainer">
            <h1>Our Story</h1>
            <div className="aboutUsStoryContainer_contentSection">
              At Frienducation, our mission is to continuously innovate the best
              ways to train the next generation of developers and to transform
              the the way tech education is delivered. Frienducation was founded
              in 2016 to bridge the knowledge gap between colleges and industry.
              Founded by Ankush Singla, Kannu Mittal and Dhawal Parate,
              Frienducation boasts of world-class teaching faculty and a
              state-of-art learning platform for Coding education with faculty
              alumni of IIT, Stanford, IIIT and Facebook. Frienducation teaches
              17+ Programming courses in Foundation,l Advanced, Data &
              Development courses such as Machine Learning, Data Science, Web
              Development, Android and more. Today, Frienducation ecosystem
              comprises of 40,000+ students and alumni, 1000+ Campus
              Ambassadors, 2000+ Teaching Assistants, and 150+ employees.
            </div>
          </div>
        </div>
        <div className="aboutUsInstructorSection">
          <div className="instructorContainer">
            <h1>Our Instructors</h1>
            <Slider {...settings}>
              <div className="sliderContainer">
                <div className="sliderContainer_innerSection">
                  <div>
                    <div className="sliderContainer_innerSection_tutor">
                      <Image
                        src={owner1}
                        alt="owner1"
                        className="image1"
                        style={{ width: "100%", height: "100%" }}
                      />{" "}
                    </div>
                  </div>

                  <div className="sliderContainer_innerSection_rightSide">
                    <div className="nameSection">
                      <div>
                        <div className="nameSection_heading">
                          {" "}
                          Priyansh Goel
                        </div>
                        <div className="nameSection_position">
                          Co-founder, Frienducation{" "}
                        </div>
                      </div>
                      <div className="nameSection_logo">
                        <Image
                          src={logo}
                          alt="Logo"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="infoSection">
                      Priyansh Goel is an ice software engineer working in the
                      role of computer scientist at Adobe System and a popular
                      computer science instructor on Frienducation Youtube. He
                      is working in the industry for the past 4 years working on
                      different real world problem. He is well-known among
                      students for his amazingly simplified explanations with
                      real life examples, enabling students to understand
                      complex topics very easily. Many of his ex-students are
                      now working in top product companies like Microsoft,
                      Amazon, De-Shaw etc.
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default AboutUs;
