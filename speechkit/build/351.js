"use strict";(self.webpackChunkbeyondwords_wordpress_plugin=self.webpackChunkbeyondwords_wordpress_plugin||[]).push([[351],{2535:function(e,r,o){o.d(r,{S:function(){return s},a:function(){return g},b:function(){return f},c:function(){return d},d:function(){return k},g:function(){return b},m:function(){return h}});var t=o(5756),n=o(845);const s="__STORE__";function i(e,r){if(e===r)return!0;if("object"!=typeof e||!e||"object"!=typeof r||!r)return!1;const o=Object.keys(e),t=Object.keys(r);if(o.length!==t.length)return!1;var n=Object.prototype.hasOwnProperty.bind(r);for(let t=0;t<o.length;t++){var s=o[t];if(!n(s))return!1;if(e[s]!==r[s])return!1}return!0}function l(e,r){return r===e}function u(e,r,o){return{...o,...e,...r}}function a(){return!1}const c=e=>({state:e}),p=e=>({dispatch:e}),d=(e,r,o=u,{store:n,areStatesEqual:s=l,areOwnPropsEqual:d=i,areStatePropsEqual:h=i,areMergedPropsEqual:b=(o===u?a:i)}={})=>i=>{const l=((e=c)=>e)(e),u=((e=p)=>{if(function(e){return"object"==typeof e&&!!e}(e)){const r=Object.entries(e);return e=>r.reduce(((r,[o,t])=>({...r,[o]:(...r)=>e(t(...r))})),{})}return e})(r),a=Boolean(e),f=2===(l||[]).length,k=2===(u||[]).length;return function(e){const r=n||(0,t.ad)("__STORE__");if(!r)return void console.warn("redux-svelte-connect: ","Cannot access the store. Use the <Provider> component or pass the store as an option to the connect function");const{getState:c,dispatch:p,subscribe:g}=r,{props:S}=e;let y=S,C=c(),m=l(C,y),w=u(p,y),_=o(m,w,y);const v=new i({...e,props:_}),$=v.$set.bind(v);if(v.$set=function(e){const r={...y,...e},o=!d(r,y);y=r,o&&(f&&(m=l(c(),y)),k&&(w=u(p,y)),T())},a){const e=g((function(){const e=c(),r=!s(e,C);if(C=e,!r)return;const o=l(C,y),t=!h(o,m);m=o,t&&T()}));v.$$.on_destroy.push(e)}function T(){const e=o(m,w,y),r=!b(e,_);_=e,r&&$(_)}return v}},h=(0,n.Z)((e=>"x"+String(e).replace(".","_"))),b=(0,n.Z)((({useDarkModeScheme:e,publisherColor:r,publisherDmColor:o})=>(0,t.l)(e,o,r))),f=(0,n.Z)((({useDarkModeScheme:e,publisherTextColor:r,publisherDmTextColor:o})=>(0,t.l)(e,o,r))),k=(0,n.Z)((({useDarkModeScheme:e,publisherBgColor:r,publisherDmBgColor:o})=>(0,t.l)(e,o,r))),g=(0,n.Z)(((e,r=t.j)=>{const{isReady:o,publisherColor:n,publisherTextColor:s,publisherBgColor:i}=e,l=(0,t.ae)((0,t.af)()&&"transparent"===i?(0,t.ag)((0,t.a6)(e.renderNode)):i);return t.ah`
    color: ${n};
    ${(0,t.l)(o,"","display: none;")}
    --sk-text-color: ${s};
    --sk-link-color: var(--sk-color_silver);
    --sk-link-color--hover: var(${(0,t.l)(l>=.5,"--sk-color_black","--sk-color_white")});
    ${r(e)}
  `}))},4351:function(e,r,o){o.r(r);var t=o(5756),n=(o(1978),o(2535));const s=({publisherBgColor:e})=>`\n  --sk-playlist-items-bg-color: ${e};\n  background-color: ${e};\n`;var i=(0,n.c)((e=>{const r=(0,t.z)(e),{language:o,mediaTypeCurrently:i,useDarkModeScheme:l,hideSpktLink:u,isReady:a,isAmp:c,customLocales:p,podcasts:d,trackIndex:h,publisher:b,hideMinutes:f,isJfm:k,publisherLogo:g,visibleItems:S,withoutScroll:y,renderNode:C,withDownloadButton:m}=r,{isPlay:w,playbackRate:_}=(0,t.A)(e),v=(0,t.B)(e),{isPresenting:$}=(0,t.C)(e),{duration:T,currentTime:D}=v,x=(0,t.F)(o,p),P=(0,t.G)(D<T?T-D:0,0),B=`${(0,t.H)(D)} / ${(0,t.H)(T)}`,M=(0,t.D)(i),O=(0,t.l)(M&&$)(`${x(t.T.adsNote_v2)} ${(0,t.H)(P,{onlySeconds:!0})}`,B),R=_,j=(0,n.g)(r),L=(0,n.b)(r),E=(0,n.d)(r);return{t:x,isAmp:c,rootStyle:(0,n.a)({isReady:a,publisherColor:j,publisherTextColor:L,publisherBgColor:E,useDarkModeScheme:l,renderNode:C},s),isPlay:w,isAdsCurrently:M,speedRate:R,duration:T,formattedDuration:O,progressState:v,hideSpktLink:u,hideMinutes:f,podcasts:d,trackIndex:h,publisherColor:j,publisherTextColor:L,publisherBgColor:E,publisher:b,formatDate:e=>(0,t.b0)(e,o),publisherLogo:g,isJfm:k,visibleItems:S,withoutScroll:y,isAllowedDownload:(0,t.a$)(m),downloadWithIcon:(0,t.n)(k)}}),(0,t.K)({play:t.L,pause:t.M,setTrackIndex:t.b1,setCurrentTimeSafe:t.U,setSpeedRate:t.O,adLinkClick:t.P,skipPrevTrack:t.b2,skipNextTrack:t.b3,rewindSeekSafe:t.Q,forwardSeekSafe:t.R}));r.default=i}}]);