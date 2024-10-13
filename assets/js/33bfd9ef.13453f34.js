"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[3817],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={},i=void 0,s={unversionedId:"Statistical-Concepts/ Decision-Trees-and -Random-Forests / Decision-Trees-and -Random-Forests",id:"Statistical-Concepts/ Decision-Trees-and -Random-Forests / Decision-Trees-and -Random-Forests",title:" Decision-Trees-and -Random-Forests",description:"---",source:"@site/docs/Statistical-Concepts/ Decision-Trees-and -Random-Forests / Decision-Trees-and -Random-Forests.mdx",sourceDirName:"Statistical-Concepts/ Decision-Trees-and -Random-Forests ",slug:"/Statistical-Concepts/ Decision-Trees-and -Random-Forests / Decision-Trees-and -Random-Forests",permalink:"/docs/Statistical-Concepts/ Decision-Trees-and -Random-Forests / Decision-Trees-and -Random-Forests",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Statistical-Concepts/ Decision-Trees-and -Random-Forests / Decision-Trees-and -Random-Forests.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logistic-Regression",permalink:"/docs/Statistical-Concepts/Logistic-Regression/"},next:{title:"Task",permalink:"/docs/Statistical-Concepts/Regression-Trees/"}},l={},c=[{value:"sidebar_position: 2",id:"sidebar_position-2",level:2},{value:"Decision Tree Model:",id:"decision-tree-model",level:3},{value:"Random Forest Model:",id:"random-forest-model",level:3},{value:"Feature Importance:",id:"feature-importance",level:3},{value:"Solutions",id:"solutions",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"sidebar_position-2"},"sidebar_position: 2"),(0,a.yg)("p",null,"Objective: Use decision trees or random forests to classify sales as highly profitable based on selected features."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Decision Tree Model Evaluation"),(0,a.yg)("h3",{id:"decision-tree-model"},"Decision Tree Model:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Accuracy: 1.0000\n[[ 90   0]\n [  0 110]]\n              precision    recall  f1-score   support\n\n           0       1.00      1.00      1.00        90\n           1       1.00      1.00      1.00       110\n\n    accuracy                           1.00       200\n   macro avg       1.00      1.00      1.00       200\nweighted avg       1.00      1.00      1.00       200\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Interpretation"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"accuracy"),", ",(0,a.yg)("strong",{parentName:"li"},"precision"),", ",(0,a.yg)("strong",{parentName:"li"},"recall"),", and ",(0,a.yg)("strong",{parentName:"li"},"f1-score")," all being 1.00 indicate that the decision tree model perfectly classified the sales data into highly profitable or not."),(0,a.yg)("li",{parentName:"ul"},"The confusion matrix also reflects perfect classification, with no misclassifications.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Caution"),": While this performance looks ideal, such perfect results suggest potential overfitting, which should be validated further using unseen data or cross-validation techniques.")),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Random Forest Model Evaluation"),(0,a.yg)("h3",{id:"random-forest-model"},"Random Forest Model:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Accuracy: 1.0000\n[[ 90   0]\n [  0 110]]\n              precision    recall  f1-score   support\n\n           0       1.00      1.00      1.00        90\n           1       1.00      1.00      1.00       110\n\n    accuracy                           1.00       200\n   macro avg       1.00      1.00      1.00       200\nweighted avg       1.00      1.00      1.00       200\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Interpretation"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Similar to the decision tree, the random forest model also achieved perfect metrics, suggesting flawless classification of profitable sales."),(0,a.yg)("li",{parentName:"ul"},"Again, the model may be overfitting and could be further validated with techniques such as cross-validation.")),(0,a.yg)("h3",{id:"feature-importance"},"Feature Importance:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Age: 0.0528\nQuantity: 0.1025\nPrice per Unit: 0.8312\nGender_Male: 0.0051\nProduct_Category_Clothing: 0.0027\nProduct_Category_Electronics: 0.0031\nProduct_Category_Beauty: 0.0026\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Interpretation"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Price per Unit (0.8312)")," is the most significant factor driving profitability, as it has the highest importance score."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Quantity (0.1025)")," also plays a role, although to a much lesser extent."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Age (0.0528)")," has a relatively minor impact, while the categorical variables like gender and product categories contribute very little."))),(0,a.yg)("h2",{id:"solutions"},"Solutions"),(0,a.yg)("p",null,"You can find the solutions to these problems in the following GitHub repository:"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/Data-Navigators/Statistical_Concept_Excercise/blob/main/exercise/excercise_7.ipynb"},"GitHub Link to Solutions")))}d.isMDXComponent=!0}}]);