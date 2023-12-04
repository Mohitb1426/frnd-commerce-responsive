import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import facebook from "@/assets/images/icons/facebook.svg";
import instagram from "@/assets/images/icons/instagram.svg";
import linkedIn from "@/assets/images/icons/linkedIn.svg";

const Footer: React.FC = () => {
  interface footerItemsObject {
    id: number;
    text: string;
    value?: string;
  }

  const menuLinks: footerItemsObject[] = [
    { id: 1, text: "About Us" },
    { id: 2, text: "Courses" },
    { id: 3, text: "Lab" },
    { id: 5, text: "Contact us" },
  ];

  const serviceLinks: footerItemsObject[] = [
    { id: 1, text: "Privacy Policy" },
    { id: 2, text: "Terms of use" },
    { id: 3, text: "Refund policy" },
  ];

  const contactLinks: footerItemsObject[] = [
    { id: 1, text: "Phone", value: "+91 7982152940" },
    { id: 2, text: "Address", value: "Bareilly, Uttar Pradesh" },
    { id: 3, text: "Email", value: "frienducationofficial@gmail.com" },
  ];
  return (
    <div className="footer">
      <div className="footerTopContainer">
        <div className="footerTopContainer_logoContainer">
          <Image src={logo} alt="Logo" />
          <h1>Frienducation</h1>
          <h3>The ultimate guide to ace SDE Interviews.</h3>
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
        <div className="footerTopContainer_topRightSection">
          <div className="footerTopContainer_listContainer">
            <h1>MENU</h1>
            <div className="footerTopContainer_listContainer_list">
              {menuLinks &&
                menuLinks?.length > 0 &&
                menuLinks.map((item) => (
                  <div className="listItem">{item?.text}</div>
                ))}
            </div>
          </div>

          <div className="footerTopContainer_listContainer">
            <h1>SERVICES</h1>
            <div className="footerTopContainer_listContainer_list">
              {serviceLinks &&
                serviceLinks?.length > 0 &&
                serviceLinks.map((item) => (
                  <div className="listItem">{item?.text}</div>
                ))}
            </div>
          </div>

          <div className="footerTopContainer_listContainer">
            <h1>GET IN TOUCH</h1>
            <div className="footerTopContainer_listContainer_list">
              {contactLinks &&
                contactLinks?.length > 0 &&
                contactLinks.map((item) => (
                  <div className="listItem">{`${item?.text}: ${item?.value}`}</div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottomContainer">
        Copyright@ 2023 frienducation. ALL RIGHT RESERVED.
      </div>
    </div>
  );
};

export default Footer;
