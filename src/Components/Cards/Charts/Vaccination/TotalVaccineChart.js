import React from "react";
import Chart from "react-apexcharts";

export default function TotalVaccineChart(props) {

    var newConfirmedChart = {
        series: [
            {
                name: "ยอดฉีดวัคซีนสะสมเข็มที่ 1",
                data: [
                    props.nationalVaccineData[props.nationalVaccineData.length - 14].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 13].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 12].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 11].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 10].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 9].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 8].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 7].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 6].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 5].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 4].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 3].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 2].first_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 1].first_dose,
                ]
            },
            {
                name: "ยอดฉีดวัคซีนสะสมเข็มที่ 2",
                data: [
                    props.nationalVaccineData[props.nationalVaccineData.length - 14].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 13].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 12].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 11].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 10].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 9].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 8].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 7].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 6].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 5].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 4].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 3].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 2].second_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 1].second_dose,
                ]
            },
            {
                name: "ยอดฉีดวัคซีนสะสมเข็มที่ 3",
                data: [
                    props.nationalVaccineData[props.nationalVaccineData.length - 14].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 13].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 12].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 11].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 10].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 9].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 8].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 7].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 6].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 5].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 4].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 3].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 2].third_dose,
                    props.nationalVaccineData[props.nationalVaccineData.length - 1].third_dose,
                ]
            }
        ],
        options: {
            chart: {
                height: "500",
                type: "area",
                zoom: {
                    enable: false
                }
            },
            dataLabels: {
                enabled: false
            },
            title: {
                text: 'ยอดสะสมฉีดวัคซีนสะสมเข็มที่ 1 เข็มที่ 2 เเละเข็มที่ 3',
                align: 'left',
                offsetX: 10
            },
            xaxis: {
                categories: [
                    props.nationalVaccineData[props.nationalVaccineData.length - 14].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 13].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 12].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 11].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 10].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 9].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 8].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 7].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 6].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 5].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 4].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 3].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 2].date.replaceAll("-", "/"),
                    props.nationalVaccineData[props.nationalVaccineData.length - 1].date.replaceAll("-", "/"),
                ]
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
                    width="525"
                    height="400"
                />
            </div>
        </div>
    )
}