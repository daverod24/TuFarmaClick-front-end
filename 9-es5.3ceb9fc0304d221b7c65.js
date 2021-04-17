function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function _createClass(o,e,t){return e&&_defineProperties(o.prototype,e),t&&_defineProperties(o,t),o}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{KpZr:function(o,e,t){"use strict";t.r(e),t.d(e,"MedicamentosModule",(function(){return B}));var n=t("ofXK"),r=t("tyNb"),i=t("PSD3"),c=t.n(i),a=t("fXoL"),u=t("NtuB"),b=t("3Pt+"),s=t("oOf3");function d(o,e){if(1&o&&(a.Wb(0,"option",15),a.uc(1),a.Vb()),2&o){var t=e.$implicit;a.kc("value",t.region),a.Hb(1),a.wc(" ",t.region," ")}}var l=function(o){return["editarProducto",o]};function g(o,e){if(1&o){var t=a.Xb();a.Wb(0,"div",16),a.Wb(1,"div",17),a.Sb(2,"img",18),a.Wb(3,"div",19),a.Wb(4,"h5",20),a.uc(5),a.Vb(),a.Wb(6,"p",21),a.uc(7),a.Vb(),a.Wb(8,"a",22),a.Sb(9,"i",23),a.Vb(),a.Wb(10,"a",24),a.ec("click",(function(){a.qc(t);var o=e.$implicit;return a.gc().deleteProdcuto(o._id,o.nombre)})),a.Sb(11,"i",25),a.Vb(),a.Vb(),a.Vb(),a.Vb()}if(2&o){var n=e.$implicit;a.Hb(2),a.kc("src",n.img,a.rc),a.Hb(3),a.vc(n.nombre),a.Hb(2),a.wc("Precio: ",n.precio,""),a.Hb(1),a.kc("routerLink",a.nc(4,l,n._id))}}var p,m=function(){return["nuevoProducto"]},f=function(o){return{itemsPerPage:4,currentPage:o}},v=((p=function(){function o(e){_classCallCheck(this,o),this.productosservice=e,this.page=1,this.titulo="Medicamentos"}return _createClass(o,[{key:"ngOnInit",value:function(){this.listarProductos(),this.actualizarRegiones()}},{key:"actualizarRegiones",value:function(){var o=this;this.productosservice.getRegiones().subscribe((function(e){o.regiones=e.regiones}))}},{key:"listarProductos",value:function(){var o=this;this.productosservice.getMedicamentos().subscribe((function(e){o.listadoProductos=e.productos}))}},{key:"listarMedicamentosPorRegion",value:function(o){var e=this;this.productosservice.getProducotsPorRegion(o).subscribe((function(o){o.ok&&(console.log(o.productos),e.listadoProductos=o.productos)}))}},{key:"filtrarPorRegion",value:function(o){console.log(o),this.regionSelecciona=o,""===o?this.listarProductos():this.listarMedicamentosPorRegion(o)}},{key:"cargarProductosSpreadsheets",value:function(){var o=this;c.a.fire({title:"\xbfEsta seguro que desa actualizar? esta acci\xf3n reiniciar\xe1 la base de datos",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Cargar",denyButtonText:"No cargar"}).then((function(e){e.isConfirmed?o.productosservice.cargarProductosSpreadsheets().subscribe((function(e){o.listarProductos(),o.actualizarRegiones(),e.ok?c.a.fire("".concat(e.msg),"","success"):e.ok||c.a.fire("".concat(e.msg),"","error")}),(function(o){c.a.fire("Ha ocurrido un error inesperado al cargar en la base de datos",o,"error")})):e.isDenied&&c.a.fire("Medicamentos no cargados","","info")}))}},{key:"deleteProdcuto",value:function(o,e){var t=this;c.a.fire({title:"\xbfDesea eliminar el medicamento  ".concat(e,"?"),showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Eliminar",denyButtonText:"No eliminar"}).then((function(e){e.isConfirmed?t.productosservice.deleteProducto(o).subscribe((function(o){t.listarProductos()}),(function(o){c.a.fire("Error al eliminar el producto","","error")})):e.isDenied&&c.a.fire("Medicamento no eliminado","","info")}))}}]),o}()).\u0275fac=function(o){return new(o||p)(a.Rb(u.a))},p.\u0275cmp=a.Lb({type:p,selectors:[["app-medicamentos"]],decls:24,vars:10,consts:[[1,"container"],[1,"container-fluid"],[1,"row"],[1,"col-sm-4"],[1,"col-2"],["type","submit",1,"btn","btn-info","btn-sm",3,"routerLink"],["type","submit",1,"btn","btn-info","btn-sm",3,"click"],[1,"col-4"],["name","region",1,"form-control",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","row-cols-1","row-cols-md-3","row-cols-lg-4","g-4"],["class","col",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["autoHide","true","responsive","true","previousLabel","Anterior","nextLabel","Siguiente",3,"pageChange"],[3,"value"],[1,"col"],[1,"card","mb-3"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-info","btn-sm",3,"routerLink"],[1,"far","fa-edit","icon"],[1,"btn","btn-danger","m-2","btn-sm",3,"click"],[1,"far","fa-trash-alt","icon"]],template:function(o,e){1&o&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Wb(2,"div",2),a.Wb(3,"div",3),a.Wb(4,"h1"),a.uc(5),a.Vb(),a.Sb(6,"hr"),a.Sb(7,"br"),a.Vb(),a.Wb(8,"div",4),a.Wb(9,"button",5),a.uc(10," Nuevo medicamento "),a.Vb(),a.Vb(),a.Wb(11,"div",4),a.Wb(12,"button",6),a.ec("click",(function(){return e.cargarProductosSpreadsheets()})),a.uc(13," Cargar medicamentos desde excel "),a.Vb(),a.Vb(),a.Wb(14,"div",7),a.Wb(15,"select",8),a.ec("change",(function(o){return e.filtrarPorRegion(o.target.value)})),a.Wb(16,"option",9),a.uc(17,"Productos por region"),a.Vb(),a.tc(18,d,2,2,"option",10),a.Vb(),a.Vb(),a.Wb(19,"div",11),a.tc(20,g,12,6,"div",12),a.hc(21,"paginate"),a.Vb(),a.Wb(22,"div",13),a.Wb(23,"pagination-controls",14),a.ec("pageChange",(function(o){return e.page=o})),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb()),2&o&&(a.Hb(5),a.vc(e.titulo),a.Hb(4),a.kc("routerLink",a.mc(7,m)),a.Hb(9),a.kc("ngForOf",e.regiones),a.Hb(2),a.kc("ngForOf",a.jc(21,4,e.listadoProductos,a.nc(8,f,e.page))))},directives:[r.c,b.g,b.l,n.j,s.c,r.e],pipes:[s.b],styles:["*[_ngcontent-%COMP%]{color:#398adb}.icon[_ngcontent-%COMP%]{color:beige!important}"]}),p),h=t("E9a8");function P(o,e){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.uc(2,"El nombre es requerido."),a.Vb(),a.Vb())}function V(o,e){if(1&o&&(a.Wb(0,"option",17),a.uc(1),a.Vb()),2&o){var t=e.$implicit;a.kc("value",t._id),a.Hb(1),a.wc(" ",t.categoria," ")}}function C(o,e){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.uc(2,"Categoria es requerida."),a.Vb(),a.Vb())}function k(o,e){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.Wb(2,"div"),a.uc(3,"Precio es requerido."),a.Vb(),a.Vb(),a.Vb())}function W(o,e){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.uc(2,"Imagen es requerida."),a.Vb(),a.Vb())}var y,_=((y=function(){function o(e,t,n){_classCallCheck(this,o),this.fb=e,this.validatorService=t,this.productosService=n,this.nuevoProducto=new FormData,this.miFormulario=this.fb.group({precio:[0,[b.k.required,b.k.min(0)]],nombre:["",[b.k.required]],categoria:["",[b.k.required]],img:[,[]]},{validators:[this.validatorService.camposIguales("password","password2")]})}return _createClass(o,[{key:"ngOnInit",value:function(){var o=this;this.productosService.getCategorias().subscribe((function(e){o.categorias=e.categorias}))}},{key:"campoNoValido",value:function(o){var e,t;return(null===(e=this.miFormulario.get(o))||void 0===e?void 0:e.invalid)&&(null===(t=this.miFormulario.get(o))||void 0===t?void 0:t.touched)}},{key:"registro",value:function(){var o=this;c.a.fire({title:"\xbfDesea guardar los cambios?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Guardar",denyButtonText:"No guardar"}).then((function(e){if(e.isConfirmed){var t=o.miFormulario.value,n=t.precio,r=t.nombre;o.imagenProducto&&o.nuevoProducto.set("archivo",o.imagenProducto[0]),o.nuevoProducto.set("precio",n),o.nuevoProducto.set("nombre",r),o.nuevoProducto.set("categoria",o.categoria),o.productosService.createProducto(o.nuevoProducto).subscribe((function(e){e&&(c.a.fire("Producto guardado con exito!","","success"),o.miFormulario.reset())}),(function(o){console.log(o.error.msg),c.a.fire("Ha ocurrido un error: "+o.error.msg,"","error")}))}else e.isDenied&&c.a.fire("Producto no guardado","","info")}))}},{key:"capturarFile",value:function(o){this.imagenProducto=o.target.files}},{key:"asignarCategoria",value:function(o){this.categoria=o,console.log(this.categoria)}}]),o}()).\u0275fac=function(o){return new(o||y)(a.Rb(b.b),a.Rb(h.a),a.Rb(u.a))},y.\u0275cmp=a.Lb({type:y,selectors:[["app-agregar-productos"]],decls:34,vars:7,consts:[[1,"container"],[1,"row"],[1,"col-lg"],[1,"col-lg-6"],[3,"formGroup","ngSubmit"],["for","name"],["type","text","placeholder","Introduzca su nombre","formControlName","nombre","required","",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","lastname"],["name","categoria","formControlName","categoria",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","email"],["type","text","placeholder","Introduzca el precio","name","precio","formControlName","precio","required","",1,"form-control"],["for","img"],["type","file","placeholder","Imagen","formControlName","img",1,"form-control",3,"change"],["type","submit",1,"signup-btn",3,"disabled"],[1,"alert","alert-danger"],[3,"value"]],template:function(o,e){1&o&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Sb(2,"div",2),a.Wb(3,"div",3),a.Wb(4,"form",4),a.ec("ngSubmit",(function(){return e.registro()})),a.Wb(5,"h1"),a.uc(6,"A\xf1adir producto"),a.Vb(),a.Sb(7,"hr"),a.Wb(8,"label",5),a.Wb(9,"b"),a.uc(10,"Nombre"),a.Vb(),a.Vb(),a.Sb(11,"input",6),a.tc(12,P,3,0,"div",7),a.Wb(13,"label",8),a.Wb(14,"b"),a.uc(15,"Categoria"),a.Vb(),a.Vb(),a.Wb(16,"select",9),a.ec("change",(function(o){return e.asignarCategoria(o.target.value)})),a.tc(17,V,2,2,"option",10),a.Vb(),a.tc(18,C,3,0,"div",7),a.Wb(19,"label",11),a.Wb(20,"b"),a.uc(21,"Precio"),a.Vb(),a.Vb(),a.Sb(22,"input",12),a.tc(23,k,4,0,"div",7),a.Wb(24,"label",13),a.Wb(25,"b"),a.uc(26,"Imagen"),a.Vb(),a.Vb(),a.Wb(27,"input",14),a.ec("change",(function(o){return e.capturarFile(o)})),a.Vb(),a.tc(28,W,3,0,"div",7),a.Wb(29,"div",1),a.Wb(30,"div",2),a.Wb(31,"button",15),a.uc(32," Guardar "),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Sb(33,"div",2),a.Vb(),a.Vb()),2&o&&(a.Hb(4),a.kc("formGroup",e.miFormulario),a.Hb(8),a.kc("ngIf",e.campoNoValido("nombre")),a.Hb(5),a.kc("ngForOf",e.categorias),a.Hb(1),a.kc("ngIf",e.campoNoValido("categoria")),a.Hb(5),a.kc("ngIf",e.campoNoValido("precio")),a.Hb(5),a.kc("ngIf",e.campoNoValido("img")),a.Hb(3),a.kc("disabled",e.miFormulario.invalid))},directives:[b.m,b.f,b.d,b.a,b.e,b.c,b.i,n.k,b.j,n.j,b.g,b.l],styles:["*[_ngcontent-%COMP%]{color:#398adb}form[_ngcontent-%COMP%]{border:1px solid #ccc;padding:16px}h1[_ngcontent-%COMP%]{color:#398adb}hr[_ngcontent-%COMP%]{border:1px solid #f1f1f1;margin-bottom:25px}label[_ngcontent-%COMP%]{color:#578add}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.signup-btn[_ngcontent-%COMP%]{background-color:#287dd4}.signup-btn[_ngcontent-%COMP%]:disabled{background-color:#7c7d7c;cursor:not-allowed}.signup-btn[_ngcontent-%COMP%]:active{background-color:#1d6fb7}.cancel-btn[_ngcontent-%COMP%]:hover, .signup-btn[_ngcontent-%COMP%]:hover{opacity:1}.cancel-btn[_ngcontent-%COMP%]{padding:14px 20px;background-color:#f44336}.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;opacity:.9;width:100%}@media screen and (max-width:300px){.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{width:100%}}"]}),y),O=t("eIep");function x(o,e){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.uc(2,"El nombre es requerido."),a.Vb(),a.Vb())}function M(o,e){if(1&o&&(a.Wb(0,"option",17),a.uc(1),a.Vb()),2&o){var t=e.$implicit;a.kc("value",t._id),a.Hb(1),a.wc(" ",t.nombre," ")}}function w(o,e){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.uc(2,"Categoria es requerida."),a.Vb(),a.Vb())}function F(o,e){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.Wb(2,"div"),a.uc(3,"Precio es requerido."),a.Vb(),a.Vb(),a.Vb())}function S(o,e){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.uc(2,"Imagen es requerida."),a.Vb(),a.Vb())}var H,I,N,q=[{path:"",component:v},{path:"agregarprd",component:_},{path:"editarProducto/:_id",component:(H=function(){function o(e,t,n){_classCallCheck(this,o),this.fb=e,this.productosService=t,this.activatedRoute=n,this.nuevoProducto=new FormData,this.miFormulario=this.fb.group({precio:[0,[b.k.required,b.k.min(0)]],nombre:["",[b.k.required]],categoria:["",[b.k.required]],img:[,[]]})}return _createClass(o,[{key:"ngOnInit",value:function(){var o=this;this.productosService.getCategorias().subscribe((function(e){o.categorias=e.categorias})),this.activatedRoute.params.subscribe((function(e){var t=e._id;o.productoId=t})),this.activatedRoute.params.pipe(Object(O.a)((function(e){var t=e._id;return o.productosService.getProductoPorId(t)}))).subscribe((function(e){o.categoria=e.categoria._id,o.miFormulario.setValue({precio:e.precio,nombre:e.nombre,categoria:e.categoria._id,img:[,[]]})}))}},{key:"campoNoValido",value:function(o){var e,t;return(null===(e=this.miFormulario.get(o))||void 0===e?void 0:e.invalid)&&(null===(t=this.miFormulario.get(o))||void 0===t?void 0:t.touched)}},{key:"registro",value:function(){var o=this;c.a.fire({title:"\xbfDesea actuliar el producto?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Actualizar",denyButtonText:"No actualizar"}).then((function(e){if(e.isConfirmed){var t=o.miFormulario.value,n=t.precio,r=t.nombre;o.imagenProducto&&o.nuevoProducto.set("archivo",o.imagenProducto[0]),o.nuevoProducto.set("precio",n),o.nuevoProducto.set("nombre",r),o.nuevoProducto.set("categoria",o.categoria),console.log(o.nuevoProducto.get("precio")),o.productosService.actualizarProducto(o.productoId,o.nuevoProducto).subscribe((function(o){console.log(o),o&&c.a.fire("Producto actualizado con exito!","","success")}),(function(o){console.log(o.error.msg),c.a.fire("Ha ocurrido un error: "+o.error.msg,"","error")}))}else e.isDenied&&c.a.fire("Producto no actualizado","","info")}))}},{key:"asignarCategoria",value:function(o){this.categoria=o,console.log(this.categoria)}},{key:"capturarFile",value:function(o){this.imagenProducto=o.target.files}}]),o}(),H.\u0275fac=function(o){return new(o||H)(a.Rb(b.b),a.Rb(u.a),a.Rb(r.a))},H.\u0275cmp=a.Lb({type:H,selectors:[["app-editar-medicamento"]],decls:37,vars:13,consts:[[1,"container"],[1,"row"],[1,"col-lg"],[1,"col-lg-6"],[3,"formGroup","ngSubmit"],["for","name"],["type","text","placeholder","Introduzca su nombre","formControlName","nombre","required","",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","lastname"],["name","categoria","formControlName","categoria",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","email"],["type","text","placeholder","Introduzca el precio","name","precio","formControlName","precio","required","",1,"form-control"],["for","img"],["type","file","placeholder","Imagen","name","img",1,"form-control",3,"change"],["type","submit",1,"signup-btn",3,"disabled"],[1,"alert","alert-danger"],[3,"value"]],template:function(o,e){1&o&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Sb(2,"div",2),a.Wb(3,"div",3),a.Wb(4,"form",4),a.ec("ngSubmit",(function(){return e.registro()})),a.Wb(5,"h1"),a.uc(6,"A\xf1adir producto"),a.Vb(),a.Sb(7,"hr"),a.Wb(8,"label",5),a.Wb(9,"b"),a.uc(10,"Nombre"),a.Vb(),a.Vb(),a.Sb(11,"input",6),a.tc(12,x,3,0,"div",7),a.Wb(13,"label",8),a.Wb(14,"b"),a.uc(15,"Categoria"),a.Vb(),a.Vb(),a.Wb(16,"select",9),a.ec("change",(function(o){return e.asignarCategoria(o.target.value)})),a.tc(17,M,2,2,"option",10),a.Vb(),a.tc(18,w,3,0,"div",7),a.Wb(19,"label",11),a.Wb(20,"b"),a.uc(21,"Precio"),a.Vb(),a.Vb(),a.Sb(22,"input",12),a.tc(23,F,4,0,"div",7),a.Wb(24,"label",13),a.Wb(25,"b"),a.uc(26,"Imagen"),a.Vb(),a.Vb(),a.Wb(27,"input",14),a.ec("change",(function(o){return e.capturarFile(o)})),a.Vb(),a.tc(28,S,3,0,"div",7),a.Wb(29,"div",1),a.Wb(30,"div",2),a.Wb(31,"button",15),a.uc(32," Editar "),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Sb(33,"div",2),a.uc(34),a.hc(35,"json"),a.hc(36,"json"),a.Vb(),a.Vb()),2&o&&(a.Hb(4),a.kc("formGroup",e.miFormulario),a.Hb(8),a.kc("ngIf",e.campoNoValido("nombre")),a.Hb(5),a.kc("ngForOf",e.categorias),a.Hb(1),a.kc("ngIf",e.campoNoValido("categoria")),a.Hb(5),a.kc("ngIf",e.campoNoValido("precio")),a.Hb(5),a.kc("ngIf",e.campoNoValido("img")),a.Hb(3),a.kc("disabled",e.miFormulario.invalid),a.Hb(3),a.xc(" ",a.ic(35,9,e.miFormulario.valid)," ",a.ic(36,11,e.miFormulario.value)," "))},directives:[b.m,b.f,b.d,b.a,b.e,b.c,b.i,n.k,b.j,n.j,b.g,b.l],pipes:[n.f],styles:["*[_ngcontent-%COMP%]{color:#398adb}form[_ngcontent-%COMP%]{border:1px solid #ccc;padding:16px}h1[_ngcontent-%COMP%]{color:#398adb}hr[_ngcontent-%COMP%]{border:1px solid #f1f1f1;margin-bottom:25px}label[_ngcontent-%COMP%]{color:#578add}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.signup-btn[_ngcontent-%COMP%]{background-color:#287dd4}.signup-btn[_ngcontent-%COMP%]:disabled{background-color:#7c7d7c;cursor:not-allowed}.signup-btn[_ngcontent-%COMP%]:active{background-color:#1d6fb7}.cancel-btn[_ngcontent-%COMP%]:hover, .signup-btn[_ngcontent-%COMP%]:hover{opacity:1}.cancel-btn[_ngcontent-%COMP%]{padding:14px 20px;background-color:#f44336}.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;opacity:.9;width:100%}@media screen and (max-width:300px){.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{width:100%}}"]}),H)},{path:"nuevoProducto",component:_}],R=((N=function o(){_classCallCheck(this,o)}).\u0275mod=a.Pb({type:N}),N.\u0275inj=a.Ob({factory:function(o){return new(o||N)},imports:[[r.f.forChild(q)],r.f]}),N),B=((I=function o(){_classCallCheck(this,o)}).\u0275mod=a.Pb({type:I}),I.\u0275inj=a.Ob({factory:function(o){return new(o||I)},imports:[[n.b,R,s.a,b.h]]}),I)}}]);