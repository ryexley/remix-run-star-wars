export class ServiceClientError extends Error {
  constructor(...args) {
    super(...args)
    this.name = "ServiceClientError"

    if (Error.captureStackTrace && typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, ServiceClientError)
    }
  }
}
