import React from "react";
import Chart from "react-apexcharts";

export default function TotalVaccineChart(props) {

    var newConfirmedChart = {
        series: [
            {
                name: "ยอดฉีดวัคซีนสะสมเข็มที่ 1",
                data: [props.past14DaySummary.data.details[13].cumulative_vaccine1, props.past14DaySummary.data.details[12].cumulative_vaccine1, props.past14DaySummary.data.details[11].cumulative_vaccine1, props.past14DaySummary.data.details[10].cumulative_vaccine1, props.past14DaySummary.data.details[9].cumulative_vaccine1, props.past14DaySummary.data.details[8].cumulative_vaccine1, props.past14DaySummary.data.details[7].cumulative_vaccine1, props.past14DaySummary.data.details[6].cumulative_vaccine1, props.past14DaySummary.data.details[5].cumulative_vaccine1, props.past14DaySummary.data.details[4].cumulative_vaccine1, props.past14DaySummary.data.details[3].cumulative_vaccine1, props.past14DaySummary.data.details[2].cumulative_vaccine1, props.past14DaySummary.data.details[1].cumulative_vaccine1, props.past14DaySummary.data.details[0].cumulative_vaccine1]
            },
            {
                name: "ยอดฉีดวัคซีนสะสมเข็มที่ 2",
                data: [props.past14DaySummary.data.details[13].cumulative_vaccine2, props.past14DaySummary.data.details[12].cumulative_vaccine2, props.past14DaySummary.data.details[11].cumulative_vaccine2, props.past14DaySummary.data.details[10].cumulative_vaccine2, props.past14DaySummary.data.details[9].cumulative_vaccine2, props.past14DaySummary.data.details[8].cumulative_vaccine2, props.past14DaySummary.data.details[7].cumulative_vaccine2, props.past14DaySummary.data.details[6].cumulative_vaccine2, props.past14DaySummary.data.details[5].cumulative_vaccine2, props.past14DaySummary.data.details[4].cumulative_vaccine2, props.past14DaySummary.data.details[3].cumulative_vaccine2, props.past14DaySummary.data.details[2].cumulative_vaccine2, props.past14DaySummary.data.details[1].cumulative_vaccine2, props.past14DaySummary.data.details[0].cumulative_vaccine2]
            },
            {
                name: "ยอดฉีดวัคซีนสะสมเข็มที่ 3",
                data: [props.past14DaySummary.data.details[13].cumulative_vaccine3, props.past14DaySummary.data.details[12].cumulative_vaccine3, props.past14DaySummary.data.details[11].cumulative_vaccine3, props.past14DaySummary.data.details[10].cumulative_vaccine3, props.past14DaySummary.data.details[9].cumulative_vaccine3, props.past14DaySummary.data.details[8].cumulative_vaccine3, props.past14DaySummary.data.details[7].cumulative_vaccine3, props.past14DaySummary.data.details[6].cumulative_vaccine3, props.past14DaySummary.data.details[5].cumulative_vaccine3, props.past14DaySummary.data.details[4].cumulative_vaccine3, props.past14DaySummary.data.details[3].cumulative_vaccine3, props.past14DaySummary.data.details[2].cumulative_vaccine3, props.past14DaySummary.data.details[1].cumulative_vaccine3, props.past14DaySummary.data.details[0].cumulative_vaccine3]
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
                offsetX: 50
            },
            xaxis: {
                categories: [props.past14DaySummary.data.details[13].updated_date, props.past14DaySummary.data.details[12].updated_date, props.past14DaySummary.data.details[11].updated_date, props.past14DaySummary.data.details[10].updated_date, props.past14DaySummary.data.details[9].updated_date, props.past14DaySummary.data.details[8].updated_date, props.past14DaySummary.data.details[7].updated_date, props.past14DaySummary.data.details[6].updated_date, props.past14DaySummary.data.details[5].updated_date, props.past14DaySummary.data.details[4].updated_date, props.past14DaySummary.data.details[3].updated_date, props.past14DaySummary.data.details[2].updated_date, props.past14DaySummary.data.details[1].updated_date, props.past14DaySummary.data.details[0].updated_date]
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
                    width="750"
                />
            </div>
        </div>
    )
}