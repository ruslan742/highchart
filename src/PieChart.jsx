import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import w from "./visiologyBrowsers";

export default function PieChart() {
  let options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Распределение рынка браузеров, 2021",
      align: "center",
    },
    tooltip: {
      pointFormat: "<b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
        showInLegend: true,
      },
    },
    series: w.series,
    legend: w.legend,
  };
  
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} allowChartUpdate={true} options={options} />
    </div>
  );
}
