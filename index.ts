import dotenv from "dotenv";
import {
  getCompanyInfo,
  getDailyTimeSeries,
  // getIntradayTimeSeries,
} from "./getters";
dotenv.config();

// import { EnumInterval } from "./constants";

(async function main() {
  const daily = await getDailyTimeSeries("NVDA");
  console.log(daily.map((price) => price["4. close"])[0]);

  const result = await getCompanyInfo("SPT");
  console.log(result["52WeekHigh"], result["52WeekLow"]);

  // const result = await getIntradayTimeSeries("IBM", EnumInterval.ONE_MINUTE);
  // console.log(result);
})();
