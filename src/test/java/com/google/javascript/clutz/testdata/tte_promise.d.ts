// Generated from src/test/java/com/google/javascript/clutz/testdata/tte_promise.js
declare namespace ಠ_ಠ.clutz.angular.$q {
  class Promise < T > {
    private noStructuralTyping_angular_$q_Promise : any;
    then < RESULT > (opt_onFulfilled ? : ( (a : T ) => ಠ_ಠ.clutz.angular.$q.Promise < RESULT > | RESULT | ಠ_ಠ.clutz.angular.$q.Promise<never>) | null , opt_onRejected ? : ( (a : any ) => any ) | null) : ಠ_ಠ.clutz.angular.$q.Promise < RESULT > ;
    when < RESULT, T > (value: T, successCallback: (promiseValue: T) => ಠ_ಠ.clutz.angular.$q.Promise < RESULT >|RESULT, errorCallback: null | undefined |  ((reason: any) => any), notifyCallback?: (state: any) => any): ಠ_ಠ.clutz.angular.$q.Promise < RESULT >;
    static all(promises : ಠ_ಠ.clutz.angular.$q.Promise < any > [] ) : ಠ_ಠ.clutz.angular.$q.Promise < any [] > ;
    static race < T > (values : T [] ) : ಠ_ಠ.clutz.angular.$q.Promise < T > ;
    static resolve < T >(value: PromiseLike < T > | T): ಠ_ಠ.clutz.angular.$q.Promise < T >;
  }
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/tte_promise.js
declare module 'goog:angular.$q.Promise' {
  import Promise = ಠ_ಠ.clutz.angular.$q.Promise;
  export default Promise;
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/tte_promise.js
declare namespace ಠ_ಠ.clutz.angular.$q {
  class PromiseService < T > {
    private noStructuralTyping_angular_$q_PromiseService : any;
    all(promises : ಠ_ಠ.clutz.angular.$q.PromiseService.Promise < any > [] ) : ಠ_ಠ.clutz.angular.$q.PromiseService.Promise < any [] > ;
  }
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/tte_promise.js
declare namespace ಠ_ಠ.clutz.angular.$q.PromiseService {
  interface Promise < T > {
  }
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/tte_promise.js
declare module 'goog:angular.$q.PromiseService' {
  import PromiseService = ಠ_ಠ.clutz.angular.$q.PromiseService;
  export default PromiseService;
}
