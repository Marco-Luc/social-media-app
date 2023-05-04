import "./Leftbar.scss";
import Friends from "../../assets/Icons/1.png";
import Groups from "../../assets/Icons/2.png";
import Market from "../../assets/Icons/3.png";
import Watch from "../../assets/Icons/4.png";
import Memories from "../../assets/Icons/5.png";
import Events from "../../assets/Icons/6.png";
import Gaming from "../../assets/Icons/7.png";
import Gallery from "../../assets/Icons/8.png";
import Videos from "../../assets/Icons/9.png";
import Messages from "../../assets/Icons/10.png";
import Tutorials from "../../assets/Icons/11.png";
import Courses from "../../assets/Icons/12.png";
import Fund from "../../assets/Icons/13.png";
import LeoPhoto from "../../assets/Images/leo.jpg";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
              alt="Leo Profile"
            />
            <span>{currentUser.name}</span>
          </div>

          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />

        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
