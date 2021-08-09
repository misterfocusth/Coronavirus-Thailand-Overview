class DateHelper {

    toDateTH(date) {
        const THAI_MONTHS = {
            MONTH_01: "มกราคม",
            MONTH_02: "กุมภาพันธ์",
            MONTH_03: "มีนาคม",
            MONTH_04: "เมษายน",
            MONTH_05: "พฤษภาคม",
            MONTH_06: "มิถุนายน",
            MONTH_07: "กรกฎาคม",
            MONTH_08: "สิงหาคม",
            MONTH_09: "กันยายน",
            MONTH_10: "ตุลาคม",
            MONTH_11: "พฤศจิกายน",
            MONTH_12: "ธันวาคม",
        };

        console.log(date)
        
        let splittedDate = date.split(".");
        let thaiDate = splittedDate[0]

        switch (splittedDate[1]) {
            case "1":
              thaiDate += " " + THAI_MONTHS.MONTH_01;
              break;
            case "2":
              thaiDate += " " + THAI_MONTHS.MONTH_02;
              break;
            case "3":
              thaiDate += " " + THAI_MONTHS.MONTH_03;
              break;
            case "4":
              thaiDate += " " + THAI_MONTHS.MONTH_04;
              break;
            case "5":
              thaiDate += " " + THAI_MONTHS.MONTH_05;
              break;
            case "6":
              thaiDate += " " + THAI_MONTHS.MONTH_06;
              break;
            case "7":
              thaiDate += " " + THAI_MONTHS.MONTH_07;
              break;
            case "8":
              thaiDate += " " + THAI_MONTHS.MONTH_08;
              break;
            case "9":
              thaiDate += " " + THAI_MONTHS.MONTH_09;
              break;
            case "10":
              thaiDate += " " + THAI_MONTHS.MONTH_10;
              break;
            case "11":
              thaiDate += " " + THAI_MONTHS.MONTH_11;
              break;
            case "12":
              thaiDate += " " + THAI_MONTHS.MONTH_12;
              break;
            default: return ""
          }
        
          return thaiDate + " " + splittedDate[2] + " " + splittedDate[3];
    }

}

module.exports = new DateHelper();