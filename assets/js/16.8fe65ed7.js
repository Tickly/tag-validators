(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{349:function(t,n,e){"use strict";e.r(n);var i={data:function(){return{type:"input",form:{bind:""},rules:[["number","bind",{min:3,max:10}]],labels:{bind:"绑定值"}}},methods:{toggle:function(){this.type="input"===this.type?"number":"input",this.form.bind="input"===this.type?"":0},handleSubmit:function(){this.validate(this.form,this.rules,this.labels)}}},o=e(48),r=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{on:{submit:function(n){return n.preventDefault(),t.handleSubmit(n)}}},[e("button",{attrs:{type:"button"},on:{click:t.toggle}},[t._v("Toggle input type")]),t._v(" "),e("label",[t._v("\n    绑定值\n    "),"input"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.bind,expression:"form.bind"}],domProps:{value:t.form.bind},on:{input:function(n){n.target.composing||t.$set(t.form,"bind",n.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.bind,expression:"form.bind",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.form.bind},on:{input:function(n){n.target.composing||t.$set(t.form,"bind",t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}})]),t._v(" "),e("button",[t._v("Submit")])])}),[],!1,null,null,null);n.default=r.exports}}]);