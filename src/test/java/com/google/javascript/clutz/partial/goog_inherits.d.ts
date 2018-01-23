declare namespace ಠ_ಠ.clutz.a.b {
  class C extends C_Instance {
  }
  class C_Instance extends some.other.C {
    constructor ( ) ;
    emitted : string ;
    missing : string;
  }
}
declare module 'goog:a.b.C' {
  import alias = ಠ_ಠ.clutz.a.b.C;
  export default alias;
}
