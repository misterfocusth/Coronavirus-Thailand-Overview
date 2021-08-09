import React from "react";
import Chart from "react-apexcharts";

export default function Past14DaysVaccineChart(props) {

    var newConfirmedChart = {
        series: [
            {
                name: "ยอดฉีดวัคซีนเข็มที่ 1 ย้อนหลัง 14 วัน",
                data: [props.past14DaySummary.data.details[13].daily_vaccine1, props.past14DaySummary.data.details[12].daily_vaccine1, props.past14DaySummary.data.details[11].daily_vaccine1, props.past14DaySummary.data.details[10].daily_vaccine1, props.past14DaySummary.data.details[9].daily_vaccine1, props.past14DaySummary.data.details[8].daily_vaccine1, props.past14DaySummary.data.details[7].daily_vaccine1, props.past14DaySummary.data.details[6].daily_vaccine1, props.past14DaySummary.data.details[5].daily_vaccine1, props.past14DaySummary.data.details[4].daily_vaccine1, props.past14DaySummary.data.details[3].daily_vaccine1, props.past14DaySummary.data.details[2].daily_vaccine1, props.past14DaySummary.data.details[1].daily_vaccine1, props.past14DaySummary.data.details[0].daily_vaccine1]
            },
            {
                name: "ยอดฉีดวัคซีนเข็มที่ 2 ย้อนหลัง 14 วัน",
                data: [props.past14DaySummary.data.details[13].daily_vaccine2, props.past14DaySummary.data.details[12].daily_vaccine2, props.past14DaySummary.data.details[11].daily_vaccine2, props.past14DaySummary.data.details[10].daily_vaccine2, props.past14DaySummary.data.details[9].daily_vaccine2, props.past14DaySummary.data.details[8].daily_vaccine2, props.past14DaySummary.data.details[7].daily_vaccine2, props.past14DaySummary.data.details[6].daily_vaccine2, props.past14DaySummary.data.details[5].daily_vaccine2, props.past14DaySummary.data.details[4].daily_vaccine2, props.past14DaySummary.data.details[3].daily_vaccine2, props.past14DaySummary.data.details[2].daily_vaccine2, props.past14DaySummary.data.details[1].daily_vaccine2, props.past14DaySummary.data.details[0].daily_vaccine2]
            }
        ],
        options: {
            chart: {
                height: "500",
                type: "bar",
                zoom: {
                    enable: false
                }
            },
            // colors: ["#EA5771", "#039245"],
            title: {
                text: 'เเนวโน้มการฉีดวันซีนเข็มที่ 1 เเละเข็มที่ 2 ย้อนหลัง 14 วัน',
                align: 'center'
            },
            dataLabels: {
                enabled: false
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
                    type="bar"
                    width="750"
                />
            </div>
        </div>
    )
}