(this["webpackJsonpemployee-dir"]=this["webpackJsonpemployee-dir"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(13),s=n.n(a),c=(n(23),n(24),n(4)),l=n(14),i=n(15),u=n(18),o=n(17),m=n(16),h=n.n(m),j=function(e){return h()({method:"get",url:"https://randomuser.me/api/?results=30&name=".concat(e),responseType:"json"}).then((function(e){return e.data.results.map((function(e){var t=e.name,n=e.email,r=e.cell,a=e.picture;return{name:t.first+" "+t.last,email:n,cell:r,mediumPicture:a.medium}}))}))},d=n(0);var b=function(e){return Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"search"}),Object(d.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search Employee",id:"search"}),Object(d.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3",children:"Search"})]})})};var p=function(e){return e.results.map((function(e){return Object(d.jsxs)("ul",{className:"list-group",children:[Object(d.jsx)("li",{className:"list-group-item",children:Object(d.jsx)("img",{src:e.mediumPicture})}),Object(d.jsxs)("li",{className:"list-group-item",children:["Name: ",e.name]}),Object(d.jsxs)("li",{className:"list-group-item",children:["Cell: ",e.cell]}),Object(d.jsxs)("li",{className:"list-group-item",children:["Email: ",e.email]})]},e.email)}))};var f=function(e){return Object(d.jsx)("header",{className:"navbar navbar-expand-lg navbar-light p-3 text-light",children:Object(d.jsx)("h1",{children:"Employee Directory"})})},O=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={search:"",originalresult:[],results:[]},e.handleInputChange=function(t){var n=t.target.name,r=t.target.value;r?e.setState(Object(c.a)({},n,r)):e.setState(Object(c.a)({results:e.state.originalresult},n,r))},e.handleFormSubmit=function(t){console.log(e.state),t.preventDefault();var n=e.state.results.filter((function(t){return t.name.includes(e.state.search)}));e.setState({results:n})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;j().then((function(t){return e.setState({results:t,originalresult:t})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsxs)("div",{className:"listContainer container",children:[Object(d.jsx)(b,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(d.jsx)(p,{results:this.state.results})]})]})}}]),n}(r.Component);var g=function(){return Object(d.jsx)(O,{})};n(44);s.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5ddaf17a.chunk.js.map