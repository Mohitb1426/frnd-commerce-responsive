import React from "react";
import TeamMemberCard from "../TeamMemberCard";

const TeamMembers: React.FC = () => {
  return (
    <div className="teamMemberSection">
      <div className="teamMemberSection_mainHeading">
        <div className="teamMemberSection_mainHeading_primary">Meet</div>
        <div className="teamMemberSection_mainHeading_secondary">
          our team
          <span className="borderWhite"></span>
        </div>
      </div>
      <div className="teamMemberSection_topContainer">
        <TeamMemberCard name={"Amber Chang"} position={"Executive Director"} />
        <TeamMemberCard
          name={"Phoenix Baker"}
          position={"Head of Engineering"}
        />
      </div>
      <div className="teamMemberSection_middleContainer">
        <TeamMemberCard name={"Celeste Anderson"} position={"Vice President"} />
        <div className="teamMemberSection_middleContainer_heading">
          <div className="teamMemberSection_middleContainer_heading_primary">
            Meet
          </div>
          <div className="teamMemberSection_middleContainer_heading_secondary">
            our team
            <span className="borderWhite"></span>
          </div>
        </div>
        <TeamMemberCard name={"Vice President"} position={"CEO,Company"} />
      </div>
      <div className="teamMemberSection_bottomContainer">
        <TeamMemberCard name={"Chris Buller"} position={"Analyst"} />
        <TeamMemberCard
          name={"Lana Steiner"}
          position={"Chief operating Office"}
        />
      </div>
    </div>
  );
};

export default TeamMembers;
