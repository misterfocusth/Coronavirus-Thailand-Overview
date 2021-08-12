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
import Past14DaysInHospital from "./Components/Cards/Charts/Past14DaysInHospitalChart";
import Past14DaysRecovered from "./Components/Cards/Charts/Past14DaysRecoveredChart";
import Past14DaysTestingChart from "./Components/Cards/Charts/Past14DaysTestingChart";

var firebaseConfig = {
  apiKey: "AIzaSyBOuEygVsnpuFtPG0huRKZKUBXcaE13mHI",
  authDomain: "covid-19-thailand-overview.firebaseapp.com",
  projectId: "covid-19-thailand-overview",
  storageBucket: "covid-19-thailand-overview.appspot.com",
  messagingSenderId: "47314685559",
  appId: "1:47314685559:web:b61f8f7dbc6241f0d0c072",
  measurementId: "G-ZP8N3GHBR7"
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
  const [isDataReady, setIsDataReady] = useState(false);
  const [vaccineData, setVaccineData] = useState([{
    vaccine_national: [{}],
    vaccine_provincial: [{}],
    vaccine_provincial_by_manufacturer: [{}],
    vaccine_by_manufacturer: [{}],
    vaccine_delivery: [{}]
  }]);
  const [testingData, setTestingData] = useState([{}]);

  // COVID - Daily / Past 14 Days Summary Data
  const API_KEY = "12c8f541-c0f7-4eed-9888-202107164a9ef46387";
  const DAILY_SUMMARY_ENDPOINT =
    "https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=";
  const DAILY_PROVINCES_SUMMARY_ENDPOINT =
    "https://api-lab-covid.mindbase.co.th/v2/stats/provinces/daily?key=";
  const Past14DAY_SUMMARY_ENDPOINT =
    "https://api-lab-covid.mindbase.co.th/v2/stats/dailies?key=";

  // Vaccination Data
  const VACCINE_NATIONAL_ENDPOINT = "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/national-vaccination-timeseries.json"; // อัตราการฉีดวัคซีนทั้งประเทศไทย
  const VACCINE_PROVINCIAL_ENDPOINT = "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/provincial-vaccination.json" // การฉีดวัคซีนรายจังหวัด แยกตามโดสที่ฉีด
  const VACCINE_PROVINCIAL_BY_MANUFACTURER_ENDPOINT = "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/provincial-vaccination-by-manufacturer.json"; // การฉีดวัคซีนรายจังหวัด แยกตามชนิดวัคซีน
  const VACCINE_BY_MANUFACTURER_ENDPOINT = "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/vaccine-manufacturer-timeseries.json"; // อัตราการฉีดวัคซีนของแต่ละผู้ผลิต
  const VACCINE_DELIVERY_ENDPOINT = "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/national-vaccination-timeseries.json"; // การจัดสรรวัคซีน

  // RT-PCR Lab Testing Data
  const RT_PCR_TESTING_ENDPOINT = "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/cases/testing-data.json";

  async function fetchData() {
    const response_1 = await axios.get(DAILY_SUMMARY_ENDPOINT + API_KEY);
    const response_2 = await axios.get(DAILY_PROVINCES_SUMMARY_ENDPOINT + API_KEY);
    const response_3 = await axios.get(Past14DAY_SUMMARY_ENDPOINT + API_KEY + "&limit=14");

    const vaccine_national_response = await axios.get(VACCINE_NATIONAL_ENDPOINT);
    const vaccine_provincial_response = await axios.get(VACCINE_PROVINCIAL_ENDPOINT);
    const vaccine_provincial_by_manufacturer_response = await axios.get(VACCINE_PROVINCIAL_BY_MANUFACTURER_ENDPOINT);
    const vaccine_by_manufacturer_response = await axios.get(VACCINE_BY_MANUFACTURER_ENDPOINT);
    const vaccine_delivery_response = await axios.get(VACCINE_DELIVERY_ENDPOINT);

    const testing_data_response = await axios.get(RT_PCR_TESTING_ENDPOINT);

    if (response_1.data && response_2.data && response_3.data && vaccine_national_response.data && vaccine_provincial_response.data && vaccine_provincial_by_manufacturer_response.data && vaccine_by_manufacturer_response.data && vaccine_delivery_response.data && testing_data_response.data) {
      setDailySummary(response_1.data)
      setDailyProvincesSummary(response_2.data)
      setPast14DatSummary(response_3.data)
      setVaccineData([{
        vaccine_national: vaccine_national_response.data,
        vaccine_provincial: vaccine_provincial_response.data,
        vaccine_provincial_by_manufacturer: vaccine_provincial_by_manufacturer_response.data,
        vaccine_by_manufacturer: vaccine_by_manufacturer_response.data,
        vaccine_delivery: vaccine_delivery_response.data
      }]);
      setTestingData(testing_data_response.data);
      setOpenBackdrop(false);
      setIsDataReady(true);

      console.log(testingData[testingData.length - 1])
    } else {
      window.location.href = "/"
    }
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
          <h2 style={{ marginTop: "15px", fontWeight: "bold" }} className={classes.center}>สถานการณ์การเเพร่ระบาดของโรคโควิด-19 ในประเทศไทย</h2>
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
            <Past14DaysInHospital past14DaySummary={past14DaySummary} />
            <Past14DaysRecovered past14DaySummary={past14DaySummary} />
          </div>

          <div
            className={classes.center}
            style={{
              marginTop: "15px"
            }}
          >
            <NewDeathsChart past14DaySummary={past14DaySummary} />
            <Past14DaysTestingChart testingData={testingData} />
          </div>

          <h5 className={classes.center} >
            ข้อมูลรายงานสถานการณ์ผู้ติดเชื้อรายวัน / รายจังหวัด / ผู้ป่วยรักษาตัวในโรงพยาบาล / ผู้ป่วยรักษาหายรายวัน / ผู้เสียชีวิตรายใหม่ จาก  Mindbase (<a href="https://lab-covid.mindbase.co.th/#/">
              <span>lab-covid.mindbase.co.th/</span></a>) / กระทรวงสาธารณสุข (SAT - MOPH)
          </h5>

          <h5 className={classes.center} >ข้อมูลการตรวจเชื้อโควิด-19 รายวันด้วยวิธี RT-PCR จากกรมวิทยาศาสตร์การแพทย์ กระทรวงสาธารณสุข (ตัวเลขการตรวจรายวันหมายถึงจำนวนตัวอย่างที่ได้รับการตรวจ RT-PCR จากห้องปฏิบัติการของรัฐบาลและเอกชน ข้อมูลอัพเดทรายสัปดาห์)</h5>

          <Divider variant="middle" style={{ marginTop: "15px" }} />

          <h2 style={{ marginTop: "15px", fontWeight: "bold" }} className={classes.center}>เเนวโน้มสถานการณ์การเเพร่ระบาดย้อนหลัง 14 วัน</h2>


          <Divider variant="middle" style={{ marginTop: "15px" }} />

          <h2 style={{ marginTop: "15px", fontWeight: "bold" }} className={classes.center}>การฉีดวัคซีนโควิด-19 ในประเทศไทย</h2>

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

          <Divider variant="middle" style={{ marginTop: "15px" }} />

          <div className={classes.center} style={{ marginTop: "15px" }}>
            <iframe title="ระบบค้นหาแล็บตรวจโควิด" src="https://covid-lab.co/" height={800} width={"95%"} ></iframe>
          </div>
        </div>
        : <div></div>}

      <h4 className={classes.center}>Develop with 💗 by : Sila Pakdeewong (@misterfocusth)</h4>
      <h4 className={classes.center}>
        Source On GitHub : (<a href="https://github.com/misterfocusth/Coronavirus-Thailand-Overview">
          <span>github.com/misterfocusth/Coronavirus-Thailand-Overview</span>
        </a>)
      </h4>
      <h4 className={classes.center}>Special Thanks Data Source and API by : Mindbase (<a href="https://lab-covid.mindbase.co.th/#/">
        <span>lab-covid.mindbase.co.th/</span>
      </a>) / กระทรวงสาธารณสุข (SAT - MOPH)</h4>
      <h4 className={classes.center}>ข้อมูลระบบค้นหาเเล็ปตรวจเชื้อโควิด : (<a href="https://covid-lab.co/">
        <span>https://covid-lab.co/</span>
      </a>)</h4>
    </div>
  );
}
