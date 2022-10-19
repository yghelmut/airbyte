"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8441],{73703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(83117),r=(n(67294),n(3905));const a={},l="Local Deployment",i={unversionedId:"deploying-airbyte/local-deployment",id:"deploying-airbyte/local-deployment",title:"Local Deployment",description:"These instructions have been tested on MacOS, Windows 10 and Ubuntu 20.04.",source:"@site/../docs/deploying-airbyte/local-deployment.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/local-deployment",permalink:"/deploying-airbyte/local-deployment",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/deploying-airbyte/local-deployment.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Deploy Airbyte Open Source",permalink:"/category/deploy-airbyte-open-source"},next:{title:"On AWS (EC2)",permalink:"/deploying-airbyte/on-aws-ec2"}},s={},p=[{value:"Setup &amp; launch Airbyte",id:"setup--launch-airbyte",level:2},{value:"Deploy on Windows",id:"deploy-on-windows",level:2},{value:"Setup Guide",id:"setup-guide",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-deployment"},"Local Deployment"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"These instructions have been tested on MacOS, Windows 10 and Ubuntu 20.04.")),(0,r.kt)("h2",{id:"setup--launch-airbyte"},"Setup & launch Airbyte"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Docker on your workstation ","(","see ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"instructions"),")",". Make sure you're on the latest version of ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose"),"."),(0,r.kt)("li",{parentName:"ul"},"After Docker is installed, you can immediately get started locally by running:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In your browser, just visit ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8000"},"http://localhost:8000")),(0,r.kt)("li",{parentName:"ul"},"You will be asked for a username and password. By default, that's username ",(0,r.kt)("inlineCode",{parentName:"li"},"airbyte")," and password ",(0,r.kt)("inlineCode",{parentName:"li"},"password"),". Once you deploy airbyte to your servers, be sure to ",(0,r.kt)("a",{parentName:"li",href:"/operator-guides/security"},"change these"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Proxy Configuration\n# Set to empty values, e.g. "" to disable basic auth\nBASIC_AUTH_USERNAME=your_new_username_here\nBASIC_AUTH_PASSWORD=your_new_password_here\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start moving some data!")),(0,r.kt)("h2",{id:"deploy-on-windows"},"Deploy on Windows"),(0,r.kt)("p",null,"After installing the WSL 2 backend and Docker you should be able to run containers using Windows PowerShell. Additionally, as we note frequently, you will need ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," to build Airbyte from source. The suggested guide already installs ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," on Windows."),(0,r.kt)("h3",{id:"setup-guide"},"Setup Guide"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Check out system requirements from ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.docker.com/desktop/windows/install/"},"Docker documentation"),".")),(0,r.kt)("p",null,"Follow the steps on the system requirements, and necessarily, download and install the Linux kernel update package."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Install Docker Desktop on Windows.")),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/windows/install/"},"Docker Desktop")," from here."),(0,r.kt)("p",null,"Make sure to select the options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Enable Hyper-V Windows Features")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Install required Windows components for WSL 2"),"\\\nwhen prompted. After installation, it will require to reboot your computer.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. You're done!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In your browser, just visit ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8000"},"http://localhost:8000")),(0,r.kt)("li",{parentName:"ul"},"You will be asked for a username and password. By default, that's username ",(0,r.kt)("inlineCode",{parentName:"li"},"airbyte")," and password ",(0,r.kt)("inlineCode",{parentName:"li"},"password"),". Once you deploy airbyte to your servers, be sure to ",(0,r.kt)("a",{parentName:"li",href:"/operator-guides/security"},"change these"),"."),(0,r.kt)("li",{parentName:"ul"},"Start moving some data!")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you encounter any issues, just connect to our ",(0,r.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),". Our community will help! We also have a ",(0,r.kt)("a",{parentName:"p",href:"/troubleshooting/on-deploying"},"troubleshooting")," section in our docs for common problems."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(y,l(l({ref:t},u),{},{components:n})):o.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);