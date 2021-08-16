import React from "react";
import Chart from "react-apexcharts";

export default function Past14DaysInHospital(props) {

    var newConfirmedChart = {
        series: [{
            name: "ผู้ป่วยรักษาตัวในโรงพยาบาล : ",
            data: [props.past14DaySummary.data.details[13].daily_stay_patient, props.past14DaySummary.data.details[12].daily_stay_patient, props.past14DaySummary.data.details[11].daily_stay_patient, props.past14DaySummary.data.details[10].daily_stay_patient, props.past14DaySummary.data.details[9].daily_stay_patient, props.past14DaySummary.data.details[8].daily_stay_patient, props.past14DaySummary.data.details[7].daily_stay_patient, props.past14DaySummary.data.details[6].daily_stay_patient, props.past14DaySummary.data.details[5].daily_stay_patient, props.past14DaySummary.data.details[4].daily_stay_patient, props.past14DaySummary.data.details[3].daily_stay_patient, props.past14DaySummary.data.details[2].daily_stay_patient, props.past14DaySummary.data.details[1].daily_stay_patient, props.past14DaySummary.data.details[0].daily_stay_patient]
          }],
        options: {
          chart: {
            height: "500",
            type: "line",
            zoom: {
              enable: false
            }
          },
            colors: ["#F1C40F"],
          title: {
            text: 'จำนวนผู้ป่วยรักษาตัวในโรงพยาบาลย้อนหลัง 14 วัน',
            align: 'left',
            offsetX: 10
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
                    width="525"
                    height="400"
                />
            </div>
        </div>
    )
}