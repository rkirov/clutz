goog.provide('a.b.C');

goog.require('some.other.C');

/**
 * @constructor
 * @extends {some.other.C}
 */
a.b.C = function() {
  a.b.C.base(this, 'constructor');

  /**
   * @type {string}
   */
  this.missing;

  /**
   * @type {string}
   */
  this.emitted = '';
};
goog.inherits(a.b.C, some.other.C);