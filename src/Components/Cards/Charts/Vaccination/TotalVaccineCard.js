import React, { useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {
        width: "500px",
        height: "460px",
        marginLeft: "50px"
    },
});

export default function TotalVaccineCard(props) {
    const classes = useStyles();

    const TH_POPULATION = 70000000;
    const [vaccineData, setVaccineData] = React.useState([{
        first_dose_total: 0,
        first_dose_new: 0,
        first_dose_percent: 0,
        second_dose_total: 0,
        second_dose_new: 0,
        second_dose_percent: 0,
        third_dose_total: 0,
        third_dose_new: 0,
        third_dose_percent: 0,
    }]);

    const numberWithCommas = (x) => {
        return x.toLocaleString(undefined, {maximumFractionDigits:0})
    }

    useEffect(() => {
        setVaccineData({
            first_dose_total: numberWithCommas(props.nationalVaccineData[props.nationalVaccineData.length - 1].first_dose),
            first_dose_new: numberWithCommas(props.nationalVaccineData[props.nationalVaccineData.length - 1].first_dose - props.nationalVaccineData[props.nationalVaccineData.length - 2].first_dose),

            first_dose_percent: (props.nationalVaccineData[props.nationalVaccineData.length - 1].first_dose / TH_POPULATION * 100).toFixed(2),

            second_dose_total: numberWithCommas(props.nationalVaccineData[props.nationalVaccineData.length - 1].second_dose),
            second_dose_new: numberWithCommas(props.nationalVaccineData[props.nationalVaccineData.length - 1].second_dose - props.nationalVaccineData[props.nationalVaccineData.length - 2].second_dose),

            second_dose_percent: (props.nationalVaccineData[props.nationalVaccineData.length - 1].second_dose / TH_POPULATION * 100).toFixed(2),

            third_dose_total: numberWithCommas(props.nationalVaccineData[props.nationalVaccineData.length - 1].third_dose),
            third_dose_new: numberWithCommas(props.nationalVaccineData[props.nationalVaccineData.length - 1].third_dose - props.nationalVaccineData[props.nationalVaccineData.length - 2].third_dose),

            third_dose_percent: (props.nationalVaccineData[props.nationalVaccineData.length - 1].third_dose / TH_POPULATION * 100).toFixed(2),
        })
    }, [])

    return (
        <div>
            <Card className={classes.root} >
                <CardContent>
                    {/* <Typography variant="h6" style={{ fontWeight: 600, textAlign: "center" }}>
                        ยอดสะสมการฉีดวัคซีนโควิด-19 ในประเทศไทย
                    </Typography> */}

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผู้ได้รับวัคซีนเข็มที่ 1 (สะสม) : <span style={{ color: "#3498DB", fontWeight: "bold" }} >{vaccineData.first_dose_total}</span> ราย
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        คิดเป็นร้อยละ : <span style={{ color: "#3498DB", fontWeight: "bold" }} >{vaccineData.first_dose_percent}</span> % ต่อจำนวนประชากรเป้าหมาย
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผู้ได้รับวัคซีนเข็มที่ 1 วันนี้ (เพิ่มขึ้น + : <span style={{ color: "#3498DB", fontWeight: "bold" }} >{vaccineData.first_dose_new}</span> )
                    </Typography>

                    <Divider variant="middle" style={{ marginTop: "15px" }} />

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผู้ได้รับวัคซีนเข็มที่ 2 (สะสม) : <span style={{ color: "#00e396", fontWeight: "bold" }} >{vaccineData.second_dose_total}</span> ราย
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        คิดเป็นร้อยละ : <span style={{ color: "#00e396", fontWeight: "bold" }} >{vaccineData.second_dose_percent}</span> % ต่อจำนวนประชากรเป้าหมาย
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผู้ได้รับวัคซีนเข็มที่ 2 วันนี้ (เพิ่มขึ้น + : <span style={{ color: "#00e396", fontWeight: "bold" }} >{vaccineData.second_dose_new}</span> )
                    </Typography>

                    <Divider variant="middle" style={{ marginTop: "15px" }} />

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผู้ได้รับวัคซีนเข็มที่ 3 (สะสม) : <span style={{ color: "#feb019", fontWeight: "bold" }} >{vaccineData.third_dose_total}</span> ราย
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        คิดเป็นร้อยละ : <span style={{ color: "#feb019", fontWeight: "bold" }} >{vaccineData.third_dose_percent}</span> % ต่อจำนวนประชากรเป้าหมาย
                    </Typography>

                    <Typography variant="subtitle1" style={{ marginTop: "10px", fontWeight: 600 }}>
                        จำนวนผู้ได้รับวัคซีนเข็มที่ 3 วันนี้ (เพิ่มขึ้น + : <span style={{ color: "#feb019", fontWeight: "bold" }} >{vaccineData.third_dose_new}</span> )
                    </Typography>

                    <Divider variant="middle" style={{ marginTop: "15px" }} />

                    <Typography variant="subtitle2" style={{
                        marginTop: "10px", fontWeight: 600,    display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        (ร้อยละของยอดสะสมโดยประมาณต่อประชากรเป้าหมาย 70 ล้านคน)
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}