import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Search, AddCircle } from "@mui/icons-material";

// Definir o tema com a sua paleta de cores personalizada
const theme = createTheme({
  palette: {
    primary: {
      main: "#1F6391", 
    },
    secondary: {
      main: "#FF5A05", 
    },
    background: {
      default: "#FFFFFF", 
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Ícone de Pesquisa */}
            <IconButton color="inherit" component={Link} to="/pesquisa">
              <Search />
            </IconButton>
            <Typography variant="h6" sx={{ marginLeft: 1 }}>
              Hotel Finder
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddCircle />}
              component={Link}
              to="/cadastro"
              sx={{
                marginLeft: 2,
                backgroundImage: "linear-gradient(to bottom,#267FFA, #009EFB)",  // Onfly-Colors-4-hex
                "&:hover": {
                  backgroundImage: "linear-gradient(to bottom,#d53d0c, #FF5A05)"// Onfly-Colors-8-hex
                },
              }}
            >
              Cadastrar Hotel
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
