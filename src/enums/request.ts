export enum RequestMethod {
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
  PUT = "PUT",
  HEAD = "HEAD",
  CONNECT = "CONNECT",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
}

export enum RequestCache {
  noCache = "no-cache",
  default = "default",
  reload = "reload",
  forceCache = "force-cache",
  onlyIfCached = "only-if-cached",
  cache = "cache",
}

export enum RequestMode {
  noCors = "no-cors",
  sameOrigin = "same-origin",
  cors = "cors",
}

export enum ResponseType {
  NIL = "",
  ARRAYBUFFER = "arraybuffer",
  BLOB = "blob",
  DOCUMENT = "document",
  JSON = "json",
  TEXT = "text",
  MSSTREAM = "ms-stream",
}
