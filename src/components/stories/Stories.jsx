import "./Stories.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //Temporary
  const stories = [
    {
      id: 1,
      name: "Chill Dog",
      img: "https://imagesvc.meredithcorp.io/v3/jumpstartpure/image/?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F3281700261001%2Fbb171d2e-6dad-463b-a49d-9eb3471a381e%2F6fa3d9c5-97d0-4d1f-ad1c-c53232e1d528%2F1280x720%2Fmatch%2Fimage.jpg&w=640&h=360&q=90&c=cc",
    },
    {
      id: 2,
      name: "Chill Dog",
      img: "https://imagesvc.meredithcorp.io/v3/jumpstartpure/image/?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F3281700261001%2Fbb171d2e-6dad-463b-a49d-9eb3471a381e%2F6fa3d9c5-97d0-4d1f-ad1c-c53232e1d528%2F1280x720%2Fmatch%2Fimage.jpg&w=640&h=360&q=90&c=cc",
    },
    {
      id: 3,
      name: "Chill Dog",
      img: "https://imagesvc.meredithcorp.io/v3/jumpstartpure/image/?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F3281700261001%2Fbb171d2e-6dad-463b-a49d-9eb3471a381e%2F6fa3d9c5-97d0-4d1f-ad1c-c53232e1d528%2F1280x720%2Fmatch%2Fimage.jpg&w=640&h=360&q=90&c=cc",
    },
    {
      id: 4,
      name: "Chill Dog",
      img: "https://imagesvc.meredithcorp.io/v3/jumpstartpure/image/?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F3281700261001%2Fbb171d2e-6dad-463b-a49d-9eb3471a381e%2F6fa3d9c5-97d0-4d1f-ad1c-c53232e1d528%2F1280x720%2Fmatch%2Fimage.jpg&w=640&h=360&q=90&c=cc",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
