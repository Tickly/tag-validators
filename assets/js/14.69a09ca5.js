(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{347:function(e,t,n){"use strict";n.r(t);var i={data:function(){return{type:"input",form:{bind:""},rules:[["boolean","bind"]],labels:{bind:"绑定值"}}},methods:{toggle:function(){this.type="input"===this.type?"checkbox":"input",this.form.bind="input"===this.type&&""},handleSubmit:function(){this.validate(this.form,this.rules,this.labels)}}},o=n(48),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("button",{attrs:{type:"button"},on:{click:e.toggle}},[e._v("Toggle input type")]),e._v(" "),n("label",[e._v("\n    绑定值\n    "),"checkbox"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bind,expression:"form.bind"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.bind)?e._i(e.form.bind,null)>-1:e.form.bind},on:{change:function(t){var n=e.form.bind,i=t.target,o=!!i.checked;if(Array.isArray(n)){var r=e._i(n,null);i.checked?r<0&&e.$set(e.form,"bind",n.concat([null])):r>-1&&e.$set(e.form,"bind",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(e.form,"bind",o)}}}):"radio"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bind,expression:"form.bind"}],attrs:{type:"radio"},domProps:{checked:e._q(e.form.bind,null)},on:{change:function(t){return e.$set(e.form,"bind",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bind,expression:"form.bind"}],attrs:{type:e.type},domProps:{value:e.form.bind},on:{input:function(t){t.target.composing||e.$set(e.form,"bind",t.target.value)}}})]),e._v(" "),n("button",[e._v("Submit")])])}),[],!1,null,null,null);t.default=r.exports}}]);