goog.provide('goog.Thenable');

/**
 * Provides a more strict interface for Thenables in terms of
 * http://promisesaplus.com for interop with {@see goog.Promise}.
 *
 * @interface
 * @extends {IThenable<TYPE>}
 * @template TYPE
 */
goog.Thenable = function() {};


/**
 * Adds callbacks that will operate on the result of the Thenable, returning a
 * new child Promise.
 *
 * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
 * invoked with the fulfillment value as argument, and the child Promise will
 * be fulfilled with the return value of the callback. If the callback throws
 * an exception, the child Promise will be rejected with the thrown value
 * instead.
 *
 * If the Thenable is rejected, the {@code onRejected} callback will be invoked
 * with the rejection reason as argument, and the child Promise will be rejected
 * with the return value of the callback or thrown value.
 *
 * @param {?(function(this:THIS, TYPE): VALUE)=} opt_onFulfilled A
 *     function that will be invoked with the fulfillment value if the Promise
 *     is fulfilled.
 * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will
 *     be invoked with the rejection reason if the Promise is rejected.
 * @param {THIS=} opt_context An optional context object that will be the
 *     execution context for the callbacks. By default, functions are executed
 *     with the default this.
 *
 * @return {RESULT} A new Promise that will receive the result
 *     of the fulfillment or rejection callback.
 * @template VALUE
 * @template THIS
 *
 * When a Promise (or thenable) is returned from the fulfilled callback,
 * the result is the payload of that promise, not the promise itself.
 *
 * @template RESULT := type('goog.Promise',
 *     cond(isUnknown(VALUE), unknown(),
 *       mapunion(VALUE, (V) =>
 *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
 *           templateTypeOf(V, 0),
 *           cond(sub(V, 'Thenable'),
 *              unknown(),
 *              V)))))
 *  =:
 *
 */
goog.Thenable.prototype.then = function(
    opt_onFulfilled, opt_onRejected, opt_context) {};
