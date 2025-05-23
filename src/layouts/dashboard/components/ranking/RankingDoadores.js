import React, { useState } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import rankingDataInitial from "layouts/dashboard/data/rankingData";

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
  const [rankingData, setRankingData] = useState(rankingDataInitial);
  const [nome, setNome] = useState("");
  const [cotas, setCotas] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!nome.trim() || !cotas || isNaN(Number(cotas))) {
      setError("Preencha um nome válido e um número de cotas.");
      return;
    }
    setRankingData([
      ...rankingData,
      {
        id: `USR${(rankingData.length + 1).toString().padStart(3, "0")}`,
        nome,
        cotas: Number(cotas),
      },
    ]);
    setNome("");
    setCotas("");
    setError("");
  };

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
        <Divider sx={{ my: 2 }} />
        <MDTypography variant="subtitle2" mb={1}>
          Adicionar novo doador
        </MDTypography>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={5}>
            <MDInput
              label="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <MDInput
              label="Cotas"
              value={cotas}
              onChange={(e) => setCotas(e.target.value)}
              fullWidth
              size="small"
              type="number"
            />
          </Grid>
          <Grid item xs={3}>
            <MDButton color="info" onClick={handleAdd} fullWidth>
              Adicionar
            </MDButton>
          </Grid>
        </Grid>
        {error && (
          <MDTypography color="error" variant="caption" mt={1}>
            {error}
          </MDTypography>
        )}
      </MDBox>
    </Card>
  );
}

export default RankingDoadores;
