import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import linkedInLogo from "./images/linkedin_logo_png.png";

import HeaderOption from "./HeaderOption";

import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";



function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedInLogo} alt="LinkedIn-logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search"/>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="MyNetwork" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://i0.wp.com/newspack-washingtoncitypaper.s3.amazonaws.com/uploads/2009/04/contexts.org_socimages_files_2009_04_d_silhouette.png?resize=1200%2C756&ssl=1"
          title="Me"
        />
      </div>{" "}
    </div>
  );
}

export default Header;
