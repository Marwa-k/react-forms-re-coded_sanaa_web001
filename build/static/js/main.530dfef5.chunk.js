(this["webpackJsonpreact-forms"]=this["webpackJsonpreact-forms"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),s=a.n(l),c=a(1),i=a(2),m=a(4),u=a(3),h=a(5),o=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"John",lastName:"Henry"},a.handleFirstNameChange=function(e){a.setState({firstName:e.target.value})},a.handleLastNameChange=function(e){a.setState({lastName:e.target.value})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.formData,a=t.firstName,n=t.lastName;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"firstName",onChange:function(t){return e.handleFirstNameChange(t)},value:this.state.firstName}),r.a.createElement("input",{type:"text",name:"lastName",onChange:function(t){return e.handleLastNameChange(t)},value:this.state.lastName})),r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"firstName",onChange:this.props.handleChange,value:a}),r.a.createElement("input",{type:"text",name:"lastName",onChange:this.props.handleChange,value:n})))}}]),t}(r.a.Component),f=a(8),p=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.formData,t=e.firstName,a=e.lastName;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h1",null,a))}}]),t}(r.a.Component),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(o,{formData:this.state,handleChange:this.handleChange}),r.a.createElement(p,{formData:this.state}))}}]),t}(r.a.Component);s.a.render(r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(v,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.530dfef5.chunk.js.map