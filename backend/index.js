import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// Middlewares
// Without this, we will not be able to send any JSON objects
// We used npm add cors because it provides more security. Nobody can reach our API, only allow them to reach localhost:3000 URL
// We usewd npm add cookie-parser - it is a middleware which parses cookies attached to the client request object

app.use(express.json());
app.use(cors());
app.use(cookieParser());

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
