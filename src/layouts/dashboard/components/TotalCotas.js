import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function TotalCotas() {
  const [cotas, setCotas] = useState(0);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario && usuario.id) {
      axios
        .get(`https://grupo-reune-backend.onrender.com/api/total-cotas/${usuario.id}`)
        .then((res) => {
          setCotas(res.data.total || 0);
        })
        .catch((err) => {
          console.error("Erro ao buscar total de cotas:", err);
          setCotas(0);
        });
    }
  }, []);

  return (
    <MDBox mb={1.5}>
      <ComplexStatisticsCard
        color="warning"
        icon="person_add"
        title="TOTAL DE COTAS"
        count={cotas}
        percentage={{
          color: "warning",
          amount: "",
          label: "VOCÊ É UM FUNDADOR",
        }}
      />
    </MDBox>
  );
}

export default TotalCotas;
