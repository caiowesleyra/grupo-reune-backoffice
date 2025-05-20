import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import axios from "axios";

function CardTotalCotas() {
  const [totalCotas, setTotalCotas] = useState(0);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuario && usuario.id) {
      axios
        .get(`https://grupo-reune-backend.onrender.com/api/total-cotas/${usuario.id}`)
        .then((res) => {
          setTotalCotas(res.data.total || 0);
        })
        .catch((err) => {
          console.error("Erro ao buscar total de cotas:", err);
        });
    }
  }, []);

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <MDBox>
          <MDTypography variant="h6" fontWeight="medium">
            Total de Cotas
          </MDTypography>
          <MDTypography variant="h4" fontWeight="bold" color="success">
            {totalCotas}
          </MDTypography>
        </MDBox>
        <MDBox color="success" px={2}>
          <Icon fontSize="large">trending_up</Icon>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default CardTotalCotas;
