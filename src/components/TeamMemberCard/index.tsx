import React from "react";
import Image from "next/image";
import teamMember1 from "@/assets/images/teamMember1.svg";
import facebook from "@/assets/images/icons/facebook.svg";
import instagram from "@/assets/images/icons/instagram.svg";
import linkedIn from "@/assets/images/icons/linkedIn.svg";

interface TeamMemberCardProps {
  name: string;
  position: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, position }) => {
  return (
    <div className="teamMemberCard">
      <div className="teamMemberCard_leftContainer">
        <div className="teamMemberCard_leftContainer_member">
          <Image
            src={teamMember1}
            alt="TeamMember1"
            style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
          />
        </div>
      </div>
      <div className="teamMemberCard_rightContainer">
        <div className="teamMemberCard_rightContainer_content">
          <div className="teamMemberCard_rightContainer_content_heading">
            {name}
          </div>
          <div className="teamMemberCard_rightContainer_content_text">
            {position}
          </div>
          <div className="teamMemberCard_rightContainer_content_icons">
            <div className="iconsParentContainer">
              <div className="iconsParentContainer_outline">
                <Image src={facebook} alt="FacebookIcon" />
              </div>
              <div className="iconsParentContainer_outline">
                <Image src={linkedIn} alt="LinkedInIcon" />
              </div>
              <div className="iconsParentContainer_outline">
                <Image src={instagram} alt="InstagramIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
