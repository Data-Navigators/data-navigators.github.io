"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[8809],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,y=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const i={sidebar_position:8},o="Exercise: 6",l={unversionedId:"data-transformation/SQL/Exercise-6",id:"data-transformation/SQL/Exercise-6",title:"Exercise: 6",description:"Create View for Aggregate Country Emissions Temperatures",source:"@site/docs/data-transformation/SQL/Exercise-6.mdx",sourceDirName:"data-transformation/SQL",slug:"/data-transformation/SQL/Exercise-6",permalink:"/docs/data-transformation/SQL/Exercise-6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/SQL/Exercise-6.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Exercise 5",permalink:"/docs/data-transformation/SQL/Exercise-5"},next:{title:"Exercise: 7",permalink:"/docs/data-transformation/SQL/Exercise-7"}},s={},u=[{value:"Create View for Aggregate Country Emissions Temperatures",id:"create-view-for-aggregate-country-emissions-temperatures",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"exercise-6"},"Exercise: 6"),(0,a.yg)("h2",{id:"create-view-for-aggregate-country-emissions-temperatures"},"Create View for Aggregate Country Emissions Temperatures"),(0,a.yg)("p",null,"In this exercise, you will create a view that combines the results of the ",(0,a.yg)("inlineCode",{parentName:"p"},"co2_emissions_by_country")," table and the ",(0,a.yg)("inlineCode",{parentName:"p"},"aggregate_country_temperatures")," table. You will perform an LEFT JOIN between these two tables and standardize the country name using the ",(0,a.yg)("inlineCode",{parentName:"p"},"initcap")," function."),(0,a.yg)("p",null,"To create the view ",(0,a.yg)("inlineCode",{parentName:"p"},"aggregate_country_emissions_temperatures")," with the desired columns in the ",(0,a.yg)("inlineCode",{parentName:"p"},"carbon_emissions")," schema :"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Perform an INNER JOIN between the ",(0,a.yg)("inlineCode",{parentName:"li"},"co2_emissions_by_country")," table and the ",(0,a.yg)("inlineCode",{parentName:"li"},"aggregate_country_temperatures"),' table on the "Year" and "Country" columns.'),(0,a.yg)("li",{parentName:"ol"},"Use the ",(0,a.yg)("inlineCode",{parentName:"li"},"initcap"),' function to standardize the country name in the "Country" column.'),(0,a.yg)("li",{parentName:"ol"},"Select the following columns for the output table:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"YEAR: Integer"),(0,a.yg)("li",{parentName:"ul"},"COUNTRY: String"),(0,a.yg)("li",{parentName:"ul"},"TOTALEMISSIONS: Float"),(0,a.yg)("li",{parentName:"ul"},"PERCAPITAEMISSIONS: Float"),(0,a.yg)("li",{parentName:"ul"},"SHAREOFGLOBALEMISSIONS: Float"),(0,a.yg)("li",{parentName:"ul"},"AVERAGETEMPERATURE: Float")))),(0,a.yg)("p",null,"Sample Output "),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"YEAR"),(0,a.yg)("th",{parentName:"tr",align:null},"COUNTRY"),(0,a.yg)("th",{parentName:"tr",align:null},"TOTALEMISSIONS"),(0,a.yg)("th",{parentName:"tr",align:null},"PERCAPITAEMISSIONS"),(0,a.yg)("th",{parentName:"tr",align:null},"SHAREOFGLOBALEMISSIONS"),(0,a.yg)("th",{parentName:"tr",align:null},"AVERAGETEMPERATURE"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1933"),(0,a.yg)("td",{parentName:"tr",align:null},"Kyrgyzstan"),(0,a.yg)("td",{parentName:"tr",align:null},"1.382419"),(0,a.yg)("td",{parentName:"tr",align:null},"0.929326"),(0,a.yg)("td",{parentName:"tr",align:null},"0.041577"),(0,a.yg)("td",{parentName:"tr",align:null},"10.381833333")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1962"),(0,a.yg)("td",{parentName:"tr",align:null},"Kiribati"),(0,a.yg)("td",{parentName:"tr",align:null},"0.010992"),(0,a.yg)("td",{parentName:"tr",align:null},"0.255628"),(0,a.yg)("td",{parentName:"tr",align:null},"0.000113"),(0,a.yg)("td",{parentName:"tr",align:null},"26.658083333")))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"In the SQL statement, the use of double quotes around the YEAR column name is necessary because it is a reserved keyword in Snowflake. "),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},'select "YEAR" FROM TABLE'))))}c.isMDXComponent=!0}}]);