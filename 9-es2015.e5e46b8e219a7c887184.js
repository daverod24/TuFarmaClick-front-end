(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{KpZr:function(o,t,e){"use strict";e.r(t),e.d(t,"MedicamentosModule",(function(){return S}));var r=e("ofXK"),i=e("tyNb"),n=e("PSD3"),c=e.n(n),a=e("fXoL"),b=e("NtuB"),d=e("oOf3");const s=function(o){return["editarProducto",o]};function u(o,t){if(1&o){const o=a.Xb();a.Wb(0,"div",4),a.Wb(1,"div",10),a.Sb(2,"img",11),a.Wb(3,"div",12),a.Wb(4,"h5",13),a.tc(5),a.Vb(),a.Wb(6,"p",14),a.tc(7),a.Vb(),a.Wb(8,"a",15),a.Sb(9,"i",16),a.Vb(),a.Wb(10,"a",17),a.ec("click",(function(){a.pc(o);const e=t.$implicit;return a.gc().deleteProdcuto(e._id,e.nombre)})),a.Sb(11,"i",18),a.Vb(),a.Vb(),a.Vb(),a.Vb()}if(2&o){const o=t.$implicit;a.Hb(2),a.kc("src",o.img,a.qc),a.Hb(3),a.uc(o.nombre),a.Hb(2),a.vc("Precio: ",o.precio,""),a.Hb(1),a.kc("routerLink",a.mc(4,s,o._id))}}const l=function(){return["nuevoProducto"]},g=function(o){return{itemsPerPage:4,currentPage:o}};let m=(()=>{class o{constructor(o){this.productosservice=o,this.page=1,this.titulo="Medicamentos"}ngOnInit(){this.listarProductos()}listarProductos(){this.productosservice.getMedicamentos().subscribe(o=>{this.listadoProductos=o.productos})}deleteProdcuto(o,t){c.a.fire({title:`\xbfDesea eliminar el medicamento  ${t}?`,showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Eliminar",denyButtonText:"No eliminar"}).then(t=>{t.isConfirmed?this.productosservice.deleteProducto(o).subscribe(o=>{this.listarProductos()},o=>{c.a.fire("Error al eliminar el producto","","error")}):t.isDenied&&c.a.fire("Medicamento no eliminado","","info")})}}return o.\u0275fac=function(t){return new(t||o)(a.Rb(b.a))},o.\u0275cmp=a.Lb({type:o,selectors:[["app-medicamentos"]],decls:16,vars:9,consts:[[1,"container"],[1,"container-fluid"],[1,"row"],[1,"col-sm-4"],[1,"col"],["type","submit",1,"btn","btn-info","btn-sm",3,"routerLink"],[1,"row","row-cols-1","row-cols-md-3","row-cols-lg-4","g-4"],["class","col",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["autoHide","true","responsive","true","previousLabel","Anterior","nextLabel","Siguiente",3,"pageChange"],[1,"card","mb-3"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-info","btn-sm",3,"routerLink"],[1,"far","fa-edit","icon"],[1,"btn","btn-danger","m-2","btn-sm",3,"click"],[1,"far","fa-trash-alt","icon"]],template:function(o,t){1&o&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Wb(2,"div",2),a.Wb(3,"div",3),a.Wb(4,"h1"),a.tc(5),a.Vb(),a.Sb(6,"hr"),a.Sb(7,"br"),a.Vb(),a.Wb(8,"div",4),a.Wb(9,"button",5),a.tc(10," Nuevo medicamento"),a.Vb(),a.Vb(),a.Vb(),a.Wb(11,"div",6),a.sc(12,u,12,6,"div",7),a.hc(13,"paginate"),a.Vb(),a.Wb(14,"div",8),a.Wb(15,"pagination-controls",9),a.ec("pageChange",(function(o){return t.page=o})),a.Vb(),a.Vb(),a.Vb(),a.Vb()),2&o&&(a.Hb(5),a.uc(t.titulo),a.Hb(4),a.kc("routerLink",a.lc(6,l)),a.Hb(3),a.kc("ngForOf",a.jc(13,3,t.listadoProductos,a.mc(7,g,t.page))))},directives:[i.c,r.j,d.c,i.e],pipes:[d.b],styles:["*[_ngcontent-%COMP%]{color:#398adb}.icon[_ngcontent-%COMP%]{color:beige!important}"]}),o})();var p=e("3Pt+"),f=e("E9a8");function v(o,t){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.tc(2,"El nombre es requerido."),a.Vb(),a.Vb())}function h(o,t){if(1&o&&(a.Wb(0,"option",17),a.tc(1),a.Vb()),2&o){const o=t.$implicit;a.kc("value",o._id),a.Hb(1),a.vc(" ",o.nombre," ")}}function P(o,t){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.tc(2,"Categoria es requerida."),a.Vb(),a.Vb())}function V(o,t){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.Wb(2,"div"),a.tc(3,"Precio es requerido."),a.Vb(),a.Vb(),a.Vb())}function W(o,t){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.tc(2,"Imagen es requerida."),a.Vb(),a.Vb())}let C=(()=>{class o{constructor(o,t,e){this.fb=o,this.validatorService=t,this.productosService=e,this.nuevoProducto=new FormData,this.miFormulario=this.fb.group({precio:[0,[p.k.required,p.k.min(0)]],nombre:["",[p.k.required]],categoria:["",[p.k.required]],img:[,[]]},{validators:[this.validatorService.camposIguales("password","password2")]})}ngOnInit(){this.productosService.getCategorias().subscribe(o=>{this.categorias=o.categorias})}campoNoValido(o){var t,e;return(null===(t=this.miFormulario.get(o))||void 0===t?void 0:t.invalid)&&(null===(e=this.miFormulario.get(o))||void 0===e?void 0:e.touched)}registro(){c.a.fire({title:"\xbfDesea guardar los cambios?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Guardar",denyButtonText:"No guardar"}).then(o=>{if(o.isConfirmed){const{precio:o,nombre:t}=this.miFormulario.value;this.imagenProducto&&this.nuevoProducto.set("archivo",this.imagenProducto[0]),this.nuevoProducto.set("precio",o),this.nuevoProducto.set("nombre",t),this.nuevoProducto.set("categoria",this.categoria),this.productosService.createProducto(this.nuevoProducto).subscribe(o=>{o&&(c.a.fire("Producto guardado con exito!","","success"),this.miFormulario.reset())},o=>{console.log(o.error.msg),c.a.fire("Ha ocurrido un error: "+o.error.msg,"","error")})}else o.isDenied&&c.a.fire("Producto no guardado","","info")})}capturarFile(o){this.imagenProducto=o.target.files}asignarCategoria(o){this.categoria=o,console.log(this.categoria)}}return o.\u0275fac=function(t){return new(t||o)(a.Rb(p.b),a.Rb(f.a),a.Rb(b.a))},o.\u0275cmp=a.Lb({type:o,selectors:[["app-agregar-productos"]],decls:34,vars:7,consts:[[1,"container"],[1,"row"],[1,"col-lg"],[1,"col-lg-6"],[3,"formGroup","ngSubmit"],["for","name"],["type","text","placeholder","Introduzca su nombre","formControlName","nombre","required","",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","lastname"],["name","categoria","formControlName","categoria",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","email"],["type","text","placeholder","Introduzca el precio","name","precio","formControlName","precio","required","",1,"form-control"],["for","img"],["type","file","placeholder","Imagen","formControlName","img",1,"form-control",3,"change"],["type","submit",1,"signup-btn",3,"disabled"],[1,"alert","alert-danger"],[3,"value"]],template:function(o,t){1&o&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Sb(2,"div",2),a.Wb(3,"div",3),a.Wb(4,"form",4),a.ec("ngSubmit",(function(){return t.registro()})),a.Wb(5,"h1"),a.tc(6,"A\xf1adir producto"),a.Vb(),a.Sb(7,"hr"),a.Wb(8,"label",5),a.Wb(9,"b"),a.tc(10,"Nombre"),a.Vb(),a.Vb(),a.Sb(11,"input",6),a.sc(12,v,3,0,"div",7),a.Wb(13,"label",8),a.Wb(14,"b"),a.tc(15,"Categoria"),a.Vb(),a.Vb(),a.Wb(16,"select",9),a.ec("change",(function(o){return t.asignarCategoria(o.target.value)})),a.sc(17,h,2,2,"option",10),a.Vb(),a.sc(18,P,3,0,"div",7),a.Wb(19,"label",11),a.Wb(20,"b"),a.tc(21,"Precio"),a.Vb(),a.Vb(),a.Sb(22,"input",12),a.sc(23,V,4,0,"div",7),a.Wb(24,"label",13),a.Wb(25,"b"),a.tc(26,"Imagen"),a.Vb(),a.Vb(),a.Wb(27,"input",14),a.ec("change",(function(o){return t.capturarFile(o)})),a.Vb(),a.sc(28,W,3,0,"div",7),a.Wb(29,"div",1),a.Wb(30,"div",2),a.Wb(31,"button",15),a.tc(32," Guardar "),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Sb(33,"div",2),a.Vb(),a.Vb()),2&o&&(a.Hb(4),a.kc("formGroup",t.miFormulario),a.Hb(8),a.kc("ngIf",t.campoNoValido("nombre")),a.Hb(5),a.kc("ngForOf",t.categorias),a.Hb(1),a.kc("ngIf",t.campoNoValido("categoria")),a.Hb(5),a.kc("ngIf",t.campoNoValido("precio")),a.Hb(5),a.kc("ngIf",t.campoNoValido("img")),a.Hb(3),a.kc("disabled",t.miFormulario.invalid))},directives:[p.m,p.f,p.d,p.a,p.e,p.c,p.i,r.k,p.j,r.j,p.g,p.l],styles:["*[_ngcontent-%COMP%]{color:#398adb}form[_ngcontent-%COMP%]{border:1px solid #ccc;padding:16px}h1[_ngcontent-%COMP%]{color:#398adb}hr[_ngcontent-%COMP%]{border:1px solid #f1f1f1;margin-bottom:25px}label[_ngcontent-%COMP%]{color:#578add}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.signup-btn[_ngcontent-%COMP%]{background-color:#287dd4}.signup-btn[_ngcontent-%COMP%]:disabled{background-color:#7c7d7c;cursor:not-allowed}.signup-btn[_ngcontent-%COMP%]:active{background-color:#1d6fb7}.cancel-btn[_ngcontent-%COMP%]:hover, .signup-btn[_ngcontent-%COMP%]:hover{opacity:1}.cancel-btn[_ngcontent-%COMP%]{padding:14px 20px;background-color:#f44336}.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;opacity:.9;width:100%}@media screen and (max-width:300px){.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{width:100%}}"]}),o})();var O=e("eIep");function x(o,t){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.tc(2,"El nombre es requerido."),a.Vb(),a.Vb())}function _(o,t){if(1&o&&(a.Wb(0,"option",17),a.tc(1),a.Vb()),2&o){const o=t.$implicit;a.kc("value",o._id),a.Hb(1),a.vc(" ",o.nombre," ")}}function k(o,t){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.tc(2,"Categoria es requerida."),a.Vb(),a.Vb())}function M(o,t){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.Wb(2,"div"),a.tc(3,"Precio es requerido."),a.Vb(),a.Vb(),a.Vb())}function w(o,t){1&o&&(a.Wb(0,"div",16),a.Wb(1,"div"),a.tc(2,"Imagen es requerida."),a.Vb(),a.Vb())}const y=[{path:"",component:m},{path:"agregarprd",component:C},{path:"editarProducto/:_id",component:(()=>{class o{constructor(o,t,e){this.fb=o,this.productosService=t,this.activatedRoute=e,this.nuevoProducto=new FormData,this.miFormulario=this.fb.group({precio:[0,[p.k.required,p.k.min(0)]],nombre:["",[p.k.required]],categoria:["",[p.k.required]],img:[,[]]})}ngOnInit(){this.productosService.getCategorias().subscribe(o=>{this.categorias=o.categorias}),this.activatedRoute.params.subscribe(({_id:o})=>{this.productoId=o}),this.activatedRoute.params.pipe(Object(O.a)(({_id:o})=>this.productosService.getProductoPorId(o))).subscribe(o=>{this.categoria=o.categoria._id,this.miFormulario.setValue({precio:o.precio,nombre:o.nombre,categoria:o.categoria._id,img:[,[]]})})}campoNoValido(o){var t,e;return(null===(t=this.miFormulario.get(o))||void 0===t?void 0:t.invalid)&&(null===(e=this.miFormulario.get(o))||void 0===e?void 0:e.touched)}registro(){c.a.fire({title:"\xbfDesea actuliar el producto?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Actualizar",denyButtonText:"No actualizar"}).then(o=>{if(o.isConfirmed){const{precio:o,nombre:t}=this.miFormulario.value;this.imagenProducto&&this.nuevoProducto.set("archivo",this.imagenProducto[0]),this.nuevoProducto.set("precio",o),this.nuevoProducto.set("nombre",t),this.nuevoProducto.set("categoria",this.categoria),console.log(this.nuevoProducto.get("precio")),this.productosService.actualizarProducto(this.productoId,this.nuevoProducto).subscribe(o=>{console.log(o),o&&c.a.fire("Producto actualizado con exito!","","success")},o=>{console.log(o.error.msg),c.a.fire("Ha ocurrido un error: "+o.error.msg,"","error")})}else o.isDenied&&c.a.fire("Producto no actualizado","","info")})}asignarCategoria(o){this.categoria=o,console.log(this.categoria)}capturarFile(o){this.imagenProducto=o.target.files}}return o.\u0275fac=function(t){return new(t||o)(a.Rb(p.b),a.Rb(b.a),a.Rb(i.a))},o.\u0275cmp=a.Lb({type:o,selectors:[["app-editar-medicamento"]],decls:37,vars:13,consts:[[1,"container"],[1,"row"],[1,"col-lg"],[1,"col-lg-6"],[3,"formGroup","ngSubmit"],["for","name"],["type","text","placeholder","Introduzca su nombre","formControlName","nombre","required","",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","lastname"],["name","categoria","formControlName","categoria",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","email"],["type","text","placeholder","Introduzca el precio","name","precio","formControlName","precio","required","",1,"form-control"],["for","img"],["type","file","placeholder","Imagen","name","img",1,"form-control",3,"change"],["type","submit",1,"signup-btn",3,"disabled"],[1,"alert","alert-danger"],[3,"value"]],template:function(o,t){1&o&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Sb(2,"div",2),a.Wb(3,"div",3),a.Wb(4,"form",4),a.ec("ngSubmit",(function(){return t.registro()})),a.Wb(5,"h1"),a.tc(6,"A\xf1adir producto"),a.Vb(),a.Sb(7,"hr"),a.Wb(8,"label",5),a.Wb(9,"b"),a.tc(10,"Nombre"),a.Vb(),a.Vb(),a.Sb(11,"input",6),a.sc(12,x,3,0,"div",7),a.Wb(13,"label",8),a.Wb(14,"b"),a.tc(15,"Categoria"),a.Vb(),a.Vb(),a.Wb(16,"select",9),a.ec("change",(function(o){return t.asignarCategoria(o.target.value)})),a.sc(17,_,2,2,"option",10),a.Vb(),a.sc(18,k,3,0,"div",7),a.Wb(19,"label",11),a.Wb(20,"b"),a.tc(21,"Precio"),a.Vb(),a.Vb(),a.Sb(22,"input",12),a.sc(23,M,4,0,"div",7),a.Wb(24,"label",13),a.Wb(25,"b"),a.tc(26,"Imagen"),a.Vb(),a.Vb(),a.Wb(27,"input",14),a.ec("change",(function(o){return t.capturarFile(o)})),a.Vb(),a.sc(28,w,3,0,"div",7),a.Wb(29,"div",1),a.Wb(30,"div",2),a.Wb(31,"button",15),a.tc(32," Editar "),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Sb(33,"div",2),a.tc(34),a.hc(35,"json"),a.hc(36,"json"),a.Vb(),a.Vb()),2&o&&(a.Hb(4),a.kc("formGroup",t.miFormulario),a.Hb(8),a.kc("ngIf",t.campoNoValido("nombre")),a.Hb(5),a.kc("ngForOf",t.categorias),a.Hb(1),a.kc("ngIf",t.campoNoValido("categoria")),a.Hb(5),a.kc("ngIf",t.campoNoValido("precio")),a.Hb(5),a.kc("ngIf",t.campoNoValido("img")),a.Hb(3),a.kc("disabled",t.miFormulario.invalid),a.Hb(3),a.wc(" ",a.ic(35,9,t.miFormulario.valid)," ",a.ic(36,11,t.miFormulario.value)," "))},directives:[p.m,p.f,p.d,p.a,p.e,p.c,p.i,r.k,p.j,r.j,p.g,p.l],pipes:[r.f],styles:["*[_ngcontent-%COMP%]{color:#398adb}form[_ngcontent-%COMP%]{border:1px solid #ccc;padding:16px}h1[_ngcontent-%COMP%]{color:#398adb}hr[_ngcontent-%COMP%]{border:1px solid #f1f1f1;margin-bottom:25px}label[_ngcontent-%COMP%]{color:#578add}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.signup-btn[_ngcontent-%COMP%]{background-color:#287dd4}.signup-btn[_ngcontent-%COMP%]:disabled{background-color:#7c7d7c;cursor:not-allowed}.signup-btn[_ngcontent-%COMP%]:active{background-color:#1d6fb7}.cancel-btn[_ngcontent-%COMP%]:hover, .signup-btn[_ngcontent-%COMP%]:hover{opacity:1}.cancel-btn[_ngcontent-%COMP%]{padding:14px 20px;background-color:#f44336}.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;opacity:.9;width:100%}@media screen and (max-width:300px){.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{width:100%}}"]}),o})()},{path:"nuevoProducto",component:C}];let F=(()=>{class o{}return o.\u0275mod=a.Pb({type:o}),o.\u0275inj=a.Ob({factory:function(t){return new(t||o)},imports:[[i.f.forChild(y)],i.f]}),o})(),S=(()=>{class o{}return o.\u0275mod=a.Pb({type:o}),o.\u0275inj=a.Ob({factory:function(t){return new(t||o)},imports:[[r.b,F,d.a,p.h]]}),o})()}}]);