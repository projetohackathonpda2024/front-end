import { Box, Typography } from "@mui/material";
const Home = () => {
  return (
    <Box 
    sx={{
      display: "flex",
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh", 
      flexDirection: "column", 
      backgroundImage: "linear-gradient(to bottom, #192A3D, #3A4F66)", 
      padding: 4,
      textAlign: "center", 
    }}
  >
      <Typography
        variant="h3"
        sx={{ marginBottom: 2, color: "#FFFFFF",}}
      >
        Bem-vindo ao Hotel Finder!
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ marginBottom: 6, color: "#FFFFFF" }}
      >
        Encontre ou cadastre o seu hotel facilmente com nossa plataforma.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
      </Box>
    </Box>
    
  );
};
export default Home;