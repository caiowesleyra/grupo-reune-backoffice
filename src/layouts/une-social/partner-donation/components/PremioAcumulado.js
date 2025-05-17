import React from "react";
import MDBox from "components/MDBox";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function PremioAcumulado() {
  const premioAcumulado = 320.0; // valor fixo por enquanto

  return (
    <MDBox mb={1.5}>
      <ComplexStatisticsCard
        color="success"
        icon="emoji_events"
        title="PRÊMIO ACUMULADO TOTAL"
        count={`R$ ${premioAcumulado.toFixed(2)}`}
        percentage={{
          color: "success",
          amount: "",
          label: "Total recebido até hoje",
        }}
      />
    </MDBox>
  );
}

export default PremioAcumulado;
