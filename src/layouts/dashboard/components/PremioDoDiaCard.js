// ✅ PASSO 1: Corrigir o nome da chave no PremioDoDiaCard.js
// Está buscando de 'usuarioLogado', mas o login salva como 'usuario'

import React, { useEffect, useState } from "react";
import axios from "axios";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function PremioDoDiaCard() {
  const [premio, setPremio] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");
    const id_usuario = usuario?.id;

    if (!id_usuario) {
      console.warn("ID do usuário não encontrado.");
      return;
    }

    const fetchPremio = async () => {
      try {
        const premioRes = await axios.get(
          "https://grupo-reune-backend.onrender.com/api/premio-do-dia"
        );
        const valorPremio = Number(premioRes.data.valor_total);

        const totalCotasRes = await axios.get(
          "https://grupo-reune-backend.onrender.com/api/total-cotas-geral"
        );
        const totalCotasSistema = Number(totalCotasRes.data.total) || 1;

        const minhasCotasRes = await axios.get(
          `https://grupo-reune-backend.onrender.com/api/total-cotas/${id_usuario}`
        );
        const minhasCotas = Number(minhasCotasRes.data.total) || 0;

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
