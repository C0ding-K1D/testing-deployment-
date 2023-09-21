import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddTaskIcon from "@mui/icons-material/AddTask";
import BookIcon from "@mui/icons-material/Book";
import WorkIcon from "@mui/icons-material/Work";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import "../styles/nav.css";
import { useThemeContext } from "../theme/ThemeContextProvider";

function Nav() {
  const { mode } = useThemeContext();

  return (
    <nav>
      <a href="#">
        <HomeIcon sx={{ color: mode === "light" ? "#673ab7" : "#9575cd" }} />
      </a>
      <a href="#about">
        <InfoIcon sx={{ color: mode === "light" ? "#673ab7" : "#9575cd" }} />
      </a>
      <a href="#experience">
        <AddTaskIcon sx={{ color: mode === "light" ? "#673ab7" : "#9575cd" }} />
      </a>
      <a href="#blog">
        <BookIcon sx={{ color: mode === "light" ? "#673ab7" : "#9575cd" }} />
      </a>
      <a href="#projects">
        <WorkIcon sx={{ color: mode === "light" ? "#673ab7" : "#9575cd" }} />
      </a>
      <a href="#contact">
        <ConnectWithoutContactIcon
          sx={{ color: mode === "light" ? "#673ab7" : "#9575cd" }}
        />
      </a>
    </nav>
  );
}

export default Nav;
