import React from "react";
import Chart from "react-apexcharts";

export default function TotalSumChart(props) {

    var newConfirmedChart = {
        series: [
            {
                name: "ยอดสะสมผู้ติดเชื้อรายใหม่",
                data: [props.past14DaySummary.data.details[13].cumulative_covid_cases63, props.past14DaySummary.data.details[12].cumulative_covid_cases63, props.past14DaySummary.data.details[11].cumulative_covid_cases63, props.past14DaySummary.data.details[10].cumulative_covid_cases63, props.past14DaySummary.data.details[9].cumulative_covid_cases63, props.past14DaySummary.data.details[8].cumulative_covid_cases63, props.past14DaySummary.data.details[7].cumulative_covid_cases63, props.past14DaySummary.data.details[6].cumulative_covid_cases63, props.past14DaySummary.data.details[5].cumulative_covid_cases63, props.past14DaySummary.data.details[4].cumulative_covid_cases63, props.past14DaySummary.data.details[3].cumulative_covid_cases63, props.past14DaySummary.data.details[2].cumulative_covid_cases63, props.past14DaySummary.data.details[1].cumulative_covid_cases63, props.past14DaySummary.data.details[0].cumulative_covid_cases63]
            },
            {
                name: "ยอดสะสมผู้หายป่วยรายใหม่",
                data: [props.past14DaySummary.data.details[13].cumulative_recovered_cases63, props.past14DaySummary.data.details[12].cumulative_recovered_cases63, props.past14DaySummary.data.details[11].cumulative_recovered_cases63, props.past14DaySummary.data.details[10].cumulative_recovered_cases63, props.past14DaySummary.data.details[9].cumulative_recovered_cases63, props.past14DaySummary.data.details[8].cumulative_recovered_cases63, props.past14DaySummary.data.details[7].cumulative_recovered_cases63, props.past14DaySummary.data.details[6].cumulative_recovered_cases63, props.past14DaySummary.data.details[5].cumulative_recovered_cases63, props.past14DaySummary.data.details[4].cumulative_recovered_cases63, props.past14DaySummary.data.details[3].cumulative_recovered_cases63, props.past14DaySummary.data.details[2].cumulative_recovered_cases63, props.past14DaySummary.data.details[1].cumulative_recovered_cases63, props.past14DaySummary.data.details[0].cumulative_recovered_cases63]
            },
            {
                name: "ยอดสะสมผู้ป่วยรักษาตัวในโรงพยาบาล",
                data: [props.past14DaySummary.data.details[13].daily_stay_patient, props.past14DaySummary.data.details[12].daily_stay_patient, props.past14DaySummary.data.details[11].daily_stay_patient, props.past14DaySummary.data.details[10].daily_stay_patient, props.past14DaySummary.data.details[9].daily_stay_patient, props.past14DaySummary.data.details[8].daily_stay_patient, props.past14DaySummary.data.details[7].daily_stay_patient, props.past14DaySummary.data.details[6].daily_stay_patient, props.past14DaySummary.data.details[5].daily_stay_patient, props.past14DaySummary.data.details[4].daily_stay_patient, props.past14DaySummary.data.details[3].daily_stay_patient, props.past14DaySummary.data.details[2].daily_stay_patient, props.past14DaySummary.data.details[1].daily_stay_patient, props.past14DaySummary.data.details[0].daily_stay_patient]
            },
            {
                name: "ยอดสะสมผู้เสียชีวิต",
                data: [props.past14DaySummary.data.details[13].daily_deaths, props.past14DaySummary.data.details[12].daily_deaths, props.past14DaySummary.data.details[11].daily_deaths, props.past14DaySummary.data.details[10].daily_deaths, props.past14DaySummary.data.details[9].daily_deaths, props.past14DaySummary.data.details[8].daily_deaths, props.past14DaySummary.data.details[7].daily_deaths, props.past14DaySummary.data.details[6].daily_deaths, props.past14DaySummary.data.details[5].daily_deaths, props.past14DaySummary.data.details[4].daily_deaths, props.past14DaySummary.data.details[3].daily_deaths, props.past14DaySummary.data.details[2].daily_deaths, props.past14DaySummary.data.details[1].daily_deaths, props.past14DaySummary.data.details[0].daily_deaths]
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
            colors: ["#EA5771", "#039245", "#fbc02d", "#212121"],
            title: {
                text: 'ยอดสะสมผู้ติดเชื้อ ผู้ป่วยในโรงพยาบาล ผู้หายป่วย เเละผู้เสียชีวิต',
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
                    height="400"
                />
            </div>
        </div>
    )
}