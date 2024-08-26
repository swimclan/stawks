export enum EnumMetaDataResultKey {
  METADATA = "Meta Data",
}

export enum EnumTimeStampResultKey {
  TIMESTAMP = "0. timestamp",
}

export enum EnumTimeSeriesResultKey {
  TIME_SERIES_DAILY = "Time Series (Daily)",
  TIME_SERIES_ONE_MINUTE = "Time Series (1min)",
  TIME_SERIES_FIVE_MINUTE = "Time Series (5min)",
  TIME_SERIES_FIFTEEN_MINUTE = "Time Series (15min)",
  TIME_SERIES_THIRTY_MINUTE = "Time Series (30min)",
  TIME_SERIES_SIXTY_MINUTE = "Time Series (60min)",
}

export enum EnumCandleStat {
  OPEN = "1. open",
  HIGH = "2. high",
  LOW = "3. low",
  CLOSE = "4. close",
  VOLUME = "5. volume",
}

export enum EnumMetaDataStat {
  INFO = "1. Information",
  SYMBOL = "2. Symbol",
  LAST_REFRESHED = "3. Last Refreshed",
  OUTPUT_SIZE = "4. Output Size",
  TIMEZONE = "5. Time Zone",
}

export enum EnumQueryFunction {
  TIME_SERIES_DAILY = "TIME_SERIES_DAILY",
  TIME_SERIES_INTRADAY = "TIME_SERIES_INTRADAY",
  OVERVIEW = "OVERVIEW",
}

export enum EnumInterval {
  DAILY = "daily",
  ONE_MINUTE = "1min",
  FIVE_MINUTE = "5min",
  FIFTEEN_MINUTE = "15min",
  THIRTY_MINUTE = "30min",
  SIXTY_MINUTE = "60min",
}

export const INTERVAL_KEY_MAP: Map<EnumInterval, EnumTimeSeriesResultKey> =
  new Map([
    [EnumInterval.ONE_MINUTE, EnumTimeSeriesResultKey.TIME_SERIES_ONE_MINUTE],
    [EnumInterval.FIVE_MINUTE, EnumTimeSeriesResultKey.TIME_SERIES_FIVE_MINUTE],
    [
      EnumInterval.FIFTEEN_MINUTE,
      EnumTimeSeriesResultKey.TIME_SERIES_FIFTEEN_MINUTE,
    ],
    [
      EnumInterval.THIRTY_MINUTE,
      EnumTimeSeriesResultKey.TIME_SERIES_THIRTY_MINUTE,
    ],
    [
      EnumInterval.SIXTY_MINUTE,
      EnumTimeSeriesResultKey.TIME_SERIES_SIXTY_MINUTE,
    ],
  ]);
