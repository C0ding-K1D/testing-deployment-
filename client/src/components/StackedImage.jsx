import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import cardImgLight from "../assets/images//3dME.jpg";
import "../styles/stackedImage.css";

function StackedImage() {
  return (
    <Box className="container">
      <Paper elevation={3} className="paperLight">
        <div className="gradientCornerLeftLight"></div>
        <div className="gradientCornerRightLight"></div>
        <img
          src={cardImgLight}
          alt="Your Image"
          className="imageLight"
          width="100%" // Adjust image size as needed
          height="100%" // Adjust image size as needed
        />
      </Paper>
    </Box>
  );
}

export default StackedImage;
