export default class Currency {
  constructor(code, name) {
    /**
   * Represents a currency with a code and a name.
   *
   * @constructor
   * @param {string} code - The ISO 4217 currency code (e.g., USD, EUR, JPY).
   * @param {string} name - The full name of the currency (e.g., United States Dollar, Euro, Japanese Yen).
   * @throws {Error} - If either code or name is not a string.
   */
    if (typeof code !== 'string' || typeof name !== 'string') throw new Error();
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
