// src/layouts/dashboard/components/TargetOfTheDay.js

import React, { useState } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import TargetModal from "./TargetModal";

function TargetOfTheDay() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card>
        <MDBox p={3}>
          <MDTypography variant="h6" gutterBottom>
            CURIOSIDADE
          </MDTypography>
          <MDTypography variant="body2" color="text">
            Você sabia que o Bitcoin voltou para a sua <strong>Alta histórica?</strong> Veja mais
            sobre sua história.
          </MDTypography>
          <MDBox mt={2}>
            <MDButton color="info" onClick={handleOpen}>
              Ver detalhes
            </MDButton>
          </MDBox>
        </MDBox>
      </Card>
      <TargetModal open={open} handleClose={handleClose} />
    </>
  );
}

export default TargetOfTheDay;
