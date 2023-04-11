"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5334],{46701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},o="QuickBooks",l={unversionedId:"integrations/sources/quickbooks",id:"integrations/sources/quickbooks",title:"QuickBooks",description:"This page contains the setup guide and reference information for the QuickBooks Source connector.",source:"@site/../docs/integrations/sources/quickbooks.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/quickbooks",permalink:"/integrations/sources/quickbooks",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/quickbooks.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Qualaroo",permalink:"/integrations/sources/qualaroo"},next:{title:"Railz",permalink:"/integrations/sources/railz"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up QuickBooks",id:"step-1-set-up-quickbooks",level:3},{value:"Step 2: Set up the QuickBooks connector in Airbyte",id:"step-2-set-up-the-quickbooks-connector-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Data type map",id:"data-type-map",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickbooks"},"QuickBooks"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for the QuickBooks Source connector."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://quickbooks.intuit.com/global/"},"Intuit QuickBooks account"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OAuth2.0 credentials (see ",(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0-playground"},"OAuth 2.0 playground"),")"),(0,r.kt)("li",{parentName:"ul"},"Realm ID")),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h3",{id:"step-1-set-up-quickbooks"},"Step 1: Set up QuickBooks"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.intuit.com/app/developer/qbo/docs/get-started"},"Intuit Developer account")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Airbyte Open Source additional setup steps")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an application"),(0,r.kt)("li",{parentName:"ol"},"Obtain credentials. The easiest way to get these credentials is by using Quickbook's ",(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0-playground"},"OAuth 2.0 playground"))),(0,r.kt)("h3",{id:"step-2-set-up-the-quickbooks-connector-in-airbyte"},"Step 2: Set up the QuickBooks connector in Airbyte"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,r.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,r.kt)("strong",{parentName:"li"},"QuickBooks")," from the Source type dropdown and enter a name for this connector."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Authenticate your QuickBooks account")),(0,r.kt)("li",{parentName:"ol"},"Log in and Authorize to the QuickBooks account."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Start date")," - The date starting from which you'd like to replicate data."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Sandbox")," - Turn on if you're going to replicate the data from the sandbox environment."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Client ID")," - The OAuth2.0 application ID"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Client Secret")," - The OAuth2.0 application secret"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Refresh Token")," - Refresh token used to get new access token every time the current one is expired"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Access Token")," - Access token to perform authenticated API calls with"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Token Expiry Date")," - DateTime when the access token becomes invalid"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Start date")," - The date from which you'd like to replicate data for streams."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Realm ID")," - The Labeled ",(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/learn/learn-basic-field-definitions#realm-id"},"Company ID")," you'd like to replicate data for streams."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Sandbox")," - Turn on if you're going to replicate the data from the sandbox environment.")),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("p",null,"The Quickbooks Source connector supports the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"}," sync modes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-overwrite/"},"Full Refresh - Overwrite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History"))),(0,r.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,r.kt)("p",null,"This Source is capable of syncing the following ",(0,r.kt)("a",{parentName:"p",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/most-commonly-used/account"},"Streams"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"},"Accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/billpayment"},"BillPayments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/budget"},"Budgets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/bill"},"Bills")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/class"},"Classes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/creditmemo"},"CreditMemos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer"},"Customers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/department"},"Departments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/deposit"},"Deposits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/employee"},"Employees")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/estimate"},"Estimates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/invoice"},"Invoices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/item"},"Items")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/journalentry"},"JournalEntries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/payment"},"Payments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/paymentmethod"},"PaymentMethods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchase"},"Purchases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder"},"PurchaseOrders")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/refundreceipt"},"RefundReceipts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt"},"SalesReceipts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/taxagency"},"TaxAgencies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/taxcode"},"TaxCodes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/taxrate"},"TaxRates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/term"},"Terms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/timeactivity"},"TimeActivities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/transfer"},"Transfers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/vendorcredit"},"VendorCredits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/vendor"},"Vendors"))),(0,r.kt)("h2",{id:"data-type-map"},"Data type map"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-03-20"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24324"},"24324")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Migrate to Low-Code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.5")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10346"},"10346")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update label ",(0,r.kt)("inlineCode",{parentName:"td"},"Quickbooks")," -> ",(0,r.kt)("inlineCode",{parentName:"td"},"QuickBooks"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.4")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-20"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8960"},"8960")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-08-10"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4986"},"4986")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Using number data type for decimal fields instead string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-07-06"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4539"},"4539")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,r.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ENTRYPOINT")," for Kubernetes support")))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);