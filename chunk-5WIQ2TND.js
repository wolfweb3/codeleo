import"./chunk-PDCK4MUG.js";import"./chunk-7HRO4WNF.js";import"./chunk-VYWRN3GC.js";import"./chunk-KK76XLYN.js";import"./chunk-RI24VZ65.js";import"./chunk-JWFHHXRU.js";import"./chunk-UHIFKL44.js";import{C as a,M as p,t as c,w as m}from"./chunk-IKMC7PPW.js";import"./chunk-IV5FR2YO.js";import"./chunk-4FMV5RU2.js";import"./chunk-HD5BCXQI.js";import"./chunk-HZ55OLAU.js";import"./chunk-KDUPE7AR.js";import"./chunk-QBRYSDNA.js";import"./chunk-XXV46XCU.js";var w=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var l=arguments.length,t=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var f=o.length-1;f>=0;f--)(n=o[f])&&(t=(l<3?n(t):l>3?n(e,i,t):n(e,i))||t);return l>3&&t&&Object.defineProperty(e,i,t),t},s=class extends a{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=w;s=u([p("w3m-transactions-view")],s);export{s as W3mTransactionsView};
