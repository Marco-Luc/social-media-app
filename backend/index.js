import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";

// Middlewares
// Without this, we will not be able to send any JSON objects
// We used npm add cors because it provides more security. Nobody can reach our API, only allow them to reach localhost:3000 URL
// We used npm add cookie-parser - it is a middleware which parses cookies attached to the client request object
// Any time we make a request, we are gonna give access

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

// Multer is an npm package I installed
// It is used primarly for uploading files
// The disk storage engine gives you full control on storing files to disk.

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/backend/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

// Our User route

app.use("/backend/auth", authRoutes);
app.use("/backend/users", userRoutes);
app.use("/backend/posts", postRoutes);
app.use("/backend/comments", commentRoutes);
app.use("/backend/likes", likeRoutes);

// Using Port 8800

app.listen(8800, () => {
  console.log("Server is working big dawg");
});
