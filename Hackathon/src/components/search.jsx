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
  const [items, setItems] = useState([]); // Lista de itens vazia inicialmente
  const [isLoading, setIsLoading] = useState(false); // Para gerenciar o estado de carregamento

  const handleSearch = async (value) => {
    if (value.trim() === "") {
      setItems([]); // Limpa a lista se a barra de pesquisa estiver vazia
      return;
    }

    setIsLoading(true); // Mostra o estado de carregamento
    try {
      const response = await fetch(
        "https://back-end-w39w.onrender.com/hotels/by-type",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type: value }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar os dados.");
      }

      const data = await response.json();
      setItems(data); // Atualiza os itens com a resposta da API
    } catch (error) {
      console.error("Erro na busca:", error);
      setItems([]); // Define a lista como vazia em caso de erro
    } finally {
      setIsLoading(false); // Finaliza o estado de carregamento
    }
  };

  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    handleSearch(value); // Faz a busca a cada alteração
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: "linear-gradient(to bottom, #FFFFFF,#F4F8FF)",
          padding: 2,
          alignItems: "center",
          direction: "column",
        }}
      >
        <TextField
          label="Pesquise pelo tipo do hotel:"
          variant="outlined"
          value={searchValue}
          onChange={handleChangeSearch}
          placeholder="ex:resort"
          sx={{
            width: "100%",
            marginBottom: 2,
          }}
        />

        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <List
            sx={{
              backgroundColor: "#a2d3da",
              padding: "1%",
              margin: "center",
              alignItems: "center",
              direction: "column",
              borderRadius: "16px",
            }}
          >
            {items.length > 0 ? (
              items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.name}
                    secondary={`Type: ${item.type}`}
                  />
                </ListItem>
              ))
            ) : (
              <p>Nenhum item encontrado.</p>
            )}
          </List>
        )}

        <Stack direction="column" spacing={3}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Search;
