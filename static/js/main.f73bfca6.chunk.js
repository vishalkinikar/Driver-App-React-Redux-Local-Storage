(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(27),l=a.n(i),s=(a(76),a(2)),o=a(10),c="GET_ALL_DRIVERS",d="SET_CURRENT_DRIVER",u="EDIT_DRIVER",p="UPDATE_DRIVER",m="CREATE_DRIVER",h="DELETE_DRIVER",v="SAVE_NEW_DRIVER",b="TOGGLE_MODAL",f="AUTH",E="IS_AUTH",y=function(e){return e+1},g={lastId:0,all:[],currentDriver:{id:null}},D={isOpen:!1,newEntry:!1},O=a(7),N=a(8),j=a(11),w=a(9),C=a(12),k=[],S={auth:function(e){return{type:f,payload:e}},isAuth:function(){return{type:E}},getAllDrivers:function(){return function(e){e({type:c,payload:k})}},setCurrentDriver:function(e){return{type:d,payload:e}},editDriver:function(){return{type:u}},updateDriver:function(e){return{type:p,payload:e}},createDriver:function(){return{type:m}},saveNewDriver:function(e){return{type:v,payload:e}},deleteDriver:function(e){return{type:h,payload:e}},toggleModal:function(){return{type:b}}},x=a(34),I=a(3),L=a.n(I),A=a(52),M=(a(122),function(e){function t(e){var a;return Object(O.a)(this,t),a=Object(j.a)(this,Object(w.a)(t).call(this,e)),e.modal.newEntry?a.state={fname:"",lname:"",dob:new Date,licno:"",email:"",phone:"",licexpdate:new Date,errors:""}:a.state={fname:e.fname,lname:e.lname,dob:new Date(e.dob),licno:e.licno,email:e.email,phone:e.phone,licexpdate:new Date(e.licexpdate),errors:""},a}return Object(C.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){L()("#editDriver").modal("show")}},{key:"closeModal",value:function(){var e=this;L()("#editDriver").modal("hide"),L()("#editDriver").on("hidden.bs.modal",function(){e.props.actions.toggleModal()})}},{key:"handleDelete",value:function(){this.props.id&&!this.props.modal.newEntry&&this.props.actions.deleteDriver(this.props.id),this.closeModal()}},{key:"validateEmail",value:function(e){return/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(String(e).toLowerCase())}},{key:"handleSave",value:function(){var e={id:this.props.id,fname:this.state.fname,lname:this.state.lname,dob:"object"===typeof this.state.dob?this.state.dob.toJSON():this.state.dob,licno:this.state.licno,email:this.state.email,phone:this.state.phone,licexpdate:"object"===typeof this.state.licexpdate?this.state.licexpdate.toJSON():this.state.licexpdate};if(e.fname.length<1||e.dob.length<1||e.licno.length<1||e.email.length<1||e.phone.length<1||e.licexpdate.length<1){var t=[];if(t.push("All fields are required."),t.length>=1)return void this.setState({errors:t.join(" ")})}this.validateEmail(e.email)?(this.props.modal.newEntry?this.props.actions.saveNewDriver(e):this.props.actions.updateDriver(e),this.closeModal()):this.setState({errors:"Email Not Valid!"})}},{key:"handleInputChange",value:function(e){e.preventDefault(),this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleDOBChange",value:function(e){this.setState({dob:e})}},{key:"handleLEDChange",value:function(e){this.setState({dob:e})}},{key:"handleEmailChange",value:function(e){this.setState({dob:e})}},{key:"render",value:function(){return this.props.modal.isOpen||this.closeModal(),n.a.createElement("div",{id:"editDriver",className:"modal fade","data-backdrop":"static",tabIndex:"-1",role:"dialog"},n.a.createElement("div",{className:"modal-dialog"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("button",{onClick:this.closeModal.bind(this),type:"button",className:"close","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"input-form-group"},n.a.createElement("label",{htmlFor:"driver-fname"},"First Name"),n.a.createElement("input",{type:"text",onChange:this.handleInputChange.bind(this),id:"driver-fname",className:"form-control",value:this.state.fname,name:"fname"})),n.a.createElement("div",{className:"input-form-group"},n.a.createElement("label",{htmlFor:"driver-lname"},"Last Name"),n.a.createElement("input",{type:"text",onChange:this.handleInputChange.bind(this),id:"driver-name",className:"form-control",value:this.state.lname,name:"lname"})),n.a.createElement("div",{className:"input-form-group"},n.a.createElement("label",{htmlFor:"driver-dob"},"DOB"),n.a.createElement(A.a,{dateFormat:"yyyy/MM/dd",selected:this.state.dob,onChange:this.handleDOBChange.bind(this)})),n.a.createElement("div",{className:"input-form-group"},n.a.createElement("label",{htmlFor:"driver-licno"},"License No"),n.a.createElement("input",{type:"text",onChange:this.handleInputChange.bind(this),id:"driver-licno",className:"form-control",value:this.state.licno,name:"licno"})),n.a.createElement("div",{className:"input-form-group"},n.a.createElement("label",{htmlFor:"driver-email"},"Email"),n.a.createElement("input",{type:"text",onChange:this.handleInputChange.bind(this),id:"driver-email",className:"form-control",value:this.state.email,name:"email"})),n.a.createElement("div",{className:"input-form-group"},n.a.createElement("label",{htmlFor:"driver-phone"},"Phone"),n.a.createElement("input",{type:"number",onChange:this.handleInputChange.bind(this),id:"driver-phone",className:"form-control",value:this.state.phone,name:"phone"})),n.a.createElement("div",{className:"input-form-group"},n.a.createElement("label",{htmlFor:"driver-licexpdate"},"License Expiration Date"),n.a.createElement(A.a,{dateFormat:"yyyy/MM/dd",selected:this.state.licexpdate,onChange:this.handleLEDChange.bind(this)})),n.a.createElement("p",{className:"text-danger"},this.state.errors)),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn btn-default",onClick:this.closeModal.bind(this)},"Cancel"),n.a.createElement("button",{onClick:this.handleSave.bind(this),type:"button",className:"btn btn-primary"},"Save changes"),n.a.createElement("button",{onClick:this.handleDelete.bind(this),type:"button",className:"btn btn-danger bottom-left"},"Delete")))))}}]),t}(n.a.Component));M=Object(o.b)(function(e){return{id:e.drivers.currentDriver.id,newEntry:e.modal.newEntry,modal:e.modal,fname:e.drivers.currentDriver.fname,lname:e.drivers.currentDriver.lname,dob:e.drivers.currentDriver.dob,licno:e.drivers.currentDriver.licno,email:e.drivers.currentDriver.email,phone:e.drivers.currentDriver.phone,licexpdate:e.drivers.currentDriver.licexpdate}},function(e){return{actions:Object(s.b)(S,e)}})(M);var R=function(e){function t(){return Object(O.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(N.a)(t,[{key:"setCurrentDriver",value:function(e){e.preventDefault(),e.stopPropagation();var t=L()(e.target).closest("div").children(".driverInfo"),a={id:this.props.id,fname:this.props.fname,lname:this.props.lname,dob:this.props.dob,licno:this.props.licno,email:this.props.email,phone:this.props.phone,licexpdate:this.props.licexpdate};this.props.actions.setCurrentDriver(a),L()(".driverInfo").not(t).slideUp(400),L()(e.target).closest("div").children(".driverInfo").slideToggle(400)}},{key:"editDriver",value:function(){this.props.actions.editDriver(),this.props.actions.toggleModal()}},{key:"render",value:function(){return n.a.createElement("div",{className:"driver"},n.a.createElement("button",{className:"driverHeaderLink",onClick:this.setCurrentDriver.bind(this)},n.a.createElement("h4",{className:"driverHeader"+(this.props.active?" active":"")},this.props.fname)),n.a.createElement("div",{className:"driverInfo"},n.a.createElement("p",null,n.a.createElement("b",null,"First name:")," ",this.props.fname),n.a.createElement("p",null,n.a.createElement("b",null,"Last name:")," ",this.props.lname),n.a.createElement("p",null,n.a.createElement("b",null,"DOB:")," ",new Date(this.props.dob).toLocaleDateString()),n.a.createElement("p",null,n.a.createElement("b",null,"License No:")," ",this.props.licno),n.a.createElement("p",null,n.a.createElement("b",null,"Email:")," ",this.props.email),n.a.createElement("p",null,n.a.createElement("b",null,"Phone Number:")," ",this.props.phone),n.a.createElement("p",null,n.a.createElement("b",null,"License Expiration Date:")," ",new Date(this.props.licexpdate).toLocaleDateString()),n.a.createElement("button",{onClick:this.editDriver.bind(this),className:"btn edit-btn"},"Edit")))}}]),t}(n.a.Component),F=a(51),T=a.n(F),J=a(70),_=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(j.a)(this,Object(w.a)(t).call(this,e))).state={email:"",pass:"",errors:""},a}return Object(C.a)(t,e),Object(N.a)(t,[{key:"validateEmail",value:function(e){return/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(String(e).toLowerCase())}},{key:"handleAuth",value:function(){var e=this,t={email:this.state.email,password:this.state.pass};this.validateEmail(t.email)?function(){var a=Object(J.a)(T.a.mark(function a(r){var n,i;return T.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://reqres.in/api/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)});case 2:return n=a.sent,a.next=5,n.json();case 5:if(!(i=a.sent).token){a.next=11;break}t.token=i.token,e.props.actions.auth(t),a.next=13;break;case 11:return e.setState({errors:i.error}),a.abrupt("return");case 13:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()(t):this.setState({errors:"Email Not Valid!"})}},{key:"handleLogin",value:function(e){e.preventDefault(),this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return n.a.createElement("div",{className:"loginBox"},n.a.createElement("div",{className:"input-form-group"},n.a.createElement("label",{htmlFor:"login-email"},"Email"),n.a.createElement("input",{type:"text",onChange:this.handleLogin.bind(this),id:"driver-email",className:"form-control",value:this.state.email,name:"email"})),n.a.createElement("div",{className:"input-form-group"},n.a.createElement("label",{htmlFor:"driver-pass"},"Password"),n.a.createElement("input",{type:"password",onChange:this.handleLogin.bind(this),id:"driver-pass",className:"form-control",value:this.state.pass,name:"pass"})),n.a.createElement("p",{className:"text-danger"},this.state.errors),n.a.createElement("button",{onClick:this.handleAuth.bind(this),type:"button",className:"btn btn-primary"},"Login"))}}]),t}(n.a.Component);_=Object(o.b)(function(e){return{email:e.email,pass:e.pass}},function(e){return{actions:Object(s.b)(S,e)}})(_);a(126),a(128);var V=function(e){function t(){return Object(O.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(N.a)(t,[{key:"createDriver",value:function(){this.props.actions.createDriver(),this.props.actions.toggleModal()}},{key:"render",value:function(){return n.a.createElement("div",{id:"main-container"},n.a.createElement("h1",null,"DriverApp List"),n.a.createElement("div",{id:"container"},this.props.modal.isOpen?n.a.createElement(M,null):null,n.a.createElement("div",{className:"driverApp"},this.props.auth?this.renderDrivers():n.a.createElement(_,null)),this.props.auth?n.a.createElement("button",{onClick:this.createDriver.bind(this),className:"btn btn-success btn-create"},"Add New Driver"):null))}},{key:"componentDidMount",value:function(){this.props.actions.isAuth(),this.props.actions.getAllDrivers()}},{key:"renderDrivers",value:function(){var e=this;return!this.props.drivers||this.props.drivers.length<1?n.a.createElement("h4",{className:"noList"},"No drivers yet. Click 'Add New Driver' to get started!"):this.props.drivers.map(function(t){return n.a.createElement(R,Object.assign({key:t.id,active:t.id===e.props.currentDriver.id},t,{actions:e.props.actions}))})}}]),t}(n.a.Component);V=Object(o.b)(function(e){return{drivers:e.drivers.all,auth:e.drivers.auth,currentDriver:e.drivers.currentDriver,modal:e.modal}},function(e){return{actions:Object(s.b)(S,e)}})(V);var P=Object(s.c)({drivers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var a=e.lastId,r=t.payload.drivers.all.map(function(e){return a=y(a),e.id=a,e});return Object.assign({},e,{lastId:a},{all:r});case E:return Object.assign({},e,{auth:t.payload});case d:var n=e.currentDriver.id===t.payload.id?g.currentDriver:t.payload;return Object.assign({},e,{currentDriver:n});case p:return Object.assign({},e,{currentDriver:t.payload},{all:e.all.map(function(e){return e.id===t.payload.id?t.payload:e})});case v:var i=t.payload;i.id=y(e.lastId),e.lastId=i.id;var l=e.all;return l.push(i),Object.assign({},e,{all:l});case h:return Object.assign({},e,{all:e.all.filter(function(e){return e.id!==t.payload})});case f:return Object.assign({},e,{auth:t.payload});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;switch((arguments.length>1?arguments[1]:void 0).type){case b:return Object.assign({},e,{isOpen:!e.isOpen});case u:return Object.assign({},e,{newEntry:!1});case m:return Object.assign({},e,{newEntry:!0});default:return e}}});l.a.render(n.a.createElement(o.a,{store:Object(s.d)(P,Object(s.a)(function(e){var t=e.dispatch,a=e.getState;return function(e){return function(r){return"function"===typeof r?r(t,a):e(r)}}},function(e){return function(e){return function(t){var a,r=localStorage.getItem("driver-list");if(r&&"object"===typeof JSON.parse(r))r=JSON.parse(r);else{var n={all:t.payload,auth:!1};r=Object.assign({},{drivers:n})}switch(t.type){case c:return(a={type:t.type}).payload=r,localStorage.setItem("driver-list",JSON.stringify(r)),e(a);case E:return e({type:t.type,payload:r.drivers.auth});case v:return r.drivers.all.push(t.payload),localStorage.setItem("driver-list",JSON.stringify(r)),e(t);case h:return r.drivers.all=r.drivers.all.filter(function(e,a){return a+1!==t.payload}),localStorage.setItem("driver-list",JSON.stringify(r)),e(t);case p:return r.drivers.all=r.drivers.all.map(function(e,a){return a+1===t.payload.id?t.payload:e}),localStorage.setItem("driver-list",JSON.stringify(r)),e(t);case f:return r.drivers.auth=t.payload,localStorage.setItem("driver-list",JSON.stringify(r)),e(t);default:return e(t)}}}}))},n.a.createElement(V,null)),document.querySelector("#root"))},71:function(e,t,a){e.exports=a(130)}},[[71,2,1]]]);
//# sourceMappingURL=main.f73bfca6.chunk.js.map