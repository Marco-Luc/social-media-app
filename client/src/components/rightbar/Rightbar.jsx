import "./Rightbar.scss";
import LeoPhoto2 from "../../assets/Images/leo2.jpg";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={LeoPhoto2} alt=" Leo Profile" />
              <span> Leo</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={LeoPhoto2} alt=" Leo Profile" />
              <span> Leo</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="item">
            <span>Latest Activities</span>
            <div className="user">
              <div className="userInfo">
                <img src={LeoPhoto2} alt=" Leo Profile" />
                <p>
                  <span> Leo </span>
                  updated his cover photo
                </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src={LeoPhoto2} alt=" Leo Profile" />
                <p>
                  <span> Leo </span>
                  updated his cover photo
                </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src={LeoPhoto2} alt=" Leo Profile" />
                <p>
                  <span> Leo </span>
                  updated his cover photo
                </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src={LeoPhoto2} alt=" Leo Profile" />
                <p>
                  <span> Leo </span>
                  updated his cover photo
                </p>
              </div>
              <span>1 min ago</span>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={LeoPhoto2} alt=" Leo Profile" />
              <div className="online"></div>
              <span> Leo </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={LeoPhoto2} alt=" Leo Profile" />
              <div className="online"></div>
              <span> Leo </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={LeoPhoto2} alt=" Leo Profile" />
              <div className="online"></div>
              <span> Leo </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={LeoPhoto2} alt=" Leo Profile" />
              <div className="online"></div>
              <span> Leo </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
