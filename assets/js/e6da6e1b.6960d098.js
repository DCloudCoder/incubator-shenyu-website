"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2967],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91764:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Code Suggestions",sidebar_position:1,description:"Apache ShenYu Coding Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Code Suggestions"],date:new Date("2019-09-22T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},p=void 0,u={unversionedId:"code-suggestions",id:"code-suggestions",isDocsHomePage:!1,title:"Code Suggestions",description:"Apache ShenYu Coding Guide",source:"@site/community/1-code-suggestions.md",sourceDirName:".",slug:"/code-suggestions",permalink:"/community/code-suggestions",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/1-code-suggestions.md",version:"current",lastUpdatedBy:"renzhuyan",lastUpdatedAt:1655524859,formattedLastUpdatedAt:"6/18/2022",sidebarPosition:1,frontMatter:{title:"Code Suggestions",sidebar_position:1,description:"Apache ShenYu Coding Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Code Suggestions"],date:"2019-09-22T00:00:00.000Z",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"Team",permalink:"/community/team"},next:{title:"Issue And Pull Request",permalink:"/community/issue-pr"}},m=[{value:"General",id:"general",children:[]},{value:"Object",id:"object",children:[]},{value:"Collection",id:"collection",children:[{value:"List",id:"list",children:[]},{value:"Map",id:"map",children:[]}]},{value:"String",id:"string",children:[]},{value:"Exception",id:"exception",children:[]},{value:"Resource",id:"resource",children:[]},{value:"Several methods to judge and handle Null",id:"several-methods-to-judge-and-handle-null",children:[]}],s={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"general"},"General"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use as many ",(0,l.kt)("inlineCode",{parentName:"p"},"lambda function")," expressions as possible.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Method parameters must be modified with ",(0,l.kt)("inlineCode",{parentName:"p"},"final"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Constants modified ",(0,l.kt)("inlineCode",{parentName:"p"},"static final")," must be named in upper case.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Methods should not have too many parameters.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Clear unused classes and methods.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use linux line separators.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tab size is 4 and keep indents on empty lines.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"All code passage of Checkstyle: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/script/shenyu_checkstyle.xml"},"https://github.com/apache/incubator-shenyu/blob/master/script/shenyu_checkstyle.xml"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When adding a new file, you need to add the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu-website/blob/57f9a6b14c27d97137275453b207232f3df53205/LICENSE#L191-L201"},"apache protocol")," in the header of the file."))),(0,l.kt)("h2",{id:"object"},"Object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use Optional transform Null.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Optional.ofNullable(xxx).orElse(obj)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use Objects Judgment Null Or NotNull.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Objects.isNull(obj) OR Objects.nonNull(obj)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"Objects.equals")," Judgment are they equal.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Objects.equals(obj1, obj2)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Creater objects outside of a for loop.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Object object = null;\nfor () {\n    object = new Object();\n}\n")),(0,l.kt)("h2",{id:"collection"},"Collection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"must indicate initial capacity to avoid recalculate capacity.")),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"LinkedList")," when you need to add or delete elements, Else use ",(0,l.kt)("inlineCode",{parentName:"p"},"ArrayList"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.commons.collections4.CollectionUtils")," Judgment Is empty Or Not empty."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"CollectionUtils.isEmpty(list) or CollectionUtils.isNotEmpty(data)")),(0,l.kt)("h3",{id:"map"},"Map"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"ConcurrenHashMap")," when considering concurrency of threads, Else use ",(0,l.kt)("inlineCode",{parentName:"p"},"HashMap"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Iterate over map using the most efficient way Or use ",(0,l.kt)("inlineCode",{parentName:"p"},"lambda function"),"."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Set<Map.Entry<String, String>> entrySet = map.entrySet();\nIterator<Map.Entry<String, String>> iter = entrySet.iterator();\nwhile (iter.hasNext()) {\n        Map.Entry<String, String> entry = iter.next();\n      \n}\n")),(0,l.kt)("h2",{id:"string"},"String"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"org.apache.commons.lang3.StringUtils")," Judgment Is empty Or Not empty.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"StringUtils.isEmpty(list) or StringUtils.isNotEmpty(data)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"String.join")," should be used when string concatenation occurs.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"String join(CharSequence delimiter, CharSequence... elements)")),(0,l.kt)("h2",{id:"exception"},"Exception"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Do not use try...catch in a loop, it should be on the outermost layer.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"try {\n  for () {\n  }\n} catch () {\n  \n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Do not use ",(0,l.kt)("inlineCode",{parentName:"p"},"printStackTrace()"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Please use custom exceptions or ",(0,l.kt)("inlineCode",{parentName:"p"},"ShenyuException"),"."))),(0,l.kt)("h2",{id:"resource"},"Resource"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Please use ",(0,l.kt)("inlineCode",{parentName:"li"},"try with resource")," to close resource.")),(0,l.kt)("h2",{id:"several-methods-to-judge-and-handle-null"},"Several methods to judge and handle Null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Judge self if Null or not, and also need to transform self, below are some representative examples:",(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"result.setXXX(null == a ? b.getXXX() : b.getXXX(a));"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional.ofNullable(a).map(b::getXXX).orElse(b.getXXX());"),(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"return null == a ? b.newC() : b.newC(a.getD(), a.getE());"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a).map(e -> b.newC(e.getD(),e.getE())).orElse(b.newC());"),(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"return null == a.getB() ? null : a.getB().getC();"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a.getB()).map(C::getD).orElse(null);"),(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"return null == a ? new B() : C.newD(a);"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a).map(B::newC).orElse(new D());"),"  ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Directly compare current object with Null, below are some representative examples:",(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"public void xxx\uff08Object o\uff09{if(null == o){retrun;}}"),(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"public boolean wasNull() {return null == currentRow;}"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation \uff1aUse JDK8's Objects.isNull method.    ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Judge self if Null or not, and also need to return self related ternary operator, below are some representative examples:",(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"this.a = null == a ? new B().newC() : a;"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional.ofNullable(a).orElse(new B().newC());"),(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"a = null == a ? b.getC().getD() : a;"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},"a  = Optional.ofNullable(a).orElse(b.getC().getD());"),(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"return null == a.getB() ? c : a.getB();"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a.getB()).orElse(c);"),(0,l.kt)("br",{parentName:"p"}),"\n","current :"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'BigDecimal c;\nBigDecimal s;\nif (null == c) {\n  c = new BigDecimal("0");\n}\nif (null == s) {\n  s = new BigDecimal("0");\n}\n')),(0,l.kt)("p",{parentName:"li"},"recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},'c = Optional.ofNullable(c).orElse(new BigDecimal("0")); s = Optional.ofNullable(s).orElse(new BigDecimal("0"));'),(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"return null == results.get(0) ? 0 : results.get(0);"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(results.get(0)).orElse(0);"),(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"return null == getA().getB() ? Collections.emptyList() : Collections.singletonList(getA().getB());"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(getA().getB()).map(Collections::singletonList).orElse(Collections.emptyList());"),"  ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Judge self if Null or not, and also need to return self independent ternary operator, below are some representative examples:",(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"A a = null == b ? cMap.values().iterator().next() : cMap.get(d);"),(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"return null == a ? new B() : new B(c);"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : No modification.",(0,l.kt)("br",{parentName:"p"}),"\n","")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Judge collection is null or not, below are some representative examples:",(0,l.kt)("br",{parentName:"p"}),"\n","current :  "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"private boolean isEmpty(final List<String> xxx) {\n    return null == xxx || xxx.isEmpty();\n}\n")),(0,l.kt)("p",{parentName:"li"},"recommendation : Add a collection tool class to make unified judgment.",(0,l.kt)("br",{parentName:"p"}),"\n","")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Judge Map's value is Null or not, below are some representative examples:",(0,l.kt)("br",{parentName:"p"}),"\n","current :  "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"public Collection<String> getA(final String b) {\n   Collection<String> result = cMap.get(b);\n   if (null == result) {\n      result = Collections.emptySet();\n   }\n   return result;\n}\n")),(0,l.kt)("p",{parentName:"li"},"recommendation : Use Map.getOrDefault() method.   "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"public Collection<String> getA(final String b) {\n  return cMap.getOrDefault(b, Collections.emptySet());\n}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Judge is Null or not, if yes throw exception, else execute next step, below are some representative examples:",(0,l.kt)("br",{parentName:"p"}),"\n","current :"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'private Collection<String> doXxx(final Collection<String> a, final Object<?> b) {\n  if (null == c) {\n     throw new Exception("XXX");\n  }\n  return c.doXxx(a,new Object(b.getXXX(), b.getXXX(), b.getXXX()));\n}\n')),(0,l.kt)("p",{parentName:"li"},"recommendation :"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'private Collection<String> doXxx(final Collection<String> a, final Object<?> b) {\n     return Optional.ofNullable(c).map(e -> e.doXxx(a,\n            new Object(b.getXXX(), b.getXXX(), b.getXXX())))\n           .orElseThrow(()-> new Exception("XXX"));\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Judge is Null or not, and return Optional wrapped object, below are some representative examples:",(0,l.kt)("br",{parentName:"p"}),"\n","current : ",(0,l.kt)("inlineCode",{parentName:"p"},"return null == a ? Optional.empty() : Optional.ofNullable(a.getXXX());"),(0,l.kt)("br",{parentName:"p"}),"\n","recommendation : ",(0,l.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a).map(e -> e.getXXX());")))))}c.isMDXComponent=!0}}]);