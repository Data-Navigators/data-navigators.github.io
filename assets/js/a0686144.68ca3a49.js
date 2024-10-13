"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[2909],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>u});var i=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return a?i.createElement(u,o(o({ref:t},p),{},{components:a})):i.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},781:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(8168),n=(a(6540),a(5680));const r={sidebar_position:5},o="Exercise 3",s={unversionedId:"data-visualisation/Streamlit/Exercise-3",id:"data-visualisation/Streamlit/Exercise-3",title:"Exercise 3",description:"Exercise: Share of Global Emissions by Continent",source:"@site/docs/data-visualisation/Streamlit/Exercise-3.mdx",sourceDirName:"data-visualisation/Streamlit",slug:"/data-visualisation/Streamlit/Exercise-3",permalink:"/docs/data-visualisation/Streamlit/Exercise-3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-visualisation/Streamlit/Exercise-3.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Exercise 2",permalink:"/docs/data-visualisation/Streamlit/Exercise-2"},next:{title:"Exercise 4",permalink:"/docs/data-visualisation/Streamlit/Excercise-4"}},l={},c=[{value:"Exercise: Share of Global Emissions by Continent",id:"exercise-share-of-global-emissions-by-continent",level:2},{value:"Problem Description:",id:"problem-description",level:3},{value:"Instructions:",id:"instructions",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,i.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"exercise-3"},"Exercise 3"),(0,n.yg)("h2",{id:"exercise-share-of-global-emissions-by-continent"},"Exercise: Share of Global Emissions by Continent"),(0,n.yg)("p",null,"In this exercise, we will create visualizations using Streamlit to analyze the share of global emissions by continent. We will display the data in both bar chart and pie chart formats, allowing for easy comparison and understanding."),(0,n.yg)("h3",{id:"problem-description"},"Problem Description:"),(0,n.yg)("p",null,"You have been provided with a dataset that contains information about the share of global emissions by continent. Your task is to create visualizations that showcase the distribution of emissions among different continents. Specifically, you will create a bar chart to compare the emission shares of each continent and a pie chart to display the share of emissions by country for a selected year."),(0,n.yg)("h3",{id:"instructions"},"Instructions:"),(0,n.yg)("p",null,"Follow the steps below to complete the exercise:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Start by adding a title to your Streamlit app using ",(0,n.yg)("inlineCode",{parentName:"p"},"st.title()"),' and set it to "Share of Global Emissions by Continent \ud83d\uddfa".')),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Define the name of the table that contains the emission and temperature data. Use the variable ",(0,n.yg)("inlineCode",{parentName:"p"},"emission_temp_continent"),' and set it to the appropriate table name, such as "EXERCISE_CO2_VS_TEMPERATURE.CARBON_EMISSIONS.AGGREGATE_COUNTRY_EMISSIONS_TEMPERATURES".')),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Write a query to retrieve the necessary data from the specified table. The query should select the country, share of global emissions, and year columns for the continents: Europe, Asia, Africa, North America, South America, and Oceania. Store the retrieved data in a variable named ",(0,n.yg)("inlineCode",{parentName:"p"},"emission_data"),".")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a pandas DataFrame named ",(0,n.yg)("inlineCode",{parentName:"p"},"df_emission")," to store the emission data. Specify the column names as 'COUNTRY', 'SHAREOFGLOBALEMISSIONS', and 'YEAR' to match the columns returned by the query.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Add a slider to your Streamlit app using ",(0,n.yg)("inlineCode",{parentName:"p"},"st.slider()")," to allow the user to select a year. Set the minimum value to 1800, the maximum value to 2013, and the default value to 2000. Store the selected year in a variable named ",(0,n.yg)("inlineCode",{parentName:"p"},"year_to_plot"),".")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Filter the DataFrame ",(0,n.yg)("inlineCode",{parentName:"p"},"df_emission")," based on the selected year. Create a new DataFrame named ",(0,n.yg)("inlineCode",{parentName:"p"},"df_filtered")," that contains only the rows where the 'YEAR' column matches the selected year.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Implement the ",(0,n.yg)("inlineCode",{parentName:"p"},"display_bar_chart()")," function. This function will use Plotly Express to create a horizontal bar chart. Pass the ",(0,n.yg)("inlineCode",{parentName:"p"},"df_filtered")," DataFrame along with the appropriate column names and titles to the function. Adjust the width and height of the chart to ensure proper display.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Implement the ",(0,n.yg)("inlineCode",{parentName:"p"},"display_pie_chart()")," function. This function will use Plotly Express to create a pie chart. Pass the ",(0,n.yg)("inlineCode",{parentName:"p"},"df_filtered")," DataFrame along with the necessary column names, labels, and titles to the function. Adjust the width and height of the chart to ensure proper display.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Run your Streamlit app and test the functionality. Use the slider to select different years and observe how the bar chart and pie chart update accordingly, reflecting the share of global emissions by continent and country for the selected year.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Verify that the bar chart and pie chart are displayed correctly with the appropriate labels, titles, and data.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Make any necessary adjustments to the code or styling to enhance the user experience and improve the visualizations as needed.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Once you are satisfied with your Streamlit app and the visualizations, you have successfully completed the exercise."))),(0,n.yg)("p",null,"Refer to the provided code snippets and customize them as necessary to integrate them into your Streamlit app. Feel free to modify the colors, labels, and chart settings to make the visualizations more visually appealing and informative."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"share-global-bar.png",src:a(5438).A,width:"1894",height:"647"})),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"share-global-pie.png",src:a(8287).A,width:"1896",height:"492"})))}m.isMDXComponent=!0},5438:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/share-global-bar-5f7f5a5030b013a5b1bf790fa1e8fed5.png"},8287:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/share-global-pie-4fa4bab3b38738361d8d890effc01e8c.png"}}]);