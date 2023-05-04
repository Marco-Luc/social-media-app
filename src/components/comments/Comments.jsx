import "./Comments.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      name: "Chill Dog",
      userId: 1,
      profilePic:
        "https://imagesvc.meredithcorp.io/v3/jumpstartpure/image/?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F3281700261001%2Fbb171d2e-6dad-463b-a49d-9eb3471a381e%2F6fa3d9c5-97d0-4d1f-ad1c-c53232e1d528%2F1280x720%2Fmatch%2Fimage.jpg&w=640&h=360&q=90&c=cc",
      desc: "The phrase Lorem ipsum dolor sit amet consectetuer appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense.",
    },
    {
      id: 2,
      name: "Cool Dog",
      userId: 2,
      profilePic:
        "https://imagesvc.meredithcorp.io/v3/jumpstartpure/image/?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F3281700261001%2Fbb171d2e-6dad-463b-a49d-9eb3471a381e%2F6fa3d9c5-97d0-4d1f-ad1c-c53232e1d528%2F1280x720%2Fmatch%2Fimage.jpg&w=640&h=360&q=90&c=cc",
      desc: "The phrase Lorem ipsum dolor sit amet consectetuer appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense.",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
