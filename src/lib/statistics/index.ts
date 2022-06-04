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

  /**
   * Initialises a new instance of the StatisticsClient class.
   * @param client The HTTP client to use
   */
  constructor(client: HTTP) {
    this.client = client;
  }

  /**
   * Grab the latest statistics from the API
   */
  async latest(): Promise<Statistics> {
    return await this.client.get("/api/statistics/latest");
  }
}
