import { Button, Container, Grid, Typography } from "@mui/material";
import "../../styles/projects.css";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import everythingCookies from "../../assets/images/everythingCookies.jpg";
import expenseBuddy from "../../assets/images/expenseBuddy.jpg";
import forkify from "../../assets/images/forkify.jpg";

function Projects() {
  const { theme } = useThemeContext();
  return (
    <section id="projects">
      <Container>
        <Typography
          variant="subtitle1"
          component="h3"
          color="textPrimary"
          sx={{ textAlign: "center", marginTop: "5rem" }}
        >
          My Recent Work
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          color={theme.palette.success.main}
          sx={{ textAlign: "center", marginBottom: "4rem" }}
        >
          Projects
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <article
                className="portfolio_item"
                style={{
                  backgroundColor: "#512da8",
                }}
              >
                <div className="portfolio_item-image">
                  <img
                    className="portfolio_img"
                    src={everythingCookies}
                    alt=""
                  />
                </div>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    marginTop: "-1rem",
                    marginBottom: "2rem",
                    textAlign: "center",
                  }}
                  color={theme.palette.info.main}
                >
                  E-Commerce Store
                </Typography>
                <Button
                  href="https://github.com/C0ding-K1D/everything-cookies-"
                  target="_blank"
                  variant="outlined"
                  color="success"
                  size="small"
                  sx={{ mr: 1, color: "#d1c4e9" }}
                >
                  Github
                </Button>
                <Button
                  href="https://celadon-melomakarona-8d53df.netlify.app/"
                  target="_blank"
                  variant="contained"
                  sx={{ backgroundColor: "#311b92" }}
                  size="small"
                >
                  Demo
                </Button>
              </article>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <article
                className="portfolio_item"
                style={{
                  backgroundColor: "#512da8",
                }}
              >
                <div className="portfolio_item-image">
                  <img className="portfolio_img" src={expenseBuddy} alt="" />
                </div>
                <Typography
                  variant="h5"
                  component="h3"
                  color={theme.palette.info.main}
                  sx={{
                    marginTop: "-1rem",
                    marginBottom: "2rem",
                    textAlign: "center",
                  }}
                >
                  Expense Tracker
                </Typography>
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  sx={{ mr: 1, color: "#d1c4e9" }}
                >
                  Github
                </Button>
                <Button
                  href="https://preeminent-brigadeiros-8c5419.netlify.app"
                  target="_blank"
                  variant="contained"
                  sx={{ backgroundColor: "#311b92" }}
                  size="small"
                >
                  Demo
                </Button>
              </article>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <article
                className="portfolio_item"
                style={{
                  backgroundColor: "#512da8",
                }}
              >
                <div className="portfolio_item-image">
                  <img src={forkify} alt="" className="portfolio_img" />
                </div>
                <Typography
                  variant="h5"
                  component="h3"
                  color={theme.palette.info.main}
                  sx={{
                    marginTop: "-1rem",
                    marginBottom: "2rem",
                    textAlign: "center",
                  }}
                >
                  Recipe App
                </Typography>
                <Button
                  href="https://github.com/C0ding-K1D/forkify-recipes"
                  target="_blank"
                  variant="outlined"
                  size="small"
                  sx={{ mr: 1, color: "#d1c4e9" }}
                >
                  Github
                </Button>
                <Button
                  href="https://forkifytherecipeapp.netlify.app"
                  target="_blank"
                  variant="contained"
                  sx={{
                    backgroundColor: "#311b92",
                  }}
                  size="small"
                >
                  Demo
                </Button>
              </article>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
