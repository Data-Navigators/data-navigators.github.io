"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[5186],{5680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>y});var n=t(6540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=l,y=d["".concat(i,".").concat(u)]||d[u]||c[u]||r;return t?n.createElement(y,o(o({ref:a},g),{},{components:t})):n.createElement(y,o({ref:a},g))}));function y(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[d]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9322:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=t(8168),l=(t(6540),t(5680));const r={id:"workshop-setup",title:"Data Analyst Workshop Setup",sidebar_label:"Workshop Setup",sidebar_position:5},o="Data Analyst Workshop Setup",s={unversionedId:"data-processing/SQL/workshop-setup",id:"data-processing/SQL/workshop-setup",title:"Data Analyst Workshop Setup",description:"Welcome to the Data Analyst Workshop! Follow the steps below to set up your Snowflake environment and load the necessary data files.",source:"@site/docs/data-processing/SQL/load-snowflake-data.mdx",sourceDirName:"data-processing/SQL",slug:"/data-processing/SQL/workshop-setup",permalink:"/docs/data-processing/SQL/workshop-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-processing/SQL/load-snowflake-data.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"workshop-setup",title:"Data Analyst Workshop Setup",sidebar_label:"Workshop Setup",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Problem Statement \ud83d\udca1",permalink:"/docs/data-processing/SQL/Problem-statement"},next:{title:"Flattening Json format data \ud83e\ude84",permalink:"/docs/data-processing/SQL/Flattening-Json-format-data"}},i={},p=[{value:"Step 1: Create a Free Tier Account on Snowflake",id:"step-1-create-a-free-tier-account-on-snowflake",level:2},{value:"Step 2: Create a Database",id:"step-2-create-a-database",level:2},{value:"Step 3: Create Schemas",id:"step-3-create-schemas",level:2},{value:"Step 4: Download the CSV Files",id:"step-4-download-the-csv-files",level:2},{value:"Step 5: Load Data into Snowflake",id:"step-5-load-data-into-snowflake",level:2},{value:"File to Table Mapping",id:"file-to-table-mapping",level:3},{value:"Steps to Load Data",id:"steps-to-load-data",level:3}],g={toc:p},d="wrapper";function c(e){let{components:a,...r}=e;return(0,l.yg)(d,(0,n.A)({},g,r,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"data-analyst-workshop-setup"},"Data Analyst Workshop Setup"),(0,l.yg)("p",null,"Welcome to the Data Analyst Workshop! Follow the steps below to set up your Snowflake environment and load the necessary data files."),(0,l.yg)("h2",{id:"step-1-create-a-free-tier-account-on-snowflake"},"Step 1: Create a Free Tier Account on Snowflake"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Go to ",(0,l.yg)("a",{parentName:"li",href:"https://signup.snowflake.com/"},"Snowflake's Free Trial Signup")," and sign up for a free trial account.")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"snowflake_setup",src:t(648).A,width:"768",height:"793"})),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Follow the instructions in your email to activate your account and log in to Snowflake.")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"snowflake_setup",src:t(2980).A,width:"1099",height:"927"})),(0,l.yg)("h2",{id:"step-2-create-a-database"},"Step 2: Create a Database"),(0,l.yg)("p",null,"Once logged in, create a new database to store your data."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"Database Name"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"EXERCISE_CO2_VS_TEMPERATURE"))),(0,l.yg)("p",null,"To create this database:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE EXERCISE_CO2_VS_TEMPERATURE;\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"OR")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"snowflake_database",src:t(72).A,width:"1084",height:"474"})),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"snowflake_database",src:t(8294).A,width:"1466",height:"704"})),(0,l.yg)("h2",{id:"step-3-create-schemas"},"Step 3: Create Schemas"),(0,l.yg)("p",null,"Inside the database, create the following schemas to organize your data:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"Schemas"),":",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"PSA")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"GLOBAL_TEMPERATURES")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CARBON_EMISSIONS"))))),(0,l.yg)("p",null,"To create these schemas:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"USE DATABASE EXERCISE_CO2_VS_TEMPERATURE;\n\nCREATE SCHEMA PSA;\nCREATE SCHEMA GLOBAL_TEMPERATURES;\nCREATE SCHEMA CARBON_EMISSIONS;\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"OR")),(0,l.yg)("p",null,"You can also create schemas using the Snowflake web interface:"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Click on the database",src:t(5168).A,width:"1113",height:"317"})),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Create a new schema",src:t(4371).A,width:"1162",height:"524"})),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"View inside the database",src:t(1190).A,width:"1142",height:"579"})),(0,l.yg)("h2",{id:"step-4-download-the-csv-files"},"Step 4: Download the CSV Files"),(0,l.yg)("p",null,"Clone the GitHub repository to access the necessary data files:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Update Homebrew"),(0,l.yg)("br",{parentName:"p"}),"\n","Open Terminal and update Homebrew to ensure you're getting the latest packages:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"brew update\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Install Git LFS"),(0,l.yg)("br",{parentName:"p"}),"\n","Use Homebrew to install Git LFS:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"brew install git-lfs\n")),(0,l.yg)("p",null,"For more details and documentation, refer to the official Git LFS website: ",(0,l.yg)("a",{parentName:"p",href:"https://git-lfs.github.com/"},"link")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Data-Navigators/Data_Processing.git\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cd data\n")),(0,l.yg)("p",null,"This will download the following CSV files:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"EMISSIONSBYCOUNTRY.csv")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"GLOBALTEMPERATURES.csv")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"TEMPERATURESBYCOUNTRY.csv"))),(0,l.yg)("h2",{id:"step-5-load-data-into-snowflake"},"Step 5: Load Data into Snowflake"),(0,l.yg)("p",null,"Load the downloaded CSV files into the ",(0,l.yg)("inlineCode",{parentName:"p"},"PSA")," schema within your Snowflake database."),(0,l.yg)("h3",{id:"file-to-table-mapping"},"File to Table Mapping"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"CSV File"),(0,l.yg)("th",{parentName:"tr",align:null},"Schema"),(0,l.yg)("th",{parentName:"tr",align:null},"Table"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"EMISSIONSBYCOUNTRY.csv")),(0,l.yg)("td",{parentName:"tr",align:null},"PSA"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"EMISSIONBYCOUNTRY"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"GLOBALTEMPERATURES.csv")),(0,l.yg)("td",{parentName:"tr",align:null},"PSA"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"GLOBALTEMPERATURES"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"TEMPERATURESBYCOUNTRY.csv")),(0,l.yg)("td",{parentName:"tr",align:null},"PSA"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"TEMPERATURESBYCOUNTRY"))))),(0,l.yg)("h3",{id:"steps-to-load-data"},"Steps to Load Data"),(0,l.yg)("p",null,"For each CSV file, run the following commands:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Create Tables")," in the ",(0,l.yg)("inlineCode",{parentName:"p"},"PSA")," schema."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"USE SCHEMA PSA;\n\nCREATE TABLE EMISSIONBYCOUNTRY (...); -- Define columns based on your data\nCREATE TABLE GLOBALTEMPERATURES (...); -- Define columns based on your data\nCREATE TABLE TEMPERATURESBYCOUNTRY (...); -- Define columns based on your data\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Load Data")," from the local files:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"You can use Snowflake's data loading utilities, such as SnowSQL or the Snowflake UI, to upload each CSV to its respective table.")))),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Load data into table",src:t(1457).A,width:"1629",height:"916"})),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Load data table window",src:t(381).A,width:"862",height:"887"})),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Define schema database",src:t(2767).A,width:"809",height:"419"})),(0,l.yg)("p",null,"Once these steps are complete, your Snowflake environment will be set up with the necessary data for the workshop!"))}c.isMDXComponent=!0},5168:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/click_database-4d90318d51d7bea6d496aaa7b3853033.png"},8294:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create_database-ede64ed877db89248177e94cd5766d82.png"},4371:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/creating_schema-cc831bc4efd1d13a5eb2d373d032b4d5.png"},2767:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/define_schema_database-42b5f53290133074069932bcbbc3f75f.png"},1190:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/inside_database-dc1f310d02d26414c02a862179a07759.png"},1457:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/load_data_into_table-59d5524562371ae55374c3f8f344becf.png"},381:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/load_data_table_window-6d131b1d5da01be07dff17334ca34a3c.png"},72:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/snowflake_database-177efa3a0f53d8d37c0cbdcd0fd802e2.png"},2980:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/snowflake_password-aaa3662fc271e65dcb1d12b64a2ffb0c.png"},648:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/snowflake_setup-62a05cdf7ef08d3f3163befcd3cc1468.png"}}]);