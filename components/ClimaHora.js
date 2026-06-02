"use client";

import { useEffect, useState } from "react";

export default function ClimaHora() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-8.05&longitude=-34.88&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
        );

        const data = await response.json();

        setDados(data.current);
      } catch (error) {
        console.error("Erro ao carregar clima:", error);
      }
    }

    carregarDados();
  }, []);

  return (
    <div style={{ maxWidth: "350px" }}>
      <div className="skill-card">
        <div className="skill-card-index">API</div>

        <div className="skill-card-title">
          Recife - PE
        </div>

        <div className="skill-card-desc">
          🌡️ Temperatura:
          <strong> {dados?.temperature_2m ?? "--"}°C</strong>

          <br /><br />

          💧 Umidade:
          <strong> {dados?.relative_humidity_2m ?? "--"}%</strong>

          <br /><br />

          🌬️ Vento:
          <strong> {dados?.wind_speed_10m ?? "--"} km/h</strong>
        </div>
      </div>
    </div>
  );
}