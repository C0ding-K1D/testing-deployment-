import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider";
import { Hero } from "./components/views/Hero";
import About from "./components/views/About";
import Experience from "./components/views/Experience";
import MediumBlog from "./components/views/MediumBlog";
import Projects from "./components/views/Projects";
import Contact from "./components/views/Contact";
import Footer from "./components/views/Footer";
import Nav from "./components/Nav";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <MediumBlog />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
