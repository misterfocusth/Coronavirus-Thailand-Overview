import React, { Component } from "react";
import Chart from "react-apexcharts";

export default function Past14DaysSumChart(props) {

    var newConfirmedChart = {
        series: [{
            name: 'เเนวโน้มผู้ติดเชื้อรายใหม่ย้อนหลัง 14 วัน',
            type: 'column',
            data: [props.past14DaySummary.data.details[13].daily_covid_cases, props.past14DaySummary.data.details[12].daily_covid_cases, props.past14DaySummary.data.details[11].daily_covid_cases, props.past14DaySummary.data.details[10].daily_covid_cases, props.past14DaySummary.data.details[9].daily_covid_cases, props.past14DaySummary.data.details[8].daily_covid_cases, props.past14DaySummary.data.details[7].daily_covid_cases, props.past14DaySummary.data.details[6].daily_covid_cases, props.past14DaySummary.data.details[5].daily_covid_cases, props.past14DaySummary.data.details[4].daily_covid_cases, props.past14DaySummary.data.details[3].daily_covid_cases, props.past14DaySummary.data.details[2].daily_covid_cases, props.past14DaySummary.data.details[1].daily_covid_cases, props.past14DaySummary.data.details[0].daily_covid_cases]
          }, {
            name: 'เเนวโน้มผู้เสียชีวิตย้อนหลัง 14 วัน',
            type: 'area',
            data: [props.past14DaySummary.data.details[13].daily_deaths, props.past14DaySummary.data.details[12].daily_deaths, props.past14DaySummary.data.details[11].daily_deaths, props.past14DaySummary.data.details[10].daily_deaths, props.past14DaySummary.data.details[9].daily_deaths, props.past14DaySummary.data.details[8].daily_deaths, props.past14DaySummary.data.details[7].daily_deaths, props.past14DaySummary.data.details[6].daily_deaths, props.past14DaySummary.data.details[5].daily_deaths, props.past14DaySummary.data.details[4].daily_deaths, props.past14DaySummary.data.details[3].daily_deaths, props.past14DaySummary.data.details[2].daily_deaths, props.past14DaySummary.data.details[1].daily_deaths, props.past14DaySummary.data.details[0].daily_deaths]
          }, {
            name: 'เเนวโน้มผู้หายป่วยย้อนหลัง 14 วัน',
            type: 'line',
            data: [props.past14DaySummary.data.details[13].daily_recovered, props.past14DaySummary.data.details[12].daily_recovered, props.past14DaySummary.data.details[11].daily_recovered, props.past14DaySummary.data.details[10].daily_recovered, props.past14DaySummary.data.details[9].daily_recovered, props.past14DaySummary.data.details[8].daily_recovered, props.past14DaySummary.data.details[7].daily_recovered, props.past14DaySummary.data.details[6].daily_recovered, props.past14DaySummary.data.details[5].daily_recovered, props.past14DaySummary.data.details[4].daily_recovered, props.past14DaySummary.data.details[3].daily_recovered, props.past14DaySummary.data.details[2].daily_recovered, props.past14DaySummary.data.details[1].daily_recovered, props.past14DaySummary.data.details[0].daily_recovered]
          }],
        options: {
            chart: {
                height: "500",
                type: "line",
                zoom: {
                    enable: false
                }
            },
            colors: ["#EA5771", "#212121", "#039245"],
            title: {
                text: 'เเนวโน้มผู้ติดเชื้อ ผู้หายป่วย เเละผู้เสียชีวิตย้อนหลัง 14 วัน',
                align: 'center'
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
                    type="line"
                    width="750"
                />
            </div>
        </div>
    )
}