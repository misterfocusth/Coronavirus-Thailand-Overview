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

export default function FirstVaccine(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardContent>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                    ฉีดเข็มที่ 1 วันนี้
                </Typography>
                <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600 }}>
                    (+) {props.firstVaccineToday} ราย
                </Typography>
                <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                    สะสม : {props.firstVaccineTotal} ราย
                </Typography>
            </CardContent>
        </Card>
    );
}