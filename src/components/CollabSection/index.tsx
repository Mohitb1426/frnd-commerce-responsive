import React from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/icons/cummunityScreen/homeSection.svg";
import requirment from "@/assets/images/icons/coursesHeroSection/requirment.svg";
import dot from "@/assets/images/icons/coursesHeroSection/dot.svg";

const CollabSection: React.FC = () => {
  return (
    <div className="collabComponent">
      <div className="collabComponent_leftContainer">
      <div className="collabComponent_leftContainer_align">
      <Image 
            src={dot}
            alt="dot"
          />
      <div className="collabComponent_leftContainer_secondPara">Leadership and Self-Management Skills</div>
      </div>
      <div className="collabComponent_leftContainer_align">
      <Image
            src={dot}
            alt="dot"
          />
      <div className="collabComponent_leftContainer_secondPara">Wider Range of Knowledge and Skill Acquisition</div>
      </div>
      <div className="collabComponent_leftContainer_align">
      <Image
            src={dot}
            alt="dot"
          />
      <div className="collabComponent_leftContainer_secondPara">Improved Student Relationships. Better Concept Retention</div>
      </div>
      <div className="collabComponent_leftContainer_align">
      <Image
            src={dot}
            alt="dot"
          />
      <div className="collabComponent_leftContainer_secondPara">Promotes Active Listening and Critical Thinking</div>
      </div>
      <div className="collabComponent_leftContainer_align">
      <Image
            src={dot}
            alt="dot"
          />
      <div className="collabComponent_leftContainer_secondPara">Establish group goals and values</div>
      </div>

      </div>
      <div className="collabComponent_rightContainer">
        <Image src ={heroSectionImage} width={350} height={200} alt="requrment"/>
      </div>
    </div>
  );
};

export default CollabSection;
