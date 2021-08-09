import "./index.css"
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CachedIcon from "@material-ui/icons/Cached";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Chart from "react-apexcharts";
import Divider from '@material-ui/core/Divider';

// Components
import HeaderCard from "./Components/Cards/HeaderCard";
import NewConfirmedChart from "./Components/Cards/Charts/Past14DaysConfirmedChart";
import NewCasesAndNewRecoveredChart from "./Components/Cards/Charts/Past14DaysCasesAndNewRecoveredChart";
import NewDeathsChart from "./Components/Cards/Charts/Past14DaysDeathsChart";
import Past14DaysSumChart from "./Components/Cards/Charts/Past14DaysSumChart";

// Utils
import dateHelper from "./Utils/DateHelper";

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

  const API_KEY = "12c8f541-c0f7-4eed-9888-202107164a9ef46387";
  const DAILY_SUMMARY_ENDPOINT =
    "https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=";
  const DAILY_PROVINCES_SUMMARY_ENDPOINT =
    "https://api-lab-covid.mindbase.co.th/v2/stats/provinces/daily?key=";
  const Past14DAY_SUMMARY_ENDPOINT =
    "https://api-lab-covid.mindbase.co.th/v2/stats/dailies?key=";

  async function fetchData() {
    fetch(DAILY_SUMMARY_ENDPOINT + API_KEY)
      .then((response) => response.json())
      .then((data) => setDailySummary(data));

    fetch(DAILY_PROVINCES_SUMMARY_ENDPOINT + API_KEY)
      .then((response) => response.json())
      .then((data) => setDailyProvincesSummary(data));

    fetch(Past14DAY_SUMMARY_ENDPOINT + API_KEY + "&limit=14")
      .then((response) => response.json())
      .then((data) => {
        setPast14DatSummary(data);
        setOpenBackdrop(false);
      });

      console.log(dailySummary);
      console.log(dailyProvincesSummary);
      console.log(past14DaySummary);
  }

  useEffect(() => {
    fetchData();
    console.log(dailySummary);
    console.log(dailyProvincesSummary);
    console.log(past14DaySummary);
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

  const getUpdatedDate = () => {
    if (dailySummary) {
      let date = (dailySummary.data.updated_date || "");
      return date.replaceAll(".", "/")
    }
  }

  return (
    <div className="App">
      <MyAppBar />
      <Backdrop className={classes.backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {!openBackdrop ?
        <div>
          <div className={classes.center} style={{ marginTop: "10px" }}>
            <HeaderCard data={dailySummary} />
          </div>
          <h4 className={classes.center}>ข้อมูล ณ วันที่ : {getUpdatedDate()} (ข้อมูลยอดสะสมตั้งเเต่การเเพร่ระบาดระลอกเมษายน 2563)</h4>
          <Divider variant="middle" style={{ marginTop: "15px" }} />
        </div>

        : <div></div>}

      {!openBackdrop ?
        <div>
          <div 
            className={classes.center}
            style={{
              marginTop: "15px"
            }}
          >
            <NewConfirmedChart past14DaySummary={past14DaySummary} />
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
        </div>

        : <div></div>}

    </div>
  );
}
