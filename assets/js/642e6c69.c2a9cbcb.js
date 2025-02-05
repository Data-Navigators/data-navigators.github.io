"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[2316],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(n),m=a,y=g["".concat(s,".").concat(m)]||g[m]||c[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const i={sidebar_position:14},o="Exercise: 8",l={unversionedId:"data-processing/SQL/Exercise-8",id:"data-processing/SQL/Exercise-8",title:"Exercise: 8",description:"Create view for Europe Big Three Emissions",source:"@site/docs/data-processing/SQL/Exercise-8.mdx",sourceDirName:"data-processing/SQL",slug:"/data-processing/SQL/Exercise-8",permalink:"/docs/data-processing/SQL/Exercise-8",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-processing/SQL/Exercise-8.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Exercise: 7",permalink:"/docs/data-processing/SQL/Exercise-7"},next:{title:"Data Processing using Python",permalink:"/docs/category/data-processing-using-python"}},s={},u=[{value:"Create view for Europe Big Three Emissions",id:"create-view-for-europe-big-three-emissions",level:2},{value:"Solution \ud83d\ude80",id:"solution-",level:2}],p={toc:u},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"exercise-8"},"Exercise: 8"),(0,a.yg)("h2",{id:"create-view-for-europe-big-three-emissions"},"Create view for Europe Big Three Emissions"),(0,a.yg)("p",null,"Use the source table ",(0,a.yg)("inlineCode",{parentName:"p"},"co2_emissions_and_temperatures_by_country")," to create a view for the emissions data of the three major European countries: France, Germany, and the United Kingdom."),(0,a.yg)("p",null,"1.To create the view ",(0,a.yg)("inlineCode",{parentName:"p"},"europe_big_three_emissions")," with the desired columns in the ",(0,a.yg)("inlineCode",{parentName:"p"},"carbon_emissions")," schema "),(0,a.yg)("p",null,"2.Determine the join conditions based on the columns that link the tables.\nIn your case, the join conditions are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"global.Year = france.Year AND france.Country = 'France'"),(0,a.yg)("li",{parentName:"ul"},"global.Year = germany.Year AND germany.Country = 'Germany'"),(0,a.yg)("li",{parentName:"ul"},"global.Year = uk.Year AND uk.Country = 'United Kingdom'\nAdjust the join conditions based on your specific column names and criteria.")),(0,a.yg)("p",null,"Reshape the data to meet the following requirements:"),(0,a.yg)("p",null,"Select the following columns for the output view:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"YEAR: integer"),(0,a.yg)("li",{parentName:"ul"},"FRANCE_TOTALEMISSIONS: float"),(0,a.yg)("li",{parentName:"ul"},"FRANCE_PERCAPITAEMISSIONS: float"),(0,a.yg)("li",{parentName:"ul"},"GERMANY_TOTALEMISSIONS: float"),(0,a.yg)("li",{parentName:"ul"},"GERMANY_PERCAPITAEMISSIONS: float"),(0,a.yg)("li",{parentName:"ul"},"UNITEDKINGDOM_TOTALEMISSIONS: float"),(0,a.yg)("li",{parentName:"ul"},"UNITEDKINGDOM_PERCAPITAEMISSIONS: float")),(0,a.yg)("p",null,"Sample Output "),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"YEAR"),(0,a.yg)("th",{parentName:"tr",align:null},"FRANCE_TOTALEMISSIONS"),(0,a.yg)("th",{parentName:"tr",align:null},"FRANCE_PERCAPITAEMISSIONS"),(0,a.yg)("th",{parentName:"tr",align:null},"GERMANY_TOTALEMISSIONS"),(0,a.yg)("th",{parentName:"tr",align:null},"GERMANY_PERCAPITAEMISSIONS"),(0,a.yg)("th",{parentName:"tr",align:null},"UK_TOTALEMISSIONS"),(0,a.yg)("th",{parentName:"tr",align:null},"UK_PERCAPITAEMISSIONS"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1845"),(0,a.yg)("td",{parentName:"tr",align:null},"17.836352"),(0,a.yg)("td",{parentName:"tr",align:null},"0.500937"),(0,a.yg)("td",{parentName:"tr",align:null},"12.611488"),(0,a.yg)("td",{parentName:"tr",align:null},"0.389193"),(0,a.yg)("td",{parentName:"tr",align:null},"99.986896"),(0,a.yg)("td",{parentName:"tr",align:null},"4.618767")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1846"),(0,a.yg)("td",{parentName:"tr",align:null},"18.528848"),(0,a.yg)("td",{parentName:"tr",align:null},"0.518265"),(0,a.yg)("td",{parentName:"tr",align:null},"13.186736"),(0,a.yg)("td",{parentName:"tr",align:null},"0.403786"),(0,a.yg)("td",{parentName:"tr",align:null},"95.692688"),(0,a.yg)("td",{parentName:"tr",align:null},"4.381496")))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"In the SQL statement, the use of double quotes around the YEAR column name is necessary because it is a reserved keyword in Snowflake. "),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},'select "YEAR" FROM TABLE'))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"solution-"},"Solution \ud83d\ude80"),(0,a.yg)("p",null,"For a deep dive into the solution, hop over to the ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://github.com/Data-Navigators/Data_Processing/tree/main/SQL"},"Data Navigators GitHub Repository")),". It's loaded with all the SQL scripts and data processing insights you\u2019ll need!"))}c.isMDXComponent=!0}}]);