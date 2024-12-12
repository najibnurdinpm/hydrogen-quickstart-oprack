/**
 * This is a custom session implementation for your Hydrogen shop.
 * Feel free to customize it to your needs, add helper methods, or
 * swap out the cookie-based implementation with something else!
 */
export class AppSession {
  /**
   * @public
   * @default false
   */
  isPending = false;
  

  /**
   * @static
   * @param {Request} request
   * @param {string[]} secrets
   */
  static async init(request, secrets) {
    
    return {};
  }

  get has() {
    return {};
  }

  get get() {
    return {};
  }

  get flash() {
    return {};
  }

  get unset() {
    this.isPending = true;
    return {};
  }

  get set() {
    this.isPending = true;
    return {};
  }

  destroy() {
    return {};
  }

  commit() {
    this.isPending = false;
    return {};
  }
}

/** @typedef {import('@shopify/hydrogen').HydrogenSession} HydrogenSession */
