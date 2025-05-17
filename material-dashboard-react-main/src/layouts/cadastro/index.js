import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Alert,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function CadastroIndicado() {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "", cpf: "", senha: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [indicados, setIndicados] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIndicados([
      ...indicados,
      {
        ...form,
        data: new Date().toLocaleDateString(),
        status: "Cadastrado",
      },
    ]);
    setSuccessMessage("Indicado cadastrado com sucesso!");
    setForm({ nome: "", email: "", whatsapp: "", cpf: "", senha: "" });
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box p={3}>
        <Typography variant="h4" style={{ color: "white" }} gutterBottom>
          Cadastrar um novo indicado
        </Typography>

        <Typography variant="body1" style={{ color: "white" }} mb={3}>
          Cadastre pessoas diretamente pelo seu painel e ajude a expandir a comunidade.
        </Typography>

        {successMessage && <Alert severity="success">{successMessage}</Alert>}

        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nome completo"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="E-mail"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="WhatsApp"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                required
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="CPF (opcional)"
                name="cpf"
                value={form.cpf}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Criar senha"
                name="senha"
                type="password"
                value={form.senha}
                onChange={handleChange}
                required
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
          </Grid>
          <Box mt={3}>
            <Button variant="contained" color="primary" type="submit">
              Cadastrar Indicado
            </Button>
          </Box>
        </Box>

        <Typography variant="h6" style={{ color: "white" }} gutterBottom>
          Prefere compartilhar o link?
        </Typography>
        <Typography variant="body2" style={{ color: "white" }} mb={3}>
          Aqui está seu link de indicação: <br />
          <strong style={{ color: "white" }}>https://gruporeune.com.br/cadastro?ref=seuID</strong>
        </Typography>

        <Card sx={{ backgroundColor: "#222" }}>
          <CardContent>
            <Typography variant="h6" color="white" gutterBottom>
              Últimos Indicados Cadastrados
            </Typography>
            <List>
              {indicados.length === 0 ? (
                <Typography variant="body2" color="white">
                  Nenhum indicado cadastrado ainda.
                </Typography>
              ) : (
                indicados.map((ind, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={ind.nome}
                        secondary={`Email: ${ind.email} | Status: ${ind.status} | Data: ${ind.data}`}
                        primaryTypographyProps={{ style: { color: "white" } }}
                        secondaryTypographyProps={{ style: { color: "white" } }}
                      />
                    </ListItem>
                    <Divider sx={{ backgroundColor: "#555" }} />
                  </React.Fragment>
                ))
              )}
            </List>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default CadastroIndicado;
