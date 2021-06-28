(function(e){function t(t){for(var i,o,s=t[0],l=t[1],c=t[2],m=0,d=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},r=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("1d50")},"0bc7":function(e,t,a){"use strict";a("4c9a")},1504:function(e,t,a){"use strict";a("183f")},"183f":function(e,t,a){},"1d50":function(e,t,a){"use strict";a.r(t);a("dce7"),a("bd3b"),a("d0c3"),a("5e30");var i=a("e832"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{id:"appNavBar",sticky:""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{variant:"dark",to:"/",exact:""}},[e._v("Home")]),a("b-nav-item",{attrs:{to:"/projects"}},[e._v("Projects")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{to:"/contact"}},[e._v("Contact Me!")])],1)],1),a("router-view",{attrs:{id:"appBody"}})],1)},r=[],o={name:"App"},s=o,l=(a("e5cd"),a("553a")),c=Object(l["a"])(s,n,r,!1,null,null,null),u=c.exports,m=a("7e05"),d=(a("5b3d"),a("7db1"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"homePage"}},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[a("div",[e.show?a("p",{staticClass:"pageTitle"},[e._v("Welcome to my portfolio!")]):e._e(),a("p",{attrs:{id:"homesubhead"}},[e._v("My name is James Bell. I am a .NET developer with a passion for coding, learning, and self-improvement.")])])]),a("b-form",{attrs:{inline:"",id:"homePageBtnForm"}},[a("b-button",{staticClass:"homePageBtns",attrs:{variant:"outline-success"},on:{click:function(t){return e.toggleTimeline()}}},[e._v(" "+e._s(e.timelineTxt)+" ")]),a("b-button",{staticClass:"homePageBtns",attrs:{variant:"outline-success",href:"resume.pdf",target:"_blank"}},[e._v(" See My Resume ")])],1),a("transition",{attrs:{appear:"","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft"}},[1==e.showTimeline?a("div",{attrs:{id:"timelineArea"}},[a("vue-timeline-update",{key:"5",attrs:{date:new Date("2020"),title:"April 2020",description:"Promoted to lead software developer at Delaware Nation Industries",category:"Work Experience",color:"blue",icon:"code",thumbnail:"../assets/coding.png",theme:"dark"}}),a("vue-timeline-update",{key:"7",attrs:{date:new Date("2020"),title:"December 2020",description:"Earned my certificate of mastery in web development from Oklahoma City Community College",category:"Certification",color:"green",icon:"code",thumbnail:"../assets/college.jpg"}}),a("vue-timeline-update",{key:"6",attrs:{date:new Date("2020"),title:"May 2020",description:"Graduated from American Military University with a BS in IT; concentration on software development",category:"Education",color:"orange",icon:"code",thumbnail:"../assets/college.jpg"}}),a("vue-timeline-update",{key:"5",attrs:{date:new Date("2019"),title:"May 2019",description:"Hired by Delaware Nation Industries to work on Tinker Air Force base as a full-stack .NET developer",category:"Work Experience",color:"blue",icon:"code",thumbnail:"../assets/coding.png"}}),a("vue-timeline-update",{key:"4",attrs:{date:new Date("2019"),title:"February 2019",description:"Earned my CompTIA Security+ certification. I passed on the first try!",category:"Certification",color:"green",icon:"code",thumbnail:"../assets/security.png"}}),a("vue-timeline-update",{key:"3",attrs:{date:new Date("2018"),title:"December 2018",description:"Hired by Rome Research Corp. to work on Tinker Air Force base as a client system support technician",category:"Work Experience",color:"blue",icon:"code",thumbnail:"../assets/IT.png"}}),a("vue-timeline-update",{key:"2",attrs:{date:new Date("2018"),title:"December 2018",description:"Graduated from Oklahoma City Community College with an associate in applied science in Computer Science; computer programming minor",category:"Education",color:"orange",icon:"code",thumbnail:"../assets/college.jpg"}}),a("vue-timeline-update",{key:"1",attrs:{date:new Date("2015"),title:"December 2015",description:"Enlisted in the Army National Guard as a network cable systems installer/maintainer",category:"Work Experience",color:"turquoise",icon:"code",thumbnail:"../assets/army.png"}})],1):e._e()])],1)}),p=[],f={data:function(){return{show:!1,showTimeline:!1,timelineTxt:"View a timeline of my IT experience"}},methods:{toggleTimeline:function(){var e=this;e.showTimeline=!e.showTimeline,1==e.showTimeline?e.timelineTxt="Hide my timeline 😞":e.timelineTxt="View a timeline of my IT experience"}},mounted:function(){var e=this;e.show=!0}},v=f,b=(a("6d68"),Object(l["a"])(v,d,p,!1,null,null,null)),h=b.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"appPage"},[a("p",{staticClass:"pageTitle"},[e._v("Here's a list of projects I've worked on during my own time. Feel free to check out the code on my Github.")]),a("div",{attrs:{id:"projectArea"}},e._l(e.projectList,(function(e,t){return a("ProjectItem",{key:t,staticClass:"projects",attrs:{title:e.title,descriptionList:e.description,appLink:e.appLink,gitHubLink:e.gitHubLink}})})),1)])},y=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projectItem"},[a("div",{staticClass:"itemTitle"},[e._v(" "+e._s(e.title)+" "),a("hr",{staticClass:"titleDivider"})]),a("div",{staticClass:"descriptionArea"},[a("ul",e._l(e.descriptionList,(function(t,i){return a("li",{key:i},[e._v(e._s(t))])})),0)]),a("div",{staticClass:"linkArea"},[e.appLink?a("span",[a("b-link",{staticClass:"projectLinks",attrs:{href:e.appLink,target:"_blank"}},[e._v("App Link")]),e._v(" | ")],1):e._e(),a("b-link",{staticClass:"projectLinks",attrs:{href:e.gitHubLink,target:"_blank"}},[e._v("Github Link")])],1)])},_=[],w={name:"ProjectItem",props:["title","descriptionList","appLink","gitHubLink"]},j=w,E=(a("0bc7"),Object(l["a"])(j,k,_,!1,null,"6f4340a4",null)),C=E.exports,S={name:"Projects",components:{ProjectItem:C},data:function(){return{projectList:[{title:"This Portfolio",description:["Vue.js + BootstrapVue","Plenty of custom CSS and CSS grid (especially on this page)","Still a work in progress"],gitHubLink:"https://github.com/jamesthedev/portfolio"},{title:"60/120",description:["Fitness app for Fitbit devices","> 40 ratings; 70% are 5 stars","I have managed and updated this app for nearly a year. Several users have reached out to me with questions and feature requests. I have been very responsive and quick to fix bugs.","The Fitbit SDK uses a custom version of CSS/HTML/Javascript"],appLink:"https://gallery.fitbit.com/details/446adbb9-9530-4bee-8372-7d1bc600d271",gitHubLink:"https://github.com/jamesthedev/60-120"},{title:"File Creator",description:["A tool I made in college to quickly create files with a user-provided filename, extension, and file path","I recently went back to this project and made several improvements to it.","Very helpful tool as a developer when I need to quickly make a bunch of files for a project."],gitHubLink:"https://github.com/jamesthedev/File-Creator"}]}}},T=S,x=(a("80e4"),Object(l["a"])(T,g,y,!1,null,"2164a15f",null)),I=x.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"pageTitle"},[e._v("Send me an email so we can get in touch!")]),a("form",{attrs:{id:"frmEmail",method:"post",enctype:"text/plain",disabled:""}},[e._v(" Your Name:"),a("br"),a("b-form-input",{attrs:{state:e.validateInput(1),disabled:e.busy},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" Your Email Address:"),a("br"),a("b-form-input",{attrs:{maxlength:"320",id:"emailInput",state:e.validateInput(2),disabled:e.busy},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),e._v(" Message:"),a("br"),a("b-form-textarea",{attrs:{id:"textarea",size:"md",rows:"6","max-rows":"6","no-resize":"",state:e.validateInput(3),maxlength:"2000",disabled:e.busy},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e.busy?a("b-button",{staticClass:"emailBtns",attrs:{variant:"success",disabled:""}},[a("b-spinner",{attrs:{small:""}}),e._v(" Sending... ")],1):a("b-button",{staticClass:"emailBtns",attrs:{size:"md",variant:"success"},on:{click:e.submitEmail}},[e._v(" Send ")])],1),e._m(0)])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{attrs:{id:"lnkGitHub"}},[e._v("Or, "),a("a",{attrs:{href:"https://github.com/jamesthedev",target:"_blank"}},[e._v("check out my GitHub")])])}],P=(a("5cba"),a("f8c5"));P["a"].init("user_YfqCXYpBa1LMQNOGY3Li6");var D={name:"ContactMe",data:function(){return{name:null,message:null,userEmail:null,formState:{name:null,userEmail:null,message:null},busy:!1}},methods:{submitEmail:function(){var e=this,t=e.validateForm();if(t){var a={from_name:e.name,from_email:e.userEmail,message:e.message};e.busy=!0,P["a"].send("service_sh2r9io","template_de03mrp",a).then((function(t){200===t.status?(e.$bvToast.toast("I got your email! I CC'd the email you provided, so you should be seeing it in your inbox shortly. The sender address will be james_the_dev@outlook.com. You might need to check your spam folder. Thank you for taking the time to visit my portfolio!",{title:"Thank you!",variant:"success",solid:!0,toaster:"b-toaster-top-center",autoHideDelay:15e3}),e.clearForm()):(e.$bvToast.toast("I'm sorry, there was an unexpected error sending this email. If you keep having issues, feel free to email me directly at james_the_dev@outlook.com.",{title:"Email error",variant:"danger",solid:!0,toaster:"b-toaster-top-center",autoHideDelay:5e3}),console.error(t)),e.busy=!1}),(function(t){e.$bvToast.toast("I'm sorry, there was an unexpected error sending this email. If you keep having issues, feel free to email me directly at james_the_dev@outlook.com.",{title:"Email error",variant:"danger",solid:!0,toaster:"b-toaster-top-center",autoHideDelay:5e3}),console.error(t),e.busy=!1}))}else e.$bvToast.toast("Please fill out all fields and enter a valid email address.",{noAutoHide:!0,title:"Error",variant:"danger",solid:!0,toaster:"b-toaster-top-center"})},validateInput:function(e){var t=this;switch(e){case 1:return null===t.formState.name?null:!!t.name&&(t.formState.name=null,null);case 2:return null===t.formState.userEmail?null:!!t.validateEmail()&&(t.formState.userEmail=null,null);case 3:return null===t.formState.message?null:!!t.message&&(t.formState.message=null,console.log("here3"),null)}},validateEmail:function(){return/\S+@\S+\.\S+/.test(this.userEmail)},validateForm:function(){var e=this,t=!0;return e.name||(t=!1,e.formState.name=!1),e.validateEmail()||(t=!1,e.formState.userEmail=!1),e.message||(t=!1,e.formState.message=!1),t},clearForm:function(){var e=this;e.name=e.message=e.userEmail=e.formState.name=e.formState.userEmail=e.formState.message=null}}},H=D,A=(a("1504"),Object(l["a"])(H,L,O,!1,null,"7aa463f3",null)),F=A.exports,M=a("4af9");i["default"].use(M["a"]);var B=new M["a"]({routes:[{path:"/",name:"home",component:h},{path:"/projects",name:"projects",component:I},{path:"/contact",name:"contact",component:F}]}),$=a("2c8b");i["default"].use($["a"]),i["default"].use(m["a"]),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(u)},router:B}).$mount("#app")},4832:function(e,t,a){},"4c9a":function(e,t,a){},5868:function(e,t,a){},"6d68":function(e,t,a){"use strict";a("4832")},"80e4":function(e,t,a){"use strict";a("5868")},cfe7:function(e,t,a){},e5cd:function(e,t,a){"use strict";a("cfe7")}});
//# sourceMappingURL=app.23ecda2f.js.map