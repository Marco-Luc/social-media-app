import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // Check if user exists
  // Use = ? rather than req.body.username because it is apparently safer? Look into this
  // if data.length returns another error it means we already have this user, so we shouldn't create a new one

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    // If not, create a new user
    // Hash the password
    // Returns us the encrypted password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)";
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  // select all from users is going to return us an array, so we need to set data[0].password which is the first user

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username");

    // create our user token - if we are signed in as the user, we are allowed to edit things on our page like deleting posts
    // we should create an env and store a proper secret key in there, rather than just having "secretkey"
    // cookie name is accessToken
    // httpOnly: true means it will take our cookie through our website. A random script cannot use our cookie.
    // We destructure the user so we don't return the password (we use spread operator ...others)
    // accessToken gives us hashtoken that includes our user Id. We are able to use this ID to do whatever we want (delete, follow users, etc)
    // this is why we dont have to send user Id in the body

    const { password, ...others } = data[0];

    const token = jwt.sign({ id: data[0].id }, "secretkey");
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};
export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has logged out");
};
