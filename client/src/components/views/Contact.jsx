import { useState } from "react";
import { Container, Box, Button, Typography, TextField } from "@mui/material";
import CardToggle from "../CardToggle";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import "../../styles/contact.css";

function Contact() {
  const { theme, mode } = useThemeContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "I Look Forward To Hearing From You",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://server:8000/v1/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email");
    }
  };

  return (
    <section id="contact">
      <Container>
        <Typography
          variant="subtitle1"
          component="h3"
          color="textPrimary"
          sx={{ textAlign: "center", marginTop: "5rem" }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          color={theme.palette.success.main}
          sx={{ textAlign: "center", marginBottom: "4rem" }}
        >
          Contact Me
        </Typography>
        <div className="contact_container">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 140,
                height: 140,
              },
              "@media (max-width: 1000px)": {
                flexDirection: "row",
                marginBottom: "1rem",
              },
              "@media (max-width: 500px)": {
                flexDirection: "column",
              },
            }}
          >
            <CardToggle>
              <a href="mailto:mattalvarez354@yahoo.com">
                <EmailIcon
                  style={{
                    color: "#d1c4e9",
                    marginBottom: ".5rem",
                  }}
                  fontSize="large"
                />
              </a>
              Email
              <Typography
                variant="body2"
                component="p"
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                  color: "#d1c4e9",
                }}
              >
                Leave a message
              </Typography>
            </CardToggle>
            <CardToggle>
              <a
                href="https://www.linkedin.com/in/matthew-alvarez-778b3a22b/"
                target="_blank"
              >
                <LinkedInIcon
                  style={{
                    color: "#d1c4e9",
                    marginBottom: ".5rem",
                  }}
                  fontSize="large"
                />
              </a>
              LinkedIn
              <Typography
                variant="body2"
                component="p"
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                  color: "#d1c4e9",
                }}
              >
                Leave a message
              </Typography>
            </CardToggle>
            <CardToggle>
              <a
                href="https://twitter.com/c0ding_K1d"
                target="_blank"
                style={{
                  marginBottom: "1rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  version="1.1"
                  height="100%"
                  fill="#d1c4e9"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              X
              <Typography
                variant="body2"
                component="p"
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                  color: "#d1c4e9",
                }}
              >
                Leave a message
              </Typography>
            </CardToggle>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "75ch",
                "@media (max-width: 768px)": {
                  width: "50ch",
                  "@media (max-width: 500px)": {
                    width: "40ch",
                  },
                },
              },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="filled"
                color="primary"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                id="email"
                name="email"
                label="E-mail"
                placeholder="email@gmail.com"
                variant="filled"
                color="primary"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                id="message"
                name="message"
                label="Message"
                multiline
                rows={8}
                variant="filled"
                color="primary"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                m: 2,
                backgroundColor: mode === "light" ? "#673ab7" : "#5e35b1",
              }}
            >
              Send Message
            </Button>
          </Box>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
