import React, { useEffect } from "react";
import Chart from "react-apexcharts";

export default function TotalVaccineBar(props) {

    const total_th_population = 70000000;

    const [percent, setPercent] = React.useState({
        vaccine_1_percent: 0,
        vaccine_2_percent: 0,
    });

    useEffect(() => {
        setPercent({
            vaccine_1_percent: ((props.dailySummary.data.cumulative_vaccine1 / total_th_population) * 100).toFixed(2),
            vaccine_2_percent: ((props.dailySummary.data.cumulative_vaccine2 / total_th_population) * 100).toFixed(2),
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    var newConfirmedChart = {
        series: [
            {
                name: "ยอดฉีดวัคซีนสะสมเข็มที่ 1",
                data: [percent.vaccine_1_percent]
            },
            {
                name: "ยอดฉีดวัคซีนสะสมเข็มที่ 2",
                data: [percent.vaccine_2_percent]
            }
        ],
        options: {
            chart: {
                height: "300",
                type: "bar",
                zoom: {
                    enable: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 5,
                  horizontal: true,
                }
              },
            dataLabels: {
                enabled: true
            },
            title: {
                text: 'ร้อยละยอดฉีดวัคซีนสะสมเข็มที่ 1 เเละเข็มที่ 2 (โดยประมาณ ต่อประชากรเป้าหมาย 70 ล้านคน)',
                align: 'center'
            },
            xaxis: {
                categories: ["เข็มที่ 1", "เข็มที่ 2"]
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
                    height="300"
                    width="1500"
                />
            </div>
        </div>
    )
}