import fetch from "node-fetch";
import {
  EnumInterval,
  EnumQueryFunction,
  EnumTimeSeriesResultKey,
  EnumTimeStampResultKey,
  INTERVAL_KEY_MAP,
} from "./constants";

const api_key: string | undefined = process.env.API_KEY;

const QUERY_CALL_URL: string = "https://www.alphavantage.co/query";

const getQuery = async <T>(
  fn: EnumQueryFunction,
  symbol: string,
  params?: {
    interval: EnumInterval;
  }
): Promise<T> => {
  const response = await fetch(
    `${QUERY_CALL_URL}?function=${fn}&symbol=${symbol}&apikey=${api_key}${
      params
        ? Object.entries(params).reduce((a, [k, v]) => `${a}&${k}=${v}`, "")
        : ""
    }`
  );
  const json: T = await response.json();
  return json;
};

const getTimeSeriesQuery = async (
  fn: EnumQueryFunction,
  symbol: string,
  interval?: EnumInterval
): Promise<TimeSeriesArray> => {
  const json = await getQuery<TypeTimeSeriesResult>(
    fn,
    symbol,
    interval ? { interval } : undefined
  );
  const key: EnumTimeSeriesResultKey =
    INTERVAL_KEY_MAP.get(interval ?? EnumInterval.DAILY) ??
    EnumTimeSeriesResultKey.TIME_SERIES_DAILY;

  return Object.entries(json[key]).map(([time, price]) => ({
    [EnumTimeStampResultKey.TIMESTAMP]: time,
    ...price,
  }));
};

export const getDailyTimeSeries = async (
  symbol: string
): Promise<TimeSeriesArray> => {
  return getTimeSeriesQuery(EnumQueryFunction.TIME_SERIES_DAILY, symbol);
};

export const getIntradayTimeSeries = async (
  symbol: string,
  interval: EnumInterval
): Promise<TimeSeriesArray> => {
  return getTimeSeriesQuery(
    EnumQueryFunction.TIME_SERIES_INTRADAY,
    symbol,
    interval
  );
};

export const getCompanyInfo = async (symbol: string) => {
  const json = await getQuery<TypeCompanyInfo>(
    EnumQueryFunction.OVERVIEW,
    symbol
  );
  return json;
};
