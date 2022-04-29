"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[90781],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),h=i,f=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94101:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={title:"Create Git repository",sidebar_position:11,description:"Create Git repository",cover:"/img/architecture/shenyu-framework.png"},p=void 0,s={unversionedId:"create-repository",id:"create-repository",isDocsHomePage:!1,title:"Create Git repository",description:"Create Git repository",source:"@site/community/11-create-repository.md",sourceDirName:".",slug:"/create-repository",permalink:"/community/create-repository",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/11-create-repository.md",version:"current",lastUpdatedBy:"dragon-zhang",lastUpdatedAt:1651235977,formattedLastUpdatedAt:"4/29/2022",sidebarPosition:11,frontMatter:{title:"Create Git repository",sidebar_position:11,description:"Create Git repository",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"Community",permalink:"/community/community"},next:{title:"FAQ",permalink:"/community/faq"}},c=[{value:"Create Git repository",id:"create-git-repository",children:[]},{value:"Initialize the GitHub repository",id:"initialize-the-github-repository",children:[]}],u={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Only PPMC members have the permission to do the following operations.")),(0,o.kt)("h2",{id:"create-git-repository"},"Create Git repository"),(0,o.kt)("p",null,"Fill in the new repository information in ",(0,o.kt)("a",{parentName:"p",href:"https://gitbox.apache.org/setup/newrepo.html"},"GitBox")," ","[1]",". Take incubator-shenyu-helm-chart as an example."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitBox",src:r(19640).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PMC"),": choose shenyu"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Repository name"),": helm-chart (the suffix, not the full name)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Generated name"),": incubator-shenyu-helm-chart.git (full name automatically generated, no need to fill in)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Commit notification list")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"GitHub notification list"),": ",(0,o.kt)("a",{parentName:"li",href:"mailto:notifications@shenyu.apache.org"},"notifications@shenyu.apache.org"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," to complete the creation. The GitHub repository creation process will take about an hour.")),(0,o.kt)("h2",{id:"initialize-the-github-repository"},"Initialize the GitHub repository"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once the GitHub repository is created, follow the instructions on the page to complete your first commit."),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"LICENSE"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NOTICE")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," files."),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},".asf.yaml")," to custom repository configuration. A detailed description of .asf.yaml can be found ",(0,o.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features"},"here")," ","[2]",".")),(0,o.kt)("p",null,"helm-chart's .asf.yaml, with branch protection turned on, will need to be committed with PR for future code after push."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"github:\n  description: ShenYu is High-Performance Java API Gateway.\n  homepage: https://shenyu.apache.org/\n  labels:\n    - shenyu\n    - helm chart\n  features:\n    wiki: true\n    issues: true\n    projects: true\n  ghp_branch: main\n    ghp_path: /docs\n  enabled_merge_buttons:\n    squash: true\n    merge: false\n    rebase: false\n  protected_branches:\n    main:\n      required_status_checks:\n        strict: true\n      required_pull_request_reviews:\n        dismiss_stale_reviews: true\n        required_approving_review_count: 1\nnotifications:\n  commits: notifications@shenyu.apache.org\n  issues: notifications@shenyu.apache.org\n  pullrequests: notifications@shenyu.apache.org\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The content refers to")),(0,o.kt)("p",null,"[1]"," ",(0,o.kt)("a",{parentName:"p",href:"https://gitbox.apache.org/setup/newrepo.html"},"https://gitbox.apache.org/setup/newrepo.html")),(0,o.kt)("p",null,"[2]"," ",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features"},"https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features")))}m.isMDXComponent=!0},19640:function(e,t,r){t.Z=r.p+"assets/images/create_repo-5943e2a67d3d70100e5dd0a949772fc5.png"}}]);