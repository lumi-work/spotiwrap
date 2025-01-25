"use client";

import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { getUserTopArtists } from "@/stores/getUserTopArtists";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";

interface Artist {
  genres: string[];
}

interface SpotifyData {
  items: Artist[];
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function RadarChart() {
  const { data, loading, error, fetchData } = getUserTopArtists();
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchDataAndProcess = async () => {
      await fetchData();
    };

    fetchDataAndProcess();
  }, [fetchData]);

  useEffect(() => {
    if (data?.items) {
      const spotifyData: SpotifyData = data;

      const genreCount: Record<string, number> = spotifyData.items.reduce(
        (acc: Record<string, number>, artist: Artist) => {
          artist.genres.forEach((genre) => {
            acc[genre] = (acc[genre] || 0) + 1;
          });
          return acc;
        },
        {}
      );

      const labels = Object.keys(genreCount);
      const datasetData = Object.values(genreCount);

      setChartData({
        labels,
        datasets: [
          {
            label: "Top Genres",
            data: datasetData,
            backgroundColor: "rgba(30, 215, 96, 0.2)",
            borderColor: "#1ED760",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

  if (loading) {
    return <Skeleton className="w-full h-full" />;
  }

  if (error) {
    toast.error(error);
    return null;
  }

  return (
    <div>
      {chartData ? (
        <Radar
          data={chartData}
          options={{
            plugins: {
              legend: {
                position: "top" as const,
              },
              title: {
                display: true,
                text: "Your Top Genres",
              },
            },
            responsive: true,
            scales: {
              r: {
                ticks: {
                  display: false,
                },
                angleLines: { display: false },
                suggestedMin: -3,
                suggestedMax: Math.max(...chartData.datasets[0].data) + 1,
              },
            },
          }}
        />
      ) : null}
    </div>
  );
}

export default RadarChart;
