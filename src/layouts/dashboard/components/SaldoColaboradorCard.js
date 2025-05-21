import React, { useEffect, useState } from "react";
import axios from "axios";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function SaldoColaboradorCard() {
  const [saldo, setSaldo] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");
    if (usuario?.id) {
      axios
        .get(`https://grupo-reune-backend.onrender.com/api/saldo-colaborador/${usuario.id}`)
        .then((res) => {
          setSaldo(res.data.saldo);
        })
        .catch((err) => {
          console.error("Erro ao carregar saldo de colaborador:", err);
          setSaldo(0);
        });
    }
  }, []);

  return (
    <ComplexStatisticsCard
      color="primary"
      icon="leaderboard"
      title="SALDO DE COLABORADOR"
      count={saldo !== null ? `R$ ${saldo.toFixed(2)}` : "Carregando..."}
      percentage={{
        color: "primary",
        amount: "",
        label: "10% sobre contribuições dos indicados hoje",
      }}
    />
  );
}

export default SaldoColaboradorCard;
