
import { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { List, Box, ListItem, TextField, ListItemText } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
  },
});

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [items] = useState([
    { name: "Mountain Escape", type: "Resort" },
    { name: "Urban Retreat", type: "Hotel" },
    { name: "Sunset Paradise", type: "Resort" },
    { name: "Forest Escape", type: "Cabin" },
    { name: "Luxury Horizon", type: "Boutique Hotel" },
    { name: "Nature's Nest", type: "Eco-Lodge" },
  ]);

  const filterItems = items.filter((item) =>
    item.type.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#f5f5f5", padding: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={handleChangeSearch}
          sx={{
            width: "100%",
            marginBottom: 2,
          }}
        />

        <List>
          {filterItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText 
              primary={item.name} 
              secondary={`Type: ${item.type}`}
              />
            </ListItem>
          ))}
        </List>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Search;