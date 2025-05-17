import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Box,
  Snackbar,
  Alert,
  Divider,
  Chip,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { MonetizationOn, AccessTime, CheckCircle, Cancel } from "@mui/icons-material";

const historicoSaques = [
  {
    valor: "R$ 200,00",
    data: "12/05/2025 14:20",
    status: "Pago",
  },
  {
    valor: "R$ 150,00",
    data: "10/05/2025 10:00",
    status: "Aguardando",
  },
  {
    valor: "R$ 300,00",
    data: "08/05/2025 09:30",
    status: "Rejeitado",
  },
];

function Saque() {
  const [valor, setValor] = useState("");
  const [chavePix, setChavePix] = useState("");
  const [tipoPix, setTipoPix] = useState("cpf");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = () => {
    setOpenSnackbar(true);
    setValor("");
    setChavePix("");
    setTipoPix("cpf");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box p={3}>
        <Grid container spacing={3}>
          {/* Saldo disponível */}
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#1e293b", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Saldo disponível para saque:</Typography>
                <Typography variant="h4" mt={1} color="success.main">
                  R$ 150,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Formulário de saque */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Solicitação de Saque
                </Typography>
                <TextField
                  fullWidth
                  label="Valor (R$)"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  select
                  label="Tipo de chave Pix"
                  value={tipoPix}
                  onChange={(e) => setTipoPix(e.target.value)}
                  margin="normal"
                >
                  <MenuItem value="cpf">CPF</MenuItem>
                  <MenuItem value="email">E-mail</MenuItem>
                  <MenuItem value="telefone">Telefone</MenuItem>
                  <MenuItem value="aleatoria">Aleatória</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  label="Chave Pix"
                  value={chavePix}
                  onChange={(e) => setChavePix(e.target.value)}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handleSubmit}
                >
                  Solicitar Saque
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Histórico de saques */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Histórico de Saques
                </Typography>
                {historicoSaques.map((item, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={2}
                    p={2}
                    sx={{
                      backgroundColor:
                        item.status === "Pago"
                          ? "#dcfce7"
                          : item.status === "Aguardando"
                          ? "#fef9c3"
                          : "#fee2e2",
                      borderRadius: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="body2">{item.valor}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.data}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      {item.status === "Pago" && <CheckCircle color="success" />}
                      {item.status === "Aguardando" && <AccessTime color="warning" />}
                      {item.status === "Rejeitado" && <Cancel color="error" />}
                      <Typography variant="body2">{item.status}</Typography>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Avisos e regras */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Regras e Informações Importantes
                </Typography>
                <Typography variant="body2" gutterBottom>
                  • Valor mínimo para saque: R$ 50,00
                </Typography>
                <Typography variant="body2" gutterBottom>
                  • Saques são processados em até 24h úteis
                </Typography>
                <Typography variant="body2">
                  • Certifique-se de que a chave Pix está correta. Não nos responsabilizamos por
                  dados incorretos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Snackbar de sucesso */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" variant="filled">
            Solicitação de saque enviada com sucesso!
          </Alert>
        </Snackbar>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default Saque;
