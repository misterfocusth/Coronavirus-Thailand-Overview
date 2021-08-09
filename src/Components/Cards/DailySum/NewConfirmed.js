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

export default function NewConfirmed(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ backgroundColor: "#EA5771" }} >
      <CardContent>
        <Typography variant="h6" style={{ fontWeight: 600, color: "white" }}>
          ผู้ติดเชื้อรายใหม่วันนี้
        </Typography>
        <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600, color: "white"}}>
          (+) {props.todayCases} ราย
        </Typography>
        <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600, color: "white"}}>
          สะสม : {props.totalCases} ราย
        </Typography>
      </CardContent>
    </Card>
  );
}
