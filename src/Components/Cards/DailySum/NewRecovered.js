import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: "230px",
        height: "150px"
    },
});

export default function NewRecovered(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ backgroundColor: "#039245" }} >
            <CardContent>
                <Typography variant="h6" style={{ fontWeight: 600, color: "white" }}>
                    หายป่วยใหม่วันนี้
                </Typography>
                <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600, color: "white" }}>
                    (+) {props.todayRecovered} ราย
                </Typography>
                <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600, color: "white" }}>
                    สะสม : {props.totalRecovered} ราย
                </Typography>
            </CardContent>
        </Card>
    );
}