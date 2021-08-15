import React from "react";
import Chart from "react-apexcharts";

export default function TodayMostCasesProvincesChart(props) {

    var newConfirmedChart = {
        series: [{
            name: "จำนวนผู้ติดเชื้อรายใหม่วันนี้ : ",
            data: [props.dailyProvincesSummary.data.provinces[13].count, props.dailyProvincesSummary.data.provinces[12].count, props.dailyProvincesSummary.data.provinces[11].count, props.dailyProvincesSummary.data.provinces[10].count, props.dailyProvincesSummary.data.provinces[9].count, props.dailyProvincesSummary.data.provinces[8].count, props.dailyProvincesSummary.data.provinces[7].count, props.dailyProvincesSummary.data.provinces[6].count, props.dailyProvincesSummary.data.provinces[5].count, props.dailyProvincesSummary.data.provinces[4].count, props.dailyProvincesSummary.data.provinces[3].count, props.dailyProvincesSummary.data.provinces[2].count, props.dailyProvincesSummary.data.provinces[1].count, props.dailyProvincesSummary.data.provinces[0].count]
          }],
        options: {
          chart: {
            height: "500",
            type: "bar",
            zoom: {
              enable: false
            }
          },
          colors: ["#EA5771"],
          plotOptions: {
            bar: {
                borderRadius: 5,
              horizontal: true,
            }
          },
          title: {
            text: 'จังหวัดที่มียอดผู้ติดเชื้อสูงสุด 14 จังหวัด (วันนี้)',
            align: 'center',
          },
          xaxis: {
            categories: [props.dailyProvincesSummary.data.provinces[13].name_th, props.dailyProvincesSummary.data.provinces[12].name_th, props.dailyProvincesSummary.data.provinces[11].name_th, props.dailyProvincesSummary.data.provinces[10].name_th, props.dailyProvincesSummary.data.provinces[9].name_th, props.dailyProvincesSummary.data.provinces[8].name_th, props.dailyProvincesSummary.data.provinces[7].name_th, props.dailyProvincesSummary.data.provinces[6].name_th, props.dailyProvincesSummary.data.provinces[5].name_th, props.dailyProvincesSummary.data.provinces[4].name_th, props.dailyProvincesSummary.data.provinces[3].name_th, props.dailyProvincesSummary.data.provinces[2].name_th, props.dailyProvincesSummary.data.provinces[1].name_th, props.dailyProvincesSummary.data.provinces[0].name_th]
          }
        },
      }

    return (
        <div className="row">
            <div className="mixed-chart">
                <Chart
                    options={newConfirmedChart.options}
                    series={newConfirmedChart.series}
                    type="bar"
                    width="750"
                />
            </div>
        </div>
    )
}