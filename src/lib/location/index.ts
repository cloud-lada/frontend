/**
 * The Location type contains fields describing the current position of the lada.
 */
export type Location = {
  latitude: number;
  longitude: number;
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
 * The LocationClient class is used to grab location data from the API.
 */
export class LocationClient {
  client: HTTP;

  /**
   * Initialises a new instance of the LocationClient class.
   * @param client The HTTP client to use
   */
  constructor(client: HTTP) {
    this.client = client;
  }

  /**
   * Grab the latest location from the API
   */
  async latest(): Promise<Location> {
    return await this.client.get("/api/location/latest");
  }
}
