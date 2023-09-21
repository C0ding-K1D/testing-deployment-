import { Button, Divider, Typography } from "@mui/material";
import heroImg from "../../assets/images/hero-img.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NightModeToggle from "../NightModeToggle";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import axios from "axios";
import "../../styles/hero.css";

export const Hero = () => {
  const { theme, mode } = useThemeContext();

  const handleDownload = async () => {
    try {
      // Replace with your server's endpoint
      const response = await axios.get(
        "http://18.119.129.97:8000/v1/download",
        {
          responseType: "blob", // Set the response type to 'blob' to handle binary data
        }
      );

      // Check if the response is successful
      if (response.status !== 200) {
        throw new Error(`Download failed with status: ${response.status}`);
      }

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = "myResume.docx"; // Set the desired file name

      // Trigger the click event on the link to start the download
      link.click();

      // Clean up by revoking the URL object
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <section id="#">
      <header>
        <NightModeToggle />
        <Typography
          variant="subtitle1"
          component="h1"
          color="textPrimary"
          sx={{ textAlign: "center" }}
        >
          Hello, I'm
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          color={theme.palette.success.main}
          sx={{ textAlign: "center" }}
        >
          Matthew Alvarez
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          color="textPrimary"
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Full Stack Developer
        </Typography>
        <div className="btnContainer">
          <Button
            onClick={handleDownload}
            variant="outlined"
            size="large"
            sx={{
              marginRight: ".5rem",
              color: mode === "light" ? "#673ab7" : "#d1c4e9",
              borderColor: mode === "light" ? "#673ab7" : "#d1c4e9",
            }}
          >
            Download CV
          </Button>
          <a href="#contact">
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: mode === "light" ? "#673ab7" : "#5e35b1" }}
            >
              Let's Talk
            </Button>
          </a>
        </div>
        <div className="iconContainer">
          <div className="innerIconContainer">
            <a href="https://github.com/C0ding-K1D" target="_blank">
              <GitHubIcon
                style={{
                  color: mode === "dark" ? "7e57c2" : "#673ab7",
                }}
                fontSize="large"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-alvarez-778b3a22b/"
              target="_blank"
            >
              <LinkedInIcon
                fontSize="large"
                style={{
                  marginTop: ".5rem",
                  color: mode === "dark" ? "7e57c2" : "#673ab7",
                }}
              />
            </a>
            <Divider
              orientation="vertical"
              color={theme.palette.success.main}
              flexItem
              style={{
                width: "2px",
                height: "2rem",
                margin: "0 auto",
                marginTop: ".5rem",
                border: "none",
              }}
            ></Divider>
          </div>
          <img
            className="heroImg"
            src={heroImg}
            alt="image of Engineer staring at mountain views"
          />
          <Typography
            variant="subtitle1"
            component="h2"
            color={theme.palette.success.main}
            className="scrollText"
          >
            Scroll Down
          </Typography>
        </div>
      </header>
    </section>
  );
};

// export default Hero;
