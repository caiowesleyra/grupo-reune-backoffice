// modal.js
/* eslint-disable react/prop-types */
import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { Dialog, DialogContent, DialogActions } from "@mui/material";

function SpecialistModal({ open, onClose, total }) {
  // Conversão segura do valor total para número
  const totalNumber =
    typeof total === "number"
      ? total
      : Number(
          String(total)
            .replace(/[^\d,-]+/g, "")
            .replace(",", ".")
        );

  const reunerPercent = 0.6;
  const partnersPercent = 0.4;

  const valorReune = totalNumber * reunerPercent;
  const valorPartners = totalNumber * partnersPercent;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <MDBox>
          <MDTypography variant="h5" fontWeight="bold" gutterBottom>
            Detalhamento do Lucro de Hoje
          </MDTypography>
          <MDTypography variant="body1" gutterBottom>
            O valor total de lucro gerado hoje pelos especialistas foi de{" "}
            <strong>R$ {totalNumber.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</strong>.
          </MDTypography>
          <MDTypography variant="body1" gutterBottom>
            O <strong>GRUPO REUNE</strong> ficará com <strong>60%</strong> , totalizando:{" "}
            <strong>R$ {valorReune.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</strong>.
          </MDTypography>
          <MDTypography variant="body1">
            Os <strong>PARTNERS</strong> dividirão <strong>40%</strong> restantes:{" "}
            <strong>
              R$ {valorPartners.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </strong>
          </MDTypography>
        </MDBox>
      </DialogContent>
      <DialogActions>
        <MDButton onClick={onClose} variant="gradient" color="dark">
          Fechar
        </MDButton>
      </DialogActions>
    </Dialog>
  );
}

export default SpecialistModal;
