// Generated from src/test/java/com/google/javascript/clutz/testdata/circular_prototype.js
declare namespace ಠ_ಠ.clutz.module$exports$circular$obj {
  let deepObj : { a : number , child : { //!! Unsupported circular reference for prop name: cycle
  } , z : number } ;
  let obj : { a : number , //!! Unsupported circular reference for prop name: constructor
  z : number } ;
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/circular_prototype.js
declare module 'goog:circular.obj' {
  import obj = ಠ_ಠ.clutz.module$exports$circular$obj;
  export = obj;
}
