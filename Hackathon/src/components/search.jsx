import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material";
import List from "@mui/material";
import Box from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import listItemText from "@mui/material";
import ListItem from "@mui/material";


const Search = () => {
     const [searchValue, setSearchValue] = useState();
     const [items] = useState (["arcane", "visconde", "atlantis", "avada cadabra", "harry potter", "jogos vorazes"]);
    
     const filterItems = items.filter ((item =>
        item.toLowerCase().includes(searchValue.toLowerCase())
     ));

     const handleChangeSearch = (event) => {
        setSearchValue(event.target.value);
      };


    return ( 
      <Box sx={{}}>
          <TextField
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={handleChangeSearch}
        />

        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>

          <List>
            {filterItems.map((item, index) => (
              <ListItem key={index}>
                <listItemText primary={item} />
              </ListItem>
            ))}
          </List>
      </Box>
     );
}

 
export default Search; 


