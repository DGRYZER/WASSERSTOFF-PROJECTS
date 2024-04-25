"use strict";(self.webpackChunkdebajyotis_application_3=self.webpackChunkdebajyotis_application_3||[]).push([[70],{70:(e,t,s)=>{s.r(t),s.d(t,{default:()=>P});var a=s(791),l=function(e,t){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])},l(e,t)};var i=50,r=50;function o(e){var t=e.className,s=e.counterClockwise,l=e.dashRatio,i=e.pathRadius,r=e.strokeWidth,o=e.style;return(0,a.createElement)("path",{className:t,style:Object.assign({},o,n({pathRadius:i,dashRatio:l,counterClockwise:s})),d:x({pathRadius:i,counterClockwise:s}),strokeWidth:r,fillOpacity:0})}function x(e){var t=e.pathRadius,s=e.counterClockwise?1:0;return"\n      M "+i+","+r+"\n      m 0,-"+t+"\n      a "+t+","+t+" "+s+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+s+" 1 1 0,-"+2*t+"\n    "}function n(e){var t=e.counterClockwise,s=e.dashRatio,a=e.pathRadius,l=2*Math.PI*a,i=(1-s)*l;return{strokeDasharray:l+"px "+l+"px",strokeDashoffset:(t?-i:i)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function s(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,s=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,s),a)-s)/(a-s)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,s=e.className,l=e.classes,x=e.counterClockwise,n=e.styles,c=e.strokeWidth,d=e.text,m=this.getPathRadius(),p=this.getPathRatio();return(0,a.createElement)("svg",{className:l.root+" "+s,style:n.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:l.background,style:n.background,cx:i,cy:r,r:50}):null,(0,a.createElement)(o,{className:l.trail,counterClockwise:x,dashRatio:t,pathRadius:m,strokeWidth:c,style:n.trail}),(0,a.createElement)(o,{className:l.path,counterClockwise:x,dashRatio:p*t,pathRadius:m,strokeWidth:c,style:n.path}),d?(0,a.createElement)("text",{className:l.text,style:n.text,x:i,y:r},d):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(a.Component);var d=s(184);const m={round:"rounded-lg"},p={fill:{indigo_A700_01:"bg-indigo-A700_01",gray_50_01:"bg-gray-50_01",white_A700:"bg-white-A700 shadow-bs"}},u={xs:"p-[7px]",sm:"p-[11px]",md:"p-4"},g=e=>{var t;let{children:s,className:a="",leftIcon:l,rightIcon:i,shape:r="",size:o="",variant:x="",color:n="",...c}=e;return(0,d.jsxs)("button",{className:"".concat(a," ").concat(r&&m[r]||""," ").concat(o&&u[o]||""," ").concat(x&&(null===(t=p[x])||void 0===t?void 0:t[n])||""),...c,children:[!!l&&l,s,!!i&&i]})},h=e=>{let{className:t,src:s="defaultNoData.png",alt:a="testImg",...l}=e;return(0,d.jsx)("img",{className:t,src:s,alt:a,...l,loading:"lazy"})},f=e=>{let{className:t,...s}=e;return(0,d.jsx)("div",{className:t,...s})},j=e=>{let{children:t,className:s,...a}=e;return(0,d.jsx)("div",{className:s,...a,children:t})},w={txtRobotoRegular14GreenA700:"font-normal font-roboto",txtRobotoRegular14GreenA400:"font-normal font-roboto",txtRobotoRegular14Indigo300:"font-normal font-roboto",txtPoppinsLight16:"font-light font-poppins",txtRobotoRegular14Bluegray300:"font-normal font-roboto",txtPoppinsRegular34WhiteA700:"font-normal font-poppins",txtPoppinsLight16Black900:"font-light font-poppins",txtPoppinsLight60:"font-light font-poppins",txtRobotoBold10Bluegray600:"font-bold font-roboto",txtRobotoRegular14Indigo800:"font-normal font-roboto",txtOpenSansBold10:"font-bold font-opensans",txtRobotoRegular12:"font-normal font-roboto",txtRobotoRegular12WhiteA70090:"font-normal font-roboto",txtPoppinsRegular34:"font-normal font-poppins",txtRobotoRegular14:"font-normal font-roboto",txtRobotoRegular14Black900:"font-normal font-roboto",txtPoppinsLight16WhiteA700:"font-light font-poppins",txtPoppinsSemiBold20:"font-poppins font-semibold",txtPoppinsSemiBold22:"font-poppins font-semibold",txtRobotoRegular12Indigo80090:"font-normal font-roboto",txtRobotoRegular14Indigo80090:"font-normal font-roboto",txtRobotoRegular20:"font-normal font-roboto",txtArchivoVFBetaRegular2051:"font-archivo font-normal",txtRobotoBold10:"font-bold font-roboto"},v=e=>{let{children:t,className:s="",size:a,as:l,...i}=e;const r=l||"p";return(0,d.jsx)(r,{className:"text-left ".concat(s," ").concat(a&&w[a]),...i,children:t})},b=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:e.className,children:[(0,d.jsx)("div",{className:"flex flex-col items-center justify-end p-[5px]",children:(0,d.jsx)(v,{className:"mt-1 text-black-900 text-center text-sm tracking-[0.44px]",size:"txtRobotoRegular14Black900",children:null===e||void 0===e?void 0:e.selectedperiod})}),(0,d.jsx)("div",{className:"flex flex-col items-center justify-end p-[5px]",children:(0,d.jsx)(v,{className:"mt-1 text-black-900 text-center text-sm tracking-[0.44px]",size:"txtRobotoRegular14Black900",children:null===e||void 0===e?void 0:e.selectedperiod1})}),(0,d.jsx)(g,{className:"!text-white-A700 cursor-pointer font-bold font-mulish leading-[normal] min-w-[53px] rounded-[16px] text-[13px] text-center tracking-[0.02px]",color:"indigo_A700_01",size:"xs",variant:"fill",children:null===e||void 0===e?void 0:e.onbuttonclick}),(0,d.jsx)("div",{className:"flex flex-col items-center justify-end p-[5px]",children:(0,d.jsx)(v,{className:"h-[17px] mt-1 text-black-900 text-center text-sm tracking-[0.44px]",size:"txtRobotoRegular14Black900",children:null===e||void 0===e?void 0:e.selectedperiod2})}),(0,d.jsx)("div",{className:"flex flex-col items-center justify-end p-[5px]",children:(0,d.jsx)(v,{className:"mt-1 text-black-900 text-center text-sm tracking-[0.44px]",size:"txtRobotoRegular14Black900",children:null===e||void 0===e?void 0:e.selectedprice})})]})});b.defaultProps={selectedperiod:"1W",selectedperiod1:"1M",onbuttonclick:"3M",selectedperiod2:"1Y",selectedprice:"ALL"};const N=b,y=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(j,{className:e.className,orientation:"vertical",children:[(0,d.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-auto",children:[(0,d.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-auto",children:[(0,d.jsx)(v,{className:"text-indigo-800 text-sm tracking-[0.44px] w-auto",size:"txtRobotoRegular14Indigo800",children:null===e||void 0===e?void 0:e.name}),(0,d.jsx)(v,{className:"text-blue_gray-300 text-sm tracking-[0.44px] w-auto",size:"txtRobotoRegular14Bluegray300",children:null===e||void 0===e?void 0:e.amount}),(0,d.jsx)(v,{className:"text-indigo-800 text-sm tracking-[0.44px] w-auto",size:"txtRobotoRegular14Indigo800",children:null===e||void 0===e?void 0:e.summary})]}),(0,d.jsx)(h,{className:"h-5 w-3.5",src:"images/img_arrowup.svg",alt:"arrowup"})]}),(0,d.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-auto",children:[(0,d.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-auto",children:[(0,d.jsx)(v,{className:"text-indigo-800 text-sm tracking-[0.44px] w-auto",size:"txtRobotoRegular14Indigo800",children:null===e||void 0===e?void 0:e.name1}),(0,d.jsx)(v,{className:"text-blue_gray-300 text-sm tracking-[0.44px] w-auto",size:"txtRobotoRegular14Bluegray300",children:null===e||void 0===e?void 0:e.amount1}),(0,d.jsx)(v,{className:"text-indigo-800 text-sm tracking-[0.44px] w-auto",size:"txtRobotoRegular14Indigo800",children:null===e||void 0===e?void 0:e.summary1})]}),(0,d.jsx)(h,{className:"h-5 w-3.5",src:"images/img_arrowup_red_500.svg",alt:"arrowup"})]}),(0,d.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-auto",children:[(0,d.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-auto",children:[(0,d.jsx)(v,{className:"text-indigo-800 text-sm tracking-[0.44px] w-auto",size:"txtRobotoRegular14Indigo800",children:null===e||void 0===e?void 0:e.name2}),(0,d.jsx)(v,{className:"text-blue_gray-300 text-sm tracking-[0.44px] w-auto",size:"txtRobotoRegular14Bluegray300",children:null===e||void 0===e?void 0:e.amount2}),(0,d.jsx)(v,{className:"text-indigo-800 text-sm tracking-[0.44px] w-auto",size:"txtRobotoRegular14Indigo800",children:null===e||void 0===e?void 0:e.summary2})]}),(0,d.jsx)(h,{className:"h-5 w-3.5",src:"images/img_arrowup.svg",alt:"arrowup"})]})]})});y.defaultProps={name:"Travel",amount:"760",summary:"2,540",name1:"Presentation",amount1:"650",summary1:"2,304",name2:"Business",amount2:"612",summary2:"2,140"};const R=y,k=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:e.className,children:[(0,d.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-4 items-center justify-start sm:px-5 px-[30px] rounded-[10px] w-auto md:w-full",children:[(0,d.jsx)("div",{className:"flex flex-col h-[146px] items-center justify-start w-[146px]",children:(0,d.jsxs)("div",{className:"h-[146px] relative w-[146px]",children:[(0,d.jsx)("div",{className:"absolute bg-gray-900 border-4 border-gray-300 border-solid h-[139px] inset-[0] justify-center m-auto rotate-[90deg] rounded-[69px] w-[139px]"}),(0,d.jsx)("div",{className:"absolute bg-gray-900 border-4 border-gray-300 border-solid h-[103px] inset-[0] justify-center m-auto rotate-[90deg] rounded-[51px] w-[103px]"}),(0,d.jsx)("div",{className:"absolute border-[10px] border-orange-300 border-solid h-[108px] inset-[0] justify-center m-auto rotate-[90deg] rounded-[50%] w-[108px]"}),(0,d.jsx)("div",{className:"!w-[146px] absolute border-solid h-[146px] inset-[0] justify-center m-auto overflow-visible",children:(0,d.jsx)(c,{className:"!w-[146px] absolute border-solid h-[146px] inset-[0] justify-center m-auto overflow-visible",value:9,strokeWidth:1,styles:{trail:{strokeWidth:1,stroke:""},path:{strokeLinecap:"square",height:"100%",transformOrigin:"center",transform:"rotate(90deg)"}}})}),(0,d.jsx)(g,{className:"absolute flex h-[59px] inset-[0] items-center justify-center m-auto rounded-[29px] w-[59px]",color:"gray_50_01",size:"md",variant:"fill",children:(0,d.jsx)(h,{className:"h-[26px]",src:"images/img_icondiamond.svg",alt:"icondiamond"})})]})}),(0,d.jsxs)("div",{className:"flex flex-col items-center justify-start w-auto",children:[(0,d.jsx)("div",{className:"flex flex-col items-start justify-start w-auto",children:(0,d.jsx)(v,{className:"text-center text-indigo-800 text-xl tracking-[0.44px] w-auto",size:"txtRobotoRegular20",children:null===e||void 0===e?void 0:e.nameOne})}),(0,d.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-auto",children:[(0,d.jsx)(v,{className:"text-[22px] text-center text-indigo-800 sm:text-lg md:text-xl",size:"txtPoppinsSemiBold22",children:null===e||void 0===e?void 0:e.price}),(0,d.jsxs)("div",{className:"flex flex-row h-[26px] md:h-auto items-start justify-start",children:[(0,d.jsx)(h,{className:"h-full w-3.5",src:"images/img_arrowup.svg",alt:"arrowup"}),(0,d.jsx)(v,{className:"text-center text-green-A700 text-sm tracking-[0.44px]",size:"txtRobotoRegular14GreenA700",children:null===e||void 0===e?void 0:e.percent})]})]}),(0,d.jsx)(v,{className:"text-center text-indigo-800_90 text-xs tracking-[0.40px] w-auto",size:"txtRobotoRegular12Indigo80090",children:null===e||void 0===e?void 0:e.priceOne})]})]}),(0,d.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-[11px] items-start justify-start sm:px-5 px-[30px] rounded-[10px] w-auto md:w-full",children:[(0,d.jsxs)("div",{className:"flex flex-row gap-4 items-start justify-start w-auto",children:[(0,d.jsx)(v,{className:"text-indigo-800 text-sm tracking-[0.44px]",size:"txtRobotoRegular14Indigo800",children:null===e||void 0===e?void 0:e.nameTwo}),(0,d.jsx)(v,{className:"text-indigo-800_90 text-sm tracking-[0.44px]",size:"txtRobotoRegular14Indigo80090",children:null===e||void 0===e?void 0:e.amount}),(0,d.jsx)(h,{className:"h-[21px] w-[68px]",src:"images/img_graph.svg",alt:"graph"})]}),(0,d.jsxs)("div",{className:"flex flex-row gap-4 items-start justify-start w-auto",children:[(0,d.jsx)(v,{className:"text-indigo-800 text-sm tracking-[0.44px]",size:"txtRobotoRegular14Indigo800",children:null===e||void 0===e?void 0:e.nameThree}),(0,d.jsx)(v,{className:"text-indigo-800_90 text-sm tracking-[0.44px]",size:"txtRobotoRegular14Indigo80090",children:null===e||void 0===e?void 0:e.amountOne}),(0,d.jsx)(h,{className:"h-[21px] w-[68px]",src:"images/img_television.svg",alt:"television"})]}),(0,d.jsxs)("div",{className:"flex flex-row gap-4 items-start justify-start w-auto",children:[(0,d.jsx)(v,{className:"text-indigo-800 text-sm tracking-[0.44px]",size:"txtRobotoRegular14Indigo800",children:null===e||void 0===e?void 0:e.nameFour}),(0,d.jsx)(v,{className:"text-indigo-800_90 text-sm tracking-[0.44px]",size:"txtRobotoRegular14Indigo80090",children:null===e||void 0===e?void 0:e.amountTwo}),(0,d.jsx)(h,{className:"h-[21px] w-[68px]",src:"images/img_television_orange_300.svg",alt:"television_One"})]})]})]})});k.defaultProps={nameOne:"Total earning",price:"$12,875",percent:"2%",priceOne:"Compared to $21,504 last year",nameTwo:"Presentation",amount:"862",nameThree:"Development",amountOne:"753",nameFour:"Research",amountTwo:"553"};const _=k,z=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(j,{className:e.className,orientation:"vertical",children:[(0,d.jsxs)("div",{className:"flex flex-col gap-0.5 items-start justify-start w-auto",children:[(0,d.jsx)("div",{className:"flex flex-col items-start justify-start w-[134px]",children:(0,d.jsx)(v,{className:"text-base text-white-A700 tracking-[0.44px] w-auto",size:"txtPoppinsLight16WhiteA700",children:null===e||void 0===e?void 0:e.name})}),(0,d.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-auto",children:[(0,d.jsx)(v,{className:"sm:text-3xl md:text-[32px] text-[34px] text-white-A700 tracking-[-0.44px]",size:"txtPoppinsRegular34WhiteA700",children:null===e||void 0===e?void 0:e.price}),(0,d.jsxs)("div",{className:"flex flex-row h-[26px] md:h-auto items-start justify-start",children:[(0,d.jsx)(h,{className:"h-full w-3.5",src:"images/img_arrowup_green_a400.svg",alt:"arrowup"}),(0,d.jsx)(v,{className:"text-green-A400 text-sm tracking-[0.44px]",size:"txtRobotoRegular14GreenA400",children:null===e||void 0===e?void 0:e.percent})]})]}),(0,d.jsx)(v,{className:"text-white-A700_90 text-xs tracking-[0.40px] w-auto",size:"txtRobotoRegular12WhiteA70090",children:null===e||void 0===e?void 0:e.priceOne})]}),(0,d.jsx)(f,{className:"self-center sm:flex-col bg-deep_purple-400 w-[12%] flex flex-row"}),(0,d.jsxs)("div",{className:"flex flex-col gap-0.5 items-start justify-start w-auto",children:[(0,d.jsx)("div",{className:"flex flex-col items-start justify-start w-[134px]",children:(0,d.jsx)(v,{className:"text-base text-white-A700 tracking-[0.44px] w-auto",size:"txtPoppinsLight16WhiteA700",children:null===e||void 0===e?void 0:e.name1})}),(0,d.jsxs)("div",{className:"flex flex-row gap-1.5 items-start justify-start w-auto",children:[(0,d.jsx)(v,{className:"sm:text-3xl md:text-[32px] text-[34px] text-white-A700 tracking-[-0.44px]",size:"txtPoppinsRegular34WhiteA700",children:null===e||void 0===e?void 0:e.price1}),(0,d.jsxs)("div",{className:"flex flex-row h-[26px] md:h-auto items-start justify-start",children:[(0,d.jsx)(h,{className:"h-full w-3.5",src:"images/img_arrowup_green_a400.svg",alt:"arrowup"}),(0,d.jsx)(v,{className:"text-green-A400 text-sm tracking-[0.44px]",size:"txtRobotoRegular14GreenA400",children:null===e||void 0===e?void 0:e.percent1})]})]}),(0,d.jsx)(v,{className:"text-white-A700_90 text-xs tracking-[0.40px] w-auto",size:"txtRobotoRegular12WhiteA70090",children:null===e||void 0===e?void 0:e.priceone1})]})]})});z.defaultProps={name:"Total earning",price:"$12,875",percent:"10%",priceOne:"Compared to $21,490 last year",name1:"Sales",price1:"$43,123",percent1:"12%",priceone1:"Compared to $21,490 last year"};const A=z,P=()=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"bg-gray-50 flex flex-col font-archivo items-center justify-start mx-auto w-full",children:(0,d.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,d.jsx)("header",{className:"bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full",children:(0,d.jsxs)("div",{className:"flex flex-col gap-[7px] items-center justify-center md:ml-[0] ml-[35px] mr-[60px] mt-2.5 w-[96%]",children:[(0,d.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-5 items-center justify-start w-full",children:[(0,d.jsx)("div",{className:"flex flex-col h-10 items-center justify-start w-10",children:(0,d.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-start shadow-bs1 w-[39px] rounded-2xl",style:{backgroundImage:"url('images/img_group.svg')"},children:(0,d.jsx)(h,{className:"h-[39px] md:h-auto object-cover w-[39px]",src:"images/img_vector.png",alt:"vector"})})}),(0,d.jsx)(v,{className:"md:ml-[0] ml-[9px] sm:text-[16.51px] md:text-[18.51px] text-[20.51px] text-black-900",size:"txtArchivoVFBetaRegular2051",children:"WASSERSTOFF"}),(0,d.jsx)("div",{className:"bg-blue_gray-50 flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[159px] md:mt-0 my-1 p-1 rounded-lg w-[29%] md:w-full",children:(0,d.jsx)(h,{className:"h-6 mr-[3px] w-6",src:"images/img_search.svg",alt:"search"})}),(0,d.jsxs)("ul",{className:"flex sm:flex-1 sm:flex-col flex-row font-poppins gap-[84px] sm:hidden items-center justify-start md:ml-[0] ml-[107px] w-auto sm:w-full common-row-list",children:[(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"javascript:",className:"text-base hover:text-black-900 text-blue_gray-400 tracking-[0.44px]",children:(0,d.jsx)(v,{size:"txtPoppinsLight16",children:"Statistics"})})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"javascript:",className:"text-base text-black-900 tracking-[0.44px]",children:(0,d.jsx)(v,{size:"txtPoppinsLight16Black900",children:"Overview"})})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"javascript:",className:"text-base hover:text-black-900 text-blue_gray-400 tracking-[0.44px]",children:(0,d.jsx)(v,{size:"txtPoppinsLight16",children:"Dashboard"})})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"javascript:",className:"text-base hover:text-black-900 text-blue_gray-400 tracking-[0.44px]",children:(0,d.jsx)(v,{size:"txtPoppinsLight16",children:"Analytics"})})})]}),(0,d.jsx)(h,{className:"h-6 md:ml-[0] ml-[188px] w-6",src:"images/img_profile.svg",alt:"profile"}),(0,d.jsx)(h,{className:"h-6 md:ml-[0] ml-[26px] w-6",src:"images/img_option.svg",alt:"option"})]}),(0,d.jsx)(f,{className:"bg-indigo-500 h-[3px] md:ml-[0] ml-[1134px] mr-[585px] w-[6%]"})]})}),(0,d.jsxs)("div",{className:"flex md:flex-col flex-row font-poppins md:gap-[50px] items-center justify-between max-w-[1861px] mx-auto md:px-5 w-full",children:[(0,d.jsxs)("div",{className:"flex md:flex-1 flex-col items-start justify-start w-[16%] md:w-full",children:[(0,d.jsx)(v,{className:"sm:text-3xl md:text-[32px] text-[34px] text-black-900 tracking-[-0.44px]",size:"txtPoppinsRegular34",children:"Design faster"}),(0,d.jsx)(_,{className:"bg-white-A700 flex flex-col font-roboto gap-[30px] items-center justify-start mt-[23px] py-5 rounded-[10px] shadow-bs w-auto"}),(0,d.jsx)(A,{className:"bg-deep_purple-A200 flex flex-col gap-[18px] items-center mt-7 sm:px-5 px-[30px] py-5 rounded-[10px] shadow-bs w-auto"}),(0,d.jsx)(R,{className:"bg-white-A700 flex flex-col font-roboto gap-3.5 items-center mt-7 sm:px-5 px-[30px] py-5 rounded-[10px] shadow-bs w-auto"})]}),(0,d.jsx)("div",{className:"bg-blue_gray-50_01 flex md:flex-1 flex-col font-opensans items-end justify-start p-9 sm:px-5 rounded-bl-[73px] rounded-tl-[73px] w-[82%] md:w-full",children:(0,d.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-5 items-center justify-end mb-1.5 mr-[23px] w-[86%] md:w-full",children:[(0,d.jsxs)("div",{className:"flex flex-col gap-[15px] justify-start w-3/4 md:w-full",children:[(0,d.jsx)(v,{className:"md:ml-[0] ml-[464px] text-[10px] text-blue_gray-800 tracking-[5.00px] uppercase",size:"txtOpenSansBold10",children:"Timeline"}),(0,d.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full",children:[(0,d.jsx)("div",{className:"bg-gradient  h-[47px] md:mt-0 mt-[93px] rounded-[23px] shadow-bs2 w-[47px]"}),(0,d.jsxs)("div",{className:"md:h-[778px] h-[873px] relative w-[95%] md:w-full",children:[(0,d.jsxs)("div",{className:"absolute h-[778px] inset-x-[0] mx-auto top-[0] w-full",children:[(0,d.jsxs)("div",{className:"absolute h-[778px] inset-[0] justify-center m-auto w-[778px] md:w-full",children:[(0,d.jsx)("div",{className:"bg-white-A700 h-[648px] m-auto rounded-[50%] shadow-bs w-[648px]"}),(0,d.jsx)("div",{className:"absolute border-[20px] border-solid border-white-A700_4c h-[778px] inset-[0] justify-center m-auto rounded-[50%] w-[778px]"})]}),(0,d.jsx)("div",{className:"absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto p-[46px] md:px-10 sm:px-5 w-full",style:{backgroundImage:"url('images/img_group2.svg')"},children:(0,d.jsxs)("div",{className:"flex flex-col md:gap-10 gap-[93px] justify-start mr-[85px] mt-[3px] w-[72%] md:w-full",children:[(0,d.jsxs)("div",{className:"flex flex-row items-center justify-between mr-[50px] w-[91%] md:w-full",children:[(0,d.jsxs)("div",{className:"flex flex-col items-center justify-start",children:[(0,d.jsx)(v,{className:"text-center text-white-A700 text-xs tracking-[0.40px]",size:"txtRobotoRegular12",children:"Development"}),(0,d.jsx)(v,{className:"mt-[3px] text-base text-center text-white-A700 tracking-[0.44px]",size:"txtPoppinsLight16WhiteA700",children:"$31,657"})]}),(0,d.jsxs)("div",{className:"flex flex-col md:gap-10 gap-[150px] justify-start w-[58%]",children:[(0,d.jsxs)("div",{className:"flex flex-col items-center justify-start md:ml-[0] ml-[81px]",children:[(0,d.jsx)(v,{className:"text-center text-white-A700 text-xs tracking-[0.40px]",size:"txtRobotoRegular12",children:"Finance"}),(0,d.jsxs)(v,{className:"mt-1 text-base text-center text-white-A700 tracking-[0.44px]",size:"txtPoppinsLight16WhiteA700",children:[" ","$23,657"]})]}),(0,d.jsxs)("div",{className:"flex flex-row items-start justify-between w-full",children:[(0,d.jsxs)("div",{className:"flex flex-col items-center justify-start mt-[11px]",children:[(0,d.jsx)(v,{className:"text-base text-center text-white-A700 tracking-[0.44px]",size:"txtPoppinsLight16WhiteA700",children:"Investments"}),(0,d.jsx)(v,{className:"text-center text-white-A700 text-xl tracking-[0.15px]",size:"txtPoppinsSemiBold20",children:"$76,644"}),(0,d.jsx)(v,{className:"text-center text-indigo-50 text-sm tracking-[0.44px]",size:"txtRobotoRegular14",children:"3 month"})]}),(0,d.jsxs)("div",{className:"flex flex-col items-center justify-start",children:[(0,d.jsx)(v,{className:"text-center text-white-A700 text-xs tracking-[0.40px]",size:"txtRobotoRegular12",children:"Business"}),(0,d.jsx)(v,{className:"mt-1 text-base text-center text-white-A700 tracking-[0.44px]",size:"txtPoppinsLight16WhiteA700",children:"$21,987"})]})]})]})]}),(0,d.jsxs)("div",{className:"flex flex-row items-end justify-between md:ml-[0] ml-[51px] w-[91%] md:w-full",children:[(0,d.jsxs)("div",{className:"flex flex-col items-center justify-start mt-3",children:[(0,d.jsx)(v,{className:"text-base text-center text-white-A700 tracking-[0.44px]",size:"txtPoppinsLight16WhiteA700",children:"Design"}),(0,d.jsx)(v,{className:"text-center text-white-A700 text-xl tracking-[0.15px]",size:"txtPoppinsSemiBold20",children:"$32,982"}),(0,d.jsx)(v,{className:"text-center text-indigo-300 text-sm tracking-[0.44px]",size:"txtRobotoRegular14Indigo300",children:"3 month"})]}),(0,d.jsx)("div",{className:"bg-gradient1  h-[75px] mb-1 rounded-[37px] shadow-bs3 w-[75px]"})]})]})})]}),(0,d.jsx)("div",{className:"absolute bg-gradient2  bottom-[19%] h-[61px] left-[0] rounded-[30px] shadow-bs4 w-[61px]"}),(0,d.jsxs)("div",{className:"absolute flex md:flex-col flex-row md:gap-10 gap-[62px] h-full inset-y-[0] items-start justify-start my-auto right-[9%] w-[79%]",children:[(0,d.jsxs)("div",{className:"flex flex-col gap-3.5 items-center justify-start md:mt-0 mt-[719px] w-[16%] md:w-full",children:[(0,d.jsx)(g,{className:"flex h-[46px] items-center justify-center w-[46px]",shape:"round",color:"white_A700",size:"sm",variant:"fill",children:(0,d.jsx)(h,{className:"h-6",src:"images/img_close.svg",alt:"close"})}),(0,d.jsxs)("div",{className:"h-[90px] relative w-full",children:[(0,d.jsx)(v,{className:"m-auto md:text-5xl text-6xl text-center text-indigo-800 tracking-[-1.50px] mt-4",size:"txtPoppinsLight60",children:"204"}),(0,d.jsx)(v,{className:"absolute inset-x-[0] mx-auto text-[10px] text-center text-indigo-800 top-[3%] tracking-[1.50px] uppercase w-max mb-8",size:"txtRobotoBold10",children:"Trend goods"})]})]}),(0,d.jsxs)("div",{className:"flex flex-col md:gap-10 gap-[683px] items-center justify-start w-[52%] md:w-full",children:[(0,d.jsx)("div",{className:"bg-white-A700 flex flex-col items-center justify-start p-0.5 rounded-[18px] w-full",children:(0,d.jsx)(N,{className:"flex flex-row gap-5 items-center justify-start w-auto"})}),(0,d.jsxs)("div",{className:"flex flex-col gap-[17px] items-center justify-start w-[54%] md:w-full",children:[(0,d.jsx)(g,{className:"flex h-[46px] items-center justify-center w-[46px]",shape:"round",color:"white_A700",size:"sm",variant:"fill",children:(0,d.jsx)(h,{className:"h-6",src:"images/img_eye.svg",alt:"eye"})}),(0,d.jsxs)("div",{className:"md:h-[90px] h-[91px] relative w-full",children:[(0,d.jsx)(v,{className:"absolute h-max inset-[0] justify-center m-auto md:text-5xl text-6xl text-center text-indigo-800 tracking-[-1.50px] w-max",size:"txtPoppinsLight60",children:"65,540"}),(0,d.jsx)(v,{className:"absolute inset-x-[0] mx-auto text-[10px] text-center text-indigo-800 top-[0] tracking-[1.50px] uppercase w-max",size:"txtRobotoBold10",children:"Shopping views"})]})]})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-3.5 items-center justify-start md:mt-0 mt-[719px] w-[16%] md:w-full",children:[(0,d.jsx)(g,{className:"flex h-[46px] items-center justify-center w-[46px]",shape:"round",color:"white_A700",size:"sm",variant:"fill",children:(0,d.jsx)(h,{className:"h-6",src:"images/img_chart.svg",alt:"chart"})}),(0,d.jsxs)("div",{className:"flex flex-col items-center justify-start pt-[3px] w-full",children:[(0,d.jsx)(v,{className:"text-[10px] text-center text-indigo-800 tracking-[1.50px] uppercase",size:"txtRobotoBold10",children:"Store dynamics"}),(0,d.jsx)(v,{className:"md:text-5xl text-6xl text-center text-indigo-800 tracking-[-1.50px]",size:"txtPoppinsLight60",children:"324"})]})]})]})]})]})]}),(0,d.jsxs)("div",{className:"flex flex-col md:gap-10 gap-[420px] items-start justify-start md:ml-[0] ml-[18px] w-[9%] md:w-full",children:[(0,d.jsx)("div",{className:"bg-gradient1  h-[105px] rounded-[52px] shadow-bs5 w-[105px]"}),(0,d.jsx)("div",{className:"bg-gradient  h-[47px] rounded-[23px] shadow-bs2 w-[47px]"})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-3.5 items-center justify-start md:ml-[0] ml-[152px] w-[4%] md:w-full",children:[(0,d.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-6 items-center justify-start p-2.5 rounded-lg shadow-bs w-full",children:[(0,d.jsx)(h,{className:"h-6 w-6",src:"images/img_plus.svg",alt:"plus"}),(0,d.jsx)(h,{className:"h-6 w-6",src:"images/img_minus.svg",alt:"minus"})]}),(0,d.jsx)(g,{className:"flex h-[46px] items-center justify-center w-[46px]",shape:"round",color:"white_A700",size:"sm",variant:"fill",children:(0,d.jsx)(h,{className:"h-6",src:"images/img_settings.svg",alt:"settings"})}),(0,d.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-5 items-center justify-start p-2.5 rounded-lg shadow-bs w-full",children:[(0,d.jsx)(h,{className:"h-6 w-6",src:"images/img_node.svg",alt:"node"}),(0,d.jsx)(h,{className:"h-6 w-6",src:"images/img_element.svg",alt:"element"}),(0,d.jsx)(h,{className:"h-6 w-6",src:"images/img_path.svg",alt:"path"})]})]})]})})]}),(0,d.jsxs)("div",{className:"bg-white-A700 flex flex-row font-roboto md:gap-10 items-center justify-between p-3 w-full",children:[(0,d.jsx)(v,{className:"ml-[54px] text-[10px] text-blue_gray-600 tracking-[1.50px] uppercase",size:"txtRobotoBold10Bluegray600",children:"Orion data visualisation"}),(0,d.jsx)(v,{className:"mr-[54px] text-[10px] text-blue_gray-600 text-right tracking-[1.50px] uppercase",size:"txtRobotoBold10Bluegray600",children:"2022"})]})]})})})}}]);
//# sourceMappingURL=70.6c264ab8.chunk.js.map