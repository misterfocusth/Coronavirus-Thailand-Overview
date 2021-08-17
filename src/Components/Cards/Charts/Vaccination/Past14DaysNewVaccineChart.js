import React from "react";
import Chart from "react-apexcharts";

export default function Past14DaysNewVaccineChart(props) {

    var newConfirmedChart = {
        series: [{
            name: "จำนวนผู้ได้รับวัคซีน",
            data: [
                props.nationalVaccineData[props.nationalVaccineData.length - 14].daily_vaccinations,
                props.nationalVaccineData[props.nationalVaccineData.length - 13].daily_vaccinations,
                props.nationalVaccineData[props.nationalVaccineData.length - 12].daily_vaccinations, 
                props.nationalVaccineData[props.nationalVaccineData.length - 11].daily_vaccinations,
                props.nationalVaccineData[props.nationalVaccineData.length - 10].daily_vaccinations, 
                props.nationalVaccineData[props.nationalVaccineData.length - 9].daily_vaccinations, 
                props.nationalVaccineData[props.nationalVaccineData.length - 8].daily_vaccinations, 
                props.nationalVaccineData[props.nationalVaccineData.length - 7].daily_vaccinations,
                props.nationalVaccineData[props.nationalVaccineData.length - 6].daily_vaccinations, 
                props.nationalVaccineData[props.nationalVaccineData.length - 5].daily_vaccinations, 
                props.nationalVaccineData[props.nationalVaccineData.length - 4].daily_vaccinations, 
                props.nationalVaccineData[props.nationalVaccineData.length - 3].daily_vaccinations, 
                props.nationalVaccineData[props.nationalVaccineData.length - 2].daily_vaccinations, 
                props.nationalVaccineData[props.nationalVaccineData.length - 1].daily_vaccinations 
            ]
          }],
        options: {
          chart: {
            height: "500",
            type: "line",
            zoom: {
              enable: false
            }
          },
          title: {
            text: 'จำนวนผู้ได้รับวัคซีนรายใหม่ทั่วประเทศไทย',
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