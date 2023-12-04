"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Image from "next/image";
import Loader from "@/components/Loader";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/icons/cummunityScreen/homeSection2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";
import dotIcon from "@/assets/images/icons/coursesHeroSection/dot.svg";
import {
  Button,
  ListItemIcon,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  commonPlaceholderStyles,
  commonTextFieldStyles,
  currencies,
  eventTypeValues,
} from "@/utils/constants";
import BasicSelect from "../multiSelect";
import { applyForCommunity } from "@/redux/features/community/communitySlice";

const CollaborationComponent = () => {
  const dispatch = useDispatch();

  //REDUX STATES
  const { isLoading } = useSelector((state) => state?.communityReducer);
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [eventType, setEventType] = useState("");

  const handleApplyCommunity = () => {
    const payload = {
      name,
      email,
      mobileNumber: `+91 ${mobileNumber}`,
      collageName: collegeName,
      eventType,
    };
    name !== "" &&
    email !== "" &&
    mobileNumber !== "" &&
    collegeName !== "" &&
    eventType !== ""
      ? email.match(validEmailRegex)
        ? dispatch(applyForCommunity(payload))
        : toast.error("Please enter a valid email")
      : toast.error("One or more fields are empty. Please fill them out.");
  };
  return (
    <>
      <div className="collaborationComponent">
        <div className="collaborationComponent_leftContainer">
          <div className="collaborationComponent_leftContainer_firstPara">
            We would love to collaborate with you
          </div>
          <div className="collaborationComponent_leftContainer_button">
            Apply now for Collaboration /Sponsorship Opportunities
          </div>
          <div className="collaborationComponent_leftContainer_buttonDiv">
            <div className="collaborationComponent_leftContainer_buttonDiv_flex">
              <Image src={dotIcon} alt="dotIcon" />
              <div className="collaborationComponent_leftContainer_secondPara">
                Make your event live on the Coding Ninjas Platform (visibility
                to millions of students/professionals across the country)
              </div>
            </div>
            <div className="collaborationComponent_leftContainer_buttonDiv_flex">
              <Image src={dotIcon} alt="dotIcon" />
              <div className="collaborationComponent_leftContainer_secondPara">
                Sponsorships, Cash rewards, Vouchers & cool swags from the
                Coding Ninjas team on offer along with industry-leading platform
                & industry experts{" "}
              </div>
            </div>
            <div className="collaborationComponent_leftContainer_buttonDiv_flex">
              <Image src={dotIcon} alt="dotIcon" />
              <div className="collaborationComponent_leftContainer_secondPara">
                Access to the largest tech community of India’s most loved
                ed-tech company{" "}
              </div>
            </div>
            <div className="collaborationComponent_leftContainer_buttonDiv_flex">
              <Image src={dotIcon} alt="dotIcon" />
              <div className="collaborationComponent_leftContainer_secondPara">
                Course Discounts and Scholarships{" "}
              </div>
            </div>
          </div>
          <div className="collaborationComponent_leftContainer_image">
            <Image
              src={heroSectionImage2}
              alt="heroSectionImage2"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="collaborationComponent_rightContainer">
          <div className="collaborationComponent_rightContainer_firstPara">
            Come Join With Us !
          </div>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={commonTextFieldStyles}
            inputProps={commonPlaceholderStyles}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={commonTextFieldStyles}
            inputProps={commonPlaceholderStyles}
          />
          <TextField
            value={mobileNumber}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/[^0-9]/g, "");
              if (numericValue?.length <= 10) {
                setMobileNumber(numericValue);
              }
            }}
            sx={{
              backgroundColor: "#0080CF",
              borderRadius: "5px",
              width: "100%",
            }}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            inputProps={{
              ...commonPlaceholderStyles,
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 10,
            }}
          />
          <TextField
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            id="outlined-basic"
            label="College Name"
            variant="outlined"
            sx={commonTextFieldStyles}
            inputProps={commonPlaceholderStyles}
          />
          <Select
            value={eventType}
            onChange={(e) => setEventType(e?.target?.value)}
            inputProps={{
              name: "currency",
              id: "currency-select",
            }}
            sx={{
              width: "100%",
              backgroundColor: "#E1EBEE",
            }}
            label="Event Type"
            placeholder="Event Type"
          >
            {eventTypeValues?.map((currency) => (
              <MenuItem key={currency.code} value={currency.code}>
                <ListItemIcon
                  sx={{ minWidth: "unset !important" }}
                ></ListItemIcon>
                <Typography
                  variant="inherit"
                  sx={{ display: "inline-block", marginLeft: "0px" }}
                >
                  {currency.label}
                </Typography>
              </MenuItem>
            ))}
          </Select>
          <Button
            className="collaborationComponent_rightContainer_button"
            variant="contained"
            onClick={() => handleApplyCommunity()}
          >
            Apply
          </Button>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default CollaborationComponent;
