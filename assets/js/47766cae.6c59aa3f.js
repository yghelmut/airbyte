"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5857],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44312:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="Weaviate",l={unversionedId:"integrations/destinations/weaviate",id:"integrations/destinations/weaviate",title:"Weaviate",description:"Features",source:"@site/../docs/integrations/destinations/weaviate.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/weaviate",permalink:"/integrations/destinations/weaviate",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/weaviate.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Typesense",permalink:"/integrations/destinations/typesense"},next:{title:"Yugabytedb",permalink:"/integrations/destinations/yugabytedb"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Output Schema",id:"output-schema",level:4},{value:"Getting Started",id:"getting-started",level:2},{value:"Getting Started (Airbyte Open-Source)",id:"getting-started-airbyte-open-source",level:2},{value:"Requirements",id:"requirements",level:4},{value:"Configure Network Access",id:"configure-network-access",level:4},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Setup the Weaviate Destination in Airbyte",id:"setup-the-weaviate-destination-in-airbyte",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"weaviate"},"Weaviate"),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Provide vector"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"output-schema"},"Output Schema"),(0,r.kt)("p",null,"Each stream will be output into its own class in Weaviate. The record fields will be stored as fields\nin the Weaviate class."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Uploading Vectors:")," Use the vectors configuration if you want to upload\nvectors from a source database into Weaviate. You can do this by specifying\nthe stream name and vector field name in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<stream_name>.<vector_field_name>, <stream_name2>.<vector_field_name>\n")),(0,r.kt)("p",null,"For example, if you have a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"my_table")," and the vector is stored using the column ",(0,r.kt)("inlineCode",{parentName:"p"},"vector")," then\nyou should use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"vectors"),"configuration: ",(0,r.kt)("inlineCode",{parentName:"p"},"my_table.vector"),"."),(0,r.kt)("p",null,"Dynamic Schema: Weaviate will automatically create a schema for the stream if no class was defined unless\nyou have disabled the Dynamic Schema feature in Weaviate. You can also create the class in Weaviate in advance\nif you need more control over the schema in Weaviate. "),(0,r.kt)("p",null,"IDs: If your source table has an int based id stored as field name ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," then the\nID will automatically be converted to a UUID. Weaviate only supports the ID to be a UUID.\nFor example, if the record has ",(0,r.kt)("inlineCode",{parentName:"p"},"id=1")," then this would become a uuid of\n",(0,r.kt)("inlineCode",{parentName:"p"},"00000000-0000-0000-0000-000000000001"),"."),(0,r.kt)("p",null,"Any field name starting with an upper case letter will be converted to lower case. For example,\nif you have a field name ",(0,r.kt)("inlineCode",{parentName:"p"},"USD")," then that field will become ",(0,r.kt)("inlineCode",{parentName:"p"},"uSD"),". This is due to a limitation\nin Weaviate, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/semi-technologies/weaviate/issues/2438"},"this issue in Weaviate"),"."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Airbyte Cloud only supports connecting to your Weaviate Instance instance with TLS encryption and with a username and\npassword."),(0,r.kt)("h2",{id:"getting-started-airbyte-open-source"},"Getting Started ","(","Airbyte Open-Source",")"),(0,r.kt)("h4",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To use the Weaviate destination, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Weaviate cluster version 21.8.10.19 or above")),(0,r.kt)("h4",{id:"configure-network-access"},"Configure Network Access"),(0,r.kt)("p",null,"Make sure your Weaviate database can be accessed by Airbyte. If your database is within a VPC, you may need to allow access from the IP you're using to expose Airbyte."),(0,r.kt)("h4",{id:"permissions"},(0,r.kt)("strong",{parentName:"h4"},"Permissions")),(0,r.kt)("p",null,"You need a Weaviate user or use a Weaviate instance that's accessible to all"),(0,r.kt)("h3",{id:"setup-the-weaviate-destination-in-airbyte"},"Setup the Weaviate Destination in Airbyte"),(0,r.kt)("p",null,"You should now have all the requirements needed to configure Weaviate as a destination in the UI. You'll need the following information to configure the Weaviate destination:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL")," for example http://localhost:8080 or ",(0,r.kt)("a",{parentName:"li",href:"https://my-wcs.semi.network"},"https://my-wcs.semi.network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," (Optional)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," (Optional)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Batch Size")," (Optional, defaults to 100)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Vectors")," a comma separated list of ",(0,r.kt)("inlineCode",{parentName:"li"},"<stream_name.vector_field_name>")," to specify the field"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID Schema")," a comma separated list of ",(0,r.kt)("inlineCode",{parentName:"li"},"<stream_name.id_field_name>")," to specify the field\nname that contains the ID of a record")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-06"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20094"},"#","20094")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add Weaviate destination")))))}u.isMDXComponent=!0}}]);