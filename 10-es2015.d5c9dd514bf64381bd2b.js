(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{x6po:function(o,e,t){"use strict";t.r(e),t.d(e,"UsersModule",(function(){return H}));var r=t("ofXK"),n=t("tyNb"),i=t("3Pt+"),a=t("PSD3"),c=t.n(a),s=t("fXoL"),l=t("3xaX"),b=t("E9a8"),u=t("ucNU"),d=t("AytR"),p=t("tk/3");let m=(()=>{class o{constructor(o){this.http=o,this.baseUrl=d.a.baseUrl}getUsuarios(){return this.http.get(`${this.baseUrl}usuarios`)}deleteUsuario(o){const e=(new p.c).set("x-token",JSON.parse(localStorage.getItem("token"))||"");return this.http.delete(`${this.baseUrl}usuarios/${o}`,{headers:e})}getUsuariosPorId(o){console.log(o);const e=(new p.c).set("x-token",JSON.parse(localStorage.getItem("token"))||"");return this.http.get(`${this.baseUrl}usuarios/${o}`,{headers:e})}actualizarUsuario(o){return this.http.put(`${this.baseUrl}usuarios/${o.uid}`,o)}}return o.\u0275fac=function(e){return new(e||o)(s.ac(p.a))},o.\u0275prov=s.Nb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function g(o,e){1&o&&(s.Wb(0,"div",16),s.Wb(1,"div"),s.tc(2," El nombre es requerido. "),s.Vb(),s.Vb())}function f(o,e){1&o&&(s.Wb(0,"div",16),s.Wb(1,"div"),s.tc(2," El apellido es requerido. "),s.Vb(),s.Vb())}function v(o,e){if(1&o&&(s.Wb(0,"div",16),s.Wb(1,"div"),s.tc(2),s.Vb(),s.Vb()),2&o){const o=s.gc();s.Hb(2),s.vc(" ",o.emailErrorMsg," ")}}function h(o,e){1&o&&(s.Wb(0,"div",16),s.Wb(1,"div"),s.tc(2," Introduzca una contrase\xf1a por favor "),s.Vb(),s.Vb())}function V(o,e){1&o&&(s.Wb(0,"div",16),s.Wb(1,"div"),s.tc(2," Las contrase\xf1as deben ser iguales "),s.Vb(),s.Vb())}let W=(()=>{class o{constructor(o,e,t,r,n,a,c){this.fb=o,this.emailValidator=e,this.validatorService=t,this.authService=r,this.usuariosService=n,this.router=a,this.activatedRoute=c,this.miFormulario=this.fb.group({nombre:["test6",[i.k.required]],apellido:["test6",[i.k.required]],email:["test6@gmail.com",[i.k.required,i.k.pattern(this.validatorService.emailPattern)],[this.emailValidator]],password:["123456",[i.k.required,i.k.minLength(6)]],password2:["123456",[i.k.required]]},{validators:[this.validatorService.camposIguales("password","password2")]})}get emailErrorMsg(){var o;const e=null===(o=this.miFormulario.get("email"))||void 0===o?void 0:o.errors;return(null==e?void 0:e.required)?"Email es obligatorio":(null==e?void 0:e.pattern)?"El valor ingresado no tiene formato de correo":(null==e?void 0:e.emailTomado)?"El email ya fue tomado":""}ngOnInit(){}campoNoValido(o){var e,t;return(null===(e=this.miFormulario.get(o))||void 0===e?void 0:e.invalid)&&(null===(t=this.miFormulario.get(o))||void 0===t?void 0:t.touched)}registro(){c.a.fire({title:"\xbfDesea guardar los cambios?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Guardar",denyButtonText:"No guardar"}).then(o=>{if(o.isConfirmed){const{nombre:o,apellido:e,email:t,password:r}=this.miFormulario.value;this.authService.registro(o,e,t,r).subscribe(o=>{o?(c.a.fire("Usuario guardado con exito!","","success"),this.miFormulario.reset()):c.a.fire("Usuario no guardado","","info")})}else o.isDenied&&c.a.fire("Usuario no guardado","","info")})}}return o.\u0275fac=function(e){return new(e||o)(s.Rb(i.b),s.Rb(l.a),s.Rb(b.a),s.Rb(u.a),s.Rb(m),s.Rb(n.b),s.Rb(n.a))},o.\u0275cmp=s.Lb({type:o,selectors:[["app-agregar-usuario"]],decls:38,vars:7,consts:[[1,"container"],[1,"row"],[1,"col-lg"],[1,"col-lg-6"],[3,"formGroup","ngSubmit"],["for","name"],["type","text","placeholder","Introduzca su nombre","formControlName","nombre","required","",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","lastname"],["type","text","placeholder","Introduzca su apellido","name","lastname","formControlName","apellido","required","",1,"form-control"],["for","email"],["type","text","placeholder","Introduzca su email","name","email","formControlName","email","required","",1,"form-control"],["for","password"],["type","password","placeholder","Introduzca la contrase\xf1a","formControlName","password","required","",1,"form-control"],["type","password","placeholder","Introduzca la contrase\xf1a","formControlName","password2","required","",1,"form-control"],["type","submit",1,"signup-btn",3,"disabled"],[1,"alert","alert-danger"]],template:function(o,e){1&o&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Sb(2,"div",2),s.Wb(3,"div",3),s.Wb(4,"form",4),s.ec("ngSubmit",(function(){return e.registro()})),s.Wb(5,"h1"),s.tc(6,"A\xf1adir usuario"),s.Vb(),s.Sb(7,"hr"),s.Wb(8,"label",5),s.Wb(9,"b"),s.tc(10,"Nombre"),s.Vb(),s.Vb(),s.Sb(11,"input",6),s.sc(12,g,3,0,"div",7),s.Wb(13,"label",8),s.Wb(14,"b"),s.tc(15,"Apellido"),s.Vb(),s.Vb(),s.Sb(16,"input",9),s.sc(17,f,3,0,"div",7),s.Wb(18,"label",10),s.Wb(19,"b"),s.tc(20,"Correo"),s.Vb(),s.Vb(),s.Sb(21,"input",11),s.sc(22,v,3,1,"div",7),s.Wb(23,"label",12),s.Wb(24,"b"),s.tc(25,"Contrase\xf1a"),s.Vb(),s.Vb(),s.Sb(26,"input",13),s.sc(27,h,3,0,"div",7),s.Wb(28,"label",12),s.Wb(29,"b"),s.tc(30,"Por favor confirmar contrase\xf1a"),s.Vb(),s.Vb(),s.Sb(31,"input",14),s.sc(32,V,3,0,"div",7),s.Wb(33,"div",1),s.Wb(34,"div",2),s.Wb(35,"button",15),s.tc(36,"Guardar"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Sb(37,"div",2),s.Vb(),s.Vb()),2&o&&(s.Hb(4),s.kc("formGroup",e.miFormulario),s.Hb(8),s.kc("ngIf",e.campoNoValido("nombre")),s.Hb(5),s.kc("ngIf",e.campoNoValido("apellido")),s.Hb(5),s.kc("ngIf",e.campoNoValido("email")),s.Hb(5),s.kc("ngIf",e.campoNoValido("password")),s.Hb(5),s.kc("ngIf",e.campoNoValido("password2")),s.Hb(3),s.kc("disabled",e.miFormulario.invalid))},directives:[i.m,i.f,i.d,i.a,i.e,i.c,i.i,r.k],styles:["*[_ngcontent-%COMP%]{color:#398adb}form[_ngcontent-%COMP%]{border:1px solid #ccc;padding:16px}h1[_ngcontent-%COMP%]{color:#398adb}hr[_ngcontent-%COMP%]{border:1px solid #f1f1f1;margin-bottom:25px}label[_ngcontent-%COMP%]{color:#578add}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.signup-btn[_ngcontent-%COMP%]{background-color:#287dd4}.signup-btn[_ngcontent-%COMP%]:disabled{background-color:#7c7d7c;cursor:not-allowed}.signup-btn[_ngcontent-%COMP%]:active{background-color:#1d6fb7}.cancel-btn[_ngcontent-%COMP%]:hover, .signup-btn[_ngcontent-%COMP%]:hover{opacity:1}.cancel-btn[_ngcontent-%COMP%]{padding:14px 20px;background-color:#f44336}.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;opacity:.9;width:100%}@media screen and (max-width:300px){.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{width:100%}}"]}),o})();var C=t("eIep");function M(o,e){1&o&&(s.Wb(0,"div",20),s.Wb(1,"div"),s.tc(2," El nombre es requerido. "),s.Vb(),s.Vb())}function k(o,e){1&o&&(s.Wb(0,"div",20),s.Wb(1,"div"),s.tc(2," El apellido es requerido. "),s.Vb(),s.Vb())}function x(o,e){1&o&&(s.Wb(0,"div",20),s.Wb(1,"div"),s.tc(2," El campo es requerido, indique si es USER_ROLE o ADMIN_ROLE. "),s.Vb(),s.Vb())}function O(o,e){if(1&o&&(s.Wb(0,"div",20),s.Wb(1,"div"),s.tc(2),s.Vb(),s.Vb()),2&o){const o=s.gc();s.Hb(2),s.vc(" ",o.emailErrorMsg," ")}}let P=(()=>{class o{constructor(o,e,t,r,n){this.usuariosService=o,this.emailValidator=e,this.validatorService=t,this.fb=r,this.activatedRoute=n,this.usuario={nombre:"",apellido:"",email:"",rol:"",estado:"",uid:"",img:""},this.miFormulario=this.fb.group({nombre:["",[i.k.required]],apellido:["",[i.k.required]],email:["",[i.k.required,i.k.pattern(this.validatorService.emailPattern)]],rol:["",[i.k.required]],estado:["true",[i.k.required]]})}get emailErrorMsg(){var o;const e=null===(o=this.miFormulario.get("email"))||void 0===o?void 0:o.errors;return(null==e?void 0:e.required)?"Email es obligatorio":(null==e?void 0:e.pattern)?"El valor ingresado no tiene formato de correo":void 0}ngOnInit(){this.activatedRoute.params.pipe(Object(C.a)(({uid:o})=>this.usuariosService.getUsuariosPorId(o))).subscribe(o=>{this.usuario=o})}campoNoValido(o){var e,t;return(null===(e=this.miFormulario.get(o))||void 0===e?void 0:e.invalid)&&(null===(t=this.miFormulario.get(o))||void 0===t?void 0:t.touched)}actualizarUsuario(){c.a.fire({title:"Do you want to save the changes?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Save",denyButtonText:"Don't save"}).then(o=>{o.isConfirmed?(console.log(this.usuario),this.usuariosService.actualizarUsuario(this.usuario).subscribe(o=>{console.log(o)}),c.a.fire("Saved!","","success")):o.isDenied&&c.a.fire("Changes are not saved","","info")})}}return o.\u0275fac=function(e){return new(e||o)(s.Rb(m),s.Rb(l.a),s.Rb(b.a),s.Rb(i.b),s.Rb(n.a))},o.\u0275cmp=s.Lb({type:o,selectors:[["app-detalle-usuario"]],decls:50,vars:19,consts:[[1,"container"],[1,"row"],[1,"col-lg"],[1,"col-lg-6"],[3,"formGroup","ngSubmit"],[1,"col-md-6","col-sm-12"],["for","name"],["type","text","placeholder","Introduzca su nombre","formControlName","nombre","name","nombre","required","",1,"form-control",3,"ngModel","ngModelChange"],["class","alert alert-danger",4,"ngIf"],["for","lastname"],["type","text","placeholder","Introduzca su apellido","name","lastname","formControlName","apellido","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"col"],["type","text","placeholder","Ej. USER_ROLE o ADMIN_ROLE","name","rol","formControlName","rol",1,"form-control",3,"ngModel","ngModelChange"],["for","estado"],["id","estado","aria-label","Floating label select example","name","estado","formControlName","estado",1,"form-select",3,"value"],["value","false","selected",""],["value","true","selected",""],["for","email"],["type","text","placeholder","Introduzca su email","name","email","formControlName","email","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"signup-btn",3,"disabled"],[1,"alert","alert-danger"]],template:function(o,e){1&o&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Sb(2,"div",2),s.Wb(3,"div",3),s.Wb(4,"form",4),s.ec("ngSubmit",(function(){return e.actualizarUsuario()})),s.Wb(5,"h1"),s.tc(6),s.Vb(),s.Sb(7,"hr"),s.Wb(8,"div",1),s.Wb(9,"div",5),s.Wb(10,"label",6),s.Wb(11,"b"),s.tc(12,"Nombre:"),s.Vb(),s.Vb(),s.Wb(13,"input",7),s.ec("ngModelChange",(function(o){return e.usuario.nombre=o})),s.Vb(),s.sc(14,M,3,0,"div",8),s.Vb(),s.Wb(15,"div",5),s.Wb(16,"label",9),s.Wb(17,"b"),s.tc(18,"Apellido:"),s.Vb(),s.Vb(),s.Wb(19,"input",10),s.ec("ngModelChange",(function(o){return e.usuario.apellido=o})),s.Vb(),s.sc(20,k,3,0,"div",8),s.Vb(),s.Vb(),s.Wb(21,"div",1),s.Wb(22,"div",11),s.Wb(23,"label",9),s.Wb(24,"b"),s.tc(25,"Rol:"),s.Vb(),s.Vb(),s.Wb(26,"input",12),s.ec("ngModelChange",(function(o){return e.usuario.rol=o})),s.Vb(),s.sc(27,x,3,0,"div",8),s.Vb(),s.Wb(28,"div",11),s.Wb(29,"label",13),s.Wb(30,"b"),s.tc(31,"Estado:"),s.Vb(),s.Vb(),s.Wb(32,"select",14),s.Wb(33,"option",15),s.tc(34,"false"),s.Vb(),s.Wb(35,"option",16),s.tc(36,"true"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(37,"label",17),s.Wb(38,"b"),s.tc(39,"Correo"),s.Vb(),s.Vb(),s.Wb(40,"input",18),s.ec("ngModelChange",(function(o){return e.usuario.email=o})),s.Vb(),s.sc(41,O,3,1,"div",8),s.Wb(42,"div",1),s.Wb(43,"div",2),s.Wb(44,"button",19),s.tc(45,"Actualizar"),s.Vb(),s.Vb(),s.Vb(),s.tc(46),s.hc(47,"json"),s.hc(48,"json"),s.Vb(),s.Vb(),s.Sb(49,"div",2),s.Vb(),s.Vb()),2&o&&(s.Hb(4),s.kc("formGroup",e.miFormulario),s.Hb(2),s.wc(" Usuario: ",e.usuario.nombre," ",e.usuario.apellido,""),s.Hb(7),s.kc("ngModel",e.usuario.nombre),s.Hb(1),s.kc("ngIf",e.campoNoValido("nombre")),s.Hb(5),s.kc("ngModel",e.usuario.apellido),s.Hb(1),s.kc("ngIf",e.campoNoValido("apellido")),s.Hb(6),s.kc("ngModel",e.usuario.rol),s.Hb(1),s.kc("ngIf",e.campoNoValido("rol")),s.Hb(5),s.kc("value",e.usuario.estado),s.Hb(8),s.kc("ngModel",e.usuario.email),s.Hb(1),s.kc("ngIf",e.campoNoValido("email")),s.Hb(3),s.kc("disabled",e.miFormulario.invalid),s.Hb(2),s.wc(" ",s.ic(47,15,e.miFormulario.valid)," ",s.ic(48,17,e.miFormulario.value)," "))},directives:[i.m,i.f,i.d,i.a,i.e,i.c,i.i,r.k,i.j,i.g,i.l],pipes:[r.f],styles:["*[_ngcontent-%COMP%]{color:#398adb}form[_ngcontent-%COMP%]{border:1px solid #ccc;padding:16px}h1[_ngcontent-%COMP%]{color:#398adb}hr[_ngcontent-%COMP%]{border:1px solid #f1f1f1;margin-bottom:25px}label[_ngcontent-%COMP%]{color:#578add}input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.signup-btn[_ngcontent-%COMP%]{background-color:#287dd4}.signup-btn[_ngcontent-%COMP%]:disabled{background-color:#7c7d7c;cursor:not-allowed}.signup-btn[_ngcontent-%COMP%]:active{background-color:#1d6fb7}.cancel-btn[_ngcontent-%COMP%]:hover, .signup-btn[_ngcontent-%COMP%]:hover{opacity:1}.cancel-btn[_ngcontent-%COMP%]{padding:14px 20px;background-color:#f44336}.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;opacity:.9;width:100%}@media screen and (max-width:300px){.cancel-btn[_ngcontent-%COMP%], .signup-btn[_ngcontent-%COMP%]{width:100%}}"]}),o})();var w=t("oOf3");const y=function(o){return["detalleuser",o]};function _(o,e){if(1&o){const o=s.Xb();s.Wb(0,"tr"),s.Wb(1,"td"),s.tc(2),s.Vb(),s.Wb(3,"td"),s.tc(4),s.Vb(),s.Wb(5,"td"),s.tc(6),s.Vb(),s.Wb(7,"td"),s.tc(8),s.Vb(),s.Wb(9,"td"),s.Wb(10,"button",11),s.ec("click",(function(){s.pc(o);const t=e.$implicit;return s.gc().deleteUsuario(t.uid)})),s.Sb(11,"i",12),s.Vb(),s.Wb(12,"button",13),s.Sb(13,"i",14),s.Vb(),s.Vb(),s.Vb()}if(2&o){const o=e.$implicit;s.Hb(2),s.wc("",o.nombre," ",o.apellido,""),s.Hb(2),s.uc(o.email),s.Hb(2),s.uc(o.rol),s.Hb(2),s.uc(o.uid),s.Hb(4),s.kc("routerLink",s.mc(6,y,o.uid))}}const S=function(){return["agregar"]},I=function(o){return{itemsPerPage:5,currentPage:o}},N=[{path:"",component:(()=>{class o{constructor(o,e){this.usuariosService=o,this.router=e,this.titulo="Usuarios",this.page=1}ngOnInit(){this.usuariosService.getUsuarios().subscribe(o=>{this.actualizarUsuarios(),this.usuarios=o.usuarios})}deleteUsuario(o){c.a.fire({title:"\xbfEstas Seguro de borrar al usuario?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\xa1Si, borrar!"}).then(e=>{e.isConfirmed&&(this.usuariosService.deleteUsuario(o).subscribe(o=>{this.actualizarUsuarios(),this.router.navigate(["/admin/users"])}),c.a.fire("Borrado!","El usuario se borro con \xe9xito.","success"))})}actualizarUsuarios(){this.usuariosService.getUsuarios().subscribe(o=>{this.usuarios=o.usuarios})}}return o.\u0275fac=function(e){return new(e||o)(s.Rb(m),s.Rb(n.b))},o.\u0275cmp=s.Lb({type:o,selectors:[["app-listar"]],decls:24,vars:9,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-4"],[1,"col","justify-content-end"],["type","submit",1,"btn","btn-info","btn-sm",3,"routerLink"],[1,"table-responsive","table-responsive-sm","table-responsive-md","table-responsive-lg","table-responsive-xl"],[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["autoHide","true","responsive","true","previousLabel","Anterior","nextLabel","Siguiente",3,"pageChange"],["type","button",1,"btn","btn-danger","btn-sm","m-1",3,"click"],[1,"far","fa-trash-alt","icon"],["type","button",1,"btn","btn-info","btn-sm",3,"routerLink"],[1,"fas","fa-user-edit","icon"]],template:function(o,e){1&o&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Wb(3,"h1"),s.tc(4),s.Vb(),s.Vb(),s.Wb(5,"div",3),s.Wb(6,"button",4),s.tc(7,"Agregar Usuario"),s.Vb(),s.Vb(),s.Vb(),s.Wb(8,"div",5),s.Wb(9,"table",6),s.Wb(10,"thead"),s.Wb(11,"tr"),s.Wb(12,"th",7),s.tc(13,"Nombre"),s.Vb(),s.Wb(14,"th",7),s.tc(15,"Email"),s.Vb(),s.Wb(16,"th",7),s.tc(17,"Rol"),s.Vb(),s.Sb(18,"th",7),s.Vb(),s.Vb(),s.Wb(19,"tbody"),s.sc(20,_,14,8,"tr",8),s.hc(21,"paginate"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(22,"div",9),s.Wb(23,"pagination-controls",10),s.ec("pageChange",(function(o){return e.page=o})),s.Vb(),s.Vb()),2&o&&(s.Hb(4),s.uc(e.titulo),s.Hb(2),s.kc("routerLink",s.lc(6,S)),s.Hb(14),s.kc("ngForOf",s.jc(21,3,e.usuarios,s.mc(7,I,e.page))))},directives:[n.c,r.j,w.c],pipes:[w.b],styles:["*[_ngcontent-%COMP%]{color:#398adb}.icon[_ngcontent-%COMP%]{color:beige!important}"]}),o})()},{path:"agregar",component:W},{path:"detalleuser/:uid",component:P}];let U=(()=>{class o{}return o.\u0275mod=s.Pb({type:o}),o.\u0275inj=s.Ob({factory:function(e){return new(e||o)},imports:[[n.f.forChild(N)],n.f]}),o})(),H=(()=>{class o{}return o.\u0275mod=s.Pb({type:o}),o.\u0275inj=s.Ob({factory:function(e){return new(e||o)},imports:[[r.b,U,w.a,i.h]]}),o})()}}]);