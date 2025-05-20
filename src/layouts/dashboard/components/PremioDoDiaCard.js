import React, { useEffect, useState } from "react";
import axios from "axios";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function PremioDoDiaCard() {
  const [premio, setPremio] = useState(null);

  useEffect(() => {
    const fetchPremio = async () => {
      try {
        const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
        const id_usuario = usuario.id;

        if (!id_usuario) {
          console.warn("ID do usuário não encontrado no localStorage.");
          return;
        }

        // Buscar valor total do prêmio (os 40% do lucro)
        const premioRes = await axios.get("https://grupo-reune-backend.onrender.com/api/premio-do-dia");
        const valorPremio = Number(premioRes.data.valor_total);

        // Buscar total de cotas aprovadas no sistema
        const totalCotasRes = await axios.get("https://grupo-reune-backend.onrender.com/api/total-cotas-geral");
        const totalCotasSistema = Number(totalCotasRes.data.total);

        // Buscar total de cotas aprovadas do usuário
        const minhasCotasRes = await axios.get(`https://grupo-reune-backend.onrender.com/api/total-cotas/${id_usuario}`);
        const minhasCotas = Number(minhasCotasRes.data.total);

        if (valorPremio && totalCotasSistema && minhasCotas) {
          const percentual = minhasCotas / totalCotasSistema;
          const premioFinal = valorPremio * percentual;
          setPremio(premioFinal.toFixed(2));
        } else {
          console.warn("Dados insuficientes para calcular o prêmio.");
          setPremio("0.00");
        }
      } catch (error) {
        console.error("Erro ao buscar prêmio do dia:", error);
        setPremio("0.00");
      }
    };

    fetchPremio();
  }, []);

  return (
    <ComplexStatisticsCard
      color="success"
      icon="store"
      title="PRÊMIO DO DIA"
      count={premio !== null ? `R$ ${premio}` : "Carregando..."}
      percentage={{
        color: "success",
        amount: "",
        label: "Com base nos 40% do lucro diário",
      }}
    />
  );
}

export default PremioDoDiaCard;
