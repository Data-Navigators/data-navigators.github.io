"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[8210],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,y=m["".concat(s,".").concat(c)]||m[c]||g[c]||l;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(8168),r=(n(6540),n(5680));const l={sidebar_position:9},o="Exercise: 7",i={unversionedId:"data-transformation/SQL/Exercise-7",id:"data-transformation/SQL/Exercise-7",title:"Exercise: 7",description:"Create table for Aggregate Country Emissions Temperatures",source:"@site/docs/data-transformation/SQL/Exercise-7.mdx",sourceDirName:"data-transformation/SQL",slug:"/data-transformation/SQL/Exercise-7",permalink:"/docs/data-transformation/SQL/Exercise-7",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/SQL/Exercise-7.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Exercise: 6",permalink:"/docs/data-transformation/SQL/Exercise-6"},next:{title:"Exercise: 8",permalink:"/docs/data-transformation/SQL/Exercise-8"}},s={},u=[{value:"Create table for Aggregate Country Emissions Temperatures",id:"create-table-for-aggregate-country-emissions-temperatures",level:2}],p={toc:u},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"exercise-7"},"Exercise: 7"),(0,r.yg)("h2",{id:"create-table-for-aggregate-country-emissions-temperatures"},"Create table for Aggregate Country Emissions Temperatures"),(0,r.yg)("p",null,"In this exercise, you will create a table that combines the results of the ",(0,r.yg)("inlineCode",{parentName:"p"},"co2_emissions_by_country")," table and the ",(0,r.yg)("inlineCode",{parentName:"p"},"aggregate_country_temperatures")," table. You will perform an INNER JOIN between these two tables and standardize the country name using the ",(0,r.yg)("inlineCode",{parentName:"p"},"initcap")," function."),(0,r.yg)("p",null,"To create the table ",(0,r.yg)("inlineCode",{parentName:"p"},"co2_emissions_and_temperatures_by_country")," with the desired columns in the ",(0,r.yg)("inlineCode",{parentName:"p"},"carbon_emissions")," schema :"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Perform an INNER JOIN between the ",(0,r.yg)("inlineCode",{parentName:"li"},"co2_emissions_by_country")," table and the ",(0,r.yg)("inlineCode",{parentName:"li"},"aggregate_country_temperatures"),' table on the "Year" and "Country" columns.'),(0,r.yg)("li",{parentName:"ol"},"Use the ",(0,r.yg)("inlineCode",{parentName:"li"},"initcap"),' function to standardize the country name in the "Country" column.'),(0,r.yg)("li",{parentName:"ol"},"Create ",(0,r.yg)("inlineCode",{parentName:"li"},"COUNTRY_AVGTEMP_BKEY")," column by combining the  COUNTRY ,YEAR ,and AVERAGETEMPERATURE columns using the '||' symbol as a separator."),(0,r.yg)("li",{parentName:"ol"},"Select the following columns for the output table:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"COUNTRY_AVGTEMP_BKEY: String"),(0,r.yg)("li",{parentName:"ul"},"YEAR: Integer"),(0,r.yg)("li",{parentName:"ul"},"COUNTRY: String"),(0,r.yg)("li",{parentName:"ul"},"TOTALEMISSIONS: Float"),(0,r.yg)("li",{parentName:"ul"},"PERCAPITAEMISSIONS: Float"),(0,r.yg)("li",{parentName:"ul"},"SHAREOFGLOBALEMISSIONS: Float"),(0,r.yg)("li",{parentName:"ul"},"AVERAGETEMPERATURE: Float")))),(0,r.yg)("p",null,"Sample Output "),(0,r.yg)("p",null,"Certainly! Here's the markdown representation of the provided CSV table:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"COUNTRY_AVGTEMP_BKEY"),(0,r.yg)("th",{parentName:"tr",align:null},"YEAR"),(0,r.yg)("th",{parentName:"tr",align:null},"COUNTRY"),(0,r.yg)("th",{parentName:"tr",align:null},"TOTALEMISSIONS"),(0,r.yg)("th",{parentName:"tr",align:null},"PERCAPITAEMISSIONS"),(0,r.yg)("th",{parentName:"tr",align:null},"SHAREOFGLOBALEMISSIONS"),(0,r.yg)("th",{parentName:"tr",align:null},"AVERAGETEMPERATURE"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Germany","|","|","1796","|","|","8.64875"),(0,r.yg)("td",{parentName:"tr",align:null},"1796"),(0,r.yg)("td",{parentName:"tr",align:null},"Germany"),(0,r.yg)("td",{parentName:"tr",align:null},"0.534944"),(0,r.yg)("td",{parentName:"tr",align:null},"0.01397"),(0,r.yg)("td",{parentName:"tr",align:null},"2.330779"),(0,r.yg)("td",{parentName:"tr",align:null},"8.64875")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Germany","|","|","1802","|","|","8.988833333"),(0,r.yg)("td",{parentName:"tr",align:null},"1802"),(0,r.yg)("td",{parentName:"tr",align:null},"Germany"),(0,r.yg)("td",{parentName:"tr",align:null},"0.553264"),(0,r.yg)("td",{parentName:"tr",align:null},"0.02397"),(0,r.yg)("td",{parentName:"tr",align:null},"1.504134"),(0,r.yg)("td",{parentName:"tr",align:null},"8.988833333")))),(0,r.yg)("p",null,"Please note that the table assumes that the values are separated by commas (,) in the provided CSV data."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"In the SQL statement, the use of double quotes around the YEAR column name is necessary because it is a reserved keyword in Snowflake. "),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},'select "YEAR" FROM TABLE'))))}g.isMDXComponent=!0}}]);