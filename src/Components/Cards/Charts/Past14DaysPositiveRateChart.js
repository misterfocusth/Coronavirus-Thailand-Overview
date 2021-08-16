import React from "react";
import Chart from "react-apexcharts";

export default function Past14DaysPositiveRateChart(props) {

    var newConfirmedChart = {
        series: [{
            name: "อัตราการตรวจพบเชื้อต่อจำนวนการตรวจ Positive Rate (%)",
            data: [
                (props.testingData[props.testingData.length - 13].positive / props.testingData[props.testingData.length - 13].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 12].positive / props.testingData[props.testingData.length - 12].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 11].positive / props.testingData[props.testingData.length - 11].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 10].positive / props.testingData[props.testingData.length - 10].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 9].positive / props.testingData[props.testingData.length - 9].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 8].positive / props.testingData[props.testingData.length - 8].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 7].positive / props.testingData[props.testingData.length - 7].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 6].positive / props.testingData[props.testingData.length - 6].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 5].positive / props.testingData[props.testingData.length - 5].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 4].positive / props.testingData[props.testingData.length - 4].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 3].positive / props.testingData[props.testingData.length - 3].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 2].positive / props.testingData[props.testingData.length - 2].tests * 100).toFixed(2),
                (props.testingData[props.testingData.length - 1].positive / props.testingData[props.testingData.length - 1].tests * 100).toFixed(2)],
          }],
        options: {
          chart: {
            height: "500",
            type: "line",
            zoom: {
              enable: false
            }
          },
          colors: ["#EA5771"],
          title: {
            text: 'อัตราการตรวจพบเชื้อ (Positive Rate)',
            align: 'left',
            offsetX: 50
          },
          xaxis: {
            categories: [props.testingData[props.testingData.length-13].date, props.testingData[props.testingData.length-12].date, props.testingData[props.testingData.length-11].date, props.testingData[props.testingData.length-10].date, props.testingData[props.testingData.length-9].date, props.testingData[props.testingData.length-8].date, props.testingData[props.testingData.length-7].date, props.testingData[props.testingData.length-6].date, props.testingData[props.testingData.length-5].date, props.testingData[props.testingData.length-4].date, props.testingData[props.testingData.length-3].date, props.testingData[props.testingData.length-2].date, props.testingData[props.testingData.length-1].date],
          }
        },
      }

    return (
        <div className="row">
            <div className="mixed-chart">
                <Chart
                    options={newConfirmedChart.options}
                    series={newConfirmedChart.series}
                    type="area"
                    width="500"
                    height="500"
                />
            </div>
        </div>
    )
}