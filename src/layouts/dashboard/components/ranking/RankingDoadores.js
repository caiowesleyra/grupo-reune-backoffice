import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";

const premios = [
  {
    titulo: "🥇 1º Lugar - MOTO 0KM",
    imagem: "/images/premios/1colocado.png",
  },
  {
    titulo: "🥈 2º Lugar - iPhone 14",
    imagem: "/images/premios/2colocado.png",
  },
  {
    titulo: "🥉 3º Lugar - PlayStation 5",
    imagem: "/images/premios/3colocado.png",
  },
];

function RankingDoadores() {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    axios.get("https://grupo-reune-backend.onrender.com/api/ranking-doadores")
      .then(res => setRankingData(res.data))
      .catch(err => console.error("Erro ao buscar ranking:", err));
  }, []);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Ranking dos Maiores Doadores do Mês 💠
        </MDTypography>
      </MDBox>
      <Divider />
      <MDBox px={2} pt={2}>
        <Grid container spacing={2}>
          {premios.map((premio, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ textAlign: "center", p: 2 }}>
                <MDTypography variant="subtitle2" fontWeight="bold">
                  {premio.titulo}
                </MDTypography>
                <img
                  src={premio.imagem}
                  alt={premio.titulo}
                  style={{ width: "100%", borderRadius: 8, marginTop: 8 }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </MDBox>
      <Divider sx={{ my: 2 }} />
      <MDBox px={2} pb={2}>
        <MDTypography variant="h6" mb={1}>
          🏆 TOP 10 Doadores
        </MDTypography>
        {rankingData.slice(0, 10).map((user, index) => (
          <MDBox
            key={user.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={1}
          >
            <MDTypography variant="button" fontWeight={index < 3 ? "bold" : "regular"}>
              {index + 1}º - {user.nome}
            </MDTypography>
            <MDTypography variant="button" color="text">
              {user.cotas} cotas
            </MDTypography>
          </MDBox>
        ))}
      </MDBox>
    </Card>
  );
}

export default RankingDoadores;
