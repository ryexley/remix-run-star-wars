export class HttpRequestError extends Error {
  constructor({ status, statusText, data, name = "HttpRequestError" }, ...args) {
    super(...args)
    this.name = name
    this.status = status
    this.statusText = statusText
    this.data = data

    if (Error.captureStackTrace && typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, HttpRequestError)
    }
  }
}
