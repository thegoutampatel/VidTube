import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

//This is middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

// Common Middlewares

app.use(express.json({ limit: "64kb" }));
app.use(express.urlencoded({ extended: true, limit: "64kb" }));
app.use(express.static("public"));

export { app };
