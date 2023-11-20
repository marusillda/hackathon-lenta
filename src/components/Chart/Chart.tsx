import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const getChartOptions = (
  title: string,
  forecastQuality: number[]
): any => ({
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    tooltip: {
      displayColors: true,
      boxWidth: 8,
      boxHeight: 8,
      boxPadding: 6,
      backgroundColor: "rgba(255, 255, 255, 1)",
      titleColor: "#2C2A29",
      bodyColor: "#2C2A29",
      cornerRadius: 0,
      callbacks: {
        title: (context: any) =>
          `Кач-во прогноза ${forecastQuality[context[0].dataIndex]}`,
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: true,
      align: "start",
      text: title,
      fullSize: false,
    },
  },
});

export const getChartData = ({
  salesData,
  forecastData,
  labels,
}: IChartData) => ({
  labels,
  datasets: [
    {
      label: "Продажи",
      data: salesData,
      backgroundColor: "rgba(255, 185, 0, 1)",
    },
    {
      label: "Прогноз",
      data: forecastData,
      backgroundColor: "rgba(0, 60, 150, 1)",
    },
  ],
});

interface IChartData {
  forecastData: number[];
  salesData: number[];
  labels: string[];
}

interface IChartProps extends IChartData {
  title: string;
  forecastQuality: number[];
}

const Chart = ({
  title,
  salesData,
  forecastData,
  forecastQuality,
  labels,
}: IChartProps) => {
  return (
    <Box
      width={764}
      height={308}
      borderRadius={4}
      px={7}
      py={5}
      sx={{
        boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.08);",
      }}
    >
      <Bar
        options={getChartOptions(title, forecastQuality)}
        data={getChartData({ salesData, forecastData, labels })}
      />
    </Box>
  );
};

export default Chart;
