declare namespace ಠ_ಠ.clutz.googmodule {
  class Required extends Required_Instance {
  }
  class Required_Instance {
    private noStructuralTyping_: any;
  }
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'googmodule.Required'): typeof ಠ_ಠ.clutz.googmodule.Required;
}
declare module 'goog:googmodule.Required' {
  import alias = ಠ_ಠ.clutz.googmodule.Required;
  export default alias;
}
declare namespace ಠ_ಠ.clutz.module$exports$googmodule$TheModule {
  var a : number ;
  var b : number ;
  var required : ಠ_ಠ.clutz.googmodule.Required ;
  var requiredDefault : module$contents$googmodule$requiredModuleDefault_A ;
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'module$exports$googmodule$TheModule'): typeof ಠ_ಠ.clutz.module$exports$googmodule$TheModule;
}
declare module 'goog:googmodule.TheModule' {
  import alias = ಠ_ಠ.clutz.module$exports$googmodule$TheModule;
  export = alias;
}
declare namespace ಠ_ಠ.clutz.module$exports$googmodule$requiredModule {
  var rm : number ;
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'module$exports$googmodule$requiredModule'): typeof ಠ_ಠ.clutz.module$exports$googmodule$requiredModule;
}
declare module 'goog:googmodule.requiredModule' {
  import alias = ಠ_ಠ.clutz.module$exports$googmodule$requiredModule;
  export = alias;
}
declare namespace ಠ_ಠ.clutz {
  type module$exports$googmodule$requiredModuleDefault = ಠ_ಠ.clutz.module$contents$googmodule$requiredModuleDefault_A ;
  var module$exports$googmodule$requiredModuleDefault : typeof ಠ_ಠ.clutz.module$contents$googmodule$requiredModuleDefault_A ;
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'module$exports$googmodule$requiredModuleDefault'): typeof ಠ_ಠ.clutz.module$exports$googmodule$requiredModuleDefault;
}
declare module 'goog:googmodule.requiredModuleDefault' {
  import alias = ಠ_ಠ.clutz.module$exports$googmodule$requiredModuleDefault;
  export default alias;
}
declare namespace ಠ_ಠ.clutz {
  class module$contents$googmodule$requiredModuleDefault_A extends module$contents$googmodule$requiredModuleDefault_A_Instance {
  }
  class module$contents$googmodule$requiredModuleDefault_A_Instance {
    private noStructuralTyping_: any;
  }
}
