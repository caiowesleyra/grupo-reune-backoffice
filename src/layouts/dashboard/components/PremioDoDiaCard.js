import React, { useEffect, useState } from "react";
import axios from "axios";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function PremioDoDiaCard() {
  const [premio, setPremio] = useState(null);

  useEffect(() => {
    const fetchPremio = async () => {
      try {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        const id_usuario = usuario?.id;
        if (!id_usuario) return;

        // 1. Buscar valor total do prêmio do dia (os 40% do lucro)
        const premioRes = await axios.get(
          "https://grupo-reune-backend.onrender.com/api/premio-do-dia"
        );
        const valorPremio = premioRes.data.valor_total || 0;

        // 2. Buscar total de cotas aprovadas no sistema
        const totalCotasRes = await axios.get(
          "https://grupo-reune-backend.onrender.com/api/total-cotas-geral"
        );
        const totalCotasSistema = totalCotasRes.data.total || 1;

        // 3. Buscar cotas do usuário
        const minhasCotasRes = await axios.get(
          `https://grupo-reune-backend.onrender.com/api/total-cotas/${id_usuario}`
        );
        const minhasCotas = minhasCotasRes.data.total || 0;

        // 4. Calcular percentual e valor final do prêmio
        const percentual = minhasCotas / totalCotasSistema;
        const premioFinal = valorPremio * percentual;

        setPremio(premioFinal.toFixed(2));
      } catch (error) {
        console.error("Erro ao buscar prêmio do dia:", error);
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
