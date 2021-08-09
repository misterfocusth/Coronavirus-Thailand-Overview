import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import NewConfirmedCases from './DailySum/NewConfirmed';
import NewRecoveredCard from './DailySum/NewRecovered';
import NewHospitalized from './DailySum/NewHospitalized';
import NewDeaths from './DailySum/NewDeaths';
import FirstVaccine from './DailySum/FirstVaccine';
import SecondVaccine from './DailySum/SecondVaccine';
import TodayVaccine from './DailySum/TodayVaccine';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function HeaderCard(props) {
    const classes = useStyles();
    var propsData = props.data;

    const [data, setData] = React.useState({});

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        setData({
            // Confirmed Cases
            todayCases: numberWithCommas(propsData.data.daily_covid_cases),
            totalCases: numberWithCommas(propsData.data.cumulative_covid_cases63),

            // Recovered
            todayRecovered: numberWithCommas(propsData.data.daily_recovered),
            totalRecovered: numberWithCommas(propsData.data.cumulative_recovered_cases63),

            // Hospitalized
            totalHospitalized: numberWithCommas(propsData.data.daily_stay_patient),

            // Deaths
            todayDeaths: numberWithCommas(propsData.data.daily_deaths),
            totalDeaths: numberWithCommas(propsData.data.cumulative_deaths63),

            // Vaccine
            todayVaccine: numberWithCommas((propsData.data.daily_vaccine1 + propsData.data.daily_vaccine2)),
            totalVaccine: numberWithCommas((propsData.data.cumulative_vaccine1 + propsData.data.cumulative_vaccine2)),
            firstVaccineToday: numberWithCommas(propsData.data.daily_vaccine1),
            firstVaccineTotal: numberWithCommas(propsData.data.cumulative_vaccine1),
            secondVaccineToday: numberWithCommas(propsData.data.daily_vaccine2),
            secondVaccineTotal: numberWithCommas(propsData.data.cumulative_vaccine2),

        });
    }, [])

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15px"
            }}>
                <h2 style={{ marginRight: "20px", width: "30%" }}>สรุปสถานการณ์
                    <span style={{ display: "block", marginTop: "5px" }}>ผู้ติดเชื้อในประเทศไทย</span>
                    <span style={{ display: "block", marginTop: "5px" }}>อัพเดทประจำวัน</span>
                </h2>
                <Grid container className={classes.root} spacing={5}>
                    <Grid item sm={3}>
                        <NewConfirmedCases todayCases={data.todayCases} totalCases={data.totalCases} />
                    </Grid>
                    <Grid item sm={3}>
                        <NewRecoveredCard todayRecovered={data.todayRecovered} totalRecovered={data.totalRecovered} />
                    </Grid>
                    <Grid item sm={3}>
                        <NewHospitalized totalHospitalized={data.totalHospitalized} />
                    </Grid>
                    <Grid item sm={3}>
                        <NewDeaths todayDeaths={data.todayDeaths} totalDeaths={data.totalDeaths} />
                    </Grid>
                </Grid>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15px"
            }}>
                <h2 style={{ marginRight: "20px", width: "30%" }}>สรุปความคืบหน้า
                    <span style={{ display: "block", marginTop: "5px" }}>การฉีดวัคซีนโควิด-19</span>
                    <span style={{ display: "block", marginTop: "5px" }}>ในประเทศไทย</span>
                </h2>
                <Grid container className={classes.root} spacing={5}>
                    <Grid item sm={6}>
                        <TodayVaccine todayVaccine={data.todayVaccine} totalTodayVaccine={data.totalVaccine} />
                    </Grid>
                    <Grid item sm={3}>
                        <FirstVaccine firstVaccineToday={data.firstVaccineToday} firstVaccineTotal={data.firstVaccineTotal} />
                    </Grid>
                    <Grid item sm={3}>
                        <SecondVaccine secondVaccineToday={data.secondVaccineToday} secondVaccineTotal={data.secondVaccineTotal} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}