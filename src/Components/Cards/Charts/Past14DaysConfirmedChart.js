import React from "react";
import Chart from "react-apexcharts";

export default function NewConfirmedChart(props) {

    var newConfirmedChart = {
        series: [{
            name: "ผู้ติดเชื้อรายใหม่ : ",
            data: [
              props.past14DaySummary.data.details[13].daily_covid_cases, 
              props.past14DaySummary.data.details[12].daily_covid_cases, 
              props.past14DaySummary.data.details[11].daily_covid_cases, 
              props.past14DaySummary.data.details[10].daily_covid_cases, 
              props.past14DaySummary.data.details[9].daily_covid_cases, 
              props.past14DaySummary.data.details[8].daily_covid_cases, 
              props.past14DaySummary.data.details[7].daily_covid_cases, 
              props.past14DaySummary.data.details[6].daily_covid_cases, 
              props.past14DaySummary.data.details[5].daily_covid_cases, 
              props.past14DaySummary.data.details[4].daily_covid_cases, 
              props.past14DaySummary.data.details[3].daily_covid_cases, 
              props.past14DaySummary.data.details[2].daily_covid_cases, 
              props.past14DaySummary.data.details[1].daily_covid_cases, 
              props.past14DaySummary.data.details[0].daily_covid_cases]
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
            text: 'จำนวนผู้ติดเชื้อรายใหม่ย้อนหลัง 14 วัน',
            align: 'center'
          },
          xaxis: {
            categories: [
              (props.past14DaySummary.data.details[13].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[12].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[11].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[10].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[9].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[8].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[7].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[6].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[5].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[4].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[3].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[2].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[1].updated_date).substr(0, 10).replaceAll(".", "/"), 
              (props.past14DaySummary.data.details[0].updated_date).substr(0, 10).replaceAll(".", "/")
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
                    width="750"
                />
            </div>
        </div>
    )
}