import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/heroSectionImage2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";

const HeroSection: React.FC = () => {
  return (
    <div className="herosection">
      <div className="herosection_leftContainer">
        <div className="herosection_leftContainer_firstPara">
          Learn Any <span>Course</span>
        </div>
        <div className="herosection_leftContainer_secondPara">
          From Our Expert <span>Mentors.</span>
        </div>
        <div className="herosection_leftContainer_secondaryText">
          Get the Language skills, cultural understanding and confidence to open
          up your world with CODE HELP.
        </div>
        <div className="herosection_leftContainer_bottomContainer">
          <div className="learnsection">
            <div className="learnsection_button">Learn now</div>
            <div className="learnsection_image">
              <Image
                src={heroSectionImage2}
                alt="heroSectionImage2"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="playsection">
            <Image src={playButton} alt="playbutton" />
          </div>
          <div className="videosection">
            <Image src={thumbnail} alt="thumbnail" />
          </div>
        </div>
      </div>
      <div className="herosection_rightContainer">
        <div className="herosection_rightContainer_image">
          <Image
            src={heroSectionImage}
            alt="heroSectionImage"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
