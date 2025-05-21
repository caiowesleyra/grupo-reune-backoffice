// src/layouts/lucro/LucroEspecialistas.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

function LucroEspecialistas() {
  const [valor, setValor] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  // ✅ Proteção: redirecionar se não for admin
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario || usuario.email !== "admin@gruporeune.com") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async () => {
    try {
      const resposta = await axios.post(
        "https://grupo-reune-backend.onrender.com/api/premio-do-dia",
        { valor_total: parseFloat(valor) }
      );
      setMensagem(resposta.data.mensagem);
      setErro("");
      setValor("");
    } catch (err) {
      console.error("Erro ao salvar lucro:", err);
      setErro("Erro ao salvar valor. Tente novamente.");
      setMensagem("");
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={4} px={2}>
        <MDTypography variant="h4" mb={2} color="white">
          Inserir Lucro dos Especialistas (40% para Partners)
        </MDTypography>
        <MDBox
          display="flex"
          flexDirection="column"
          maxWidth="400px"
          bgcolor="white"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
        >
          <MDInput
            type="number"
            label="Valor em R$"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            fullWidth
            variant="standard"
            mb={2}
          />
          <MDButton variant="gradient" color="success" onClick={handleSubmit}>
            Enviar Lucro
          </MDButton>
          {mensagem && (
            <MDTypography mt={2} color="success">
              {mensagem}
            </MDTypography>
          )}
          {erro && (
            <MDTypography mt={2} color="error">
              {erro}
            </MDTypography>
          )}
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default LucroEspecialistas;
