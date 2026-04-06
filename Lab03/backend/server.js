import express from "express";
import cors from "cors";
import movies from "./api/movies.route.js";

const app = express();

app.use(cors());
app.use(express.json());

// Định tuyến đến file route [cite: 93, 447]
app.use("/api/v1/movies", movies);

// Xử lý lỗi 404 [cite: 94-95, 448-450]
app.use("/api/v1/movies", movies);

// THAY ĐỔI Ở ĐÂY: Bỏ dấu "*" đi để tương thích với bản Node mới
app.use((req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

export default app;