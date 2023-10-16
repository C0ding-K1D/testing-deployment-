import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import "../../styles/mediumBlog.css";

export default function MediumBlog() {
  const { theme } = useThemeContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://3.145.115.241:8000/v1/allarticles"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Set an empty array in case of an error
      }
    }

    fetchData();
  }, []);

  return (
    <section id="blog">
      <Container>
        <Typography
          variant="subtitle1"
          component="h3"
          color="textPrimary"
          sx={{ textAlign: "center", marginTop: "5rem" }}
        >
          What I Talk About
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          color={theme.palette.success.main}
          sx={{ textAlign: "center", marginBottom: "4rem" }}
        >
          My Medium Blog
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <article
                className="card_item"
                style={{
                  backgroundColor: "#512da8",
                }}
                key={item?.id}
              >
                <div className="card_item-image">
                  <img className="card_img" src={item?.imgSrc} alt="" />
                </div>
                <Typography
                  variant="body1"
                  component="h3"
                  color={theme.palette.info.main}
                  sx={{ m: 1 }}
                >
                  {item?.title}
                </Typography>
                <a href={item?.href} target="_blank">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#311b92" }}
                    size="small"
                  >
                    Read More
                  </Button>
                </a>
              </article>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
