(self.webpackChunk=self.webpackChunk||[]).push([[393],{1007:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a={props:{type:{type:String,default:"submit"},color:{type:String,default:"gray-800"},hover:{type:String,default:null},padding:{type:String,default:null},disabled:{type:Boolean,default:!1}},computed:{bgColor:function(){var e="";if(this.disabled)e="bg-indigo-200 cursor-not-allowed";else{var t="bg-"+this.color,s=this.color.split("-"),a=null==this.hover?"bg-"+s[0]+"-"+(parseInt(s[1])+100):"bg-"+this.hover,n="bg-"+s[0]+"-"+(parseInt(s[1])+100);s[0],parseInt(s[1]),s[0];e=t+" hover:"+a+" active:"+n}return null===this.padding?e+=" p-3 ":e+=" "+this.padding+" ",e}}}},9475:(e,t,s)=>{"use strict";s.d(t,{s:()=>a,x:()=>n});var a=function(){var e=this;return(0,e._self._c)("button",{staticClass:"items-center border border-transparent rounded-sm text-sm text-white focus:outline-none transition ease-in-out duration-150",class:e.bgColor,attrs:{type:e.type,disabled:e.disabled}},[e._t("default")],2)},n=[]},7906:function(e){e.exports=function(e){function t(a){if(s[a])return s[a].exports;var n=s[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var s={};return t.m=e,t.c=s,t.i=function(e){return e},t.d=function(e,s,a){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){var t=void 0;if("string"!=typeof e)try{t=JSON.stringify(e)}catch(e){throw"Failed to copy value to clipboard. Unknown type."}else t=e;var s=document.createElement("textarea");if(s.value=t,s.setAttribute("readonly",""),s.style.cssText="position:fixed;pointer-events:none;z-index:-9999;opacity:0;",document.body.appendChild(s),navigator.userAgent.match(/ipad|ipod|iphone/i)){s.contentEditable=!0,s.readOnly=!0;var a=document.createRange();a.selectNodeContents(s);var n=window.getSelection();n.removeAllRanges(),n.addRange(a),s.setSelectionRange(0,999999)}else s.select();var i=!1;try{i=document.execCommand("copy")}catch(e){console.warn(e)}return document.body.removeChild(s),i};t.default={install:function(e){e.prototype.$clipboard=a;var t=function(e){return function(){return"$"+e++}}(1),s={},n=function(e){e&&(s[e]=null,delete s[e])},i=function(e){var a=t();return s[a]=e,a};e.directive("clipboard",{bind:function(e,t){var n=t.arg,o=t.value;switch(n){case"error":var r=i(o);return void(e.dataset.clipboardErrorHandler=r);case"success":var c=i(o);return void(e.dataset.clipboardSuccessHandler=c);default:var l=function(n){if(t.hasOwnProperty("value")){var i={value:"function"==typeof o?o():o,event:n},r=a(i.value)?e.dataset.clipboardSuccessHandler:e.dataset.clipboardErrorHandler,c=s[r];c&&c(i)}},d=i(l);return e.dataset.clipboardClickHandler=d,void e.addEventListener("click",s[d])}},unbind:function(e){var t=e.dataset,a=t.clipboardSuccessHandler,i=t.clipboardErrorHandler,o=t.clipboardClickHandler;n(a),n(i),o&&(e.removeEventListener("click",s[o]),n(o))}})}}}])},4487:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(9475),n=s(1718);const i=(0,s(1900).Z)(n.Z,a.s,a.x,!1,null,null,null).exports},6306:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});const a={props:{show:{default:!1},maxWidth:{default:"3xl"},closeable:{default:!0},disableHeader:{default:!1},disableFooter:{default:!1},noContenPadding:{default:!1}},methods:{close:function(){this.closeable&&this.$emit("close")}},watch:{show:{immediate:!0,handler:function(e){document.body.style.overflow=e?"hidden":null}}},created:function(){var e=this,t=function(t){"Escape"===t.key&&e.show&&e.close()};document.addEventListener("keydown",t),this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",t)}))},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl","5xl":"sm:max-w-5xl","6xl":"sm:max-w-6xl","7xl":"sm:max-w-7xl"}[this.maxWidth]}}};const n=(0,s(1900).Z)(a,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"fixed z-10 inset-0 overflow-y-auto"},[t("div",{staticClass:"flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0"},[t("div",{staticClass:"fixed inset-0 transition-opacity",attrs:{"aria-hidden":"true"},on:{click:e.close}},[t("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})]),e._v(" "),t("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[e._v("​")]),e._v(" "),t("div",{staticClass:"inline-block align-bottom bg-white rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full",class:e.maxWidthClass,attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[e.disableHeader?e._e():t("div",{staticClass:"px-6 py-6 border-b border-gray-100 bg-white"},[t("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[e._t("title")],2)]),e._v(" "),t("div",{class:{"px-6 py-4":!e.noContenPadding}},[e._t("content")],2),e._v(" "),e.disableFooter?e._e():t("div",{staticClass:"px-6 py-4 bg-gray-50 text-right mt-5"},[e._t("footer")],2)])])])}),[],!1,null,null,null).exports},3343:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});const a={props:["project"],methods:{checkRole:s(3787).Z}};const n=(0,s(1900).Z)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p-4 flex border-b"},[t("div",{staticClass:"w-full"},[t("div",{staticClass:"text-xl font-bold"},[e._v("\n            "+e._s(e.project.name)+"\n        ")]),e._v(" "),t("div",{staticClass:"text-sm"},[e._v(e._s(e.project.description))])]),e._v(" "),t("div",{staticClass:"flex items-center"},[void 0!==e.project.id&&e.checkRole(["admin"+e.project.id])?t("router-link",{staticClass:"text-xl text-gray-600 cursor-pointer",attrs:{to:{name:"projects.settings",params:{project_id:e.project.id}},"exact-active-class":"bg-none"}},[t("i",{staticClass:"fas fa-cog"})]):e._e()],1)])}),[],!1,null,null,null).exports},5376:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var a=s(538),n=s(7906),i=s.n(n),o=s(3343),r=s(4215),c=s(4487),l=s(6306);a.default.use(i());const d={components:{ProjectHeader:o.Z,SettingsNav:r.Z,UiButton:c.Z,UiModal:l.Z},data:function(){return{project:{},tokens:{},openNewTokenModal:!1,new_token:{errors:{},permissions:["read"]},showToken:!1,createdToken:null,editStatus:!1,enable_public_access:!1}},methods:{getProject:function(){var e=this;axios.get("/admin/projects/settings/api/"+this.$route.params.project_id).then((function(t){e.project=t.data.project,e.tokens=t.data.tokens,e.enable_public_access=t.data.project.public_api}))},copyToClipboard:function(e){this.$clipboard(e),this.$toast.success("Copied to clipboard")},closeNewTokenModal:function(){this.openNewTokenModal=!1,this.new_token={errors:{},permissions:["read"]},this.showToken=!1,this.createdToken=null,this.editStatus=!1},createNewTokenSubmit:function(){var e=this;this.editStatus?axios.post("/admin/projects/settings/api/update-token/"+this.project.id,this.new_token).then((function(t){e.$toast.success("Token updated!"),e.getProject(),e.closeNewTokenModal()}),(function(t){422==t.response.status&&(e.new_token.errors=t.response.data.errors)})):axios.post("/admin/projects/settings/api/new-token/"+this.project.id,this.new_token).then((function(t){e.$toast.success("Token created!"),e.getProject(),e.showToken=!0,e.createdToken=t.data}),(function(t){422==t.response.status&&(e.new_token.errors=t.response.data.errors)}))},editToken:function(e){this.new_token={id:e.id,name:e.name,errors:{},permissions:e.abilities},this.editStatus=!0,this.openNewTokenModal=!0},deleteToken:function(e){var t=this;this.$swal.fire({title:"Are you sure",text:"you want to delete this token? Any applications using this token will not be able to connect to the API!"}).then((function(s){s.value&&axios.post("/admin/projects/settings/api/delete-token/"+t.project.id,e).then((function(e){t.$toast.success("Token deleted."),t.getProject()}))}))},enablePublicAccess:function(){var e=this;this.$swal.fire({title:"Are you sure",text:"you want to enable public API access for get(read) requests in this project? You're still going to need an access token for post and delete (create, update, delete) requests."}).then((function(t){t.value&&axios.post("/admin/projects/settings/api/enable_public_access/"+e.project.id).then((function(t){e.$toast.success("Public API Access has been enabled."),e.getProject()}))}))},disablePublicAccess:function(){var e=this;this.$swal.fire({title:"Are you sure",text:"you want to disable public API access for this project?"}).then((function(t){t.value&&axios.post("/admin/projects/settings/api/disable_public_access/"+e.project.id).then((function(t){e.$toast.success("Public API Access has been disabled."),e.getProject()}))}))}},computed:{endpointUrl:function(){return document.querySelector('meta[name="APP_URL"]').content+"/api/"+this.project.uuid}},mounted:function(){this.getProject()}};const u=(0,s(1900).Z)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex h-full"},[t("div",{staticClass:"w-96 h-full bg-white overflow-x-hidden"},[t("project-header",{staticClass:"bg-white",attrs:{project:e.project}}),e._v(" "),t("settings-nav",{attrs:{project:e.project}})],1),e._v(" "),t("div",{staticClass:"w-full overflow-x-hidden"},[t("div",{staticClass:"p-4"},[t("h4",{staticClass:"mb-2 p-2 font-bold text-xl"},[e._v("API Access")]),e._v(" "),t("div",{staticClass:"bg-white mt-2 rounded-md p-4 w-full xl:w-3/5"},[t("div",[t("div",{staticClass:"text-lg font-bold"},[e._v("Project ID")]),e._v(" "),t("div",{staticClass:"mt-1 flex rounded-sm cursor-pointer",on:{click:function(t){return e.copyToClipboard(e.project.uuid)}}},[e._m(0),e._v(" "),t("input",{directives:[{name:"forminput",rawName:"v-forminput"}],staticClass:"rounded-l-none cursor-pointer",attrs:{type:"text",readonly:"",disabled:""},domProps:{value:e.project.uuid}})])]),e._v(" "),t("div",{staticClass:"mt-5"},[t("div",{staticClass:"text-lg font-bold"},[e._v("Content API Endpoint")]),e._v(" "),t("div",{staticClass:"mt-1 flex rounded-sm cursor-pointer",on:{click:function(t){return e.copyToClipboard(e.endpointUrl)}}},[e._m(1),e._v(" "),t("input",{directives:[{name:"forminput",rawName:"v-forminput"}],staticClass:"rounded-l-none cursor-pointer",attrs:{type:"text",readonly:"",disabled:""},domProps:{value:e.endpointUrl}})])]),e._v(" "),t("div",{staticClass:"mt-10"},[e.project.public_api?t("label",{staticClass:"p-5 border border-gray-300 rounded-sm text-sm flex items-center space-x-2 cursor-pointer",attrs:{for:"togglePublic"}},[t("div",{staticClass:"relative"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.enable_public_access,expression:"enable_public_access"}],staticClass:"sr-only",attrs:{type:"checkbox",id:"togglePublic"},domProps:{checked:Array.isArray(e.enable_public_access)?e._i(e.enable_public_access,null)>-1:e.enable_public_access},on:{click:function(t){return t.preventDefault(),e.disablePublicAccess.apply(null,arguments)},change:function(t){var s=e.enable_public_access,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i=e._i(s,null);a.checked?i<0&&(e.enable_public_access=s.concat([null])):i>-1&&(e.enable_public_access=s.slice(0,i).concat(s.slice(i+1)))}else e.enable_public_access=n}}}),e._v(" "),t("div",{staticClass:"block bg-gray-600 w-14 h-8 rounded-full"}),e._v(" "),t("div",{staticClass:"dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"})]),e._v(" "),t("span",[e._v("Disable Public API Access")])]):e.project.public_api?e._e():t("label",{staticClass:"p-5 border border-gray-300 rounded-sm text-sm flex items-center space-x-2 cursor-pointer",attrs:{for:"togglePublic"}},[t("div",{staticClass:"relative"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.enable_public_access,expression:"enable_public_access"}],staticClass:"sr-only",attrs:{type:"checkbox",id:"togglePublic"},domProps:{checked:Array.isArray(e.enable_public_access)?e._i(e.enable_public_access,null)>-1:e.enable_public_access},on:{click:function(t){return t.preventDefault(),e.enablePublicAccess.apply(null,arguments)},change:function(t){var s=e.enable_public_access,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i=e._i(s,null);a.checked?i<0&&(e.enable_public_access=s.concat([null])):i>-1&&(e.enable_public_access=s.slice(0,i).concat(s.slice(i+1)))}else e.enable_public_access=n}}}),e._v(" "),t("div",{staticClass:"block bg-gray-600 w-14 h-8 rounded-full"}),e._v(" "),t("div",{staticClass:"dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"})]),e._v(" "),t("span",[e._v("Enable Public API Access")])])]),e._v(" "),t("div",{staticClass:"mt-10"},[t("div",{staticClass:"w-full flex justify-between"},[t("div",{staticClass:"text-lg font-bold"},[e._v("Access Tokens")]),e._v(" "),t("div",[t("div",{staticClass:"cursor-pointer text-indigo-700",on:{click:function(t){e.openNewTokenModal=!0}}},[e._v("Create New Token")])])]),e._v(" "),t("div",{staticClass:"overflow-x-auto mt-1 flex rounded-sm"},[t("table",{staticClass:"min-w-full divide-y divide-gray-200 border"},[e._m(2),e._v(" "),t("tbody",{staticClass:"bg-white divide-y divide-gray-200"},[e._l(e.tokens,(function(s){return t("tr",{key:s.id},[t("td",{staticClass:"px-6 py-3 text-sm whitespace-nowrap"},[e._v(e._s(s.name))]),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm whitespace-nowrap"},e._l(s.abilities,(function(s){return t("span",{key:s,staticClass:"text-gray-500 text-sm rounded-sm bg-gray-100 py-1 px-3 mr-2"},[e._v("\n                                            "+e._s(s)+"\n                                        ")])})),0),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm whitespace-nowrap"},[t("span",{directives:[{name:"show",rawName:"v-show",value:null!==s.last_used_at,expression:"token.last_used_at !== null"}]},[e._v("\n                                            Last Used at "+e._s(e._f("date")(s.last_used_at,"D MMM YYYY, H:mm"))+"\n                                        ")])]),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm"},[t("div",{staticClass:"cursor-pointer text-indigo-500",on:{click:function(t){return e.editToken(s)}}},[e._v("Edit")])]),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm"},[t("div",{staticClass:"cursor-pointer text-red-700",on:{click:function(t){return e.deleteToken(s)}}},[e._v("Revoke")])])])})),e._v(" "),null!=e.tokens&&0===e.tokens.length?t("tr",[t("td",{staticClass:"text-center text-sm text-gray-500 p-5",attrs:{colspan:"100%"}},[e._v("This project does not have tokens yet. In order to access to the API create a new token.")])]):e._e()],2)])])])])])]),e._v(" "),t("ui-modal",{attrs:{show:e.openNewTokenModal},on:{close:e.closeNewTokenModal},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.editStatus?"Update Token":"Create New Token"))]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"mt-4"},[e.showToken?t("div",[t("div",{staticClass:"rounded bg-orange-100 p-4 text-orange-800 flex items-center items-stretch text-sm leading-5"},[t("span",{staticClass:"mr-3"},[t("i",{staticClass:"fa fa-exclamation-circle"})]),e._v(" "),t("span",[e._v("\n                            Please copy your new API token. For your security, it won't be shown again. If you lose this token you can generate a new one.\n                        ")])]),e._v(" "),t("div",{staticClass:"mt-5 flex rounded-sm cursor-pointer",on:{click:function(t){return e.copyToClipboard(e.createdToken)}}},[t("span",{staticClass:"inline-flex items-center px-3 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer"},[t("i",{staticClass:"far fa-copy"})]),e._v(" "),t("input",{directives:[{name:"forminput",rawName:"v-forminput"}],staticClass:"rounded-l-none cursor-pointer",attrs:{type:"text",readonly:"",disabled:""},domProps:{value:e.createdToken}})])]):e._e(),e._v(" "),e.showToken?e._e():t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.createNewTokenSubmit.apply(null,arguments)}}},[t("div",[t("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_token.name,expression:"new_token.name"},{name:"forminput",rawName:"v-forminput"}],attrs:{type:"text"},domProps:{value:e.new_token.name},on:{input:function(t){t.target.composing||e.$set(e.new_token,"name",t.target.value)}}}),e._v(" "),e.new_token.errors.name?t("p",{staticClass:"text-sm text-red-600 mt-1"},[e._v(e._s(e.new_token.errors.name[0]))]):e._e()]),e._v(" "),t("div",{staticClass:"mt-5"},[t("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Permissions")]),e._v(" "),t("div",{staticClass:"grid grid-cols-2"},[t("div",{staticClass:"col-span-1"},[t("div",{staticClass:"flex items-start"},[t("div",{staticClass:"flex items-center h-5"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_token.permissions,expression:"new_token.permissions"},{name:"formcheckbox",rawName:"v-formcheckbox"}],attrs:{id:"create",type:"checkbox"},domProps:{value:"create",checked:Array.isArray(e.new_token.permissions)?e._i(e.new_token.permissions,"create")>-1:e.new_token.permissions},on:{change:function(t){var s=e.new_token.permissions,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i="create",o=e._i(s,i);a.checked?o<0&&e.$set(e.new_token,"permissions",s.concat([i])):o>-1&&e.$set(e.new_token,"permissions",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.new_token,"permissions",n)}}})]),e._v(" "),t("div",{staticClass:"ml-3 text-sm"},[t("label",{staticClass:"font-medium text-gray-700",attrs:{for:"create"}},[e._v("Create")]),e._v(" "),t("p",{staticClass:"text-gray-500"},[e._v("Can create new content")])])]),e._v(" "),t("div",{staticClass:"flex items-start mt-3"},[t("div",{staticClass:"flex items-center h-5"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_token.permissions,expression:"new_token.permissions"},{name:"formcheckbox",rawName:"v-formcheckbox"}],attrs:{id:"update",type:"checkbox"},domProps:{value:"update",checked:Array.isArray(e.new_token.permissions)?e._i(e.new_token.permissions,"update")>-1:e.new_token.permissions},on:{change:function(t){var s=e.new_token.permissions,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i="update",o=e._i(s,i);a.checked?o<0&&e.$set(e.new_token,"permissions",s.concat([i])):o>-1&&e.$set(e.new_token,"permissions",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.new_token,"permissions",n)}}})]),e._v(" "),t("div",{staticClass:"ml-3 text-sm"},[t("label",{staticClass:"font-medium text-gray-700",attrs:{for:"update"}},[e._v("Update")]),e._v(" "),t("p",{staticClass:"text-gray-500"},[e._v("Can update existing content")])])])]),e._v(" "),t("div",{staticClass:"col-span-1"},[t("div",{staticClass:"flex items-start"},[t("div",{staticClass:"flex items-center h-5"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_token.permissions,expression:"new_token.permissions"},{name:"formcheckbox",rawName:"v-formcheckbox"}],attrs:{id:"read",type:"checkbox"},domProps:{value:"read",checked:Array.isArray(e.new_token.permissions)?e._i(e.new_token.permissions,"read")>-1:e.new_token.permissions},on:{change:function(t){var s=e.new_token.permissions,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i="read",o=e._i(s,i);a.checked?o<0&&e.$set(e.new_token,"permissions",s.concat([i])):o>-1&&e.$set(e.new_token,"permissions",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.new_token,"permissions",n)}}})]),e._v(" "),t("div",{staticClass:"ml-3 text-sm"},[t("label",{staticClass:"font-medium text-gray-700",attrs:{for:"read"}},[e._v("Read")]),e._v(" "),t("p",{staticClass:"text-gray-500"},[e._v("Can read content")])])]),e._v(" "),t("div",{staticClass:"flex items-start mt-3"},[t("div",{staticClass:"flex items-center h-5"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_token.permissions,expression:"new_token.permissions"},{name:"formcheckbox",rawName:"v-formcheckbox"}],attrs:{id:"delete",type:"checkbox"},domProps:{value:"delete",checked:Array.isArray(e.new_token.permissions)?e._i(e.new_token.permissions,"delete")>-1:e.new_token.permissions},on:{change:function(t){var s=e.new_token.permissions,a=t.target,n=!!a.checked;if(Array.isArray(s)){var i="delete",o=e._i(s,i);a.checked?o<0&&e.$set(e.new_token,"permissions",s.concat([i])):o>-1&&e.$set(e.new_token,"permissions",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.new_token,"permissions",n)}}})]),e._v(" "),t("div",{staticClass:"ml-3 text-sm"},[t("label",{staticClass:"font-medium text-gray-700",attrs:{for:"delete"}},[e._v("Delete")]),e._v(" "),t("p",{staticClass:"text-gray-500"},[e._v("Can delete content")])])])])])])])])])]},proxy:!0},{key:"footer",fn:function(){return[t("ui-button",{attrs:{color:"gray-50",hover:"gray-200"},nativeOn:{click:function(t){return e.closeNewTokenModal.apply(null,arguments)}}},[t("span",{staticClass:"text-gray-800"},[e._v("Cancel")])]),e._v(" "),e.showToken?e._e():t("ui-button",{attrs:{color:"indigo-500"},nativeOn:{click:function(t){return e.createNewTokenSubmit.apply(null,arguments)}}},[e._v("\n                "+e._s(e.editStatus?"Save Changes":"Create Token")+"\n            ")])]},proxy:!0}])})],1)}),[function(){var e=this._self._c;return e("span",{staticClass:"inline-flex items-center px-3 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer"},[e("i",{staticClass:"far fa-copy"})])},function(){var e=this._self._c;return e("span",{staticClass:"inline-flex items-center px-3 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer"},[e("i",{staticClass:"far fa-copy"})])},function(){var e=this,t=e._self._c;return t("thead",{staticClass:"bg-gray-100"},[t("tr",[t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[e._v("Name")]),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[e._v("Permissions")]),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-px",attrs:{scope:"col"}}),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-px",attrs:{scope:"col"}}),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-px",attrs:{scope:"col"}})])])}],!1,null,null,null).exports},4215:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});const a={props:["project"],methods:{checkRole:s(3787).Z}};const n=(0,s(1900).Z)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p-4 bg-white"},[t("h4",{staticClass:"mb-2 p-2 font-bold text-lg"},[e._v("Settings")]),e._v(" "),t("ul",[t("li",{staticClass:"mb-2"},[void 0!==e.project.id?t("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.settings",params:{project_id:e.project.id}}}},[e._v("Project")]):e._e()],1),e._v(" "),t("li",{staticClass:"mb-2"},[void 0!==e.project.id&&e.checkRole(["super_admin"])?t("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.settings.locales",params:{project_id:e.project.id}}}},[e._v("Localization")]):e._e()],1),e._v(" "),t("li",{staticClass:"mb-2"},[void 0!==e.project.id&&e.checkRole(["super_admin"])?t("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.settings.users",params:{project_id:e.project.id}}}},[e._v("Users & Roles")]):e._e()],1),e._v(" "),t("li",{staticClass:"mb-2"},[void 0!==e.project.id&&e.checkRole(["super_admin"])?t("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.settings.api",params:{project_id:e.project.id}}}},[e._v("API Access")]):e._e()],1),e._v(" "),t("li",{staticClass:"mb-2"},[void 0!==e.project.id&&e.checkRole(["super_admin"])?t("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.settings.webhooks",params:{project_id:e.project.id}}}},[e._v("Webhooks")]):e._e()],1)])])}),[],!1,null,null,null).exports},1718:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=s(1007).Z}}]);