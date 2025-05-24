/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// @mui material components
import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Avatar, Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";

function Profile() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Recupera o usuário do localStorage
    const dados = localStorage.getItem("usuario");
    if (dados) {
      const user = JSON.parse(dados);
      // Buscar informações completas no backend pelo ID
      axios
        .get(`https://grupo-reune-backend.onrender.com/api/usuario/${user.id}`)
        .then((res) => {
          setUsuario(res.data.usuario);
        })
        .catch((err) => {
          console.error("Erro ao buscar dados do perfil:", err);
        });
    }
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box p={3}>
        <Card>
          <CardContent>
            {usuario ? (
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={3}>
                  <Avatar alt={usuario.nome} src="" sx={{ width: 120, height: 120 }} />
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="h5" gutterBottom>
                    {usuario.nome}
                  </Typography>
                  <Typography>
                    <strong>Email:</strong> {usuario.email}
                  </Typography>
                  <Typography>
                    <strong>Status:</strong> {usuario.status || "VISITANTE"}
                  </Typography>
                  <Typography>
                    <strong>WhatsApp:</strong> {usuario.whatsapp || "Não informado"}
                  </Typography>
                  <Typography>
                    <strong>CPF:</strong> {usuario.cpf || "Não informado"}
                  </Typography>
                  <Box mt={2}>
                    <Button variant="contained" color="success">
                      EDITAR INFORMAÇÕES
                    </Button>{" "}
                    <Button variant="outlined" color="secondary">
                      TROCAR SENHA
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            ) : (
              <Typography color="error">Nenhum usuário logado.</Typography>
            )}
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default Profile;
