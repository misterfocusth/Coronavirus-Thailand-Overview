import React, { useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {
        width: "700px",
        height: "410px",
        marginLeft: "30px"
    },
});

export default function TotalSumCard(props) {
    const classes = useStyles();

    const [sum14Days, setSum14Days] = React.useState([{
        cases: 0,
        recovered: 0,
        death: 0
    }]);
    const [total, setTotal] = React.useState({
        totalCases: 0,
        todayCases: 0,
        totalRecovered: 0,
        todayRecovered: 0,
        totalDeaths: 0,
        todayDeaths: 0,
        hospitalized: 0
    })

    const numberWithCommas = (x) => {
        return x.toLocaleString(undefined, {maximumFractionDigits:0})
    }

    useEffect(() => {
        var total = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
            for (let x = 0; x < props.past14DaySummary.data.details.length; x++) {
                if (i === 0) {
                    total[0] += props.past14DaySummary.data.details[x].daily_covid_cases
                } else if (i === 1) {
                    total[1] += props.past14DaySummary.data.details[x].daily_recovered
                } else if (i === 2) {
                    total[2] += props.past14DaySummary.data.details[x].daily_deaths
                }
            }
        }
        setSum14Days({
            cases: numberWithCommas(total[0]),
            recovered: numberWithCommas(total[1]),
            death: numberWithCommas(total[2])
        });
        setTotal({
            totalCases: numberWithCommas(props.dailySummary.data.cumulative_covid_cases63),
            todayCases: numberWithCommas(props.dailySummary.data.daily_covid_cases),
            totalRecovered: numberWithCommas(props.dailySummary.data.cumulative_recovered_cases63),
            todayRecovered: numberWithCommas(props.dailySummary.data.daily_recovered),
            totalDeaths: numberWithCommas(props.dailySummary.data.cumulative_deaths63),
            todayDeaths: numberWithCommas(props.dailySummary.data.daily_deaths),
            hospitalized: numberWithCommas(props.dailySummary.data.daily_stay_patient)
        })
    }, [])

    return (
        <div>
            <Card className={classes.root} >
                <CardContent>
                    <Typography variant="h6" style={{ fontWeight: 600, textAlign: "center" }}>
                        ยอดสะสมผู้ติดเชื้อ ผู้ป่วยในโรงพยาบาล ผู้หายป่วย เเละผู้เสียชีวิต
                    </Typography>

                    <Divider variant="middle" style={{ marginTop: "15px" }} />

                    <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600 }}>
                        ยอดสะสมผู้ติดเชื้อ : <span style={{ color: "#EA5771" }} >{total.totalCases}</span> ราย (เพิ่มขึ้น + <span style={{ color: "#EA5771" }} >{total.todayCases}</span> ราย)
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผู้ติดเชื้อรายใหม่ในรอบ 14 วัน : <span style={{ color: "#EA5771" }} >{sum14Days.cases}</span> ราย
                    </Typography>

                    <Divider variant="middle" style={{ marginTop: "15px" }} />

                    <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600 }}>
                        ยอดสะสมผู้หายป่วย : <span style={{ color: "#039245" }} >{total.totalRecovered}</span> ราย (เพิ่มขึ้น + <span style={{ color: "#039245" }} >{total.todayRecovered}</span> ราย)
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผู้หายป่วยรายใหม่ในรอบ 14 วัน : <span style={{ color: "#039245" }} >{sum14Days.recovered}</span> ราย
                    </Typography>

                    <Divider variant="middle" style={{ marginTop: "15px" }} />

                    <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600 }}>
                        ยอดสะสมผู้เสียชีวิต : <span style={{ color: "#212121" }} >{total.totalDeaths}</span> ราย (เพิ่มขึ้น + <span style={{ color: "#212121" }} >{total.todayDeaths}</span> ราย)
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผู้เสียชีวิตรายใหม่ในรอบ 14 วัน : <span style={{ color: "#212121" }} >{sum14Days.death}</span> ราย
                    </Typography>

                    <Divider variant="middle" style={{ marginTop: "15px" }} />

                    <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600 }}>
                        ยอดสะสมรักษาตัวในโรงพยาบาล : <span style={{ color: "#fbc02d" }} >{total.hospitalized}</span> ราย
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}