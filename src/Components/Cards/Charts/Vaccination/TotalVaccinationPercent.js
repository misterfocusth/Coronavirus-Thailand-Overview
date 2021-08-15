import React from "react";
import Chart from "react-apexcharts";

export default function TotalVaccinationPercent() {

    var optionsProgress2 = {
        chart: {
          height: 70,
          type: "bar",
          stacked: true,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "20%",
            colors: {
              backgroundBarColors: ["#40475D"]
            }
          }
        },
        colors: ["#17ead9"],
        stroke: {
          width: 0
        },
        series: [
          {
            name: "Process 2",
            data: [80]
          }
        ],
        title: {
          floating: true,
          offsetX: -10,
          offsetY: 5,
          text: "Process 2"
        },
        subtitle: {
          floating: true,
          align: "right",
          offsetY: 0,
          text: "80%",
          style: {
            fontSize: "20px"
          }
        },
        tooltip: {
          enabled: false
        },
        xaxis: {
          categories: ["Process 2"]
        },
        yaxis: {
          max: 100
        },
        fill: {
          type: "gradient",
          gradient: {
            inverseColors: false,
            gradientToColors: ["#6078ea"]
          }
        }
      };

    return (
        <div>
            <div>
                <div>
                    <div id="progress1"></div>
                </div>
                <div>
                    <div id="progress2"></div>
                </div>
                <div>
                    <div id="progress3"></div>
                </div>
            </div>
        </div>
    )
}