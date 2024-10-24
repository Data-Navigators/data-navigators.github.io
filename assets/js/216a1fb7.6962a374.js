"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[7123],{5680:(t,a,e)=>{e.d(a,{xA:()=>p,yg:()=>u});var n=e(6540);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function g(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var y=n.createContext({}),o=function(t){var a=n.useContext(y),e=a;return t&&(e="function"==typeof t?t(a):g(g({},a),t)),e},p=function(t){var a=o(t.components);return n.createElement(y.Provider,{value:a},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,y=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=o(e),N=r,u=d["".concat(y,".").concat(N)]||d[N]||m[N]||l;return e?n.createElement(u,g(g({ref:a},p),{},{components:e})):n.createElement(u,g({ref:a},p))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,g=new Array(l);g[0]=N;var i={};for(var y in a)hasOwnProperty.call(a,y)&&(i[y]=a[y]);i.originalType=t,i[d]="string"==typeof t?t:r,g[1]=i;for(var o=2;o<l;o++)g[o]=e[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},7970:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>y,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=e(8168),r=(e(6540),e(5680));const l={sidebar_position:3},g="Flattening Json format data \ud83e\ude84",i={unversionedId:"data-processing/SQL/Flattening-Json-format-data",id:"data-processing/SQL/Flattening-Json-format-data",title:"Flattening Json format data \ud83e\ude84",description:"The CO2 emission data for various countries has been loaded from an S3 bucket to the PSA schema in Snowflake.",source:"@site/docs/data-processing/SQL/Flattening-Json-format-data.mdx",sourceDirName:"data-processing/SQL",slug:"/data-processing/SQL/Flattening-Json-format-data",permalink:"/docs/data-processing/SQL/Flattening-Json-format-data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-processing/SQL/Flattening-Json-format-data.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Advanced SQL: Window and Aggregate Functions",permalink:"/docs/data-processing/SQL/advance-sql"},next:{title:"Exercise 1",permalink:"/docs/data-processing/SQL/Exercise-1"}},y={},o=[],p={toc:o},d="wrapper";function m(t){let{components:a,...e}=t;return(0,r.yg)(d,(0,n.A)({},p,e,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"flattening-json-format-data-"},"Flattening Json format data \ud83e\ude84"),(0,r.yg)("p",null,"The CO2 emission data for various countries has been loaded from an S3 bucket to the PSA schema in Snowflake."),(0,r.yg)("h1",{id:"task"},"Task"),(0,r.yg)("p",null,"The task is to flatten the JSON and modify column names, such as replacing spaces with underscores and removing special characters like ",(0,r.yg)("inlineCode",{parentName:"p"},"$")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"@"),', for example, renaming the column name "Annual CO2 emissions" to "Annual_CO2_emissions".'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Load the data to the ",(0,r.yg)("inlineCode",{parentName:"li"},"STG_EMISSIONS_BY_COUNTRY")," Table ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'JSON_STRING\n{  "Annual CO2 emissions": "2.391861",  \n   "Annual CO2 growth (%)": "26.051487", \n   "Annual CO2 growth (abs)": "0.494334",   \n   "Annual consumption-based CO2 emissions": "", \n   "CO2 emissions from coal": "0.076944",\n   ... \n}\n')),(0,r.yg)("p",null,"Similarily do it  ",(0,r.yg)("inlineCode",{parentName:"p"},"TemperaturesByCountry")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"GlobalTemperatures")," data"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Column Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ANNUAL_CO2_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"2.391861")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ANNUAL_CO2_GROWTH_PERCENTAGE"),(0,r.yg)("td",{parentName:"tr",align:null},"26.051487")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ANNUAL_CO2_GROWTH_ABS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.494334")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ANNUAL_CONSUMPTION_BASED_CO2_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CO2_EMISSIONS_EMBEDDED_IN_TRADE"),(0,r.yg)("td",{parentName:"tr",align:null},"0.021984")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CO2_EMISSIONS_FROM_BUNKERS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.028581")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CO2_EMISSIONS_FROM_CEMENT"),(0,r.yg)("td",{parentName:"tr",align:null},"0.076944")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CO2_EMISSIONS_FROM_COAL"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CO2_EMISSIONS_FROM_FLARING"),(0,r.yg)("td",{parentName:"tr",align:null},"2.286336")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CO2_EMISSIONS_FROM_GAS"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CO2_EMISSIONS_FROM_OIL"),(0,r.yg)("td",{parentName:"tr",align:null},"0.079835")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CO2_EMISSIONS_FROM_OTHER_INDUSTRY"),(0,r.yg)("td",{parentName:"tr",align:null},"0.214927")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CO2_PER_GDP_KG_PER_PPP"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CO2_PER_UNIT_ENERGY_KGCO2_PER_KILOWATT_HOUR"),(0,r.yg)("td",{parentName:"tr",align:null},"28.840519")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CEMENT_EMISSIONS_PER_CAPITA"),(0,r.yg)("td",{parentName:"tr",align:null},"0.195367")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"COAL_EMISSIONS_PER_CAPITA"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CONSUMPTION_BASED_CO2_PER_GDP_KG_PER_PPP"),(0,r.yg)("td",{parentName:"tr",align:null},"1.058808")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CUMULATIVE_CO2_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"27.586344")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CUMULATIVE_CEMENT_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CUMULATIVE_COAL_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CUMULATIVE_FLARING_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.012616")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CUMULATIVE_GAS_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.007240")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CUMULATIVE_OIL_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.001171")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CUMULATIVE_OTHER_INDUSTRY_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.005143")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"EMISSIONS_EMBEDDED_IN_TRADE_PER_CAPITA"),(0,r.yg)("td",{parentName:"tr",align:null},"0.002728")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ENTITY"),(0,r.yg)("td",{parentName:"tr",align:null},"Suriname")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLARING_EMISSIONS_PER_CAPITA"),(0,r.yg)("td",{parentName:"tr",align:null},"6.386413")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GAS_EMISSIONS_PER_CAPITA"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OIL_EMISSIONS_PER_CAPITA"),(0,r.yg)("td",{parentName:"tr",align:null},"6.681176")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OTHER_EMISSIONS_PER_CAPITA"),(0,r.yg)("td",{parentName:"tr",align:null},"0.012616")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PER_CAPITA_CO2_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.007240")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PER_CAPITA_CONSUMPTION_BASED_CO2_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.001171")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHARE_OF_CO2_EMISSIONS_EMBEDDED_IN_TRADE"),(0,r.yg)("td",{parentName:"tr",align:null},"0.005143")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHARE_OF_GLOBAL_CO2_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.000309")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHARE_OF_GLOBAL_CEMENT_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHARE_OF_GLOBAL_COAL_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.016783")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHARE_OF_GLOBAL_CUMULATIVE_CO2_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.025082")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHARE_OF_GLOBAL_CUMULATIVE_CEMENT_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHARE_OF_GLOBAL_CUMULATIVE_COAL_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.012616")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHARE_OF_GLOBAL_CUMULATIVE_FLARING_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.007240")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHARE_OF_GLOBAL_CUMULATIVE_GAS_EMISSIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"0.001171")))))}m.isMDXComponent=!0}}]);