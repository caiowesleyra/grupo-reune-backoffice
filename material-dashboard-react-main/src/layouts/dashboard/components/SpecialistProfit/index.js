// index.js
import React, { useState } from "react";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import SpecialistModal from "./modal";
import lucroEspecialistasHoje from "layouts/dashboard/data/lucroEspecialistas";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function SpecialistProfitCard() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const valorFormatado = `R$ ${lucroEspecialistasHoje.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <>
      <MDBox mb={-1}>
        <ComplexStatisticsCard
          color="success"
          icon="trending_up"
          title="LUCRO DOS ESPECIALISTAS (HOJE)"
          count={valorFormatado}
          percentage={{
            color: "dark",
            amount: "",
            label: "Transparência: lucro real gerado por especialistas no dia",
          }}
        />
        <MDBox mt={1} ml={2}>
          <MDTypography
            variant="caption"
            color="success"
            sx={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={handleOpen}
          >
            ver detalhes
          </MDTypography>
        </MDBox>
      </MDBox>

      <SpecialistModal open={open} onClose={handleClose} total={lucroEspecialistasHoje} />
    </>
  );
}

export default SpecialistProfitCard;
