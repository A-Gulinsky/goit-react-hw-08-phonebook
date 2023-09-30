"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[997],{9997:function(n,e,r){r.r(e),r.d(e,{default:function(){return dn}});var t,o,i,a,s,d,l,p,c,u,x,m,h,f,b,g,Z=r(9439),j=r(2791),w=r(168),v=r(7686),y=v.Z.ul(t||(t=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  \n  margin-top: 20px;\n\n  background-color: #398bf7;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n"]))),k=v.Z.li(o||(o=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n\n  padding: 10px;\n\n  border-bottom: 1px solid #524f4f;\n"]))),C=v.Z.p(i||(i=(0,w.Z)(["\n  width: 150px;\n\n  font-size: 18px;\n  font-weight: 600;\n  color: #dfd4d4;\n"]))),I=v.Z.p(a||(a=(0,w.Z)(["\n  width: 100px;\n  \n  font-size: 18px;\n  font-weight: 600;\n  color: #fafafa;\n"]))),z=v.Z.button(s||(s=(0,w.Z)(["\n  \n  width: 24px;\n  height: 24px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n\n  color: white;\n\n  border: 1px solid #4b4848;\n  border-radius: 4px;\n\n  transition: 150ms;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n\n    transform: scale(1.02);\n  }\n"]))),S=r(9434),A=r(3634),q=r(1538),E=r(4808),K=r(2134),L=r(184),F=function(n){var e=n.props,r=n.setEditContactId,t=e.name,o=e.number,i=e.id,a=(0,S.I0)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(C,{children:[t," :"]}),(0,L.jsx)(I,{children:o}),(0,L.jsx)(z,{type:"button",style:{backgroundColor:"#89c908"},onClick:function(){r(i)},children:(0,L.jsx)(K.QML,{style:{width:18,height:18}})}),(0,L.jsx)(z,{type:"button",style:{backgroundColor:"#c71111"},onClick:function(){return a((0,A.GK)(i))},children:(0,L.jsx)(K.VPh,{style:{width:18,height:18}})})]})},N=r(1413),_=r(1134),M=r(9085),P=v.Z.form(d||(d=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n"]))),V=v.Z.input(l||(l=(0,w.Z)(["\n  width: 150px;\n  padding: 3px 6px;\n\n  font-size: 18px;\n  font-weight: 600;\n\n  background-color: #5a99ec;\n  border-radius: 4px;\n  border: 0px solid transparent;\n\n  outline: black;\n  color: white;\n"]))),R=v.Z.input(p||(p=(0,w.Z)(["\n  \n  width: 105px;\n  padding: 3px 6px;\n\n  font-size: 18px;\n  font-weight: 600;\n\n  background-color: #5a99ec;\n  border-radius: 4px;\n  border: 1px solid transparent;\n\n  outline: none;\n  color: white;\n\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    appearance: none;\n    margin: 0;\n  }\n"]))),G=v.Z.input(c||(c=(0,w.Z)(["\n  padding: 4px 8px;\n  \n  color: white;\n\n  background-color: #5782f6;\n  border: 1px solid #4b4848;\n  border-radius: 4px;\n\n  transition: 150ms;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n\n    transform: scale(1.02);\n  }\n"]))),Q=function(n){var e=n.props,r=n.setEditContactId,t=e.id,o=e.name,i=e.number,a=(0,S.I0)(),s=(0,_.cI)({defaultValues:{name:o,number:i}}),d=s.register,l=s.handleSubmit,p=s.formState.errors;return(0,L.jsxs)(P,{onSubmit:l((function(n){var e=n.name,o=n.number,i=!!e&&e.length>=2&&o.length<=15,s=!!o&&o.length>=6&&o.length<=10;if(!i||!s)return i?s?void 0:M.Am.error("Number must not be less than 6 or more than 10 characters"):M.Am.error("Name must not be less than 2 or more than 15 characters");a((0,A.mP)({id:t,name:e,number:o})),r(null)})),children:[(0,L.jsx)(V,(0,N.Z)((0,N.Z)({autoComplete:"off"},d("name")),{},{style:{borderColor:p.name?"red":"initial"},type:"text"})),(0,L.jsx)(R,(0,N.Z)((0,N.Z)({autoComplete:"off"},d("number")),{},{type:"number"})),(0,L.jsx)(G,{type:"submit",value:"save"})]})},X=function(){var n=(0,j.useState)(null),e=(0,Z.Z)(n,2),r=e[0],t=e[1],o=(0,S.v9)(q.K2),i=(0,S.v9)(E.zK),a=(0,S.I0)();(0,j.useEffect)((function(){a((0,A.yF)())}),[a]);return(0,L.jsx)(y,{children:function(){var n=i.toLowerCase();return o.filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(n){var e=n.id,o=n.name,i=n.number;return(0,L.jsx)(k,{children:r===e?(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(Q,{props:{id:e,name:o,number:i},setEditContactId:t})}):(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(F,{props:{name:o,number:i,id:e},setEditContactId:t})})},e)}))})},$=v.Z.label(u||(u=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n\n  padding: 20px;\n\n  border: 2px solid #615e5e;\n  border-radius: 4px;\n  box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);\n\n  transition: 200ms;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.01);\n    box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);\n  }\n"]))),B=v.Z.p(x||(x=(0,w.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: #464242;\n"]))),D=v.Z.input(m||(m=(0,w.Z)(["\n  display: block;\n  width: 250px;\n\n  padding: 10px 8px;\n\n  font-size: 16px;\n  color: #514d4d;\n\n  border: 1px solid black;\n  border-radius: 4px;\n\n  outline: transparent;\n\n  transition: 200ms;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 0px 5px #064ec1;\n  }\n"]))),H=function(){var n=(0,S.I0)();return(0,L.jsxs)($,{children:[(0,L.jsx)(B,{children:"Search by filter"}),(0,L.jsx)(D,{type:"text",onChange:function(e){return n((0,E.hX)(e.target.value))}})]})},J=v.Z.form(h||(h=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  width: 300px;\n\n  padding: 25px;\n\n  border: 2px solid #615e5e;\n  border-radius: 4px;\n  box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);\n\n  transition: 200ms;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.01);\n    box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);\n  }\n"]))),O=v.Z.p(f||(f=(0,w.Z)(["\n  margin-bottom: 5px;\n\n  font-weight: 600;\n  text-align: center;\n  color: #064ec1;\n"]))),T=v.Z.input(b||(b=(0,w.Z)(["\n  display: block;\n  width: 250px;\n\n  padding: 10px 8px;\n\n  font-size: 16px;\n  color: #514d4d;\n\n  border: 1px solid black;\n  border-radius: 4px;\n\n  outline: transparent;\n  transition: 200ms;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 0px 5px #064ec1;\n  }\n"]))),U=v.Z.input(g||(g=(0,w.Z)(["\n  padding: 10px 15px;\n\n  color: white;\n\n  background-color: #1d6be7;\n  border: 1px solid transparent;\n  border-radius: 4px;\n\n  transition: 150ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: #064ec1;\n  }\n"]))),W={required:"Required field",pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Incorrect format"},maxLength:{value:15,message:"Max 15 length"}},Y={required:"Required field",pattern:{value:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"Incorrect format"},maxLength:{value:10,message:"Max 10 length"}};var nn,en,rn=function(){var n=(0,S.v9)(q.K2),e=(0,S.I0)(),r=(0,_.cI)({defaultValues:{name:"",number:""}}),t=r.register,o=r.handleSubmit,i=r.formState.errors,a=r.reset;return(0,L.jsxs)(J,{onSubmit:o((function(r){if(n.some((function(n){return r.name===n.name})))return alert("".concat(r.name," is already in contacts"));e((0,A.uK)(r)),a()})),children:[(0,L.jsx)(T,(0,N.Z)((0,N.Z)({autoComplete:"off"},t("name",W)),{},{style:{borderColor:i.name?"red":"initial"},placeholder:"Name"})),i.name&&(0,L.jsx)(O,{children:i.name.message}),(0,L.jsx)(T,(0,N.Z)((0,N.Z)({autoComplete:"off"},t("number",Y)),{},{style:{borderColor:i.number?"red":"initial"},placeholder:"Number"})),i.number&&(0,L.jsx)(O,{children:i.number.message}),(0,L.jsx)(U,{type:"submit",value:"Add Contact"})]})},tn=v.Z.h2(nn||(nn=(0,w.Z)(["\n  padding: 20px;\n\n  text-align: center;\n  color: #686464;\n"]))),on=function(n){var e=n.title,r=n.children;return(0,L.jsxs)("section",{children:[e&&(0,L.jsx)(tn,{children:e}),r]})},an=v.Z.div(en||(en=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n\n  height: 100vh;\n"]))),sn=r(4270);function dn(){return(0,L.jsxs)(an,{children:[(0,L.jsx)(sn.q,{children:(0,L.jsx)("title",{children:"Contacts"})}),(0,L.jsx)(on,{title:"Phonebook",children:(0,L.jsx)(rn,{})}),(0,L.jsxs)(on,{title:"Contacts",children:[(0,L.jsx)(H,{}),(0,L.jsx)(X,{})]})]})}}}]);
//# sourceMappingURL=997.9c2f38b5.chunk.js.map