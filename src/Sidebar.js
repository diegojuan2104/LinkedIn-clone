import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-w/1a/6b/71/ff/pavoreal-beach-resort.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Juan Mejia</h2>
        <h4>diegojuan2104@gmail.com</h4>
      </div>
      
    
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who view you</p>
          <div className="sidebar__statNumber">361</div>
        </div>
        <div className="sidebar__stat">
          <p>Who post on you</p>
          <div className="sidebar__statNumber">35</div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>

        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwarengineering")}
        {recentItem("vueJs")}
      </div>
    </div>
  );
}

export default Sidebar;
