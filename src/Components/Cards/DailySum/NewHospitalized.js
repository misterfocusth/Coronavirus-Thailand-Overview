import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "230px",
    height: "150px"
  },
});

export default function NewHospitalized(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ backgroundColor: "#fbc02d" }} >
      <CardContent>
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          ผู้ป่วยกำลังรักษา
        </Typography>
        <Typography variant="h6" style={{ marginTop: "10px", fontWeight: 600 }}>
            สะสม : {props.totalHospitalized} ราย
        </Typography>
      </CardContent>
    </Card>
  );
}