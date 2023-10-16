const https = require("https");
const cron = require("node-cron");
const fs = require("fs");

const { insertOrUpdateArticles } = require("./routes/blog.controller");

const PORT = process.env.PORT || 8000;

const app = require("./app");

const secureServer = https.createServer(
  {
    key: fs.readFileSync("./cert/key.pem"),
    cert: fs.readFileSync("./cert/cert.pem"),
  },
  app
);

async function startServer() {
  secureServer.listen(PORT, (req, res) => {
    console.log(`Listening on ${PORT}`);
  });

  await insertOrUpdateArticles();
  cron.schedule("0 1 * * *", async () => {
    await insertOrUpdateArticles();
  });
}

startServer();
