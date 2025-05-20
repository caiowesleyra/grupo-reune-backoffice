import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import axios from "axios";

function CardPorcentagemCota() {
  const [porcentagem, setPorcentagem] = useState(0);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuario && usuario.id) {
      const fetchDados = async () => {
        try {
          const [resUsuario, resGeral] = await Promise.all([
            axios.get(`https://grupo-reune-backend.onrender.com/api/total-cotas/${usuario.id}`),
            axios.get("https://grupo-reune-backend.onrender.com/api/total-cotas-geral"),
          ]);

          const cotasUsuario = resUsuario.data.total || 0;
          const cotasGerais = resGeral.data.total || 1;

          const porcentagemFinal = ((100 / cotasGerais) * cotasUsuario).toFixed(2);
          setPorcentagem(porcentagemFinal);
        } catch (error) {
          console.error("Erro ao calcular porcentagem de cota:", error);
        }
      };

      fetchDados();
    }
  }, []);

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <MDBox>
          <MDTypography variant="h6" fontWeight="medium">
            % DA SUA COTA
          </MDTypography>
          <MDTypography variant="h4" fontWeight="bold" color="info">
            {porcentagem}%
          </MDTypography>
        </MDBox>
        <MDBox color="info" px={2}>
          <Icon fontSize="large">pie_chart</Icon>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default CardPorcentagemCota;
