const https = require("https");
const path = require("path");
const fs = require("fs");
const cron = require("node-cron");

const { insertOrUpdateArticles } = require("./routes/blog.controller");

const PORT = process.env.PORT || 8000;

const app = require("./app");

const secureServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
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
