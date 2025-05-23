import React from "react";
import MDBox from "components/MDBox";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function PercentualCota() {
  const porcentagemCota = 5; // valor temporário

  return (
    <MDBox mb={1.5}>
      <ComplexStatisticsCard
        color="info"
        icon="weekend"
        title="% DA SUA COTA"
        count={`${porcentagemCota}%`}
        percentage={{
          color: "success",
          amount: "+55%",
          label: "DESDE A ÚLTIMA SEMANA",
        }}
      />
    </MDBox>
  );
}

export default PercentualCota;
