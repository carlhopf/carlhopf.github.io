(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{2167:function(e,r,n){"use strict";var t=n(3848);r.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),l=n(4651),c=n(7426);var s={};function f(e,r,n,t){if(e&&a.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[r+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,o=l.useRouter(),d=i.default.useMemo((function(){var r=a.resolveHref(o,e.href,!0),n=t(r,2),i=n[0],l=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):l||i}}),[o,e.href,e.as]),u=d.href,h=d.as,p=e.children,v=e.replace,x=e.shallow,j=e.scroll,m=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var w=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,g=c.useIntersection({rootMargin:"200px"}),b=t(g,2),k=b[0],y=b[1],_=i.default.useCallback((function(e){k(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,k]);i.default.useEffect((function(){var e=y&&n&&a.isLocalURL(u),r="undefined"!==typeof m?m:o&&o.locale,t=s[u+"%"+h+(r?"%"+r:"")];e&&!t&&f(o,u,h,{locale:r})}),[h,u,y,m,n,o]);var E={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,i,l,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),r[o?"replace":"push"](n,t,{shallow:i,locale:c,scroll:l}))}(e,o,u,h,v,x,j,m)},onMouseEnter:function(e){a.isLocalURL(u)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),f(o,u,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var M="undefined"!==typeof m?m:o&&o.locale,L=o&&o.isLocaleDomain&&a.getDomainLocale(h,M,o&&o.locales,o&&o.domainLocales);E.href=L||a.addBasePath(a.addLocale(h,M,o&&o.defaultLocale))}return i.default.cloneElement(r,E)};r.default=d},7426:function(e,r,n){"use strict";var t=n(3848);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!a,c=o.useRef(),s=o.useState(!1),f=t(s,2),d=f[0],u=f[1],h=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=l.get(r);if(n)return n;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return l.set(r,n={id:r,observer:o,elements:t}),n}(n),o=t.id,i=t.observer,a=t.elements;return a.set(e,r),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&u(e)}),{rootMargin:r}))}),[n,r,d]);return o.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return u(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[h,d]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var l=new Map},5066:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return l}});n(1664);var t=n(9008),o=n(8258),i=n.n(o),a=n(5893);function l(){return(0,a.jsxs)("div",{className:i().container,children:[(0,a.jsx)(t.default,{children:(0,a.jsx)("title",{children:"Legal Notice"})}),(0,a.jsx)("h1",{children:"Legal Notice"}),(0,a.jsx)("h2",{id:"m46",children:"Provider"}),(0,a.jsx)("p",{children:"Carl Hopf"}),(0,a.jsx)("p",{children:"Birkenweg 6"}),(0,a.jsx)("p",{children:"01468 Moritzburg"}),(0,a.jsx)("p",{children:"GERMANY"}),(0,a.jsx)("h2",{id:"m56",children:"Contact Options"}),"E-Mail Address:"," ",(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"mailto:legalnotice@carlhopf.com",children:"legalnotice@carlhopf.com"})}),"Phone: ",(0,a.jsx)("p",{children:"017655759193"}),(0,a.jsx)("h2",{id:"m58",children:"Company Details"}),"VAT identification number:"," ",(0,a.jsx)("p",{children:"DE266311606"}),"Business area: ",(0,a.jsx)("p",{children:"Software"}),"Terms:"," ",(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://www.carlhopf.com/terms",target:"_blank",rel:"noreferrer",children:"https://www.carlhopf.com/terms"})}),(0,a.jsx)("h2",{id:"m168",children:"Professional regulations"})," Professional regulations:"," ",(0,a.jsx)("p",{children:"IHK Dresden"}),(0,a.jsx)("p",{children:"Langer Weg 4"}),(0,a.jsx)("p",{children:"01239 Dresden"}),(0,a.jsx)("p",{children:"Sachsen"}),(0,a.jsx)("p",{children:"Deutschland"}),(0,a.jsx)("p",{children:"Telefon: 0351/2802-0"}),(0,a.jsx)("p",{children:"Telefax: 0351/2802-280"}),(0,a.jsxs)("p",{children:["E-Mail:"," ",(0,a.jsx)("a",{href:"mailto:service@dresden.ihk.de",children:"service@dresden.ihk.de"})]}),(0,a.jsxs)("p",{children:["Webseite:"," ",(0,a.jsx)("a",{href:"http://www.dresden.ihk.de",target:"_blank",rel:"noreferrer",children:"http://www.dresden.ihk.de"})]}),(0,a.jsx)("h2",{id:"m172",children:"Social Media Accounts and other Online Profiles"}),"This legal notice also applies to the following social media accounts and online profiles:"," ",(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://playdrift.com",target:"_blank",rel:"noreferrer",children:"https://playdrift.com"})}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://www.facebook.com/DominoesPlayDrift",target:"_blank",rel:"noreferrer",children:"https://www.facebook.com/DominoesPlayDrift"})}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://www.facebook.com/MancalaPlayDrift",target:"_blank",rel:"noreferrer",children:"https://www.facebook.com/MancalaPlayDrift"})})]})}},2965:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/legalnotice",function(){return n(5066)}])},8258:function(e){e.exports={container:"impressum_container__3vG9X"}},9008:function(e,r,n){e.exports=n(639)},1664:function(e,r,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return r=2965,e(e.s=r);var r}));var r=e.O();_N_E=r}]);