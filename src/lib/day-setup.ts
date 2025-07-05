// lib/dayjs-setup.ts
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

// "en" tilining relativeTime qismiga uzbekcha matnlar beriladi
dayjs.updateLocale("en", {
  relativeTime: {
    future: "%s ichida",
    past: "%s oldin",
    s: "%d soniya",
    m: "1 daqiqa",
    mm: "%d daqiqa",
    h: "1 soat",
    hh: "%d soat",
    d: "1 kun",
    dd: "%d kun",
    M: "1 oy",
    MM: "%d oy",
    y: "1 yil",
    yy: "%d yil",
  },
});

export default dayjs;
