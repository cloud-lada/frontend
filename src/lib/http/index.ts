/**
 * The HTTPClient class is used to perform restful HTTP requests.
 */
export class HTTPClient {
  /**
   * Perform an HTTP GET request to a desired URI.
   * @param uri The URI to send the HTTP request to.
   */
  async get<Response>(uri: string): Promise<Response> {
    return call("GET", uri, null);
  }
}

/**
 * Perform an HTTP request to a desired endpoint
 * @param method The HTTP verb to use (GET, PUT, POST etc.)
 * @param uri The URI to send the HTTP request to.
 * @param body The contents of the request body, will be JSON encoded.
 */
async function call<Request, Response>(
  method: string,
  uri: string,
  body: Request
): Promise<Response> {
  const response = await fetch(uri, {
    method,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return (await response.json()) as Response;
}
