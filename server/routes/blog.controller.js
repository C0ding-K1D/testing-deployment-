const { PrismaClient, Prisma } = require("@prisma/client");
const { scrapeMediumArticles } = require("../scraper/scrapeMediumArticles");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();

const prisma = new PrismaClient();

async function insertOrUpdateArticles() {
  const articles = await scrapeMediumArticles();

  if (articles.length < 1) {
    throw new Error("No Articles to insert");
  }

  try {
    for (const article of articles) {
      await prisma.Blog.upsert({
        where: {
          id: article.id,
        },
        update: {
          ...article,
        },
        create: {
          ...article,
        },
      });
    }

    console.log("Articles loaded successfully");
  } catch (error) {
    throw new Error(
      "An error occurred while inserting/updating articles: " + error.message
    );
  }
}

async function getRecentArticles(req, res) {
  try {
    const recentArticles = await prisma.Blog.findMany({
      take: 6, // Limit the result to the last 6 articles
      select: {
        href: true,
        title: true,
        imgSrc: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    console.log("Articles found successfully");
    console.log("test", recentArticles);
    res.status(200).json(recentArticles);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching recent articles" });
  } finally {
    await prisma.$disconnect();
  }
}

async function handleFormSubmission(req, res) {
  try {
    const { name, email, message } = req.body;

    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.log("*ERR: ", err);
          reject();
        }
        resolve(token);
      });
    });
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    // Define email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mattalvarez354@yahoo.com",
      subject: "New Message from Your Website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond to the client
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
}
module.exports = {
  insertOrUpdateArticles,
  getRecentArticles,
  handleFormSubmission,
};
