declare namespace ಠ_ಠ.clutz.some.ns {
  var }
  declare module 'goog:some.ns' {
    import alias = ಠ_ಠ.clutz.some.ns;
    export = alias;
  }
  declare namespace ಠ_ಠ.clutz.some.other.ns {
    enum E {
      A ,
    }
  }
  declare module 'goog:some.other.ns' {
    import alias = ಠ_ಠ.clutz.some.other.ns;
    export = alias;
  }
