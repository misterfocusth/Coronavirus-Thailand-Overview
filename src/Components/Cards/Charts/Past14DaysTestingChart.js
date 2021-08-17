import React from "react";
import Chart from "react-apexcharts";

export default function Past14DaysTestingChart(props) {

    var newConfirmedChart = {

        series: [{
            name: 'จำนวนการตรวจเชื้อ',
            type: 'column',
            data: [
                props.testingData[props.testingData.length - 14].tests,
                props.testingData[props.testingData.length - 13].tests,
                props.testingData[props.testingData.length - 12].tests,
                props.testingData[props.testingData.length - 11].tests,
                props.testingData[props.testingData.length - 10].tests,
                props.testingData[props.testingData.length - 9].tests,
                props.testingData[props.testingData.length - 8].tests,
                props.testingData[props.testingData.length - 7].tests,
                props.testingData[props.testingData.length - 6].tests,
                props.testingData[props.testingData.length - 5].tests,
                props.testingData[props.testingData.length - 4].tests,
                props.testingData[props.testingData.length - 3].tests,
                props.testingData[props.testingData.length - 2].tests,
                props.testingData[props.testingData.length - 1].tests
            ],
        },
        {
            name: 'ผลการตรวจเป็นบวก Positive (พบเชื้อโควิด-19)',
            type: 'column',
            data: [
                props.testingData[props.testingData.length - 14].positive,
                props.testingData[props.testingData.length - 13].positive,
                props.testingData[props.testingData.length - 12].positive,
                props.testingData[props.testingData.length - 11].positive,
                props.testingData[props.testingData.length - 10].positive,
                props.testingData[props.testingData.length - 9].positive,
                props.testingData[props.testingData.length - 8].positive,
                props.testingData[props.testingData.length - 7].positive,
                props.testingData[props.testingData.length - 6].positive,
                props.testingData[props.testingData.length - 5].positive,
                props.testingData[props.testingData.length - 4].positive,
                props.testingData[props.testingData.length - 3].positive,
                props.testingData[props.testingData.length - 2].positive,
                props.testingData[props.testingData.length - 1].positive
            ],
        },
        ],
        options: {
            chart: {
                height: 500,
                type: 'line',
                stacked: false
            },
            dataLabels: {
                enabled: false
            },

            title: {
                text: 'จำนวนการตรวจเชื้อ จำนวนการตรวจพบเชื้อ เเละ ค่าเฉลี่ยการตรวจพบเชื้อ (Positive Rate)',
                align: 'left',
                offsetX: 10
            },
            xaxis: {
                categories: [props.testingData[props.testingData.length - 14].date, props.testingData[props.testingData.length - 13].date, props.testingData[props.testingData.length - 12].date, props.testingData[props.testingData.length - 11].date, props.testingData[props.testingData.length - 10].date, props.testingData[props.testingData.length - 9].date, props.testingData[props.testingData.length - 8].date, props.testingData[props.testingData.length - 7].date, props.testingData[props.testingData.length - 6].date, props.testingData[props.testingData.length - 5].date, props.testingData[props.testingData.length - 4].date, props.testingData[props.testingData.length - 3].date, props.testingData[props.testingData.length - 2].date, props.testingData[props.testingData.length - 1].date],
            },
            colors: ["#3498DB", "#E74C3C", "#E74C3C"],
            tooltip: {
                fixed: {
                    enabled: true,
                    position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                    offsetY: 30,
                    offsetX: 60
                },
            },
            legend: {
                horizontalAlign: 'center',
                offsetX: 40
            }
        },
    };

    return (
        <div className="row">
            <div className="mixed-chart">
                <Chart
                    options={newConfirmedChart.options}
                    series={newConfirmedChart.series}
                    type="area"
                    width="750"
                    height="400"
                />
            </div>
        </div>
    )
}