
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
      alert("Deu certo!!!!");
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Cadastro de Hotel
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {/* Nome */}
            <Grid item xs={12}>
              <TextField
                label="Nome"
                fullWidth
                {...register("name", { required: "Nome é obrigatório" })}
                error={!!errors.name}
                helperText={errors.name?.message}
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
              >
                Cadastrar Hotel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default HotelForm;
