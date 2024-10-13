"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[915],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=g(n),d=r,y=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<i;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var a=n(8168),r=(n(6540),n(5680));const i={},o=void 0,l={unversionedId:"Statistical-Concepts/Multiple-Linear-Regression/Multiple-Linear-Regression",id:"Statistical-Concepts/Multiple-Linear-Regression/Multiple-Linear-Regression",title:"Multiple-Linear-Regression",description:"Q1: How do we set up a multiple linear regression model to predict Total Amount?",source:"@site/docs/Statistical-Concepts/Multiple-Linear-Regression/Multiple-Linear-Regression.mdx",sourceDirName:"Statistical-Concepts/Multiple-Linear-Regression",slug:"/Statistical-Concepts/Multiple-Linear-Regression/",permalink:"/docs/Statistical-Concepts/Multiple-Linear-Regression/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Statistical-Concepts/Multiple-Linear-Regression/Multiple-Linear-Regression.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Correlation",permalink:"/docs/Statistical-Concepts/Correlation/"},next:{title:"Logistic-Regression",permalink:"/docs/Statistical-Concepts/Logistic-Regression/"}},s={},g=[{value:"Q1: How do we set up a multiple linear regression model to predict Total Amount?",id:"q1-how-do-we-set-up-a-multiple-linear-regression-model-to-predict-total-amount",level:3},{value:"Key interpretations:",id:"key-interpretations",level:4},{value:"Q2: How do we interpret the regression coefficients?",id:"q2-how-do-we-interpret-the-regression-coefficients",level:3},{value:"Q3: What does Adjusted R-Squared tell us?",id:"q3-what-does-adjusted-r-squared-tell-us",level:3},{value:"Q4: How do we check for multicollinearity in this dataset?",id:"q4-how-do-we-check-for-multicollinearity-in-this-dataset",level:3},{value:"Key Interpretation:",id:"key-interpretation",level:4},{value:"Solutions",id:"solutions",level:2}],p={toc:g},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"q1-how-do-we-set-up-a-multiple-linear-regression-model-to-predict-total-amount"},"Q1: How do we set up a multiple linear regression model to predict Total Amount?"),(0,r.yg)("details",null,(0,r.yg)("summary",null,"\ud83d\udca1 View Answer"),(0,r.yg)("p",null,"In the multiple linear regression model, ",(0,r.yg)("strong",{parentName:"p"},"Quantity"),", ",(0,r.yg)("strong",{parentName:"p"},"Price per Unit"),", ",(0,r.yg)("strong",{parentName:"p"},"Age"),", ",(0,r.yg)("strong",{parentName:"p"},"Gender"),", and ",(0,r.yg)("strong",{parentName:"p"},"Product Category")," are used as independent variables to predict ",(0,r.yg)("strong",{parentName:"p"},"Total Amount"),"."),(0,r.yg)("h4",{id:"key-interpretations"},"Key interpretations:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Quantity"),": Positive coefficient (177.4215), indicating that an increase in the quantity of products sold significantly increases the total amount."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Price per Unit"),": Positive coefficient (2.4941), meaning that a higher price per unit also increases the total amount."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Age"),": Negative coefficient (-0.7988), but it is not statistically significant (p-value > 0.05), suggesting that age might not play a significant role in predicting the total amount."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Gender"),": Both male and female coefficients are negative, with males contributing -104.99 and females contributing -116.16 to the total amount. These coefficients are statistically significant (p-value < 0.05), indicating that gender has an impact on the total amount."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Product Category"),": All categories have negative coefficients, with ",(0,r.yg)("strong",{parentName:"li"},"Clothing")," (-78.1433), ",(0,r.yg)("strong",{parentName:"li"},"Electronics")," (-70.2928), and ",(0,r.yg)("strong",{parentName:"li"},"Beauty")," (-72.7165) all being significant predictors.")),(0,r.yg)("p",null,"The ",(0,r.yg)("strong",{parentName:"p"},"R-squared value of 0.855")," indicates that 85.5% of the variance in ",(0,r.yg)("strong",{parentName:"p"},"Total Amount")," is explained by the model. This is a good fit, meaning the model explains a large portion of the data's variability.")),(0,r.yg)("h3",{id:"q2-how-do-we-interpret-the-regression-coefficients"},"Q2: How do we interpret the regression coefficients?"),(0,r.yg)("details",null,(0,r.yg)("summary",null,"\ud83d\udca1 View Answer"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Quantity (177.4215)"),": For each additional unit sold, the ",(0,r.yg)("strong",{parentName:"li"},"Total Amount")," increases by 177.42. This is a strong and significant positive effect."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Price per Unit (2.4941)"),": For every 1-unit increase in the price of a product, the ",(0,r.yg)("strong",{parentName:"li"},"Total Amount")," increases by 2.49. This indicates that higher-priced products generate more revenue."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Age (-0.7988)"),": Age has a small negative impact, but this coefficient is not statistically significant (p-value > 0.05), meaning age doesn\u2019t significantly influence the ",(0,r.yg)("strong",{parentName:"li"},"Total Amount"),"."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Gender_Male (-104.9903)"),": Being male results in a reduction of 104.99 in ",(0,r.yg)("strong",{parentName:"li"},"Total Amount")," compared to the baseline (which might be non-binary or another gender category)."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Gender_Female (-116.1623)"),": Similarly, being female results in a reduction of 116.16 in ",(0,r.yg)("strong",{parentName:"li"},"Total Amount"),"."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Product Categories (Clothing, Electronics, Beauty)"),": All have significant negative coefficients, meaning that when compared to a reference product category (likely another omitted one like Food or Household items), these categories result in a lower ",(0,r.yg)("strong",{parentName:"li"},"Total Amount"),".")),(0,r.yg)("p",null,"The ",(0,r.yg)("strong",{parentName:"p"},"negative coefficients")," for gender and product categories suggest that these groups spend less or purchase fewer high-ticket items compared to the reference groups.")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"q3-what-does-adjusted-r-squared-tell-us"},"Q3: What does Adjusted R-Squared tell us?"),(0,r.yg)("details",null,(0,r.yg)("summary",null,"\ud83d\udca1 View Answer"),(0,r.yg)("p",null,"The ",(0,r.yg)("strong",{parentName:"p"},"Adjusted R-Squared (0.854)")," takes into account the number of predictors in the model and adjusts for overfitting. It tells us that ",(0,r.yg)("strong",{parentName:"p"},"85.4%")," of the variance in ",(0,r.yg)("strong",{parentName:"p"},"Total Amount")," is explained by the independent variables (Quantity, Price per Unit, Age, Gender, Product Category), while also penalizing the addition of non-significant predictors."),(0,r.yg)("p",null,"This is a high Adjusted R-Squared value, indicating that the model fits the data well without being overly complex.")),(0,r.yg)("h3",{id:"q4-how-do-we-check-for-multicollinearity-in-this-dataset"},"Q4: How do we check for multicollinearity in this dataset?"),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Click to view VIF results"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Feature")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"VIF")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"const"),(0,r.yg)("td",{parentName:"tr",align:null},"0.000000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Quantity"),(0,r.yg)("td",{parentName:"tr",align:null},"1.002227")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Price per Unit"),(0,r.yg)("td",{parentName:"tr",align:null},"1.002204")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Age"),(0,r.yg)("td",{parentName:"tr",align:null},"1.004486")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Gender_Male"),(0,r.yg)("td",{parentName:"tr",align:null},"inf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Gender_Female"),(0,r.yg)("td",{parentName:"tr",align:null},"inf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Product_Category_Clothing"),(0,r.yg)("td",{parentName:"tr",align:null},"inf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Product_Category_Electronics"),(0,r.yg)("td",{parentName:"tr",align:null},"inf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Product_Category_Beauty"),(0,r.yg)("td",{parentName:"tr",align:null},"inf")))),(0,r.yg)("h4",{id:"key-interpretation"},"Key Interpretation:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Quantity, Price per Unit, Age:"),(0,r.yg)("br",{parentName:"p"}),"\n","VIF values close to 1 (1.002227, 1.002204, 1.004486), indicating no significant multicollinearity issues.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Gender and Product Category Variables:"),(0,r.yg)("br",{parentName:"p"}),"\n","The VIF values are infinite (",(0,r.yg)("inlineCode",{parentName:"p"},"inf"),"), which points to ",(0,r.yg)("strong",{parentName:"p"},"perfect multicollinearity"),'. This occurs because these variables are dummy-encoded categorical features, and you need to drop one category to avoid the "dummy variable trap."')))),(0,r.yg)("h2",{id:"solutions"},"Solutions"),(0,r.yg)("p",null,"You can find the solutions to these problems in the following GitHub repository:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/Data-Navigators/Statistical_Concept_Excercise/blob/main/exercise/exercise_5.ipynb"},"GitHub Link to Solutions")))}c.isMDXComponent=!0}}]);