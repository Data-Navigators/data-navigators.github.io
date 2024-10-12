"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[85],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),g=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=g(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=g(a),p=i,y=c["".concat(o,".").concat(p)]||c[p]||u[p]||s;return a?n.createElement(y,r(r({ref:t},d),{},{components:a})):n.createElement(y,r({ref:t},d))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var g=2;g<s;g++)r[g]=a[g];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var n=a(8168),i=(a(6540),a(5680));const s={sidebar_position:1},r="Understanding Your Data",l={unversionedId:"data-visualisation/understanding-your-data",id:"data-visualisation/understanding-your-data",title:"Understanding Your Data",description:"Using a Critical Eye",source:"@site/docs/data-visualisation/understanding-your-data.md",sourceDirName:"data-visualisation",slug:"/data-visualisation/understanding-your-data",permalink:"/docs/data-visualisation/understanding-your-data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-visualisation/understanding-your-data.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quiz \u2728 (Optional)",permalink:"/docs/data-transformation/quiz"},next:{title:"Visualization Tools",permalink:"/docs/data-visualisation/visualization-tools"}},o={},g=[{value:"Using a Critical Eye",id:"using-a-critical-eye",level:2},{value:"Choose an effective visual",id:"choose-an-effective-visual",level:2},{value:"<strong>Simple Text</strong>",id:"simple-text",level:3},{value:"<strong>Tables</strong>",id:"tables",level:3},{value:"<strong>Graphs</strong>",id:"graphs",level:3},{value:"<strong>Caveats</strong>",id:"caveats",level:3},{value:"Eliminate clutter",id:"eliminate-clutter",level:2},{value:"References",id:"references",level:3}],d={toc:g},c="wrapper";function u(e){let{components:t,...s}=e;return(0,i.yg)(c,(0,n.A)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"understanding-your-data"},"Understanding Your Data"),(0,i.yg)("h2",{id:"using-a-critical-eye"},"Using a Critical Eye"),(0,i.yg)("p",null,"Visualization helps bring out the story of your data and being able to tell these stories with data is of great significance for data\u2010driven decision making."),(0,i.yg)("div",{style:{textAlign:"center",height:"90%",width:"90%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"ticket_example.png",src:a(1040).A,width:"1370",height:"440"}))),(0,i.yg)("p",null,"For example,"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"How does the volume of received and processed tickets vary per month?"),(0,i.yg)("li",{parentName:"ul"},"Are we falling behind in terms of processing the recieved tickets? If so, from when and why?"),(0,i.yg)("li",{parentName:"ul"},"What are the factors slowing down the ticket processing? Are these factors correlated? ",(0,i.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ROpbdO-gRUo"},"Correlation is NOT causation"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Exploratory vs Explanatory Analysis")),(0,i.yg)("div",{style:{textAlign:"center",height:"50%",width:"50%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"explanatory_vs_exploratory.png",src:a(8176).A,width:"1126",height:"521"}))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Exploratory analysis is what you do to understand the data, finding patterns, outliers, relationships and so on."),(0,i.yg)("li",{parentName:"ul"},"Explanatory analysis is communicating the key insights of the analysis to decision-makers, stakeholders, etc.")),(0,i.yg)("h2",{id:"choose-an-effective-visual"},"Choose an effective visual"),(0,i.yg)("h3",{id:"simple-text"},(0,i.yg)("strong",{parentName:"h3"},"Simple Text")),(0,i.yg)("p",null,"Simple text is used for communicating for numbers by making the numbers as prominent as possible and a few supporting words to clearly make your point."),(0,i.yg)("div",{style:{textAlign:"center",height:"25%",width:"25%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"simple_text.png",src:a(6983).A,width:"704",height:"462"}))),(0,i.yg)("h3",{id:"tables"},(0,i.yg)("strong",{parentName:"h3"},"Tables")),(0,i.yg)("p",null,"Tables can be used for communicating to a mixed audience whose members will each look for their particular row of interest."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Different units of measure can be elegantly displayed on tables"),(0,i.yg)("li",{parentName:"ul"},"Allow the data to take a center stage and lighten the borders"),(0,i.yg)("li",{parentName:"ul"},"Heat maps can be used to provide visual cues so that potential points of interest can be easily spotted")),(0,i.yg)("div",{style:{textAlign:"center",height:"55%",width:"55%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"heatmap_vs_table.png",src:a(6940).A,width:"1148",height:"426"}))),(0,i.yg)("h3",{id:"graphs"},(0,i.yg)("strong",{parentName:"h3"},"Graphs")),(0,i.yg)("p",null,"A well-designed graph is more effective than a table as it interacts with our visual processing system."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1. Points")),(0,i.yg)("div",{style:{textAlign:"center",height:"45%",width:"45%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"scatterplot.png",src:a(7156).A,width:"914",height:"676"}))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Scatterplots are useful for showing the relationship between two entities"),(0,i.yg)("li",{parentName:"ul"},"They encode data simultaneously on a horizontal x\u2010axis and vertical y\u2010axis and allow people to see what relationship exists."),(0,i.yg)("li",{parentName:"ul"},"They are more frequently used in scientific fields than in the business world.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2. Lines")),(0,i.yg)("div",{style:{textAlign:"center",height:"45%",width:"45%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"line_plot.png",src:a(5743).A,width:"990",height:"724"}))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Line graphs are most commonly used to plot continuous data, which is often in the form of some unit of time: days, months, quarters, or years"),(0,i.yg)("li",{parentName:"ul"},"They may not make sense for categorical data as the points in the graph are physically connected via a line")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3. Bars")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Bar charts are allow for easy processing of visual information as our eyes compare the end points of the bars to find the largest, smallest and incremental difference"),(0,i.yg)("li",{parentName:"ul"},"Bar charts must always have a zero baseline"),(0,i.yg)("li",{parentName:"ul"},"In general the bars should be wider than the white space between the bars")),(0,i.yg)("div",{style:{textAlign:"center",height:"60%",width:"60%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"bar_plot_width.png",src:a(7637).A,width:"1372",height:"444"}))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Beware of stacked bar plots as they can overwhelm your audience with information")),(0,i.yg)("div",{style:{textAlign:"center",height:"60%",width:"60%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"stacked_bar_plot.png",src:a(7886).A,width:"1086",height:"444"}))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Horizontal bar charts are extremely useful for categorical data with long category names")),(0,i.yg)("div",{style:{textAlign:"center",height:"70%",width:"70%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"horizontal_bar_plot.png",src:a(4295).A,width:"1416",height:"444"}))),(0,i.yg)("h3",{id:"caveats"},(0,i.yg)("strong",{parentName:"h3"},"Caveats")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Never use 3D charts unless it is absolutely necessary to add a third dimension. 3D charts introduce skews, making the data difficult to interpret and compare"),(0,i.yg)("li",{parentName:"ul"},"Pie charts should be mostly avoided when representing quantitative information as it becomes almost impossible to discern segments close in size. (Use bar charts instead)"),(0,i.yg)("li",{parentName:"ul"},"Avoid using secondary axes as it makes the interpretation of the data tedious")),(0,i.yg)("div",{style:{textAlign:"center",height:"70%",width:"70%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"secondary_axes.png",src:a(653).A,width:"1805",height:"624"}))),(0,i.yg)("h2",{id:"eliminate-clutter"},"Eliminate clutter"),(0,i.yg)("div",{style:{textAlign:"center",height:"50%",width:"50%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"you_see_with_your_brain.png",src:a(4264).A,width:"1102",height:"548"}))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A human brain has a finite amount of mental processing power to process visual information (or cognitive load)"),(0,i.yg)("li",{parentName:"ul"},"Cognitive load is the mental effort that is required to learn new information"),(0,i.yg)("li",{parentName:"ul"},"Clutter in our visualization results in extraneous cognitive load and processing that takes up mental resources but doesn\u2019t necessarily improve one's understanding of the data"),(0,i.yg)("li",{parentName:"ul"},"Clutter has to be avoided at all costs as it simply eats up space and make the visualization feel more complicated"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://excelcharts.com/data-visualization-excel-users/gestalt-laws/"},"Gestalt Principles of Visual Perception")," can help distinguish between clutter and useful information")),(0,i.yg)("div",{style:{textAlign:"center",height:"75%",width:"75%"}},(0,i.yg)("p",null,(0,i.yg)("img",{alt:"visual_order.png",src:a(1038).A,width:"1682",height:"622"}))),(0,i.yg)("h3",{id:"references"},"References"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.storytellingwithdata.com/books"},"Storytelling with data")))}u.isMDXComponent=!0},7637:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bar_plot_width-e1a7af7ef57cad3003cde40b0110ba8f.png"},8176:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/explanatory_vs_exploratory-8a9f1f69a76506f82fbf8e9f4976f595.png"},6940:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/heatmap_vs_table-24ea26ae8b3bce861aac26dc593fe4f8.png"},4295:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/horizontal_bar_plot-a936b101ab1fa9df624d1289166b2d2e.png"},5743:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/line_plot-cc03ca46953e28b0a24cfe3b09da8857.png"},7156:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/scatterplot-36fed0f0f47bd44dd94d02b778bea4ec.png"},653:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/secondary_axes-7d5c71f5f9be984ec768ac74e3844ea9.png"},6983:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/simple_text-c9575634d69d430ebe6466d21e94c21b.png"},7886:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/stacked_bar_plot-2020c7e05f0c877d03d149b84d1b1989.png"},1040:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ticket_example-0e3b7c43d95edf96f16a0b1e9eb28958.png"},1038:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/visual_order-458d54444858b2ac58376fd33952b846.png"},4264:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/you_see_with_your_brain-86f8c52160d77a5c04478387e8ffd5e7.png"}}]);