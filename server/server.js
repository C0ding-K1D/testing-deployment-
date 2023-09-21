const http = require("http");
const cron = require("node-cron");

const { insertOrUpdateArticles } = require("./routes/blog.controller");

const PORT = process.env.PORT || 8000;

const app = require("./app");

const secureServer = http.createServer(app);

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
