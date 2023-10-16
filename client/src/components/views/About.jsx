import { Box, Button, Container, Typography } from "@mui/material";
import StackedImage from "../StackedImage";
import BugReportIcon from "@mui/icons-material/BugReport";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ChatIcon from "@mui/icons-material/Chat";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import CardToggle from "../CardToggle";
import "../../styles/about.css";

function About() {
  const { theme, mode } = useThemeContext();

  return (
    <section id="about">
      <Container>
        <Typography
          variant="subtitle1"
          component="h3"
          color="textPrimary"
          sx={{ textAlign: "center", marginTop: "5rem" }}
        >
          Get To Know
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          color={theme.palette.success.main}
          sx={{ textAlign: "center", marginBottom: "4rem" }}
        >
          About Me
        </Typography>
        <div className="main_container">
          <div className="main_container-img-content">
            <StackedImage />
            <div className="main_container-txt-content">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 140,
                    height: 140,
                  },
                  "@media (max-width: 500px)": {
                    flexDirection: "column",
                  },
                }}
              >
                <CardToggle>
                  <Diversity3Icon
                    style={{
                      color: "#d1c4e9",
                      marginBottom: "1rem",
                    }}
                    fontSize="large"
                  />
                  Collaboration
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "#d1c4e9",
                    }}
                  >
                    Unite
                  </Typography>
                </CardToggle>
                <CardToggle>
                  <BugReportIcon
                    style={{
                      color: "#d1c4e9",
                      marginBottom: "1rem",
                    }}
                    fontSize="medium"
                  />
                  Problem-Solving
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "#d1c4e9",
                    }}
                  >
                    Invent
                  </Typography>
                </CardToggle>
                <CardToggle>
                  <ChatIcon
                    style={{
                      color: "#d1c4e9",
                      marginBottom: "1rem",
                    }}
                    fontSize="medium"
                  />
                  Communication
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "#d1c4e9",
                    }}
                  >
                    Engage
                  </Typography>
                </CardToggle>
              </Box>
              <Typography
                variant="body1"
                component="p"
                color="textPrimary"
                sx={{
                  textAlign: "left",
                  width: "30rem",
                  lineHeight: "1.8",
                  p: 3,
                  "@media (max-width: 600px)": {
                    width: "25rem",
                  },
                  "@media (max-width: 400px)": {
                    width: "20rem",
                  },
                }}
              >
                Hi, I'm Matthew, a passionate full-stack developer with a love
                for crafting web solutions. My journey into the world of coding
                began with a fascination for front-end design, but it quickly
                evolved as I delved into the intricacies of back-end
                development. I thrive on tackling complex challenges, turning
                them into elegant, user-friendly applications. With a solid
                foundation in programming languages like JavaScript and Java,
                along with hands-on experience in both front-end and back-end
                frameworks, I'm eager to contribute to innovative projects and
                continue my growth as a developer. Let's build something amazing
                together!
              </Typography>
              <div className="btn_container">
                <a href="#contact">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: mode === "light" ? "#673ab7" : "#5e35b1",
                    }}
                    size="small"
                  >
                    Let's Talk
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
