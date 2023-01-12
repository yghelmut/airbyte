"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[88808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},s="Typesense",o={unversionedId:"integrations/destinations/typesense",id:"integrations/destinations/typesense",title:"Typesense",description:"Overview",source:"@site/../docs/integrations/destinations/typesense.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/typesense",permalink:"/integrations/destinations/typesense",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/typesense.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"TiDB",permalink:"/integrations/destinations/tidb"},next:{title:"Weaviate",permalink:"/integrations/destinations/weaviate"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typesense"},"Typesense"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Airbyte Typesense destination allows you to sync data to Airbyte.Typesense is a modern, privacy-friendly, open source search engine built from the ground up using cutting-edge search algorithms, that take advantage of the latest advances in hardware capabilities."),(0,a.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,a.kt)("p",null,"Using overwrite sync, the ",(0,a.kt)("a",{parentName:"p",href:"https://typesense.org/docs/0.23.1/api/collections.html#with-auto-schema-detection"},"auto schema detection")," is used and all the fields in a document are automatically indexed for searching and filtering"),(0,a.kt)("p",null,"With append mode, you have to create the collection first and can use ",(0,a.kt)("a",{parentName:"p",href:"https://typesense.org/docs/0.23.1/api/collections.html#with-pre-defined-schema"},"pre-defined schema")," that gives you fine-grained control over your document fields."),(0,a.kt)("h4",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"Each stream will be output into its own collection in Typesense. If an id column is not provided, it will be generated."),(0,a.kt)("h4",{id:"features"},"Features"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To use the Typesense destination, you'll need an existing Typesense instance. You can learn about how to create one in the ",(0,a.kt)("a",{parentName:"p",href:"https://typesense.org/docs/guide/install-typesense.html"},"Typesense docs"),"."),(0,a.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,a.kt)("p",null,"The setup only requires two fields. First is the ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," which is the address at which Typesense can be reached. The second piece of information is the API key."),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("p",null,"| Version | Date | Pull Request | Subject |\n| 0.1.0 | 2022-10-28 | ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/18349"},"18349")," | New Typesense destination |"))}c.isMDXComponent=!0}}]);