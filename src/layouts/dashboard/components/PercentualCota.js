import React, { useEffect, useState } from "react";
import axios from "axios";
import MDBox from "components/MDBox";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function PercentualCota() {
  const [porcentagemCota, setPorcentagemCota] = useState(0);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario && usuario.id) {
      axios
        .get("https://grupo-reune-backend.onrender.com/api/total-cotas-geral")
        .then((resGeral) => {
          const totalGeral = resGeral.data.total || 0;

          axios
            .get(`https://grupo-reune-backend.onrender.com/api/total-cotas/${usuario.id}`)
            .then((resUser) => {
              const totalUsuario = resUser.data.total || 0;
              const porcentagem = totalGeral > 0 ? (totalUsuario / totalGeral) * 100 : 0;
              setPorcentagemCota(porcentagem.toFixed(2));
            })
            .catch((err) => {
              console.error("Erro ao buscar cotas do usuário:", err);
              setPorcentagemCota(0);
            });
        })
        .catch((err) => {
          console.error("Erro ao buscar cotas gerais:", err);
          setPorcentagemCota(0);
        });
    }
  }, []);

  return (
    <MDBox mb={1.5}>
      <ComplexStatisticsCard
        color="info"
        icon="weekend"
        title="% DA SUA COTA"
        count={`${porcentagemCota}%`}
        percentage={{
          color: "success",
          amount: "",
          label: "Com base nas cotas aprovadas no sistema",
        }}
      />
    </MDBox>
  );
}

export default PercentualCota;
