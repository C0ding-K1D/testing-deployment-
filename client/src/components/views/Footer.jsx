import { Typography, Box } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import footerImg from "../../assets/images/footer-img.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const { theme } = useThemeContext();

  return (
    <footer
      style={{
        backgroundColor: "#512da8",
        marginTop: "4rem",
      }}
    >
      <img
        src={footerImg}
        alt=""
        style={{
          maxHeight: "180px",
          display: "block",
          margin: "0 auto",
          paddingTop: "3rem",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "80%",
            marginTop: "3rem",
            marginBottom: "3rem",
            "& > *": {
              textDecoration: "none",
            },
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <a href="#">
            <Typography
              variant="body2"
              component="p"
              color={theme.palette.success.light}
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              Home
            </Typography>
          </a>
          <a href="#about">
            <Typography
              variant="body2"
              component="p"
              color={theme.palette.success.light}
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              About
            </Typography>
          </a>
          <a href="#experience">
            <Typography
              variant="body2"
              component="p"
              color={theme.palette.success.light}
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              Experience
            </Typography>
          </a>
          <a href="#blog">
            <Typography
              variant="body2"
              component="p"
              color={theme.palette.success.light}
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              Blog
            </Typography>
          </a>
          <a href="#projects">
            <Typography
              variant="body2"
              component="p"
              color={theme.palette.success.light}
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              Projects
            </Typography>
          </a>
          <a href="#contact">
            <Typography
              variant="body2"
              component="p"
              color={theme.palette.success.light}
              sx={{
                fontSize: "1.3rem",
                m: 0.5,
              }}
            >
              Contact
            </Typography>
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "5rem",
            justifyContent: "space-between",
          }}
        >
          <a href="https://github.com/C0ding-K1D" target="_blank">
            <GitHubIcon style={{ color: "#b39ddb" }} fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-alvarez-778b3a22b/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" style={{ color: "#b39ddb" }} />
          </a>
        </Box>
      </Box>
      <Typography
        variant="body2"
        component="p"
        sx={{
          color: "#eee",
          textAlign: "center",
          p: 3,
        }}
      >
        Created by Matthew Alvarez Copyright {new Date().getFullYear()}
      </Typography>
    </footer>
  );
}

export default Footer;
