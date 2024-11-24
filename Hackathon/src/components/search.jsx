import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { List, Box, ListItem, TextField, ListItemText } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
//import axios, { formToJSON } from "axios";
//import { Javascript } from "@mui/icons-material";

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
  const [hotels, setHotels] = useState([]); // Lista de hotéis
  const [filteredHotels, setFilteredHotels] = useState([]); // Hotéis filtrados

  // Carregar os dados dos hotéis da API (ou simular com dados locais)
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        // Supondo que você tenha um endpoint para buscar hotéis
//const response = await axios.get(j);
        const response = {
          id: 1,
          name: "Lua Nova Hotel",
          stars: 1,
          latitude: "-23.51464704884",
          longitude: "-46.6229242086411",
          description:
            "Situado a 250 m pela saída lateral do Terminal Rodoviário Tietê/Metro Portuguesa-Tietê,. A 5min.de carro do Anhembi Centro de exposições, 10min de caminhada do Expo Center Norte, 3min. de caminhada do Shopping Center Norte, O Aeroporto Internacional de Guarulhos fica a 22,7 km de distância aprox. 25/30min. de carro.\nOs quartos claros são decorados em tons agradáveis, todos os quartos do Hotel Lua Nova possuem TV e roupa de cama, banheiro privativo, Wifi e café da manhã gratuito.\n\n\n",
          address: "R. Cel. Antônio de Carvalho , 269",
          district: "Santana",
          city: "São Paulo",
          state: "SP",
          country: "BR",
          placeId: "ChIJ0WGkg4FEzpQRrlsz_whLqZs",
          thumb:
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586013.jpg",
          images: [
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586013.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586015.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586016.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586017.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586018.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586019.jpeg.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586021.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property586022.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168029.jpeg.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167991.jpeg.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167992.jpeg.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1167993.jpeg.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168030.jpeg.jpg",
            "https://i.t4w.mobi/h/BR/1010502/775076/775076_11003Property1168031.jpeg.jpg",
          ],
          amenities: [
            { key: "WI_FI", label: "Internet" },
            { key: "BREAKFAST", label: "Café da manhã" },
            { key: "PARKING", label: "Estacionamento" },
          ],
          pois: [
            {
              lat: -23.515589999999975,
              long: -46.62459999999993,
              name: "Casa do Pão de Queijo",
              type: "Food",
              address: "Rua Eudoro Lemos, Santana, São Paulo, 02030-010",
              distance: 3,
            },
            {
              lat: -23.51572999999996,
              long: -46.62459999999993,
              name: "Cia da Empada",
              type: "Food",
              address: "Rua Eudoro Lemos, Santana, São Paulo, 02030-010",
              distance: 3.15,
            },
            {
              lat: -23.51333999999997,
              long: -46.62493999999998,
              name: "Spoleto",
              type: "Food",
              address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000",
              distance: 3.75,
            },
            {
              lat: -23.513109999999983,
              long: -46.62492999999995,
              name: "Restaurante Picote",
              type: "Food",
              address:
                "Avenida Cruzeiro do Sul 2046, Santana, São Paulo, 02030-000",
              distance: 4.05,
            },
            {
              lat: -23.516089999999963,
              long: -46.62501999999995,
              name: "Café Donuts-Rodoviária Tietê",
              type: "Food",
              address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000",
              distance: 4.05,
            },
            {
              lat: -23.516529999999932,
              long: -46.62503999999995,
              name: "Metrô-Portuguesa-Tietê-Avenida Cruzeiro do Sul-Lado Par",
              type: "Metro",
              address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02030-000",
              distance: 4.5,
            },
            {
              lat: -23.516339999999957,
              long: -46.62528999999995,
              name: "Metrô-Portuguesa-Tietê-Avenida Cruzeiro do Sul-Lado Ímpar",
              type: "Metro",
              address: "Avenida Cruzeiro do Sul, Santana, São Paulo, 02031-000",
              distance: 4.65,
            },
          ],
          reviews: [],
          cnpj: null,
          type: "hostel",
          createdAt: "2023-01-09T20:24:51.000Z",
          updatedAt: "2024-09-05T07:20:00.000Z",
        };
        setHotels(response); // Defina os dados recebidos no estado de hotéis
        setFilteredHotels(response); // Inicialmente exibe todos os hotéis
      } catch (error) {
        console.error("Erro ao buscar hotéis:", error);
      }
    };

    fetchHotels();
  }, []);

  // Filtragem dos hotéis com base no valor da pesquisa
  useEffect(() => {
    const filterResults = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredHotels(filterResults);
  }, [searchValue, hotels]);

  const handleChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#f5f5f5", padding: 2 }}>
        <TextField
          label="Pesquisar Hotel"
          variant="outlined"
          value={searchValue}
          onChange={handleChangeSearch}
          sx={{
            width: "100%",
            marginBottom: 2,
          }}
        />

        <List>
          {filteredHotels.map((hotel, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={hotel.name}
                secondary={`Cidade: ${hotel.city} | Estrelas: ${hotel.stars}`}
              />
            </ListItem>
          ))}
        </List>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Enviar
          </Button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Search;
