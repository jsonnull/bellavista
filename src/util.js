export class Util {
  static isArray (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]'
  }
}
