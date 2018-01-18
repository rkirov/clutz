goog.provide('some.ns');
goog.provide('some.other.ns');

/** @enum {number} */
some.other.ns.E = {
  A: 0
};

goog.scope(function() {
  var ns = some.ns;
  ns.EAlias = some.other.ns.E;
});