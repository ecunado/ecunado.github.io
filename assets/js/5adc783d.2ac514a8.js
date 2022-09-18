"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6794],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:3,id:"androidmigrationguide"},i="Migration from 5.X",l={unversionedId:"androidmigrationguide",id:"version-Android SDK 6.7.2/androidmigrationguide",title:"Migration from 5.X",description:"1}",source:"@site/android_versioned_docs/version-Android SDK 6.7.2/androidmigrationguide.md",sourceDirName:".",slug:"/androidmigrationguide",permalink:"/android/Android SDK 6.7.2/androidmigrationguide",draft:!1,tags:[],version:"Android SDK 6.7.2",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"androidmigrationguide"},sidebar:"tutorialSidebar",previous:{title:"Release Notes",permalink:"/android/Android SDK 6.7.2/androidreleasenotes"},next:{title:"Trigger Amounts",permalink:"/android/Android SDK 6.7.2/androidapioverview"}},s={},p=[],d={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1"},"Migration from 5.X"),(0,a.kt)("p",null,"Version 6.0.0 introduces a well defined, typed, way of passing extra values, options, parameters or flags to the financial transactions."),(0,a.kt)("p",null,"We have unified all the extra and optional parameters in an Options object. Different operations have different options."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. For a ",(0,a.kt)("a",{parentName:"strong",href:"/android/Android%20SDK%206.7.2/androidtransactions#2"},"Sale")," or ",(0,a.kt)("a",{parentName:"strong",href:"/android/Android%20SDK%206.7.2/androidtransactions#3"},"Sale and Tokenize")," operation, please see ",(0,a.kt)("a",{parentName:"strong",href:"/android/Android%20SDK%206.7.2/androidobjects#4"},"SaleOptions"))),(0,a.kt)("p",null,"If you use a customer reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'options.setCustomerReference("Your customer reference");\n')),(0,a.kt)("p",null,"If you need Multi MID / Custom merchant Authentication:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    MerchantAuth auth = new MerchantAuth();\n    Credential credential = new Credential();\n    //Optionally\n    credential.setAcquirer(YOUR_ACQUIRER);\n    //Optionally\n    credential.setMerchantId(mid);\n    //Optionally\n    credential.setTerminalId(tid);\n    //Add as many credentials as Acquirers your merchant have agreements with\n    auth.add(credential);\n    options.setMerchantAuth(auth);\n")),(0,a.kt)("p",null,"If you need to enable pin bypass:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"options.setPinBypass(true);\n")),(0,a.kt)("p",null,"If you want to specify the budget period ",(0,a.kt)("strong",{parentName:"p"},"Only available for SureSwipe"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"options.setBudgetNumber(YOUR_BUDGET_NUMBER);\n")),(0,a.kt)("p",null,"If you want to specify tip options ",(0,a.kt)("strong",{parentName:"p"},"Only available for PAX and Telpo terminals"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"TipConfiguration config = new TipConfiguration();\n    //Optionally\n    config.setHeaderName(HEADER);\n    //Optionally\n    config.setFooter(FOOTER);\n    //Optionally\n    config.setEnterAmountEnabled(true);\n    //Optionally\n    config.setSkipEnabled(true);\n    //Optionally\n    config.setTipPercentages(percentages);\n\n    options.setTipConfiguration(config);\n")),(0,a.kt)("p",null,"Alternatively, you can set the tip amount directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    options.setTipConfiguration(new TipConfiguration(AMOUNT));\n")),(0,a.kt)("p",null,"Finally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"api.sale(amount, currency, options);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Similar to SaleOptions, but with less possible parameters, for a ",(0,a.kt)("a",{parentName:"strong",href:"/android/Android%20SDK%206.7.2/androidtransactions#5"},"Refund")," operation, please see ",(0,a.kt)("a",{parentName:"strong",href:"/android/Android%20SDK%206.7.2/androidobjects#6"},"RefundOptions"))),(0,a.kt)("p",null,"If you use a customer reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'options.setCustomerReference("Your customer reference");\n')),(0,a.kt)("p",null,"If you need Multi MID / Custom merchant Authentication:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    MerchantAuth auth = new MerchantAuth();\n    Credential credential = new Credential();\n    //Optionally\n    credential.setAcquirer(YOUR_ACQUIRER);\n    //Optionally\n    credential.setMerchantId(mid);\n    //Optionally\n    credential.setTerminalId(tid);\n    //Add as many credentials as Acquirers your merchant have agreements with\n    auth.add(credential);\n    options.setMerchantAuth(auth);\n")),(0,a.kt)("p",null,"If you need to enable pin bypass:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"options.setPinBypass(true);\n")),(0,a.kt)("p",null,"Finally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    api.refund(amount, currency, options);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. For the rest of operations, please see ",(0,a.kt)("a",{parentName:"strong",href:"/android/Android%20SDK%206.7.2/androidobjects#7"},"Options"))),(0,a.kt)("p",null,"If you use a customer reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'options.setCustomerReference("Your customer reference");\n')))}u.isMDXComponent=!0}}]);