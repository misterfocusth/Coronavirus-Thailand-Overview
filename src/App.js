import "./index.css"
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CachedIcon from "@material-ui/icons/Cached";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from '@material-ui/core/Divider';

// Components
import HeaderCard from "./Components/Cards/HeaderCard";
import NewConfirmedChart from "./Components/Cards/Charts/Past14DaysConfirmedChart";
import NewCasesAndNewRecoveredChart from "./Components/Cards/Charts/Past14DaysCasesAndNewRecoveredChart";
import NewDeathsChart from "./Components/Cards/Charts/Past14DaysDeathsChart";
import Past14DaysSumChart from "./Components/Cards/Charts/Past14DaysSumChart";
import TodayMostCasesProvincesChart from "./Components/Cards/Charts/TodayMostCasesProvincesChart";
import TotalVaccineChart from "./Components/Cards/Charts/TotalVaccineChart";
import Past14DaysPrisonCases from "./Components/Cards/Charts/Past14DaysPrisonCasesChart";
import Past14DaysVaccineChart from "./Components/Cards/Charts/Past14DaysVaccineChart";
import TotalVaccineBar from "./Components/Cards/Charts/TotalVaccineBar";

// Firebase
import firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig = {

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
firebase.analytics();

const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    margin: "auto",
    display: "flex",
    alignItems: "left",
    justifyItems: "left",
    marginRight: theme.spacing(2)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {}
}));

export default function App() {
  const classes = useStyles();
  const [dailySummary, setDailySummary] = useState([{}]);
  const [dailyProvincesSummary, setDailyProvincesSummary] = useState([{}]);
  const [past14DaySummary, setPast14DatSummary] = useState([{}]);
  const [openBackdrop, setOpenBackdrop] = useState(true);
  const [isDataReady, setIsDataReady] = useState(false)

  const API_KEY = "";
  const DAILY_SUMMARY_ENDPOINT =
    "https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=";
  const DAILY_PROVINCES_SUMMARY_ENDPOINT =
    "https://api-lab-covid.mindbase.co.th/v2/stats/provinces/daily?key=";
  const Past14DAY_SUMMARY_ENDPOINT =
    "https://api-lab-covid.mindbase.co.th/v2/stats/dailies?key=";

  async function fetchData() {
    axios.get(DAILY_SUMMARY_ENDPOINT + API_KEY)
      .then((response) => setDailySummary(response.data))
      .catch((error) => console.error(error))

    axios.get(DAILY_PROVINCES_SUMMARY_ENDPOINT + API_KEY)
      .then((response) => setDailyProvincesSummary(response.data))
      .catch((error) => console.error(error))

    axios.get(Past14DAY_SUMMARY_ENDPOINT + API_KEY + "&limit=14")
      .then((response) => {
        setPast14DatSummary(response.data)
      })
      .then(() => {
        setOpenBackdrop(false);
        setIsDataReady(true);
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MyAppBar = () => {
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ background: "#2E3B55" }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Coronavirus Thailand - Overview (รายงานสถานการณ์โควิด-19 ในประเทศไทย)
            </Typography>
            <IconButton
              edge="end"
              className={classes.menuButton}
              onClick={async () => {
                setOpenBackdrop(true);
                await fetchData();
              }}
              color="inherit"
              aria-label="menu"
            >
              <CachedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  return (
    <div className="App">
      <MyAppBar />
      <Backdrop className={classes.backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {isDataReady ?
        <div>
          <div className={classes.center} style={{ marginTop: "10px" }}>
            <HeaderCard data={dailySummary} />
          </div>
          <h4 className={classes.center}>ข้อมูล ณ วันที่ : {(dailySummary.data.updated_date).replaceAll(".", "/")} (ข้อมูลยอดสะสมตั้งเเต่การเเพร่ระบาดระลอกเมษายน 2563)</h4>
          <Divider variant="middle" style={{ marginTop: "15px" }} />
        </div>

        : <div></div>}

      {(isDataReady) ?
        <div>
          <div
            className={classes.center}
            style={{
              marginTop: "15px"
            }}
          >
            <TodayMostCasesProvincesChart dailyProvincesSummary={dailyProvincesSummary} />
            <NewConfirmedChart past14DaySummary={past14DaySummary} />
          </div>

          <div
            className={classes.center}
            style={{
              marginTop: "15px"
            }}
          >
            <Past14DaysPrisonCases past14DaySummary={past14DaySummary} />
            <NewCasesAndNewRecoveredChart past14DaySummary={past14DaySummary} />
          </div>

          <div
            className={classes.center}
            style={{
              marginTop: "15px"
            }}
          >
            <NewDeathsChart past14DaySummary={past14DaySummary} />
            <Past14DaysSumChart past14DaySummary={past14DaySummary} />
          </div>

          <Divider variant="middle" style={{ marginTop: "15px" }} />

          <div
            className={classes.center}
            style={{
              marginTop: "15px"
            }}
          >
            <TotalVaccineBar dailySummary={dailySummary} />
          </div>

          <div
            className={classes.center}
            style={{
              marginTop: "15px"
            }}
          >
            <Past14DaysVaccineChart past14DaySummary={past14DaySummary} />
            <TotalVaccineChart past14DaySummary={past14DaySummary} />
          </div>
        </div>
        : <div></div>}

      <h4 className={classes.center}>Developer with 💗 by : Sila Pakdeewong (@misterfocusth)</h4>
      <h4 className={classes.center}>
        Source On GitHub : (<a href="https://github.com/misterfocusth/Coronavirus-Thailand-Overview">
          <span>github.com/misterfocusth/Coronavirus-Thailand-Overview</span>
        </a>)
      </h4>
      <h4 className={classes.center}>Special Thanks Data Source and API by : MindSafety (<a href="https://lab-covid.mindbase.co.th/#/">
          <span>lab-covid.mindbase.co.th/</span>
        </a>) / กระทรวงสาธารณสุข (SAT - MOPH)</h4>
    </div>
  );
}
