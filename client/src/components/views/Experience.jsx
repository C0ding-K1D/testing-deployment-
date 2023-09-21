import { Box, Container, Grid, Typography } from "@mui/material";
import CardToggle from "../CardToggle";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import "../../styles/experience.css";

function Experience() {
  const { theme } = useThemeContext();
  return (
    <section id="experience">
      <Container>
        <Typography
          variant="subtitle1"
          component="h3"
          color="textPrimary"
          sx={{ textAlign: "center", marginTop: "5rem" }}
        >
          What Skills I Have
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          color={theme.palette.success.main}
          sx={{ textAlign: "center", marginBottom: "4rem" }}
        >
          My Experience
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: 400,
              "@media (max-width: 600px)": {
                width: 500,
                height: 650, // Change color when screen width is 768px or larger
              },
            },
          }}
        >
          <CardToggle>
            <Typography
              variant="h5"
              component="h3"
              color={theme.palette.success.light}
              sx={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Frontend Development
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <VerifiedIcon className="icon" />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        HTML
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Experienced
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: ".5rem",
                    }}
                  >
                    <VerifiedIcon
                      className="icon css-icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        CSS
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Experienced
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VerifiedIcon
                      className="icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        JavaScript
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Experienced
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VerifiedIcon
                      className="icon bootstrap-icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        Bootstrap
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Experienced
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VerifiedIcon
                      className="icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        Material UI
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Experienced
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: ".5rem",
                    }}
                  >
                    <VerifiedIcon
                      className="icon react-icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        React
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Experienced
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </CardToggle>
          <CardToggle>
            <Typography
              variant="h5"
              component="h3"
              color={theme.palette.success.light}
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Backend Development
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VerifiedIcon
                      className="icon node-icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        Node JS
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Experienced
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VerifiedIcon
                      className="icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        MongoDB
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Intermediate
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VerifiedIcon
                      className="icon java-icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        Java
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Intermediate
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "1.5rem",
                    }}
                  >
                    <VerifiedIcon
                      className="icon psql-icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        PostgreSQL
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Experienced
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1.5rem",
                    }}
                  >
                    <VerifiedIcon
                      className="icon spring-icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        Spring
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Basic
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1.5rem",
                    }}
                  >
                    <VerifiedIcon
                      className="icon"
                      color={theme.palette.success.light}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "1.5rem",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        Python
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color={theme.palette.success.light}
                      >
                        Basic
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </CardToggle>
        </Box>
      </Container>
    </section>
  );
}

export default Experience;
