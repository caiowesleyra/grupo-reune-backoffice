// src/pages/free-donation/index.js

import React, { useState } from "react";
import bgImage from "assets/images/free-donation-bg.jpg";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MDBox from "components/MDBox";
import axios from "axios";

function FreeDonationPage() {
  const [nomeDoacao, setNomeDoacao] = useState("");
  const [valorDoacao, setValorDoacao] = useState("");
  const [comprovante, setComprovante] = useState(null);
  const [mensagemDoacao, setMensagemDoacao] = useState("");

  const [nomeVoluntario, setNomeVoluntario] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cidadeEstado, setCidadeEstado] = useState("");
  const [mensagemVoluntario, setMensagemVoluntario] = useState("");

  const handleDoacao = async () => {
    if (!nomeDoacao || !valorDoacao || !comprovante) {
      setMensagemDoacao("Preencha todos os campos e selecione um comprovante.");
      return;
    }

    const formData = new FormData();
    formData.append("nome_completo", nomeDoacao);
    formData.append("valor", valorDoacao);
    formData.append("comprovante", comprovante);

    try {
      await axios.post("https://grupo-reune-backend.onrender.com/api/doacoes-livres", formData);
      setMensagemDoacao("✅ Doação registrada com sucesso!");
      setNomeDoacao("");
      setValorDoacao("");
      setComprovante(null);
    } catch (error) {
      setMensagemDoacao("Erro ao enviar doação. Tente novamente.");
    }
  };

  const handleVoluntario = async () => {
    if (!nomeVoluntario || !whatsapp || !cidadeEstado) {
      setMensagemVoluntario("Preencha todos os campos.");
      return;
    }

    try {
      await axios.post("https://grupo-reune-backend.onrender.com/api/voluntarios", {
        nome_completo: nomeVoluntario,
        whatsapp,
        cidade_estado: cidadeEstado,
      });
      setMensagemVoluntario("✅ Cadastro de voluntário enviado com sucesso!");
      setNomeVoluntario("");
      setWhatsapp("");
      setCidadeEstado("");
    } catch (error) {
      setMensagemVoluntario("Erro ao enviar cadastro. Tente novamente.");
    }
  };

  return (
    <MDBox
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Card sx={{ padding: 4, maxWidth: 500, width: "100%", opacity: 0.95 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} textAlign="center">
          Seja um <span style={{ color: "#2e7d32" }}>LIVRE DOADOR</span>
        </Typography>

        <Typography variant="body1" textAlign="center" mb={3}>
          Doe com amor. Cada real faz a diferença. 🙏
        </Typography>

        <TextField
          fullWidth
          label="Nome completo"
          margin="normal"
          value={nomeDoacao}
          onChange={(e) => setNomeDoacao(e.target.value)}
        />
        <TextField
          fullWidth
          label="Valor da doação (mínimo R$1)"
          type="number"
          margin="normal"
          value={valorDoacao}
          onChange={(e) => setValorDoacao(e.target.value)}
        />

        <Typography variant="body2" mt={2} mb={1}>
          Envie seu Pix para: <strong>doar@gruporeune.com.br</strong>
        </Typography>

        <Typography variant="body2" mt={2}>
          Envie o comprovante:
        </Typography>
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          style={{ marginTop: 8, marginBottom: 16 }}
          onChange={(e) => setComprovante(e.target.files[0])}
        />

        <Button fullWidth variant="contained" color="success" sx={{ mt: 2 }} onClick={handleDoacao}>
          Enviar Doação
        </Button>
        {mensagemDoacao && (
          <Typography color="error" variant="caption" mt={1}>
            {mensagemDoacao}
          </Typography>
        )}

        <hr style={{ margin: "20px 0" }} />

        <Typography variant="h6" textAlign="center" mb={1}>
          Quer ser voluntário?
        </Typography>

        <TextField
          fullWidth
          label="Nome completo"
          margin="normal"
          value={nomeVoluntario}
          onChange={(e) => setNomeVoluntario(e.target.value)}
        />
        <TextField
          fullWidth
          label="WhatsApp com DDD"
          margin="normal"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
        <TextField
          fullWidth
          label="Cidade e Estado"
          margin="normal"
          value={cidadeEstado}
          onChange={(e) => setCidadeEstado(e.target.value)}
        />

        <Button fullWidth variant="contained" color="success" sx={{ mt: 2 }} onClick={handleVoluntario}>
          Enviar Cadastro
        </Button>
        {mensagemVoluntario && (
          <Typography color="error" variant="caption" mt={1}>
            {mensagemVoluntario}
          </Typography>
        )}
      </Card>
    </MDBox>
  );
}

export default FreeDonationPage;
