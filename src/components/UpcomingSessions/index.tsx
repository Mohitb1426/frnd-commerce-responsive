import React from "react";
import Image from "next/image";
import sessionCard1 from "@/assets/images/sessionCard1.jpg";
import sessionCardImage1 from "@/assets/images/sessionCardImage1.svg";
import sessionCardImage2 from "@/assets/images/sessionCardImage2.svg";
import sessionCardImage3 from "@/assets/images/sessionCardImage3.svg";
import youtubeLive from "@/assets/images/youtubeLive.svg";

const UpcomingSessions: React.FC = () => {
  return (
    <div className="sessions">
      <div className="sessions_headingContainer">
        <div className="sessions_headingContainer_primary">Upcoming</div>
        <div className="sessions_headingContainer_secondary">Session</div>
      </div>
      <div className="sessions_cardsContainer">
        <div className="sessions_cardsContainer_card">
          <div className="cardOverlay">
            <h1>Chit-Chat</h1>
            <h2>with</h2>
            <div className="cardOverlay_firstCardContainer">
              <div className="cardOverlay_firstCardContainer_left">
                <div className="headingContainer">
                  <div className="headingContainer_primary">Priyansh Goel</div>
                  <div className="headingContainer_secondary">Co-founder</div>
                </div>
              </div>
              <div className="cardOverlay_firstCardContainer_right">
                <div className="cardOverlay_firstCardContainer_right_innerCircle">
                  <Image
                    src={sessionCard1}
                    alt="sessionCard1"
                    priority={true}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                  />
                </div>
              </div>
            </div>
            <Image
              src={youtubeLive}
              alt="youtubeliveIcon"
              style={{ marginTop: "-60px" }}
            />
          </div>
        </div>
        <div className="sessions_cardsContainer_card">
          <div className="cardOverlay">
            <h1>Code Battle #5</h1>
            <h3>Virtual coding competition</h3>
            <div style={{ display: "flex", gap: "6px", marginTop: "20px" }}>
              <div className="sessionCardImage1">
                <Image
                  src={sessionCardImage1}
                  alt="sessionCardImage1"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="sessionCardImage2">
                <Image
                  src={sessionCardImage2}
                  alt="sessionCardImage2"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sessions_cardsContainer_card">
          <div className="cardOverlay">
            <div className="card3">
              <div className="card3_left">
                <span>Top 10 </span>
                <br></br> <br></br>PROGRAMMING LANGUAGES <br></br> <br></br> TO
                STUDY AT COLLEGE IN 2023
              </div>
              <div className="card3_right">
                <Image
                  src={sessionCardImage3}
                  alt="sessionCardImage3"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessions;
