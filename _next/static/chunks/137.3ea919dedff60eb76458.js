(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[137],{2167:function(e,n,t){"use strict";var r=t(3038),i=t(862);n.default=void 0;var o=i(t(7294)),u=t(9414),a=t(4651),c=t(7426),l={};function s(e,n,t,r){if(e&&(0,u.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(i?"%"+i:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,i=(0,a.useRouter)(),d=o.default.useMemo((function(){var n=(0,u.resolveHref)(i,e.href,!0),t=r(n,2),o=t[0],a=t[1];return{href:o,as:e.as?(0,u.resolveHref)(i,e.as):a||o}}),[i,e.href,e.as]),f=d.href,g=d.as,M=e.children,m=e.replace,h=e.shallow,j=e.scroll,p=e.locale;"string"===typeof M&&(M=o.default.createElement("a",null,M));var v=(n=o.Children.only(M))&&"object"===typeof n&&n.ref,x=(0,c.useIntersection)({rootMargin:"200px"}),I=r(x,2),N=I[0],L=I[1],T=o.default.useCallback((function(e){N(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,N]);(0,o.useEffect)((function(){var e=L&&t&&(0,u.isLocalURL)(f),n="undefined"!==typeof p?p:i&&i.locale,r=l[f+"%"+g+(n?"%"+n:"")];e&&!r&&s(i,f,g,{locale:n})}),[g,f,L,p,t,i]);var y={ref:T,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),n[i?"replace":"push"](t,r,{shallow:o,locale:c,scroll:a}))}(e,i,f,g,m,h,j,p)},onMouseEnter:function(e){(0,u.isLocalURL)(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(i,f,g,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var b="undefined"!==typeof p?p:i&&i.locale,A=i&&i.isLocaleDomain&&(0,u.getDomainLocale)(g,b,i&&i.locales,i&&i.domainLocales);y.href=A||(0,u.addBasePath)((0,u.addLocale)(g,b,i&&i.defaultLocale))}return o.default.cloneElement(n,y)};n.default=d},7426:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,c=(0,i.useRef)(),l=(0,i.useState)(!1),s=r(l,2),d=s[0],f=s[1],g=(0,i.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||d||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,u=r.elements;return u.set(e,n),o.observe(e),function(){u.delete(e),o.unobserve(e),0===u.size&&(o.disconnect(),a.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return(0,i.useEffect)((function(){if(!u&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[g,d]};var i=t(7294),o=t(3447),u="undefined"!==typeof IntersectionObserver;var a=new Map},6137:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(5893),i=(t(7294),t(2106)),o=t(2465),u=t(9163);function a(){var e=(0,o.Z)(["\n    display: grid;\n    grid-gap: 1rem;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-auto-rows: dense;\n    grid-auto-flow: dense;\n    padding: 1.5rem 0 .5rem 0;\n    width: 100%;\n"]);return a=function(){return e},e}function c(){var e=(0,o.Z)(["\n    color: var(--primary-text);\n    font-size: 1.8rem;\n    padding: .5rem 0;\n\n    @media "," {\n        font-size: 4.5rem;\n    }\n"]);return c=function(){return e},e}function l(){var e=(0,o.Z)(["\n    border: 1px solid ",";\n    margin: 0 0 .5rem 0;\n    width: 35%\n"]);return l=function(){return e},e}function s(){var e=(0,o.Z)(["\n    min-height: 30vh;\n    padding: 10vh 10vw;\n"]);return s=function(){return e},e}var d=u.default.div(s()),f=u.default.hr(l(),(function(e){return e.theme.colors.accent})),g=u.default.h2(c(),(function(e){return e.theme.breakpoints.xl})),M=u.default.div(a()),m=[{id:0,title:"Random number",subTitle:"Interactive",text:"Genera un numero aleatorio entre dos valores.",sourceLink:"https://github.com/VoidToInfinite/random-number",url:"https://github.com/VoidToInfinite",imgAlt:"Random number image preview"},{id:1,title:"Word Counter",subTitle:"Interactive",text:"Muestra el numero total de palabras escritas.",sourceLink:"https://github.com/VoidToInfinite/word-counter",url:"https://github.com/VoidToInfinite",imgAlt:"Word Counter image preview"},{id:2,title:"Age Calculator",subTitle:"Interactive",text:"Calcula cuanto tiempo ha transcurrido entre dos fechas.",sourceLink:"https://github.com/VoidToInfinite/age-calculator",url:"https://github.com/VoidToInfinite",imgAlt:"Age Calculator image preview"},{id:3,title:"BMI Calculator",subTitle:"Interactive",text:"Calcula si estas en un peso saludable.",sourceLink:"https://github.com/VoidToInfinite/bmi-calculator",url:"https://github.com/VoidToInfinite",imgAlt:"BMI Calculator image preview"}],h=t(1664);function j(){var e=(0,o.Z)(["\n    height: 35px;\n    width: 35px;\n    \n    & img {\n        height: 100%;\n        width: 100%;\n        object-fit: contain;\n        filter: invert(90%);\n    }\n"]);return j=function(){return e},e}function p(){var e=(0,o.Z)(["\n    color: ",";\n    font-size: .8rem;\n    font-weight: 100;\n    text-align: left;\n"]);return p=function(){return e},e}function v(){var e=(0,o.Z)(["\n    color: ",";\n    font-size: .8rem;\n    font-weight: 400;\n    margin: 0 0 .5rem 0;\n"]);return v=function(){return e},e}function x(){var e=(0,o.Z)(["\n    color: ",";\n    font-size: 1.4rem;\n    font-weight: 600;\n"]);return x=function(){return e},e}function I(){var e=(0,o.Z)(["\n    align-items: center;\n    display:flex;\n    justify-content: space-between;\n    width: 100%;\n    min-height: 4rem;\n    padding: 1rem;\n\n    & a {\n        color: ",";\n        text-decoration: underline;\n    }\n\n    & a:hover {\n        color: ",";\n        text-decoration: underline;\n    }\n"]);return I=function(){return e},e}function N(){var e=(0,o.Z)(["\n    min-height: 4rem;\n    padding: 1rem;\n\n"]);return N=function(){return e},e}function L(){var e=(0,o.Z)(["\n    min-height: 4rem;\n    padding: 1rem;\n\n"]);return L=function(){return e},e}function T(){var e=(0,o.Z)(["\n    padding: 1rem;\n"]);return T=function(){return e},e}function y(){var e=(0,o.Z)(["\n    display: none;\n    height: 200px;\n    width: 100%;\n\n    @media "," {\n        \n        display: inline-block;\n        position: relative;\n\n        & img {\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n            height: 100%;\n            object-fit: cover;\n            width: 100%;\n        }\n    }\n"]);return y=function(){return e},e}function b(){var e=(0,o.Z)(["\n    background: ",";\n    border: 1px solid ",";\n    border-radius: 12px;\n    height: auto;\n    min-width: 16rem;\n\n    &:hover {\n        box-shadow: 0 22px 40px rgba(0, 0, 0, 0.3);\n    }\n\n    &:first-child {\n        background: rgba(234, 0, 255, 0.37);\n    }\n    \n    &:last-child {\n        background: rgba(0, 183, 255, 0.2);\n    }\n\n    @media "," {\n        transition: transform 1s;\n\n        &:hover {\n            transform: translateY(-10px);\n        }\n    }\n"]);return b=function(){return e},e}var A=u.default.div(b(),(function(e){return e.theme.colors.background2}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.breakpoints.xl})),z=u.default.div(y(),(function(e){return e.theme.breakpoints.xl})),D=u.default.div(T()),C=u.default.div(L()),w=u.default.div(N()),k=u.default.div(I(),(function(e){return e.theme.colors.secundaryText}),(function(e){return e.theme.colors.accent1})),Y=u.default.h3(x(),(function(e){return e.theme.colors.primaryText})),O=u.default.p(v(),(function(e){return e.theme.colors.tertiaryText})),E=u.default.p(p(),(function(e){return e.theme.colors.secundaryText})),Q=u.default.div(j()),Z=t(2281),S=function(e){var n=e.img,t=e.imgAlt,o=e.title,u=e.subTitle,a=e.text,c=e.url,l=e.sourceUrl;return(0,r.jsxs)(A,{children:[(0,r.jsx)(z,{children:(0,r.jsx)("img",{src:n,alt:t,title:o})}),(0,r.jsxs)(D,{children:[(0,r.jsxs)(C,{children:[(0,r.jsx)(O,{children:u}),(0,r.jsx)(Y,{children:o})]}),(0,r.jsx)(w,{children:(0,r.jsx)(E,{children:a})}),(0,r.jsxs)(k,{children:[(0,r.jsx)(h.default,{href:c,passHref:!0,children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(i.Z,{id:"cardShowMore",defaultMessage:"Show more"})})}),(0,r.jsx)(Q,{children:(0,r.jsx)(h.default,{href:l,passHref:!0,children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{src:Z,alt:"Github image",title:"Source Code"})})})})]})]})]})};S.defaultProps={img:"",imgAlt:"",title:"",subTitle:"",text:"",visit:"",sourceLink:""};var U=S,_=[t(3166),t(3613),t(5312),t(9714)],R=function(){return(0,r.jsxs)(d,{id:"projects",children:[(0,r.jsx)(g,{children:(0,r.jsx)(i.Z,{id:"projectsTitle",defaultMessage:"Projects"})}),(0,r.jsx)(f,{}),(0,r.jsx)(M,{children:m.map((function(e,n){return(0,r.jsx)(U,{img:_[n],imgAlt:e.imgAlt,title:e.title,subTitle:e.subTitle,text:e.text,url:e.url,sourceUrl:e.sourceLink},"card"+n)}))})]})}},1664:function(e,n,t){e.exports=t(2167)},2106:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5719),i=t(7294),o=t(4806),u=t(680);function a(e){var n=function(){var e=i.useContext(o._y);return(0,u.lq)(e),e}(),t=n.formatMessage,r=n.textComponent,a=void 0===r?i.Fragment:r,c=e.id,l=e.description,s=e.defaultMessage,d=e.values,f=e.children,g=e.tagName,M=void 0===g?a:g,m=t({id:c,description:l,defaultMessage:s},d,{ignoreTag:e.ignoreTag});return Array.isArray(m)||(m=[m]),"function"===typeof f?f(m):M?i.createElement(M,null,i.Children.toArray(m)):i.createElement(i.Fragment,null,m)}a.displayName="FormattedMessage";var c=i.memo(a,(function(e,n){var t=e.values,i=(0,r._T)(e,["values"]),o=n.values,a=(0,r._T)(n,["values"]);return(0,u.wU)(o,t)&&(0,u.wU)(i,a)}));c.displayName="MemoizedFormattedMessage";var l=c},2281:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMjU1Ljk2OCA1LjMyOUMxMTQuNjI0IDUuMzI5IDAgMTIwLjQwMSAwIDI2Mi4zNTNjMCAxMTMuNTM2IDczLjM0NCAyMDkuODU2IDE3NS4xMDQgMjQzLjg3MiAxMi44IDIuMzY4IDE3LjQ3Mi01LjU2OCAxNy40NzItMTIuMzg0IDAtNi4xMTItLjIyNC0yMi4yNzItLjM1Mi00My43MTItNzEuMiAxNS41Mi04Ni4yNC0zNC40NjQtODYuMjQtMzQuNDY0LTExLjYxNi0yOS42OTYtMjguNDE2LTM3LjYtMjguNDE2LTM3LjYtMjMuMjY0LTE1LjkzNiAxLjcyOC0xNS42MTYgMS43MjgtMTUuNjE2IDI1LjY5NiAxLjgyNCAzOS4yIDI2LjQ5NiAzOS4yIDI2LjQ5NiAyMi44NDggMzkuMjY0IDU5LjkzNiAyNy45MzYgNzQuNTI4IDIxLjM0NCAyLjMwNC0xNi42MDggOC45MjgtMjcuOTM2IDE2LjI1Ni0zNC4zNjgtNTYuODMyLTYuNDk2LTExNi42MDgtMjguNTQ0LTExNi42MDgtMTI3LjAwOCAwLTI4LjA2NCA5Ljk4NC01MS4wMDggMjYuMzY4LTY4Ljk5Mi0yLjY1Ni02LjQ5Ni0xMS40MjQtMzIuNjQgMi40OTYtNjggMCAwIDIxLjUwNC02LjkxMiA3MC40IDI2LjMzNiAyMC40MTYtNS42OTYgNDIuMzA0LTguNTQ0IDY0LjA5Ni04LjY0IDIxLjcyOC4xMjggNDMuNjQ4IDIuOTQ0IDY0LjA5NiA4LjY3MiA0OC44NjQtMzMuMjQ4IDcwLjMzNi0yNi4zMzYgNzAuMzM2LTI2LjMzNiAxMy45NTIgMzUuMzkyIDUuMTg0IDYxLjUwNCAyLjU2IDY4IDE2LjQxNiAxNy45ODQgMjYuMzA0IDQwLjkyOCAyNi4zMDQgNjguOTkyIDAgOTguNzItNTkuODQgMTIwLjQ0OC0xMTYuODY0IDEyNi44MTYgOS4xODQgNy45MzYgMTcuMzc2IDIzLjYxNiAxNy4zNzYgNDcuNTg0IDAgMzQuMzY4LS4zMiA2Mi4wOC0uMzIgNzAuNDk2IDAgNi44OCA0LjYwOCAxNC44OCAxNy42IDEyLjM1MkM0MzguNzIgNDcyLjE0NSA1MTIgMzc1Ljg1NyA1MTIgMjYyLjM1MyA1MTIgMTIwLjQwMSAzOTcuMzc2IDUuMzI5IDI1NS45NjggNS4zMjl6Ii8+PC9zdmc+"},3166:function(e){e.exports="/_next/static/images/card1-6649a3f44185a79eac702ec83f7383da.svg"},3613:function(e){e.exports="/_next/static/images/card2-2911d3771472a77408022e35e38f5986.svg"},5312:function(e){e.exports="/_next/static/images/card3-86b5c315abf7c820c281b47607e57560.svg"},9714:function(e){e.exports="/_next/static/images/card4-b9cfd4e6949f359b28c4c442e75fdb55.svg"}}]);