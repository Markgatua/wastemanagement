import{b as Z}from"./index-6f46c8cb.js";import{c1 as ae,I as p,x as K,A as q,c9 as ye,v as O,cJ as se,u as Se,cc as ie,r as T,k as y,cK as ee,cL as xe,w as ue,K as A,g as m,V as te,cM as Ce,cF as Te,c3 as ke,cN as we,H as ze,bY as X,P as D,cO as Be,cP as Ee,ch as Ve,c5 as Pe,co as Re,D as Ie,E as _,cd as _e,cQ as j,cR as ce,B as $e,cb as Me,G as He,ba as Oe,N as re,bi as Ae,cj as Ye,cS as Xe,aK as Le,cr as Fe,cT as We,O as Ge,M as De,aW as je}from"./index-5fe23517.js";import{u as Ke}from"./ssrBoot-78070c5d.js";function ne(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function oe(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:r,currentScrollOffset:s,isHorizontal:l}=e;const a=l?o.clientWidth:o.clientHeight,u=l?o.offsetLeft:o.offsetTop,c=r&&l?n-u-a:u,d=t+s,x=a+c,S=a*.4;return c<=s?s=Math.max(c-S,0):d<=x&&(s=Math.min(s-(d-x-S),n-t)),s}function qe(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:r,isHorizontal:s}=e;const l=s?o.clientWidth:o.clientHeight,a=s?o.offsetLeft:o.offsetTop,u=r&&s?n-a-l/2-t/2:a+l/2-t/2;return Math.min(n-t,Math.max(0,u))}const Ne=Symbol.for("vuetify:v-slide-group"),ve=ae({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ne},nextIcon:{type:p,default:"$next"},prevIcon:{type:p,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...K(),...q(),...ye({selectedClass:"v-slide-group-item--active"})},"v-slide-group"),le=O()({name:"VSlideGroup",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{isRtl:n}=se(),{mobile:r}=Se(),s=ie(e,e.symbol),l=T(!1),a=T(0),u=T(0),c=T(0),d=y(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:S}=ee(),{resizeRef:h,contentRect:g}=ee(),V=y(()=>s.selected.value.length?s.items.value.findIndex(i=>i.id===s.selected.value[0]):-1),R=y(()=>s.selected.value.length?s.items.value.findIndex(i=>i.id===s.selected.value[s.selected.value.length-1]):-1);if(xe){let i=-1;ue(()=>[s.selected.value,S.value,g.value,d.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(S.value&&g.value){const v=d.value?"width":"height";u.value=S.value[v],c.value=g.value[v],l.value=u.value+1<c.value}if(V.value>=0&&h.value){const v=h.value.children[R.value];V.value===0||!l.value?a.value=0:e.centerActive?a.value=qe({selectedElement:v,containerSize:u.value,contentSize:c.value,isRtl:n.value,isHorizontal:d.value}):l.value&&(a.value=oe({selectedElement:v,containerSize:u.value,contentSize:c.value,isRtl:n.value,currentScrollOffset:a.value,isHorizontal:d.value}))}})})}const P=T(!1);let w=0,z=0;function f(i){const v=d.value?"clientX":"clientY";z=(n.value&&d.value?-1:1)*a.value,w=i.touches[0][v],P.value=!0}function b(i){if(!l.value)return;const v=d.value?"clientX":"clientY",E=n.value&&d.value?-1:1;a.value=E*(z+w-i.touches[0][v])}function C(i){const v=c.value-u.value;a.value<0||!l.value?a.value=0:a.value>=v&&(a.value=v),P.value=!1}function B(){x.value&&(x.value[d.value?"scrollLeft":"scrollTop"]=0)}const $=T(!1);function L(i){if($.value=!0,!(!l.value||!h.value)){for(const v of i.composedPath())for(const E of h.value.children)if(E===v){a.value=oe({selectedElement:E,containerSize:u.value,contentSize:c.value,isRtl:n.value,currentScrollOffset:a.value,isHorizontal:d.value});return}}}function I(i){$.value=!1}function F(i){var v;!$.value&&!(i.relatedTarget&&((v=h.value)!=null&&v.contains(i.relatedTarget)))&&k()}function N(i){h.value&&(d.value?i.key==="ArrowRight"?k(n.value?"prev":"next"):i.key==="ArrowLeft"&&k(n.value?"next":"prev"):i.key==="ArrowDown"?k("next"):i.key==="ArrowUp"&&k("prev"),i.key==="Home"?k("first"):i.key==="End"&&k("last"))}function k(i){var v,E,U,J,Q;if(h.value)if(!i)(v=Ce(h.value)[0])==null||v.focus();else if(i==="next"){const M=(E=h.value.querySelector(":focus"))==null?void 0:E.nextElementSibling;M?M.focus():k("first")}else if(i==="prev"){const M=(U=h.value.querySelector(":focus"))==null?void 0:U.previousElementSibling;M?M.focus():k("last")}else i==="first"?(J=h.value.firstElementChild)==null||J.focus():i==="last"&&((Q=h.value.lastElementChild)==null||Q.focus())}function H(i){const v=a.value+(i==="prev"?-1:1)*u.value;a.value=Te(v,0,c.value-u.value)}const Y=y(()=>{let i=a.value>c.value-u.value?-(c.value-u.value)+ne(c.value-u.value-a.value):-a.value;a.value<=0&&(i=ne(-a.value));const v=n.value&&d.value?-1:1;return{transform:`translate${d.value?"X":"Y"}(${v*i}px)`,transition:P.value?"none":"",willChange:P.value?"transform":""}}),W=y(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),G=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return l.value||Math.abs(a.value)>0;case"mobile":return r.value||l.value||Math.abs(a.value)>0;default:return!r.value&&(l.value||Math.abs(a.value)>0)}}),ge=y(()=>Math.abs(a.value)>0),be=y(()=>c.value>Math.abs(a.value)+u.value);return A(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":G.value,"v-slide-group--is-overflowing":l.value},e.class],style:e.style,tabindex:$.value||s.selected.value.length?-1:0,onFocus:F},{default:()=>{var i,v,E;return[G.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ge.value}],onClick:()=>H("prev")},[((i=t.prev)==null?void 0:i.call(t,W.value))??m(Z,null,{default:()=>[m(te,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:B},[m("div",{ref:h,class:"v-slide-group__content",style:Y.value,onTouchstartPassive:f,onTouchmovePassive:b,onTouchendPassive:C,onFocusin:L,onFocusout:I,onKeydown:N},[(v=t.default)==null?void 0:v.call(t,W.value)])]),G.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!be.value}],onClick:()=>H("next")},[((E=t.next)==null?void 0:E.call(t,W.value))??m(Z,null,{default:()=>[m(te,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:s.selected,scrollTo:H,scrollOffset:a,focus:k}}});const de=Symbol.for("vuetify:v-tabs"),Ue=O()({name:"VTab",props:{fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ke(we({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},setup(e,o){let{slots:t,attrs:n}=o;const{textColorClasses:r,textColorStyles:s}=ze(e,"sliderColor"),l=y(()=>e.direction==="horizontal"),a=T(!1),u=T(),c=T();function d(x){var h,g;let{value:S}=x;if(a.value=S,S){const V=(g=(h=u.value)==null?void 0:h.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),R=c.value;if(!V||!R)return;const P=getComputedStyle(V).color,w=V.getBoundingClientRect(),z=R.getBoundingClientRect(),f=l.value?"x":"y",b=l.value?"X":"Y",C=l.value?"right":"bottom",B=l.value?"width":"height",$=w[f],L=z[f],I=$>L?w[C]-z[C]:w[f]-z[f],F=Math.sign(I)>0?l.value?"right":"bottom":Math.sign(I)<0?l.value?"left":"top":"center",k=(Math.abs(I)+(Math.sign(I)<0?w[B]:z[B]))/Math.max(w[B],z[B]),H=w[B]/z[B],Y=1.5;Be(R,{backgroundColor:[P,""],transform:[`translate${b}(${I}px) scale${b}(${H})`,`translate${b}(${I/Y}px) scale${b}(${(k-1)/Y+1})`,""],transformOrigin:Array(3).fill(F)},{duration:225,easing:Ee})}}return A(()=>{const[x]=X.filterProps(e);return m(X,D({symbol:de,ref:u,class:["v-tab",e.class],style:e.style,tabindex:a.value?0:-1,role:"tab","aria-selected":String(a.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},x,n,{"onGroup:selected":d}),{default:()=>{var S;return[((S=t.default)==null?void 0:S.call(t))??e.text,!e.hideSlider&&m("div",{ref:c,class:["v-tab__slider",r.value],style:s.value},null)]}})}),{}}});function Je(e){return e?e.map(o=>typeof o=="string"?{title:o,value:o}:o):[]}const ut=O()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ve({mandatory:"force"}),...Ve(),...q()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=Pe(e,"modelValue"),r=y(()=>Je(e.items)),{densityClasses:s}=Re(e),{backgroundColorClasses:l,backgroundColorStyles:a}=Ie(_(e,"bgColor"));return _e({VTab:{color:_(e,"color"),direction:_(e,"direction"),stacked:_(e,"stacked"),fixed:_(e,"fixedTabs"),sliderColor:_(e,"sliderColor"),hideSlider:_(e,"hideSlider")}}),A(()=>{const[u]=le.filterProps(e);return m(le,D(u,{modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,l.value,e.class],style:[{"--v-tabs-height":j(e.height)},a.value,e.style],role:"tablist",symbol:de}),{default:()=>[t.default?t.default():r.value.map(c=>m(Ue,D(c,{key:c.title}),null))]})}),{}}});const Qe=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:r}=e,s=.5,l=16;e.offsetX=t-o,e.offsetY=r-n,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&t<o-l&&e.left(e),e.right&&t>o+l&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&r<n-l&&e.up(e),e.down&&r>n+l&&e.down(e))};function Ze(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function pe(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),Qe(o)}function et(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function tt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ze(t,o),touchend:t=>pe(t,o),touchmove:t=>et(t,o)}}function nt(e,o){var a;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,r=(t==null?void 0:t.options)??{passive:!0},s=(a=o.instance)==null?void 0:a.$.uid;if(!n||!s)return;const l=tt(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[s]=l,ce(l).forEach(u=>{n.addEventListener(u,l[u],r)})}function ot(e,o){var s,l;const t=(s=o.value)!=null&&s.parent?e.parentElement:e,n=(l=o.instance)==null?void 0:l.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const r=t._touchHandlers[n];ce(r).forEach(a=>{t.removeEventListener(a,r[a])}),delete t._touchHandlers[n]}const fe={mounted:nt,unmounted:ot},he=Symbol.for("vuetify:v-window"),me=Symbol.for("vuetify:v-window-group"),lt=ae({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...K(),...q(),...$e()},"v-window"),ct=O()({name:"VWindow",directives:{Touch:fe},props:lt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=Me(e),{isRtl:r}=se(),{t:s}=He(),l=ie(e,me),a=T(),u=y(()=>r.value?!e.reverse:e.reverse),c=T(!1),d=y(()=>{const f=e.direction==="vertical"?"y":"x",C=(u.value?!c.value:c.value)?"-reverse":"";return`v-window-${f}${C}-transition`}),x=T(0),S=T(void 0),h=y(()=>l.items.value.findIndex(f=>l.selected.value.includes(f.id)));ue(h,(f,b)=>{const C=l.items.value.length,B=C-1;C<=2?c.value=f<b:f===B&&b===0?c.value=!0:f===0&&b===B?c.value=!1:c.value=f<b}),Oe(he,{transition:d,isReversed:c,transitionCount:x,transitionHeight:S,rootRef:a});const g=y(()=>e.continuous||h.value!==0),V=y(()=>e.continuous||h.value!==l.items.value.length-1);function R(){g.value&&l.prev()}function P(){V.value&&l.next()}const w=y(()=>{const f=[],b={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:l.prev,ariaLabel:s("$vuetify.carousel.prev")};f.push(g.value?t.prev?t.prev({props:b}):m(X,b,null):m("div",null,null));const C={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:l.next,ariaLabel:s("$vuetify.carousel.next")};return f.push(V.value?t.next?t.next({props:C}):m(X,C,null):m("div",null,null)),f}),z=y(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?R():P()},right:()=>{u.value?P():R()},start:b=>{let{originalEvent:C}=b;C.stopPropagation()}},...e.touch===!0?{}:e.touch});return A(()=>re(m(e.tag,{ref:a,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var f,b;return[m("div",{class:"v-window__container",style:{height:S.value}},[(f=t.default)==null?void 0:f.call(t,{group:l}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[w.value])]),(b=t.additional)==null?void 0:b.call(t,{group:l})]}}),[[Ae("touch"),z.value]])),{group:l}}}),rt=O()({name:"VWindowItem",directives:{Touch:fe},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...K(),...Ye(),...Xe()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=Le(he),r=Fe(e,me),{isBooted:s}=Ke();if(!n||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const l=T(!1),a=y(()=>n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function u(){!l.value||!n||(l.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var g;l.value||!n||(l.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=j((g=n.rootRef.value)==null?void 0:g.clientHeight)),n.transitionCount.value+=1)}function d(){u()}function x(g){l.value&&je(()=>{!a.value||!l.value||!n||(n.transitionHeight.value=j(g.clientHeight))})}const S=y(()=>{const g=n.isReversed.value?e.reverseTransition:e.transition;return a.value?{name:typeof g!="string"?n.transition.value:g,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:d,onEnter:x}:!1}),{hasContent:h}=We(e,r.isSelected);return A(()=>m(De,{transition:S.value,disabled:!s.value},{default:()=>{var g;return[re(m("div",{class:["v-window-item",r.selectedClass.value,e.class],style:e.style},[h.value&&((g=t.default)==null?void 0:g.call(t))]),[[Ge,r.isSelected.value]])]}})),{}}});export{ut as V,ct as a,Ue as b,rt as c};
