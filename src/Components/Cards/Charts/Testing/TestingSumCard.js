import React, { useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {
        width: "400px",
        height: "410px",
        marginRight: "25px"
    },
});

export default function TestingSumCard(props) {
    const classes = useStyles();

    const [sum7DaysAnd14Days, setSum7DaysAnd14Days] = React.useState([{
        tests7Days: 0,
        positive7Days: 0,
        positiveRate7Days: 0,
        tests14Days: 0,
        positive14Days: 0,
        positiveRate14Days: 0,
    }]);

    const numberWithCommas = (x) => {
        return x.toLocaleString(undefined, {maximumFractionDigits:0})
    }

    useEffect(() => {
        var total = [0, 0, 0, 0];
        var days = 8
        for (let i = 0; i < 2; i++) {
            if (i === 1) {
                days = 15;
                for (let x = 1; x < days; x++) {
                    total[2] += props.testingData[props.testingData.length-x].tests
                    total[3] += props.testingData[props.testingData.length-x].positive
                }
            } else {
                for (let y = 1; y < days; y++) {
                    total[0] += props.testingData[props.testingData.length-y].tests 
                    total[1] += props.testingData[props.testingData.length-y].positive
                }
            }
        }
        setSum7DaysAnd14Days({
            tests7Days: numberWithCommas(total[0]),
            positive7Days: numberWithCommas(total[1]),
            positiveRate7Days: (total[1] / total[0] * 100).toFixed(2),
            tests14Days: numberWithCommas(total[2]),
            positive14Days: numberWithCommas(total[3]),
            positiveRate14Days: (total[3] / total[2] * 100).toFixed(2),
        })
    }, [])

    return (
        <div>
            <Card className={classes.root} >
                <CardContent>
                    <Typography variant="h6" style={{ fontWeight: 600, textAlign: "center" }}>
                        การตรวจเชื้อโควิด-19 ด้วยวิธี RT-PCR
                    </Typography>

                    <Divider variant="middle" style={{ marginTop: "15px" }} />

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        (ในรอบ 7 วันย้อนหลัง)
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผลตรวจพบเชื้อโควิด-19 : <span style={{ color: "#EA5771" }} >{sum7DaysAnd14Days.positive7Days}</span> ราย
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        ยอดสะสมการตรวจในรอบ : <span style={{ color: "#3498DB" }} >{sum7DaysAnd14Days.tests7Days}</span> ราย
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        อัตราการตรวจพบเชื้อ (Positive Rate) : <span style={{ color: "#EA5771" }} >{sum7DaysAnd14Days.positiveRate7Days}</span> %
                    </Typography>

                    <Divider variant="middle" style={{ marginTop: "15px" }} />

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        (ในรอบ 14 วันย้อนหลัง)
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผลตรวจพบเชื้อโควิด-19 : <span style={{ color: "#EA5771" }} >{sum7DaysAnd14Days.positive14Days}</span> ราย
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        ยอดสะสมการตรวจในรอบ : <span style={{ color: "#3498DB" }} >{sum7DaysAnd14Days.tests14Days}</span> ราย
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        อัตราการตรวจพบเชื้อ (Positive Rate) : <span style={{ color: "#EA5771" }} >{sum7DaysAnd14Days.positiveRate14Days}</span> %
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}