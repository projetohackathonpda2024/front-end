
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import axios from "axios";

const HotelForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/hotelscreat",
        data
      );
      alert("Hotel cadastrado com sucesso!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar hotel.");
    }
  };

  return (
    <Container maxWidth="md">
        <Box
        sx={{
          justifyContent: "center",
          height: "100vh",
          display: "flex",
          backgroundColor: "#192A3D", 
          alignItems: "center",
          flexDirection: "column",
          padding: 6
        }}
      >
      <Box sx={{
            backgroundColor: "#fff", 
            padding: 4, 
            borderRadius: 2, 
          }}
          >

        <Typography 
           variant="h4"
           align="center"
           gutterBottom
            sx={{
              mb: 2,
              color: "#3A4F66", 
            }}
            >

          Cadastro de Hotel

        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {/* Nome */}
            <Grid item xs={12}>
              <TextField
                label="Nome"
                fullWidth
                {...register("name", { required: "Nome é obrigatório" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
                  "& .MuiInputLabel-root": { color: "#808080" }, // Cor da label
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc", // Cor da borda do input
                    },
                  },
                }}
              />
            </Grid>

            {/* Tipo */}
            <Grid item xs={12}>
              <TextField
                label="Tipo"
                fullWidth
                {...register("type", { required: "Tipo é obrigatório" })}
                error={!!errors.type}
                helperText={errors.type?.message}
                sx={{
                  "& .MuiInputLabel-root": { color: "#808080" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#ccc" },
                  },
                }}
              />
            </Grid>

            {/* Estrelas */}
            <Grid item xs={12}>
              <TextField
                label="Estrelas"
                type="number"
                fullWidth
                {...register("stars", {
                  required: "Número de estrelas é obrigatório",
                  min: { value: 1, message: "Mínimo 1 estrela" },
                  max: { value: 5, message: "Máximo 5 estrelas" },
                })}
                error={!!errors.stars}
                helperText={errors.stars?.message}
              />
            </Grid>

            {/* Latitude */}
            <Grid item xs={6}>
              <TextField
                label="Latitude"
                fullWidth
                {...register("latitude", {
                  required: "Latitude é obrigatória",
                })}
                error={!!errors.latitude}
                helperText={errors.latitude?.message}
              />
            </Grid>

            {/* Longitude */}
            <Grid item xs={6}>
              <TextField
                label="Longitude"
                fullWidth
                {...register("longitude", {
                  required: "Longitude é obrigatória",
                })}
                error={!!errors.longitude}
                helperText={errors.longitude?.message}
              />
            </Grid>

            {/* Endereço */}
            <Grid item xs={12}>
              <TextField
                label="Endereço"
                fullWidth
                {...register("address", { required: "Endereço é obrigatório" })}
                error={!!errors.address}
                helperText={errors.address?.message}
              />
            </Grid>

            {/* Cidade */}
            <Grid item xs={6}>
              <TextField
                label="Cidade"
                fullWidth
                {...register("city", { required: "Cidade é obrigatória" })}
                error={!!errors.city}
                helperText={errors.city?.message}
              />
            </Grid>

            {/* Estado */}
            <Grid item xs={6}>
              <TextField
                label="Estado"
                fullWidth
                {...register("state", { required: "Estado é obrigatório" })}
                error={!!errors.state}
                helperText={errors.state?.message}
              />
            </Grid>

            {/* País */}
            <Grid item xs={6}>
              <TextField
                label="País"
                fullWidth
                {...register("country", { required: "País é obrigatório" })}
                error={!!errors.country}
                helperText={errors.country?.message}
              />
            </Grid>

            {/* CNPJ */}
            <Grid item xs={6}>
              <TextField label="CNPJ" fullWidth {...register("cnpj")} />
            </Grid>

            {/* Botão de Submit */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  borderRadius: 8, // Bordas arredondadas
                  backgroundColor: "#3A4F66", // Cor primária
                  paddingX: 4,
                  paddingY: 1,
                  color: "#fff", // Texto branco
                  "&:hover": {
                    backgroundColor: "#1F6391", // Cor ao passar o mouse
                  },
                }}
              >
                Cadastrar Hotel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      </Box>
    </Container>
  );
};

export default HotelForm;
