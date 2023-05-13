import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";

// Middlewares
// Without this, we will not be able to send any JSON objects
app.use(express.json());

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
