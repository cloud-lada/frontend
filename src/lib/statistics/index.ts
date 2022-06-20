import { SensorType } from "@/lib/reading";
import { Formatter } from "@/lib/time";

/**
 * The Statistics type contains fields describing the current stats of the lada.
 */
export type Statistics = {
  /**
   * The lada's current speed.
   */
  speed: number;

  /**
   * The lada's current fuel level, expressed as a percentage.
   */
  fuel: number;

  /**
   * The lada's current engine temperature, expressed in degrees.
   */
  engineTemperature: number;

  /**
   * The lada's current revolutions per minute.
   */
  revolutions: number;
};

/**
 * The Statistic type represents a time-bucketed sensor reading at a specific time. The value will be an
 * average.
 */
export type Statistic = {
  /**
   * The type of sensor the Statistic relates to.
   */
  sensor: SensorType;

  /**
   * The averaged value of the reading.
   */
  value: number;

  /**
   * The time at which this averaged reading occurred.
   */
  timestamp: Date;
};

/**
 * The HTTP interface describes types that can perform HTTP Requests
 */
export interface HTTP {
  /**
   * Performs an HTTP GET request to a URI.
   * @param uri The URI to send the request to.
   */
  get<Response>(uri: string): Promise<Response>;
}

/**
 * The StatisticsClient class is used to grab statistical data from the API.
 */
export class StatisticsClient {
  client: HTTP;
  dateFormatter: Formatter;

  /**
   * Initialises a new instance of the StatisticsClient class.
   * @param client The HTTP client to use
   */
  constructor(client: HTTP) {
    this.client = client;
    this.dateFormatter = new Formatter();
  }

  /**
   * Grab the latest statistics from the API
   */
  async latest(): Promise<Statistics> {
    return await this.client.get("/api/statistics/latest");
  }

  /**
   * Grab time bucketed statistics for a sensor type on a specific date
   * @param sensor The sensor to query statistics for
   * @param date The date to query statistics for
   */
  async forDate(sensor: SensorType, date: Date): Promise<Array<Statistic>> {
    return await this.client.get(
      `/api/statistics/sensor/${sensor}/date/${this.dateFormatter.yearMonthDay(
        date
      )}`
    );
  }
}
