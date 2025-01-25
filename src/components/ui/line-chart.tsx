"use client";

import { getUserTopTracks } from "@/stores/getUserTopTracks";
import React, { useEffect, useState } from "react";
import Skeleton from "@/components/dashboard/skeleton";
import toast from "react-hot-toast";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const { data, loading, error, fetchData } = getUserTopTracks();
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchUserTopTracks = async () => {
      await fetchData();
    };

    fetchUserTopTracks();
  }, [fetchData]);

  useEffect(() => {
    if (data?.items) {
      const labels = data.items.slice(0, 15).map((item: any) => item.name);
      const popularityData = data.items
        .slice(0, 15)
        .map((item: any) => item.popularity);

      setChartData({
        labels,
        datasets: [
          {
            label: "Top Tracks Popularity",
            data: popularityData,
            borderColor: "#1ED760",
            backgroundColor: "rgba(30, 215, 96, 0.2)",
            borderWidth: 2,
            pointRadius: 4,
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

  if (!chartData) {
    return <Skeleton className="w-full h-full" />;
  }

  return (
    <div className="w-full max-w-[2500px] h-full max-h-[1200px] mx-auto">
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Top 15 Populerity",
            },
            legend: {
              display: true,
              position: "top",
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Track Names",
              },
            },
            y: {
              title: {
                display: true,
                text: "Popularity",
              },
              min: 0,
              max: 100,
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
