"use client";

import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";
import { getRecentlyPlayed } from "@/stores/getRecentlyPlayed";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const {
    data: topTracksData,
    loading,
    error,
    fetchData,
  } = getRecentlyPlayed();

  useEffect(() => {
    const fetchUserTopTracks = async () => {
      await fetchData();
    };

    fetchUserTopTracks();
  }, [fetchData]);

  if (loading) {
    return <Skeleton className="w-full h-full" />;
  }

  if (error) {
    toast.error(error);
    return null;
  }

  const hourlyListeningTime = topTracksData?.items.reduce(
    (acc: any, track: any) => {
      const playedAt = new Date(track.played_at);
      const hour = playedAt.getHours();
      const durationMinutes = track.track.duration_ms / 60000;

      if (acc[hour]) {
        acc[hour] += durationMinutes;
      } else {
        acc[hour] = durationMinutes;
      }

      return acc;
    },
    {}
  );

  for (let i = 0; i < 24; i++) {
    if (!hourlyListeningTime[i]) {
      hourlyListeningTime[i] = 0;
    }
  }

  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const durations = labels.map((label, index) => hourlyListeningTime[index]);

  const data = {
    labels,
    datasets: [
      {
        label: "Listening Time (minutes)",
        data: durations,
        backgroundColor: "rgba(30, 215, 96, 0.2)",
        borderColor: "#1ED760",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Hourly Listening Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Hours",
        },
      },
      y: {
        title: {
          display: true,
          text: "Duration (minutes)",
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
