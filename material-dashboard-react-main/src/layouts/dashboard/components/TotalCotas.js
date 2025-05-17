import React from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function TotalCotas() {
  const minhasCotas = 10; // valor temporário

  return (
    <MDBox mb={1.5}>
      <ComplexStatisticsCard
        color="warning"
        icon="person_add"
        title="TOTAL DE COTAS"
        count={minhasCotas}
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
