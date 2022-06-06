/**
 * The Status type contains fields that describe the status of data within the backend.
 */
export type Status = {
  /**
   * The timestamp of when data was last ingested by the backend.
   */
  lastIngestTimestamp: Date;
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
 * The StatusClient is responsible for obtaining information on the status of data in the backend.
 */
export class StatusClient {
  client: HTTP;

  /**
   * Initialises a new instance of the StatusClient class
   * @param client The HTTP client to use
   */
  constructor(client: HTTP) {
    this.client = client;
  }

  /**
   * Return the latest known status from the API.
   */
  async status(): Promise<Status> {
    return await this.client.get("/api/status");
  }
}
