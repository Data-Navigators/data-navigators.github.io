"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[379],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>Q});var i=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=i.createContext({}),l=function(e){var n=i.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=l(e.components);return i.createElement(g.Provider,{value:n},e.children)},u="mdxType",M={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,g=e.parentName,s=E(e,["components","mdxType","originalType","parentName"]),u=l(t),h=o,Q=u["".concat(g,".").concat(h)]||u[h]||M[h]||a;return t?i.createElement(Q,r(r({ref:n},s),{},{components:t})):i.createElement(Q,r({ref:n},s))}));function Q(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=h;var E={};for(var g in n)hasOwnProperty.call(n,g)&&(E[g]=n[g]);E.originalType=e,E[u]="string"==typeof e?e:o,r[1]=E;for(var l=2;l<a;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>M,frontMatter:()=>a,metadata:()=>E,toc:()=>l});var i=t(8168),o=(t(6540),t(5680));const a={sidebar_position:2},r="Advanced SQL: Window and Aggregate Functions",E={unversionedId:"data-transformation/SQL/advance-sql",id:"data-transformation/SQL/advance-sql",title:"Advanced SQL: Window and Aggregate Functions",description:"There are a lot of interesting functions to transform and add properties to your dataset",source:"@site/docs/data-transformation/SQL/advance-sql.mdx",sourceDirName:"data-transformation/SQL",slug:"/data-transformation/SQL/advance-sql",permalink:"/docs/data-transformation/SQL/advance-sql",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/SQL/advance-sql.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SQL: A Quick Review",permalink:"/docs/data-transformation/SQL/sql-quick-review"},next:{title:"Flattening Json format data \ud83e\ude84",permalink:"/docs/data-transformation/SQL/Flattening-Json-format-data"}},g={},l=[{value:"Aggregate Functions",id:"aggregate-functions",level:2},{value:"Window Functions",id:"window-functions",level:2},{value:"Conclusion",id:"conclusion",level:2}],s={toc:l},u="wrapper";function M(e){let{components:n,...a}=e;return(0,o.yg)(u,(0,i.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"advanced-sql-window-and-aggregate-functions"},"Advanced SQL: Window and Aggregate Functions"),(0,o.yg)("p",null,"There are a lot of interesting functions to transform and add properties to your dataset"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"What limitations have you faced in your analytics when using GROUP BY in the past?"),(0,o.yg)("li",{parentName:"ul"},"How can you do rankings per each category efficiently?"),(0,o.yg)("li",{parentName:"ul"},"How can you get the entire row of the best-selling product? (imagine you want to see additional attributes of this product)")),(0,o.yg)("p",null,"In SQL, window functions and aggregate functions are powerful tools that allow you to perform complex calculations on your data. In this guide, we'll cover the basics of these functions and show you how to use them to get the most out of your SQL queries."),(0,o.yg)("h2",{id:"aggregate-functions"},"Aggregate Functions"),(0,o.yg)("p",null,"Aggregate functions allow you to perform calculations on a set of values and return a single result. Some of the most common aggregate functions include:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"SUM"),": Calculates the sum of all values in a given column."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"AVG"),": Calculates the average of all values in a given column."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"MIN"),": Returns the minimum value in a given column."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"MAX"),": Returns the maximum value in a given column."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"COUNT"),": Returns the number of rows in a given column.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("p",null,(0,o.yg)("img",{alt:"aggreage_function.png",src:t(4628).A,width:"1920",height:"1080"}))),(0,o.yg)("p",null,"Here's an example of how you might use an aggregate function in SQL:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) \nFROM customers;\n")),(0,o.yg)("p",null,"This query returns the total number of rows in the ",(0,o.yg)("inlineCode",{parentName:"p"},"customers")," table."),(0,o.yg)("h2",{id:"window-functions"},"Window Functions"),(0,o.yg)("p",null,"Window functions are a type of function that allows you to perform calculations across a set of rows that are related to the current row. Some of the most common window functions include:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ROW_NUMBER"),": Returns the number of the current row within its partition."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"RANK"),": Returns the rank of the current row with its partition."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"DENSE_RANK"),": Returns the rank of the current row within its partition, with ties receiving the same rank and leaving gaps."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"LEAD"),": Returns the value of a given column for the next row in the partition."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"LAG"),": Returns the value of a given column for the previous row in the partition.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("p",null,(0,o.yg)("img",{alt:"aggreage_function.png",src:t(4167).A,width:"579",height:"408"}))),(0,o.yg)("p",null,"Here's an example of how you might use a window function in SQL:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT first_name, last_name, salary, \n       ROW_NUMBER() OVER (ORDER BY salary DESC) as row_number \nFROM employees;\n")),(0,o.yg)("p",null,"This query returns the ",(0,o.yg)("inlineCode",{parentName:"p"},"first_name"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"last_name"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"salary")," columns from the ",(0,o.yg)("inlineCode",{parentName:"p"},"employees")," table, along with a ",(0,o.yg)("inlineCode",{parentName:"p"},"row_number")," column that indicates the number of the current row within its partition."),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"Aggregate and window functions are powerful tools that can help you to perform complex calculations on your SQL data. By mastering these functions, you can gain a deeper understanding of your data and create more insightful reports and visualizations."))}M.isMDXComponent=!0},4628:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/aggreage_function-27ecd0f78022390a10adb0ac5586d084.png"},4167:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"}}]);