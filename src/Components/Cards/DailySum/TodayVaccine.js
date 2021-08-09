import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: "103%",
        height: "150px"
    },
});

export default function TodayVaccine(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ backgroundColor: "#2196f3" }} >
            <CardContent>
                <Typography variant="h6" style={{ fontWeight: 600, color: "white" }}>
                    ยอดฉีดวัคซีนเพิ่มวันนี้ เเละยอดฉีดสะสม
                </Typography>
                <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600, color: "white" }}>
                    (+) {props.todayVaccine} ราย (รวมฉีดเข็มที่ 1 เเละ เข็มที่ 2)
                </Typography>
                <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600, color: "white" }}>
                    ยอดฉีดสะสม : {props.totalTodayVaccine} ราย
                </Typography>
            </CardContent>
        </Card>
    );
}