import{c1 as be,I as _e,c2 as we,v as he,c3 as ge,C as Ce,c4 as Ae,G as Te,r as V,c5 as ue,k as q,c6 as ke,K as Me,g as e,$ as F,S as xe,P as K,c7 as Ie,p as y,c8 as Ge,o as M,c as ae,d as l,bZ as P,bX as g,Q as Pe,i as s,e as o,bY as T,V as O,bV as te,aP as N,m as R,bh as j,t as A,a as Se}from"./index-5fe23517.js";import{a as Ue}from"./avatar-1-4acd3e19.js";import{a as d,V as S}from"./VRow-0b446cd2.js";import{V as oe}from"./VDivider-e5266ed4.js";import{m as De,u as Ne,V as w,a as Re,b as Q,c as Z}from"./VTextField-4236ab47.js";import{m as Le,u as Ee,V as Fe,a as ie}from"./VList-a97944b3.js";import{V as re}from"./VChip-ad8278e5.js";import{V as de}from"./VTable-e4a0c865.js";import{V as Oe,a as Be,b as ze,c as le}from"./VWindowItem-273e7ec4.js";import"./index-6f46c8cb.js";import"./ssrBoot-78070c5d.js";const $e=be({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:_e,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:we},...Le({itemChildren:!1})},"v-select"),E=he()({name:"VSelect",props:{...$e(),...ge(De({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Ce({transition:{component:Ae}})},emits:{"update:focused":u=>!0,"update:modelValue":u=>!0,"update:menu":u=>!0},setup(u,_){let{slots:n}=_;const{t:i}=Te(),v=V(),c=V(),m=ue(u,"menu"),b=q({get:()=>m.value,set:r=>{var p;m.value&&!r&&((p=c.value)!=null&&p.ΨopenChildren)||(m.value=r)}}),{items:x,transformIn:B,transformOut:z}=Ee(u),t=ue(u,"modelValue",[],r=>B(ke(r)),r=>{const p=z(r);return u.multiple?p:p[0]??null}),a=Ne(),U=q(()=>t.value.map(r=>x.value.find(p=>u.valueComparator(p.value,r.value))||r)),ne=q(()=>U.value.map(r=>r.props.value)),$=V(!1);let J="",se;const X=q(()=>u.hideSelected?x.value.filter(r=>!U.value.some(p=>p===r)):x.value),L=V();function ce(r){u.openOnClear&&(b.value=!0)}function me(){u.hideNoData&&!x.value.length||u.readonly||a!=null&&a.isReadonly.value||(b.value=!b.value)}function fe(r){var f,G,D,C;if(u.readonly||a!=null&&a.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(r.key)&&r.preventDefault(),["Enter","ArrowDown"," "].includes(r.key)&&(b.value=!0),["Escape","Tab"].includes(r.key)&&(b.value=!1),r.key==="ArrowDown"?(f=L.value)==null||f.focus("next"):r.key==="ArrowUp"?(G=L.value)==null||G.focus("prev"):r.key==="Home"?(D=L.value)==null||D.focus("first"):r.key==="End"&&((C=L.value)==null||C.focus("last"));const p=1e3;function I(h){const k=h.key.length===1,ee=!h.ctrlKey&&!h.metaKey&&!h.altKey;return k&&ee}if(u.multiple||!I(r))return;const W=performance.now();W-se>p&&(J=""),J+=r.key.toLowerCase(),se=W;const Y=x.value.find(h=>h.title.toLowerCase().startsWith(J));Y!==void 0&&(t.value=[Y])}function H(r){if(u.multiple){const p=ne.value.findIndex(I=>u.valueComparator(I,r.value));if(p===-1)t.value=[...t.value,r];else{const I=[...t.value];I.splice(p,1),t.value=I}}else t.value=[r],b.value=!1}function pe(r){var p;(p=L.value)!=null&&p.$el.contains(r.relatedTarget)||(b.value=!1)}function ve(r){$.value=!0}function ye(r){var p;r.relatedTarget==null&&((p=v.value)==null||p.focus())}return Me(()=>{const r=!!(u.chips||n.chip),p=!!(!u.hideNoData||X.value.length||n.prepend||n.append||n["no-data"]),I=t.value.length>0,[W]=w.filterProps(u),Y=I||!$.value&&u.label&&!u.persistentPlaceholder?void 0:u.placeholder;return e(w,K({ref:v},W,{modelValue:t.value.map(f=>f.props.value).join(", "),"onUpdate:modelValue":f=>{f==null&&(t.value=[])},focused:$.value,"onUpdate:focused":f=>$.value=f,validationValue:t.externalValue,dirty:I,class:["v-select",{"v-select--active-menu":b.value,"v-select--chips":!!u.chips,[`v-select--${u.multiple?"multiple":"single"}`]:!0,"v-select--selected":t.value.length},u.class],style:u.style,appendInnerIcon:u.menuIcon,readonly:!0,placeholder:Y,"onClick:clear":ce,"onMousedown:control":me,onBlur:pe,onKeydown:fe}),{...n,default:()=>e(F,null,[e(xe,K({ref:c,modelValue:b.value,"onUpdate:modelValue":f=>b.value=f,activator:"parent",contentClass:"v-select__content",eager:u.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:u.transition},u.menuProps),{default:()=>[p&&e(Fe,{ref:L,selected:ne.value,selectStrategy:u.multiple?"independent":"single-independent",onMousedown:f=>f.preventDefault(),onFocusin:ve,onFocusout:ye},{default:()=>{var f,G,D;return[!X.value.length&&!u.hideNoData&&(((f=n["no-data"])==null?void 0:f.call(n))??e(ie,{title:i(u.noDataText)},null)),(G=n["prepend-item"])==null?void 0:G.call(n),X.value.map((C,h)=>{var k;return n.item?(k=n.item)==null?void 0:k.call(n,{item:C,index:h,props:K(C.props,{onClick:()=>H(C)})}):e(ie,K({key:h},C.props,{onClick:()=>H(C)}),{prepend:ee=>{let{isSelected:Ve}=ee;return u.multiple&&!u.hideSelected?e(Re,{modelValue:Ve,ripple:!1,tabindex:"-1"},null):void 0}})}),(D=n["append-item"])==null?void 0:D.call(n)]}})]}),U.value.map((f,G)=>{var h;function D(k){k.stopPropagation(),k.preventDefault(),H(f)}const C={"onClick:close":D,modelValue:!0,"onUpdate:modelValue":void 0};return e("div",{key:f.value,class:"v-select__selection"},[r?n.chip?e(Ie,{key:"chip-defaults",defaults:{VChip:{closable:u.closableChips,size:"small",text:f.title}}},{default:()=>{var k;return[(k=n.chip)==null?void 0:k.call(n,{item:f,index:G,props:C})]}}):e(re,K({key:"chip",closable:u.closableChips,size:"small",text:f.title},C),null):((h=n.selection)==null?void 0:h.call(n,{item:f,index:G}))??e("span",{class:"v-select__selection-text"},[f.title,u.multiple&&G<U.value.length-1&&e("span",{class:"v-select__selection-comma"},[y(",")])])])})])})}),Ge({isFocused:$,menu:b,select:H},v)}}),Ke={class:"d-flex flex-column justify-center gap-5"},je={class:"d-flex flex-wrap gap-2"},He=o("span",{class:"d-none d-sm-block"},"Upload new photo",-1),We=o("span",{class:"d-none d-sm-block"},"Reset",-1),Ye=o("p",{class:"text-body-1 mb-0"}," Allowed JPG, GIF or PNG. Max size of 800K ",-1),qe={__name:"AccountSettingsAccount",setup(u){const _={avatarImg:Ue,firstName:"john",lastName:"Doe",email:"johnDoe@example.com",org:"ThemeSelection",phone:"+1 (917) 543-9876",address:"123 Main St, New York, NY 10001",state:"New York",zip:"10001",country:"USA",language:"English",timezone:"(GMT-11:00) International Date Line West",currency:"USD"},n=V(),i=V(structuredClone(_)),v=V(!1),c=()=>{i.value=structuredClone(_)},m=z=>{const t=new FileReader,{files:a}=z.target;a&&a.length&&(t.readAsDataURL(a[0]),t.onload=()=>{typeof t.result=="string"&&(i.value.avatarImg=t.result)})},b=()=>{i.value.avatarImg=_.avatarImg},x=["(GMT-11:00) International Date Line West","(GMT-11:00) Midway Island","(GMT-10:00) Hawaii","(GMT-09:00) Alaska","(GMT-08:00) Pacific Time (US & Canada)","(GMT-08:00) Tijuana","(GMT-07:00) Arizona","(GMT-07:00) Chihuahua","(GMT-07:00) La Paz","(GMT-07:00) Mazatlan","(GMT-07:00) Mountain Time (US & Canada)","(GMT-06:00) Central America","(GMT-06:00) Central Time (US & Canada)","(GMT-06:00) Guadalajara","(GMT-06:00) Mexico City","(GMT-06:00) Monterrey","(GMT-06:00) Saskatchewan","(GMT-05:00) Bogota","(GMT-05:00) Eastern Time (US & Canada)","(GMT-05:00) Indiana (East)","(GMT-05:00) Lima","(GMT-05:00) Quito","(GMT-04:00) Atlantic Time (Canada)","(GMT-04:00) Caracas","(GMT-04:00) La Paz","(GMT-04:00) Santiago","(GMT-03:30) Newfoundland","(GMT-03:00) Brasilia","(GMT-03:00) Buenos Aires","(GMT-03:00) Georgetown","(GMT-03:00) Greenland","(GMT-02:00) Mid-Atlantic","(GMT-01:00) Azores","(GMT-01:00) Cape Verde Is.","(GMT+00:00) Casablanca","(GMT+00:00) Dublin","(GMT+00:00) Edinburgh","(GMT+00:00) Lisbon","(GMT+00:00) London"],B=["USD","EUR","GBP","AUD","BRL","CAD","CNY","CZK","DKK","HKD","HUF","INR"];return(z,t)=>(M(),ae(S,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(P,{title:"Account Details"},{default:l(()=>[e(g,{class:"d-flex"},{default:l(()=>[e(Pe,{rounded:"lg",size:"100",class:"me-6",image:s(i).avatarImg},null,8,["image"]),o("form",Ke,[o("div",je,[e(T,{color:"primary",onClick:t[0]||(t[0]=a=>{var U;return(U=s(n))==null?void 0:U.click()})},{default:l(()=>[e(O,{icon:"mdi-cloud-upload-outline",class:"d-sm-none"}),He]),_:1}),o("input",{ref_key:"refInputEl",ref:n,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:m},null,544),e(T,{type:"reset",color:"error",variant:"tonal",onClick:b},{default:l(()=>[We,e(O,{icon:"mdi-refresh",class:"d-sm-none"})]),_:1})]),Ye])]),_:1}),e(oe),e(g,null,{default:l(()=>[e(Q,{class:"mt-6"},{default:l(()=>[e(S,null,{default:l(()=>[e(d,{md:"6",cols:"12"},{default:l(()=>[e(w,{modelValue:s(i).firstName,"onUpdate:modelValue":t[1]||(t[1]=a=>s(i).firstName=a),label:"First Name"},null,8,["modelValue"])]),_:1}),e(d,{md:"6",cols:"12"},{default:l(()=>[e(w,{modelValue:s(i).lastName,"onUpdate:modelValue":t[2]||(t[2]=a=>s(i).lastName=a),label:"Last Name"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:s(i).email,"onUpdate:modelValue":t[3]||(t[3]=a=>s(i).email=a),label:"E-mail",type:"email"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:s(i).org,"onUpdate:modelValue":t[4]||(t[4]=a=>s(i).org=a),label:"Organization"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:s(i).phone,"onUpdate:modelValue":t[5]||(t[5]=a=>s(i).phone=a),label:"Phone Number"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:s(i).address,"onUpdate:modelValue":t[6]||(t[6]=a=>s(i).address=a),label:"Address"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:s(i).state,"onUpdate:modelValue":t[7]||(t[7]=a=>s(i).state=a),label:"State"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:s(i).zip,"onUpdate:modelValue":t[8]||(t[8]=a=>s(i).zip=a),label:"Zip Code"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(E,{modelValue:s(i).country,"onUpdate:modelValue":t[9]||(t[9]=a=>s(i).country=a),label:"Country",items:["USA","Canada","UK","India","Australia"]},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(E,{modelValue:s(i).language,"onUpdate:modelValue":t[10]||(t[10]=a=>s(i).language=a),label:"Language",items:["English","Spanish","Arabic","Hindi","Urdu"]},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(E,{modelValue:s(i).timezone,"onUpdate:modelValue":t[11]||(t[11]=a=>s(i).timezone=a),label:"Timezone",items:x,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(E,{modelValue:s(i).currency,"onUpdate:modelValue":t[12]||(t[12]=a=>s(i).currency=a),label:"Currency",items:B,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(T,null,{default:l(()=>[y("Save changes")]),_:1}),e(T,{color:"secondary",variant:"tonal",type:"reset",onClick:te(c,["prevent"])},{default:l(()=>[y(" Reset ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(P,{title:"Deactivate Account"},{default:l(()=>[e(g,null,{default:l(()=>[o("div",null,[e(Z,{modelValue:s(v),"onUpdate:modelValue":t[13]||(t[13]=a=>N(v)?v.value=a:null),label:"I confirm my account deactivation"},null,8,["modelValue"])]),e(T,{disabled:!s(v),color:"error",class:"mt-3"},{default:l(()=>[y(" Deactivate Account ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1}))}},Ze=o("a",{href:"javascript:void(0)"},"Request Permission",-1),Qe=o("thead",null,[o("tr",null,[o("th",{scope:"col"}," Type "),o("th",{scope:"col"}," EMAIL "),o("th",{scope:"col"}," BROWSER "),o("th",{scope:"col"}," App ")])],-1),Je=o("p",{class:"text-base font-weight-medium"}," When should we send you notifications? ",-1),Xe={class:"d-flex flex-wrap gap-4 mt-4"},el={__name:"AccountSettingsNotification",setup(u){const _=V([{type:"New for you",email:!0,browser:!0,app:!0},{type:"Account activity",email:!0,browser:!0,app:!0},{type:"A new browser used to sign in",email:!0,browser:!0,app:!1},{type:"A new device is linked",email:!0,browser:!1,app:!1}]),n=V("Only when I'm online");return(i,v)=>(M(),ae(P,{title:"Recent Devices"},{default:l(()=>[e(g,null,{default:l(()=>[y(" We need permission from your browser to show notifications. "),Ze]),_:1}),e(de,{class:"text-no-wrap"},{default:l(()=>[Qe,o("tbody",null,[(M(!0),R(F,null,j(s(_),c=>(M(),R("tr",{key:c.type},[o("td",null,A(c.type),1),o("td",null,[e(Z,{modelValue:c.email,"onUpdate:modelValue":m=>c.email=m},null,8,["modelValue","onUpdate:modelValue"])]),o("td",null,[e(Z,{modelValue:c.browser,"onUpdate:modelValue":m=>c.browser=m},null,8,["modelValue","onUpdate:modelValue"])]),o("td",null,[e(Z,{modelValue:c.app,"onUpdate:modelValue":m=>c.app=m},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),e(oe),e(g,null,{default:l(()=>[e(Q,{onSubmit:te(()=>{},["prevent"])},{default:l(()=>[Je,e(S,null,{default:l(()=>[e(d,{cols:"12",sm:"6"},{default:l(()=>[e(E,{modelValue:s(n),"onUpdate:modelValue":v[0]||(v[0]=c=>N(n)?n.value=c:null),mandatory:"",items:["Only when I'm online","Anytime"]},null,8,["modelValue"])]),_:1})]),_:1}),o("div",Xe,[e(T,{type:"submit"},{default:l(()=>[y(" Save Changes ")]),_:1}),e(T,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[y(" Reset ")]),_:1})])]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}},ll=o("p",{class:"text-base font-weight-medium mt-2"}," Password Requirements: ",-1),al={class:"d-flex flex-column gap-y-3"},tl={class:"font-weight-medium"},ol=o("p",{class:"font-weight-semibold"}," Two factor authentication is not enabled yet. ",-1),nl=o("p",null,[y(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),o("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more.")],-1),sl={class:"d-flex align-center flex-wrap mb-3"},ul={class:"text-h6 mb-0 me-3"},il={class:"text-base font-weight-medium"},rl={class:"me-3"},dl=o("thead",null,[o("tr",null,[o("th",{scope:"col"}," BROWSER "),o("th",{scope:"col"}," DEVICE "),o("th",{scope:"col"}," LOCATION "),o("th",{scope:"col"}," RECENT ACTIVITIES ")])],-1),cl={__name:"AccountSettingsSecurity",setup(u){const _=V(!1),n=V(!1),i=V(!1),v=V("12345678"),c=V("87654321"),m=V("87654321"),b=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"],x=[{name:"Server Key 1",key:"23eaf7f0-f4f7-495e-8b86-fad3261282ac",createdOn:"28 Apr 2021, 18:20 GTM+4:10",permission:"Full Access"},{name:"Server Key 2",key:"bb98e571-a2e2-4de8-90a9-2e231b5e99",createdOn:"12 Feb 2021, 10:30 GTM+2:30",permission:"Read Only"},{name:"Server Key 3",key:"2e915e59-3105-47f2-8838-6e46bf83b711",createdOn:"28 Dec 2020, 12:21 GTM+4:10",permission:"Full Access"}],B=[{browser:"Chrome on Windows",device:"HP Spectre 360",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"mdi-microsoft-windows",color:"primary"}},{browser:"Chrome on iPhone",device:"iPhone 12x",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"mdi-cellphone",color:"error"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"mdi-android",color:"success"}},{browser:"Chrome on MacOS",device:"Apple iMac",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"mdi-apple",color:"secondary"}},{browser:"Chrome on Windows",device:"HP Spectre 360",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"mdi-microsoft-windows",color:"primary"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"mdi-android",color:"success"}}];return(z,t)=>(M(),ae(S,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(P,{title:"Change Password"},{default:l(()=>[e(Q,null,{default:l(()=>[e(g,null,{default:l(()=>[e(S,{class:"mb-3"},{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:s(v),"onUpdate:modelValue":t[0]||(t[0]=a=>N(v)?v.value=a:null),type:s(_)?"text":"password","append-inner-icon":s(_)?"mdi-eye-off-outline":"mdi-eye-outline",label:"Current Password","onClick:appendInner":t[1]||(t[1]=a=>_.value=!s(_))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1}),e(S,null,{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:s(c),"onUpdate:modelValue":t[2]||(t[2]=a=>N(c)?c.value=a:null),type:s(n)?"text":"password","append-inner-icon":s(n)?"mdi-eye-off-outline":"mdi-eye-outline",label:"New Password","onClick:appendInner":t[3]||(t[3]=a=>n.value=!s(n))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:s(m),"onUpdate:modelValue":t[4]||(t[4]=a=>N(m)?m.value=a:null),type:s(i)?"text":"password","append-inner-icon":s(i)?"mdi-eye-off-outline":"mdi-eye-outline",label:"Confirm New Password","onClick:appendInner":t[5]||(t[5]=a=>i.value=!s(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:l(()=>[ll,o("ul",al,[(M(),R(F,null,j(b,a=>o("li",{key:a,class:"d-flex"},[o("div",null,[e(O,{size:"7",icon:"mdi-circle",class:"me-3"})]),o("span",tl,A(a),1)])),64))])]),_:1}),e(g,{class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(T,null,{default:l(()=>[y("Save changes")]),_:1}),e(T,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[y(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(P,{title:"Two-steps verification"},{default:l(()=>[e(g,null,{default:l(()=>[ol,nl,e(T,null,{default:l(()=>[y(" Enable two-factor authentication ")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(P,{title:"Create an API key"},{default:l(()=>[e(S,null,{default:l(()=>[e(d,{cols:"12",md:"5","order-md":"0",order:"1"},{default:l(()=>[e(g,null,{default:l(()=>[e(Q,{onSubmit:te(()=>{},["prevent"])},{default:l(()=>[e(S,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(E,{label:"Choose the API key type you want to create",items:["Full Control","Modify","Read & Execute","List Folder Contents","Read Only","Read & Write"]})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(w,{label:"Name the API key"})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(T,{type:"submit",block:""},{default:l(()=>[y(" Create Key ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(P,{title:"API Key List & Access"},{default:l(()=>[e(g,null,{default:l(()=>[y(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")]),_:1}),e(g,{class:"d-flex flex-column gap-y-4"},{default:l(()=>[(M(),R(F,null,j(x,a=>o("div",{key:a.key,class:"bg-var-theme-background pa-4"},[o("div",sl,[o("h6",ul,A(a.name),1),e(re,{label:"",color:"primary",size:"small"},{default:l(()=>[y(A(a.permission),1)]),_:2},1024)]),o("p",il,[o("span",rl,A(a.key),1),e(O,{size:18,icon:"mdi-content-copy",class:"cursor-pointer"})]),o("span",null,"Created on "+A(a.createdOn),1)])),64))]),_:1})]),_:1})]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(P,{title:"Recent Devices"},{default:l(()=>[e(de,{class:"text-no-wrap"},{default:l(()=>[dl,o("tbody",null,[(M(),R(F,null,j(B,a=>o("tr",{key:a.recentActivity},[o("td",null,[e(O,{start:"",icon:a.deviceIcon.icon,color:a.deviceIcon.color},null,8,["icon","color"]),y(" "+A(a.browser),1)]),o("td",null,A(a.device),1),o("td",null,A(a.location),1),o("td",null,A(a.recentActivity),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}))}},Cl={__name:"account-settings",setup(u){const _=Se(),n=V(_.params.tab),i=[{title:"Account",icon:"mdi-account-outline",tab:"account"},{title:"Security",icon:"mdi-lock-open-outline",tab:"security"},{title:"Notifications",icon:"mdi-bell-outline",tab:"notification"}];return(v,c)=>(M(),R("div",null,[e(Oe,{modelValue:s(n),"onUpdate:modelValue":c[0]||(c[0]=m=>N(n)?n.value=m:null),"show-arrows":""},{default:l(()=>[(M(),R(F,null,j(i,m=>e(ze,{key:m.icon,value:m.tab},{default:l(()=>[e(O,{size:"20",start:"",icon:m.icon},null,8,["icon"]),y(" "+A(m.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(oe),e(Be,{modelValue:s(n),"onUpdate:modelValue":c[1]||(c[1]=m=>N(n)?n.value=m:null),class:"mt-5 disable-tab-transition"},{default:l(()=>[e(le,{value:"account"},{default:l(()=>[e(qe)]),_:1}),e(le,{value:"security"},{default:l(()=>[e(cl)]),_:1}),e(le,{value:"notification"},{default:l(()=>[e(el)]),_:1})]),_:1},8,["modelValue"])]))}};export{Cl as default};
