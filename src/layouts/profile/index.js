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
import React, { useState } from "react";
import {
  Card,
  Grid,
  Avatar,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

// Layouts
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Profile() {
  const nome = "Caio Mendes";
  const status = "FUNDADOR";
  const email = "caio@email.com";
  const whatsapp = "(11) 91234-5678";
  const cidadeEstado = "São Paulo - SP";

  // Estado para imagem de perfil
  const [profileImage, setProfileImage] = useState("");

  // Upload de imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  // Estados dos modais
  const [openEdit, setOpenEdit] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box p={3}>
        <Card sx={{ p: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
              <Avatar
                src={profileImage}
                alt={nome}
                sx={{ width: 120, height: 120, margin: "auto" }}
              />
              <Typography variant="h6" fontWeight="bold" mt={2}>
                {nome}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Status: {status}
              </Typography>

              <Box mt={2}>
                <input
                  type="file"
                  accept="image/*"
                  id="upload-photo"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <label htmlFor="upload-photo">
                  <Button variant="outlined" component="span" color="primary">
                    Selecionar Foto
                  </Button>
                </label>
              </Box>
            </Grid>

            <Grid item xs={12} md={9}>
              <Typography variant="body1" mb={1}>
                <strong>Email:</strong> {email}
              </Typography>
              <Typography variant="body1" mb={1}>
                <strong>WhatsApp:</strong> {whatsapp}
              </Typography>
              <Typography variant="body1" mb={3}>
                <strong>Cidade e Estado:</strong> {cidadeEstado}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 2 }}
                onClick={() => setOpenEdit(true)}
              >
                Editar Informações
              </Button>

              <Button
                variant="outlined"
                sx={{ color: "#000", borderColor: "#000" }}
                onClick={() => setOpenPassword(true)}
              >
                Trocar Senha
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Modal: Editar Informações */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Editar Informações</DialogTitle>
        <DialogContent>
          <TextField fullWidth margin="dense" label="Nome" defaultValue={nome} />
          <TextField fullWidth margin="dense" label="Email" defaultValue={email} />
          <TextField fullWidth margin="dense" label="WhatsApp" defaultValue={whatsapp} />
          <TextField fullWidth margin="dense" label="Cidade e Estado" defaultValue={cidadeEstado} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)} sx={{ color: "#000" }}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={() => setOpenEdit(false)}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal: Trocar Senha */}
      <Dialog open={openPassword} onClose={() => setOpenPassword(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Trocar Senha</DialogTitle>
        <DialogContent>
          <TextField fullWidth margin="dense" label="Senha Atual" type="password" />
          <TextField fullWidth margin="dense" label="Nova Senha" type="password" />
          <TextField fullWidth margin="dense" label="Confirmar Nova Senha" type="password" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPassword(false)} sx={{ color: "#000" }}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={() => setOpenPassword(false)}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default Profile;
