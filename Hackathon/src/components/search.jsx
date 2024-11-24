import React from "react";
import { useState } from "react";
import TextField from "@mui/material";
import List from "@mui/material";
import Box from "@mui/material";
import listItemText from "@mui/material";
import ListItem from "@mui/material";


const Search = () => {
     const [searchValue, setSearchValue] = useState();
     const [items] = useState ([React, List, Box, TextField, listItemText, ListItem]);
    
     const filterItems = items.filter ((item =>
        item.toLowerCase().includes(searchValue.toLowerCase())
     ));

     const changeSearch = (event) => {
        setSearchValue(event.target.value);
      };



    return ( 
        <Box sx={{}}>
        <TextField
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={handleSearchChange}
      />
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