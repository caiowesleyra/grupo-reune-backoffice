import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { MonetizationOn, AccessTime, CheckCircle, Cancel } from "@mui/icons-material";
import axios from "axios";

function Saque() {
  const [valor, setValor] = useState("");
  const [chavePix, setChavePix] = useState("");
  const [tipoPix, setTipoPix] = useState("cpf");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [saldoDisponivel, setSaldoDisponivel] = useState(0);
  const [historicoSaques, setHistoricoSaques] = useState([]);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario && usuario.id) {
      // Buscar saldo disponível para saque
      axios
        .get(`https://grupo-reune-backend.onrender.com/api/saldo-disponivel/${usuario.id}`)
        .then((res) => setSaldoDisponivel(res.data.saldo))
        .catch((err) => console.error("Erro ao buscar saldo disponível:", err));

      // Buscar histórico real de saques
      axios
        .get(`https://grupo-reune-backend.onrender.com/api/saques/${usuario.id}`)
        .then((res) => setHistoricoSaques(res.data.saques))
        .catch((err) => console.error("Erro ao buscar histórico de saques:", err));
    }
  }, []);

  const handleSubmit = async () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario || !usuario.id) {
      setSnackbarMsg("Usuário não identificado.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (!valor || !chavePix) {
      setSnackbarMsg("Preencha todos os campos obrigatórios.");
      setSnackbarSeverity("warning");
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await axios.post("https://grupo-reune-backend.onrender.com/api/saques", {
        id_usuario: usuario.id,
        valor: parseFloat(valor),
        chave_pix: chavePix,
        tipo_pix: tipoPix,
      });
      setSnackbarMsg(response.data.mensagem || "Solicitação de saque enviada com sucesso!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setValor("");
      setChavePix("");
      setTipoPix("cpf");

      // Atualizar histórico após novo saque
      const historicoAtualizado = await axios.get(
        `https://grupo-reune-backend.onrender.com/api/saques/${usuario.id}`
      );
      setHistoricoSaques(historicoAtualizado.data.saques);

      // Atualizar saldo disponível
      const saldoAtualizado = await axios.get(
        `https://grupo-reune-backend.onrender.com/api/saldo-disponivel/${usuario.id}`
      );
      setSaldoDisponivel(saldoAtualizado.data.saldo);
    } catch (error) {
      console.error("Erro ao solicitar saque:", error);
      setSnackbarMsg("Erro ao enviar solicitação de saque.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box p={3}>
        <Grid container spacing={3}>
          {/* Saldo disponível real */}
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#1e293b", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Saldo disponível para saque:</Typography>
                <Typography variant="h4" mt={1} color="success.main">
                  R$ {saldoDisponivel.toFixed(2)}
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
                  type="number"
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

          {/* Histórico real de saques */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Histórico de Saques
                </Typography>
                {historicoSaques.length === 0 ? (
                  <Typography variant="body2">Nenhum saque realizado ainda.</Typography>
                ) : (
                  historicoSaques.map((item, index) => (
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
                        <Typography variant="body2">R$ {item.valor.toFixed(2)}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(item.data_solicitacao).toLocaleString()}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap={1}>
                        {item.status === "Pago" && <CheckCircle color="success" />}
                        {item.status === "Aguardando" && <AccessTime color="warning" />}
                        {item.status === "Rejeitado" && <Cancel color="error" />}
                        <Typography variant="body2">{item.status}</Typography>
                      </Box>
                    </Box>
                  ))
                )}
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

        {/* Snackbar de sucesso ou erro */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity={snackbarSeverity} variant="filled">
            {snackbarMsg}
          </Alert>
        </Snackbar>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default Saque;
