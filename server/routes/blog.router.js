const express = require("express");
const path = require("path");
const {
  getRecentArticles,
  handleFormSubmission,
} = require("./blog.controller");
const v1Router = express.Router();

v1Router.get("/allarticles", getRecentArticles);
v1Router.post("/send-email", handleFormSubmission);
v1Router.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "..", "myResume.docx");

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending the file:", err);

      // Handle specific error cases
      if (err.code === "ENOENT") {
        // File not found
        res.status(404).send("File not found");
      } else {
        // Other errors
        res.status(500).send("Error sending the file");
      }
    }
  });
});

module.exports = v1Router;
