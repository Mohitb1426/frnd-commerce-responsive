"use client"
import React, { useState } from "react";
import Image from "next/image";
import heroSectionImage from "@/assets/images/heroSectionImage.svg";
import heroSectionImage2 from "@/assets/images/icons/cummunityScreen/homeSection2.svg";
import playButton from "@/assets/images/playButton.svg";
import thumbnail from "@/assets/images/thumbnail.svg";
import dotIcon from "@/assets/images/icons/coursesHeroSection/dot.svg";
import { Button, ListItemIcon, MenuItem, Select, TextField, Typography } from "@mui/material";
import BasicSelect from "../multiSelect";
import { commonPlaceholderStyles, commonTextFieldStyles, currencies, eventType } from "@/utils/constants";

const CollaborationComponent = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("91");
  const [eventTypeValue, setEventTypeValue] = useState("cc");

  return (
    <div className="collaborationComponent">
      <div className="collaborationComponent_leftContainer">
        <div className="collaborationComponent_leftContainer_firstPara">
          We would love to collaborate with you
        </div>
        <div className="collaborationComponent_leftContainer_button" >Apply now for Collaboration /Sponsorship Opportunities</div>
        <div className="collaborationComponent_leftContainer_buttonDiv" >
          <div className="collaborationComponent_leftContainer_buttonDiv_flex">
            <Image src={dotIcon} alt='dotIcon' />
            <div className="collaborationComponent_leftContainer_secondPara">
              Make your event live on the Coding Ninjas Platform (visibility to millions of students/professionals across the country)
            </div>
          </div>
          <div className="collaborationComponent_leftContainer_buttonDiv_flex">
            <Image src={dotIcon} alt='dotIcon' />
            <div className="collaborationComponent_leftContainer_secondPara">
              Sponsorships, Cash rewards, Vouchers & cool swags from the Coding Ninjas team on offer along with industry-leading platform & industry experts                </div>
          </div>
          <div className="collaborationComponent_leftContainer_buttonDiv_flex">
            <Image src={dotIcon} alt='dotIcon' />
            <div className="collaborationComponent_leftContainer_secondPara">
              Access to the largest tech community of India’s most loved ed-tech company                </div>
          </div>
          <div className="collaborationComponent_leftContainer_buttonDiv_flex">
            <Image src={dotIcon} alt='dotIcon' />
            <div className="collaborationComponent_leftContainer_secondPara">
              Course Discounts and Scholarships                </div>
          </div>
        </div>
        <div className="collaborationComponent_leftContainer_image" >
          <Image
            src={heroSectionImage2}
            alt="heroSectionImage2"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="collaborationComponent_rightContainer">
        <div className="collaborationComponent_rightContainer_firstPara">Come Join With Us !</div>
        <div>
          <TextField
            placeholder="Name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            fullWidth
            sx={commonTextFieldStyles}
            inputProps={commonPlaceholderStyles}
          />
          <TextField
            placeholder="Email"
            fullWidth
            sx={commonTextFieldStyles}
            inputProps={commonPlaceholderStyles}
          />
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <Select
              value={selectedCurrency}
              onChange={(e) => selectedCurrency(e?.target?.value)}
              inputProps={{
                name: "currency",
                id: "currency-select",
              }}
              sx={{
                width: "25%",
                backgroundColor: "#E1EBEE",
              }}
            >
              {currencies.map((currency) => (
                <MenuItem key={currency.code} value={currency.code}>
                  <ListItemIcon sx={{ minWidth: "unset !important" }}>
                    <img
                      src={currency.icon.src}
                      alt={currency.code}
                      style={{
                        display: "inline-block",
                        transform: "translateY(2px)",
                      }}
                    />
                  </ListItemIcon>
                  <Typography
                    variant="inherit"
                    sx={{ display: "inline-block", marginLeft: "7px" }}
                  >
                    {currency.code}
                  </Typography>
                </MenuItem>
              ))}
            </Select>

            <TextField
              placeholder="Mobile Number"
              sx={{
                width: "75% !important",
                marginLeft: "20px",
                display: "flex ",
                borderRadius: "5px",
                backgroundColor: "#E1EBEE", // Change the background color
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#0080CF",
                  },
                },
              }}
              inputProps={commonPlaceholderStyles}
            />
          </div>
          <TextField
            placeholder="Collage Name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            fullWidth
            sx={commonTextFieldStyles}
            inputProps={commonPlaceholderStyles}
          />
          <Select
            value={eventTypeValue}
            onChange={(e) => setEventTypeValue(e?.target?.value)}
            inputProps={{
              name: "currency",
              id: "currency-select",
            }}
            sx={{
              width: "100%",
              backgroundColor: "#E1EBEE",
            }}
          >
            {eventType.map((currency) => (
              <MenuItem key={currency.code} value={currency.code}>
                <ListItemIcon sx={{ minWidth: "unset !important" }}>
                </ListItemIcon>
                <Typography
                  variant="inherit"
                  sx={{ display: "inline-block", marginLeft: "0px" }}
                >
                  {currency.label}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </div>
        <Button className="collaborationComponent_rightContainer_button" variant="contained">Apply</Button>
      </div>
    </div>
  );
};

export default CollaborationComponent;
