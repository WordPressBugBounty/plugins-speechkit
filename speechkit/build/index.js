(()=>{var e={455:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>b});var r=o(723),s=o(427),n=o(656),d=o(87),i=o(278),a=o(841),c=o(808),l=o(57),p=o(357),u=o(13),_=o(186),y=o(686),w=o(790);class b extends d.Component{render(){return(0,w.jsxs)(n.PluginDocumentSettingPanel,{name:"beyondwords-document-settings-panel",title:(0,r.__)("BeyondWords","speechkit"),className:"beyondwords-sidebar",children:[(0,w.jsx)(a.default,{wrapper:s.PanelRow}),(0,w.jsx)(i.default,{wrapper:s.PanelRow}),(0,w.jsx)(l.default,{wrapper:s.PanelRow}),(0,w.jsx)(p.default,{wrapper:s.PanelRow}),(0,w.jsx)(y.A,{wrapper:s.PanelRow}),(0,w.jsx)(_.A,{wrapper:s.PanelRow}),(0,w.jsx)(u.A,{wrapper:s.PanelRow}),(0,w.jsx)(c.default,{wrapper:s.PanelRow})]})}}},320:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>_});var r=o(723),s=o(427),n=o(656),d=o(87),i=o(278),a=o(841),c=o(186),l=o(686),p=o(13),u=o(790);class _ extends d.Component{render(){return(0,u.jsxs)(n.PluginPrePublishPanel,{name:"beyondwords-prepublish-panel",title:(0,r.__)("BeyondWords","speechkit"),initialOpen:!0,className:"beyondwords-sidebar",children:[(0,u.jsx)(a.default,{wrapper:s.PanelRow}),(0,u.jsx)(l.A,{wrapper:s.PanelRow}),(0,u.jsx)(c.A,{wrapper:s.PanelRow}),(0,u.jsx)(p.A,{wrapper:s.PanelRow}),(0,u.jsx)(i.default,{wrapper:s.PanelRow})]})}}},165:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>m});var r=o(723),s=o(656),n=o(87),d=o(940),i=o(62),a=o(427),c=o(365),l=o(278),p=o(841),u=o(57),_=o(357),y=o(186),w=o(686),b=o(13),g=o(790);const h=function(){return(0,g.jsxs)(a.PanelBody,{title:(0,r.__)("Player","speechkit"),opened:!0,className:"beyondwords beyondwords-sidebar__status",children:[(0,g.jsx)(p.default,{wrapper:a.PanelRow}),(0,g.jsx)(u.default,{wrapper:a.PanelRow}),(0,g.jsx)(_.default,{wrapper:a.PanelRow}),(0,g.jsx)(c.default,{wrapper:a.PanelRow}),(0,g.jsx)(w.A,{wrapper:a.PanelRow}),(0,g.jsx)(y.A,{wrapper:a.PanelRow}),(0,g.jsx)(b.A,{wrapper:a.PanelRow}),(0,g.jsx)(l.default,{wrapper:a.PanelRow})]})};class m extends n.Component{render(){return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(s.PluginSidebarMoreMenuItem,{target:"plugin-sidebar",children:(0,r.__)("BeyondWords","speechkit")}),(0,g.jsxs)(s.PluginSidebar,{name:"plugin-sidebar",title:(0,r.__)("BeyondWords","speechkit"),children:[(0,g.jsx)(h,{}),(0,g.jsx)(d.default,{}),(0,g.jsx)(i.default,{})]})]})}}},387:(e,t,o)=>{"use strict";const r=window.wp.blocks;var s=o(715),n=o(790);(0,r.registerBlockType)("beyondwords/player",{edit(){const e=(0,s.useBlockProps)({contentEditable:!1});return(0,n.jsxs)("div",{...e,children:[(0,n.jsx)(s.BlockControls,{}),(0,n.jsx)("div",{"data-beyondwords-player":"true",contentEditable:"false"})]})},save(){const e=s.useBlockProps.save({contentEditable:!1});return(0,n.jsx)("div",{...e,children:(0,n.jsx)("div",{"data-beyondwords-player":"true",contentEditable:"false"})})}})},426:(e,t,o)=>{"use strict";o.r(t);var r=o(619),s=o(476);(0,r.addFilter)("blocks.registerBlockType","beyondwords/beyondwords-block-attributes",(function(e){return{...e,attributes:{...e.attributes,beyondwordsAudio:{type:"boolean",default:!0},beyondwordsMarker:{type:"string",default:""}}}})),(0,r.addFilter)("blocks.getBlockAttributes","beyondwords/set-marker-attribute",(function(e){const t=(0,s.A)(e);return{...e,beyondwordsMarker:t}}))},847:(e,t,o)=>{"use strict";var r=o(723),s=o(715),n=o(427),d=o(491),i=o(87),a=o(619),c=o(476),l=o(143),p=o(582);const u=(0,d.compose)([(0,l.withSelect)((e=>{const{getCurrentPostType:t}=e("core/editor"),o=t();return{supportsCustomFieldsAction:!!e(p.store).getPostType(o)?.supports?.["custom-fields"]}}))])((function({supportsCustomFieldsAction:e,children:t}){return e?t:null}));var _=o(790);const y=(0,d.createHigherOrderComponent)((e=>t=>{const{attributes:o,setAttributes:d}=t;(0,i.useEffect)((()=>{d({beyondwordsMarker:(0,c.A)(o)})}),[]);const{beyondwordsAudio:a,beyondwordsMarker:l}=o,p=a?"controls-volumeon":"controls-volumeoff",y=a?(0,r.__)("Disable audio processing","speechkit"):(0,r.__)("Enable audio processing","speechkit"),w=a?(0,r.__)("Audio processing enabled","speechkit"):(0,r.__)("Audio processing disabled","speechkit"),b=()=>d({beyondwordsAudio:!a});return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(e,{...t}),(0,_.jsxs)(u,{children:[(0,_.jsx)(s.InspectorControls,{children:(0,_.jsxs)(n.PanelBody,{icon:"controls-volumeon",title:(0,r.__)("BeyondWords","speechkit"),initialOpen:!0,children:[(0,_.jsx)(n.PanelRow,{children:(0,_.jsx)(n.ToggleControl,{label:w,checked:!!a,onChange:b,__nextHasNoMarginBottom:!0})}),!!a&&(0,_.jsx)(n.PanelRow,{children:(0,_.jsx)(n.TextControl,{label:(0,r.__)("Segment marker","speechkit"),value:l,disabled:!0,readOnly:!0,__nextHasNoMarginBottom:!0})})]})}),(0,_.jsx)(s.BlockControls,{children:(0,_.jsx)(n.ToolbarGroup,{children:(0,_.jsx)(n.ToolbarButton,{icon:p,label:y,className:"components-toolbar__control",onClick:b})})})]})]})}),"withBeyondwordsBlockControls");(0,a.addFilter)("editor.BlockEdit","beyondwords/block-controls",y)},476:(e,t,o)=>{"use strict";o.d(t,{A:()=>c});var r=o(143);const s={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let n;const d=new Uint8Array(16),i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));const a=function(e,t,o){if(s.randomUUID&&!t&&!e)return s.randomUUID();const r=(e=e||{}).random??e.rng?.()??function(){if(!n){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");n=crypto.getRandomValues.bind(crypto)}return n(d)}();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){if((o=o||0)<0||o+16>t.length)throw new RangeError(`UUID byte range ${o}:${o+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[o+e]=r[e];return t}return function(e,t=0){return(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase()}(r)},c=e=>{const{beyondwordsMarker:t}=e;return t?function(e,t){if(!Array.isArray(e))return 0;for(var o=0,r=0;r<e.length;r++)e[r]===t&&o++;return o}((0,r.select)("core/block-editor").getBlocks().map((e=>e?.attributes?.beyondwordsMarker)).filter((e=>e)),t)>1?a():t:a()}},396:(e,t,o)=>{o(426),o(847)},365:(e,t,o)=>{"use strict";o.r(t),o.d(t,{DisplayPlayer:()=>l,default:()=>p});var r=o(723),s=o(427),n=o(582),d=o(143),i=o(87);const a=(0,o(491).compose)([(0,d.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),o=t("meta").beyondwords_content_id,r=t("meta").beyondwords_podcast_id,s=t("meta").speechkit_podcast_id;return{hasDisplayPlayerAction:!!o||!!r||!!s}}))])((function({hasDisplayPlayerAction:e,children:t}){return e?t:null}));var c=o(790);function l({wrapper:e}){const t=e||i.Fragment,o=(0,d.useSelect)((e=>e("core/editor").getCurrentPostType()),[]),[l,p]=(0,n.useEntityProp)("postType",o,"meta"),u="1"!==l.beyondwords_disabled;return(0,c.jsx)(a,{children:(0,c.jsx)(t,{children:(0,c.jsx)(s.CheckboxControl,{className:"beyondwords--display-player",label:(0,r.__)("Display player","speechkit"),checked:u,onChange:()=>{var e;e=!u,p({...l,beyondwords_disabled:e?"":"1"})},__nextHasNoMarginBottom:!0})})})}const p=l},278:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ErrorNotice:()=>a,default:()=>c});var r=o(491),s=o(143),n=o(87);const d=(0,r.compose)([(0,s.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),o=t("meta").beyondwords_error_message,r=t("meta").speechkit_error_message;return{hasErrorNoticeAction:!!o||!!r}}))])((function({hasErrorNoticeAction:e,children:t}){return e?t:null}));var i=o(790);function a({errorMessage:e,wrapper:t}){const o=t||n.Fragment;return(0,i.jsx)(d,{children:(0,i.jsx)(o,{children:(0,i.jsx)("div",{children:(0,i.jsx)("span",{className:["beyondwords-sidebar__post-status-description","beyondwords-sidebar__post-status-description--error"].join(" "),children:e})})})})}const c=(0,r.compose)([(0,s.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),o=t("meta").beyondwords_error_message,r=t("meta").speechkit_error_message;return{errorMessage:o||r}}))])(a)},841:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GenerateAudio:()=>l,default:()=>p});var r=o(723),s=o(427),n=o(491),d=o(143),i=o(87);const a=(0,n.compose)([(0,d.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),o=t("meta").beyondwords_content_id,r=t("meta").beyondwords_podcast_id,s=t("meta").speechkit_podcast_id;return{hasGenerateAudioAction:!o&&!r&&!s}}))])((function({hasGenerateAudioAction:e,children:t}){return e?t:null}));var c=o(790);function l({generateAudio:e,generateAudioEdited:t,setGenerateAudio:o,wrapper:n}){const d=n||i.Fragment;return(0,i.useEffect)((()=>{!t&&e&&o(e)}),[t,e]),(0,c.jsx)(a,{children:(0,c.jsx)(d,{children:(0,c.jsx)(s.CheckboxControl,{className:"beyondwords--generate-audio",label:(0,r.__)("Generate audio","speechkit"),checked:e,onChange:()=>{o(!e)},__nextHasNoMarginBottom:!0})})})}const p=(0,n.compose)([(0,d.withSelect)((e=>{const{getCurrentPostAttribute:t,getCurrentPostType:o,getEditedPostAttribute:r,getPostEdits:s}=e("core/editor"),{getGenerateAudioEdited:n}=e("beyondwords/interactions"),{getSettings:d}=e("beyondwords/settings"),i=(()=>{const{meta:e}=s();if(n()&&e&&"beyondwords_generate_audio"in e)return"1"===e.beyondwords_generate_audio;const{beyondwords_generate_audio:o,speechkit_generate_audio:r,publish_post_to_speechkit:d}=t("meta");return"1"===o||"1"===r||"1"===d||"0"!==o&&"0"!==r&&"0"!==d&&null})();return{generateAudio:null===i?(()=>{const e=d();if(!e)return!1;const t="object"==typeof e.preselect&&null!==e.preselect?e.preselect:{},n=o();if(0==n in t)return!1;if("1"===t[n])return!0;const i=s();return!!Array.isArray(i.categories)&&("object"==typeof t[n]&&null!==t[n]&&!!r("categories").some((e=>0!="category"in t[n]&&t[n].category.includes(String(e)))))})():i,generateAudioEdited:n()}})),(0,d.withDispatch)((e=>{const{editPost:t}=e("core/editor"),{setGenerateAudioEdited:o}=e("beyondwords/interactions");return{setGenerateAudio:e=>{t({meta:{beyondwords_generate_audio:e?"1":"0"}}),o(!0)}}}))])(l)},808:(e,t,o)=>{"use strict";o.r(t),o.d(t,{OpenSidebar:()=>a,default:()=>c});var r=o(723),s=o(491),n=o(143),d=o(87),i=o(790);function a({openSidebar:e,wrapper:t=d.Fragment}){const o=t;return(0,i.jsx)(o,{children:(0,i.jsxs)("p",{style:{marginBottom:0,paddingBottom:0},children:[(0,r.__)("Open the","speechkit")," ",(0,i.jsx)("a",{href:"#beyondwords-plugin-sidebar",onClick:()=>{e()},children:(0,r.__)("BeyondWords sidebar","speechkit")})," ",(0,r.__)("for additional options and features.","speechkit")]})})}const c=(0,s.compose)([(0,n.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor");return{src:t("meta")._speechkit_link}})),(0,n.withDispatch)((e=>{const{openGeneralSidebar:t}=e("core/edit-post");return{openSidebar:()=>{t("beyondwords-plugin-sidebar/plugin-sidebar")}}}))])(a)},940:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var r=o(723),s=o(427),n=o(790);const d=()=>(0,n.jsxs)(s.PanelBody,{title:(0,r.__)("Help","speechkit"),initialOpen:!0,className:"beyondwords beyondwords-sidebar__help",children:[(0,n.jsx)(s.PanelRow,{children:(0,r.__)("For setup instructions, troubleshooting, and FAQs, see our BeyondWords for WordPress guide.","speechkit")}),(0,n.jsx)(s.PanelRow,{children:(0,n.jsx)(s.ExternalLink,{href:"https://docs.beyondwords.io/docs-and-guides/content/connect-cms/wordpress/install?utm_source=wordpress&utm_medium=referral&utm_campaign=&utm_content=plugin",children:(0,r.__)("Setup guide","speechkit")})}),(0,n.jsx)(s.HorizontalRule,{}),(0,n.jsx)(s.PanelRow,{children:(0,r.__)("Need help? Email our support team.","speechkit")}),(0,n.jsx)(s.PanelRow,{children:(0,n.jsxs)(s.Button,{isSecondary:!0,href:"mailto:support@beyondwords.io",children:[(0,n.jsx)(s.Dashicon,{icon:"email"}),(0,r.__)("Email BeyondWords","speechkit")]})})]})},62:(e,t,o)=>{"use strict";o.r(t),o.d(t,{PostInspectPanel:()=>l,default:()=>p});var r=o(723),s=o(427),n=o(491),d=o(143),i=o(87);const a=window.wp.notices;var c=o(790);function l({beyondwordsDeleteContent:e,beyondwordsDisabled:t,beyondwordsGenerateAudio:o,beyondwordsContentId:l,beyondwordsPreviewToken:p,beyondwordsPlayerContent:u,beyondwordsPlayerStyle:_,beyondwordsLanguageId:y,beyondwordsBodyVoiceId:w,beyondwordsTitleVoiceId:b,beyondwordsSummaryVoiceId:g,beyondwordsProjectId:h,beyondwordsErrorMessage:m,beyondwordsPodcastId:x,publishPostToSpeechkit:k,speechkitAccessKey:v,speechkitGenerateAudio:j,speechkitPodcastId:P,speechkitProjectId:f,speechkitDisabled:S,speechkitError:A,speechkitErrorMessage:E,speechkitInfo:C,speechkitResponse:T,speechkitLink:I,speechkitText:B,speechkitRetries:R,speechkitStatus:N,pluginVersion:M,wpVersion:$,wpPostId:D,createWarningNotice:O,removeWarningNotice:F,setDeleteContent:G,didPostSaveRequestSucceed:H,isSavingPost:L,isAutosavingPost:V}){const[U,W]=(0,i.useState)(!1),{createNotice:q}=(0,d.useDispatch)(a.store);(0,i.useEffect)((()=>{L&&!V&&H&&F()}),[H,V,L]),(0,i.useEffect)((()=>{L&&!V&&H&&U&&W(!1)}),[H,V,L,U]);const Y=(0,i.useMemo)((()=>({plugin_version:M,wp_version:$,beyondwords_generate_audio:o,beyondwords_project_id:h,beyondwords_content_id:l,beyondwords_preview_token:p,beyondwords_player_content:u,beyondwords_player_style:_,beyondwords_language_id:y,beyondwords_body_voice_id:w,beyondwords_title_voice_id:b,beyondwords_summary_voice_id:g,beyondwords_error_message:m,beyondwords_disabled:t,beyondwords_delete_content:e,beyondwords_podcast_id:x,publish_post_to_speechkit:k,speechkit_generate_audio:j,speechkit_project_id:f,speechkit_podcast_id:P,speechkit_error_message:E,speechkit_disabled:S,speechkit_access_key:v,speechkit_error:A,speechkit_info:C,speechkit_response:T,speechkit_retries:R,speechkit_status:N,_speechkit_link:I,_speechkit_text:B})),[]),K=(0,n.useCopyToClipboard)([`beyondwords_generate_audio\r\n${o}`,`beyondwords_project_id\r\n${h}`,`beyondwords_content_id\r\n${l}`,`beyondwords_preview_token\r\n${p}`,`beyondwords_player_content\r\n${u}`,`beyondwords_player_style\r\n${_}`,`beyondwords_language_id\r\n${y}`,`beyondwords_body_voice_id\r\n${w}`,`beyondwords_title_voice_id\r\n${b}`,`beyondwords_summary_voice_id\r\n${g}`,`beyondwords_error_message\r\n${m}`,`beyondwords_disabled\r\n${t}`,`beyondwords_delete_content\r\n${e}`,`=== ${(0,r.__)("Deprecated","speechkit")} ===`,`beyondwords_podcast_id\r\n${x}`,`publish_post_to_speechkit\r\n${k}`,`speechkit_generate_audio\r\n${j}`,`speechkit_project_id\r\n${f}`,`speechkit_podcast_id\r\n${P}`,`speechkit_error_message\r\n${E}`,`speechkit_disabled\r\n${S}`,`speechkit_access_key\r\n${v}`,`speechkit_error\r\n${A}`,`speechkit_info\r\n${C}`,`speechkit_response\r\n${T}`,`speechkit_retries\r\n${R}`,`speechkit_status\r\n${N}`,`_speechkit_link\r\n${I}`,`_speechkit_text\r\n${B}`,`=== ${(0,r.__)("System","speechkit")} ===`,`plugin_version\r\n${M}`,`wp_version\r\n${$}`,`wp_post_id\r\n${D}`,`=== ${(0,r.__)("Copied using the Block Editor","speechkit")} ===`].join("\r\n\r\n")+"\r\n\r\n",(()=>{q("info",(0,r.__)("Copied data to clipboard.","speechkit"),{isDismissible:!0,type:"snackbar"})})),z=Object.values(Y).some((e=>!!e?.length));return(0,c.jsxs)(s.PanelBody,{title:(0,r.__)("Inspect","speechkit"),initialOpen:!1,className:"beyondwords beyondwords-sidebar__inspect",children:[(0,c.jsx)(s.TextControl,{label:"beyondwords_generate_audio",readOnly:!0,value:o,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_project_id",readOnly:!0,value:h,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_preview_token",readOnly:!0,value:p,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_content_id",readOnly:!0,value:l,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_player_content",readOnly:!0,value:u,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_player_style",readOnly:!0,value:_,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_language_id",readOnly:!0,value:y,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_body_voice_id",readOnly:!0,value:w,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_title_voice_id",readOnly:!0,value:b,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_summary_voice_id",readOnly:!0,value:g,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextareaControl,{label:"beyondwords_error_message",readOnly:!0,rows:"3",value:m,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_disabled",readOnly:!0,value:t,__nextHasNoMarginBottom:!0}),(0,c.jsx)(s.TextControl,{label:"beyondwords_delete_content",readOnly:!0,value:e,__nextHasNoMarginBottom:!0}),(0,c.jsx)("hr",{}),(0,c.jsx)(s.Button,{id:"beyondwords-inspect-copy",variant:"secondary",ref:K,disabled:U,children:(0,r.__)("Copy","speechkit")}),(0,c.jsx)(s.Button,{isDestructive:!0,style:{float:"right"},id:"beyondwords-inspect-remove",onClick:e=>{e.stopPropagation(),U?(W(!1),G(!1),F()):(W(!0),G(!0),O())},disabled:!z,children:U?(0,r.__)("Restore","speechkit"):(0,r.__)("Remove","speechkit")})]})}const p=(0,n.compose)([(0,d.withSelect)((e=>{const{didPostSaveRequestSucceed:t,getCurrentPostId:o,getCurrentPostType:r,getEditedPostAttribute:s,isSavingPost:n,isAutosavingPost:d}=e("core/editor"),{getSettings:i}=e("beyondwords/settings"),{pluginVersion:a,wpVersion:c}=i();return{beyondwordsDeleteContent:s("meta").beyondwords_delete_content,beyondwordsDisabled:s("meta").beyondwords_disabled,beyondwordsGenerateAudio:s("meta").beyondwords_generate_audio,beyondwordsContentId:s("meta").beyondwords_content_id,beyondwordsPreviewToken:s("meta").beyondwords_preview_token,beyondwordsPlayerContent:s("meta").beyondwords_player_content,beyondwordsPlayerStyle:s("meta").beyondwords_player_style,beyondwordsLanguageId:s("meta").beyondwords_language_id,beyondwordsBodyVoiceId:s("meta").beyondwords_body_voice_id,beyondwordsTitleVoiceId:s("meta").beyondwords_title_voice_id,beyondwordsSummaryVoiceId:s("meta").beyondwords_summary_voice_id,beyondwordsProjectId:s("meta").beyondwords_project_id,beyondwordsErrorMessage:s("meta").beyondwords_error_message,beyondwordsPodcastId:s("meta").beyondwords_podcast_id,publishPostToSpeechkit:s("meta").publish_post_to_speechkit,speechkitAccessKey:s("meta").speechkit_access_key,speechkitGenerateAudio:s("meta").speechkit_generate_audio,speechkitPodcastId:s("meta").speechkit_podcast_id,speechkitProjectId:s("meta").speechkit_project_id,speechkitDisabled:s("meta").speechkit_disabled,speechkitError:s("meta").speechkit_error,speechkitErrorMessage:s("meta").speechkit_error_message,speechkitInfo:s("meta").speechkit_info,speechkitResponse:s("meta").speechkit_response,speechkitLink:s("meta")._speechkit_link,speechkitText:s("meta")._speechkit_text,speechkitRetries:s("meta").speechkit_retries,speechkitStatus:s("meta").speechkit_status,pluginVersion:a,wpVersion:c,wpPostId:o(),currentPostType:r(),didPostSaveRequestSucceed:t(),isSavingPost:n(),isAutosavingPost:d()}})),(0,d.withDispatch)((e=>{const{editPost:t}=e("core/editor"),{createNotice:o,removeNotice:s}=e("core/notices");return{createWarningNotice:()=>o("warning",(0,r.__)("The BeyondWords data for this post will be removed when the post is saved.","speechkit"),{id:"beyondwords-remove-post-data--warning",isDismissible:!1,speak:!0}),removeWarningNotice:()=>s("beyondwords-remove-post-data--warning"),setDeleteContent:e=>{t({meta:{beyondwords_delete_content:e?"1":""}})}}}))])(l)},23:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>a});var r=o(723),s=o(427),n=o(491),d=o(143),i=o(790);const a=(0,n.compose)((0,d.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),o=t("meta").beyondwords_generate_audio,r=t("meta").speechkit_generate_audio;return{generateAudio:"1"===o||"1"===r}})),(0,d.withDispatch)((e=>{const{editPost:t}=e("core/editor");return{onGenerateAudioChange:e=>{t({meta:{beyondwords_generate_audio:e?"1":"0"}})}}})))((({generateAudio:e,onGenerateAudioChange:t})=>(0,i.jsx)(s.PanelBody,{title:(0,r.__)("BeyondWords","speechkit"),initialOpen:!0,children:(0,i.jsx)(s.PanelRow,{children:(0,i.jsx)(s.ToggleControl,{label:(0,r.__)("Generate audio","speechkit"),checked:e,onChange:e=>{t(e)},__nextHasNoMarginBottom:!0})})})))},57:(e,t,o)=>{"use strict";o.r(t),o.d(t,{PendingNotice:()=>l,default:()=>p});var r=o(723),s=o(427),n=o(491),d=o(143),i=o(87);const a=(0,n.compose)([(0,d.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),o=t("meta").beyondwords_project_id,r=t("meta").speechkit_project_id,s=t("status");return{hasPendingNoticeAction:!(!o&&!r)&&"pending"===s}}))])((function({hasPendingNoticeAction:e,children:t}){return e?t:null}));var c=o(790);function l({projectUrl:e,wrapper:t}){const o=t||i.Fragment;return(0,c.jsx)(a,{children:(0,c.jsx)(o,{children:(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:(0,r.__)("Listen to content saved as “Pending” in the BeyondWords dashboard.","speechkit")}),(0,c.jsx)(s.ExternalLink,{href:e,children:(0,r.__)("BeyondWords dashboard.","speechkit")})]})})})}const p=(0,n.compose)([(0,d.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),o=t("meta").beyondwords_project_id,s=t("meta").speechkit_project_id,n=o||s;return{projectUrl:(0,r.sprintf)("%1$s/dashboard/project/%2$d/content","https://dash.beyondwords.io",n)}}))])(l)},357:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var r=o(491),s=o(143),n=o(87);const d=(0,r.compose)([(0,s.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),o=t("meta").beyondwords_content_id,r=t("meta").beyondwords_podcast_id,s=t("meta").speechkit_podcast_id;return{hasPlayAudioAction:!("pending"===t("status")||!o&&!r&&!s)}}))])((function({hasPlayAudioAction:e,children:t}){return e?t:null})),i="https://proxy.beyondwords.io/npm/@beyondwords/player@latest/dist/umd.js";var a=o(790);const c=(0,r.compose)([(0,s.withSelect)((e=>{const{getEditedPostAttribute:t}=e("core/editor"),o=t("meta").beyondwords_project_id,r=t("meta").speechkit_project_id,s=t("meta").beyondwords_content_id,n=t("meta").beyondwords_podcast_id,d=t("meta").speechkit_podcast_id,i=t("meta").beyondwords_player_content;return{contentId:s||n||d,loadContentAs:i?[i]:["article"],previewToken:t("meta").beyondwords_preview_token,projectId:o||r}}))])((function({contentId:e,loadContentAs:t,previewToken:o,projectId:r,wrapper:s=n.Fragment}){const c=s,[l,p]=(0,n.useState)(null);return function({target:e,projectId:t,contentId:o,loadContentAs:r,previewToken:s}){const d=function(){const[e,t]=(0,n.useState)((()=>{var e;return null!==(e=window?.BeyondWords)&&void 0!==e?e:null}));return(0,n.useEffect)((()=>{const e=()=>{var e;t(null!==(e=window?.BeyondWords)&&void 0!==e?e:null)},o=document.head.querySelector(`script[src="${i}"]`);if(o instanceof HTMLScriptElement)return o.addEventListener("load",e),()=>{o.removeEventListener("load",e)};const r=document.createElement("script");return r.src=i,r.async=!0,r.defer=!0,r.addEventListener("load",e),document.head.appendChild(r),()=>{r.removeEventListener("load",e)}}),[]),e}(),[a,c]=(0,n.useState)(null);(0,n.useEffect)((()=>{if(!d?.Player||!e)return void c(null);let n;try{n=new d.Player({target:e,projectId:t,contentId:o,loadContentAs:null!=r?r:["article"],previewToken:s||"",analyticsConsent:"none",playerStyle:"small",widgetStyle:"none",introsOutros:[],adverts:[]})}catch(e){return void c(null)}return c(n),()=>{c(null),n.destroy()}}),[d?.Player,e,t,o,r,s])}({target:l,projectId:r,contentId:e,previewToken:o,loadContentAs:t}),(0,a.jsx)(d,{children:(0,a.jsx)(c,{children:(0,a.jsx)("div",{className:"beyondwords-player-box-wrapper",children:(0,a.jsx)("div",{ref:p})})})})}))},186:(e,t,o)=>{"use strict";o.d(t,{A:()=>c});var r=o(723),s=o(427),n=o(582),d=o(143),i=o(87),a=o(790);const c=function({wrapper:e}){const t=e||i.Fragment,o=(0,d.useSelect)((e=>e("core/editor").getCurrentPostType()),[]),[c,l]=(0,n.useEntityProp)("postType",o,"meta"),p=c.beyondwords_player_content||"";return(0,a.jsx)(t,{children:(0,a.jsx)(s.Flex,{children:(0,a.jsx)(s.FlexBlock,{children:(0,a.jsx)(s.SelectControl,{className:"beyondwords--player-content",label:(0,r.__)("Player content","speechkit"),options:[{label:"Article",value:""},{label:"Summary",value:"summary"}],onChange:e=>{return t=e,void l({...c,beyondwords_player_content:t});var t},value:p,__nextHasNoMarginBottom:!0})})})})}},686:(e,t,o)=>{"use strict";o.d(t,{A:()=>c});var r=o(723),s=o(427),n=o(582),d=o(143),i=o(87),a=o(790);const c=function({wrapper:e}){const t=e||i.Fragment,{postType:o,playerStyles:c,defaultPlayerStyle:l}=(0,d.useSelect)((e=>{let t=[];const o=e("core/editor").getCurrentPostType(),{beyondwords_project_id:r}=e("core/editor").getEditedPostAttribute("meta");if(r)t=e("beyondwords/settings").getPlayerStyles(r)||[];else{const{getSettings:o}=e("beyondwords/settings"),{projectId:r}=o();t=e("beyondwords/settings").getPlayerStyles(r)||[]}return{postType:o,playerStyles:t,defaultPlayerStyle:t.find((e=>e.default))}}),[]),[p,u]=(0,n.useEntityProp)("postType",o,"meta"),_=p.beyondwords_player_style||l?.value;return!!c.length&&(0,a.jsx)(t,{children:(0,a.jsx)(s.Flex,{children:(0,a.jsx)(s.FlexBlock,{children:(0,a.jsx)(s.SelectControl,{className:"beyondwords--player-style",label:(0,r.__)("Player style","speechkit"),options:[{label:"",value:""},...c],onChange:e=>{return t=e,void u({...p,beyondwords_player_style:t});var t},value:_,__nextHasNoMarginBottom:!0})})})})}},13:(e,t,o)=>{"use strict";o.d(t,{A:()=>p});var r=o(723),s=o(427),n=o(582),d=o(143),i=o(87);const a=window.wp.htmlEntities,c=(0,o(491).compose)([(0,d.withSelect)((e=>{const{getSettings:t}=e("beyondwords/settings"),{languages:o}=t();return{hasSelectVoiceAction:!!o?.length}}))])((function({hasSelectVoiceAction:e,children:t}){return e?t:null}));var l=o(790);const p=function({wrapper:e}){const t=e||i.Fragment,o=(0,d.useSelect)((e=>e("core/editor").getCurrentPostType()),[]),[p,u]=(0,n.useEntityProp)("postType",o,"meta"),_=p.beyondwords_language_id,y=p.beyondwords_body_voice_id,{languages:w}=(0,d.useSelect)((e=>({languages:e("beyondwords/settings").getLanguages()})),[]),{voices:b}=(0,d.useSelect)((e=>({voices:_?e("beyondwords/settings").getVoices(_):[]})),[_]),g=(0,i.useMemo)((()=>(null!=w?w:[]).map((e=>({label:(0,a.decodeEntities)(e.name),value:(0,a.decodeEntities)(e.id)})))),[w]),h=(0,i.useMemo)((()=>(null!=b?b:[]).map((e=>({label:(0,a.decodeEntities)(e.name),value:(0,a.decodeEntities)(e.id)})))),[b]);return!!g.length&&(0,l.jsxs)(c,{children:[(0,l.jsx)(t,{children:(0,l.jsx)(s.Flex,{children:(0,l.jsx)(s.FlexBlock,{children:(0,l.jsx)(s.SelectControl,{className:"beyondwords--select-language",label:(0,r.__)("Language","speechkit"),options:[{label:(0,r.__)("Project default","speechkit"),value:""},...g],onChange:e=>{return t=e,void u({...p,beyondwords_language_id:t});var t},value:_,__nextHasNoMarginBottom:!0})})})}),(0,l.jsx)(t,{children:(0,l.jsx)(s.Flex,{children:(0,l.jsx)(s.FlexBlock,{children:(0,l.jsx)(s.SelectControl,{className:"beyondwords--select-voice",label:(0,r.__)("Voice","speechkit"),options:[{label:"",value:""},...h],onChange:e=>{return t=e,void u({...p,beyondwords_body_voice_id:t,beyondwords_title_voice_id:t,beyondwords_summary_voice_id:t});var t},disabled:!h?.length,value:y,__nextHasNoMarginBottom:!0})})})})]})}},8:(e,t,o)=>{"use strict";const r=window.wp.plugins;var s=o(455),n=o(320),d=o(165);(0,r.registerPlugin)("beyondwords-document-sidebar",{icon:"controls-volumeon",render:s.default}),(0,r.registerPlugin)("beyondwords-plugin-sidebar",{icon:"controls-volumeon",render:d.default}),(0,r.registerPlugin)("beyondwords-prepublish-sidebar",{icon:"controls-volumeon",render:n.default})},54:(e,t,o)=>{"use strict";var r=o(143);const s={generateAudioEdited:!1},n={reducer:(e=s,t)=>"SET_GENERATE_AUDIO_EDITED"===t.type?{...e,generateAudioEdited:t.value}:e,actions:{setGenerateAudioEdited:e=>({type:"SET_GENERATE_AUDIO_EDITED",value:e})},selectors:{getGenerateAudioEdited:e=>e.generateAudioEdited},controls:{},resolvers:{}},d=(0,r.createReduxStore)("beyondwords/interactions",n),i={fetchFromAPI:e=>({type:"FETCH_FROM_API",path:e}),setIsRegeneratingAudio:e=>({type:"SET_IS_REGENERATING_AUDIO",value:e}),setSettings:e=>({type:"SET_SETTINGS",value:e}),setPlayerStyles:e=>({type:"SET_PLAYER_STYLES",value:e}),setLanguages:e=>({type:"SET_LANGUAGES",value:e}),setVoices:e=>({type:"SET_VOICES",value:e})},a=window.wp.apiFetch;var c=o.n(a);const l={FETCH_FROM_API:e=>c()({path:e.path})},p={*getSettings(){const e=yield i.fetchFromAPI("/beyondwords/v1/settings");return i.setSettings(e)},*getPlayerStyles(e){if(!e)return[];const t=`/beyondwords/v1/projects/${e}/player-styles`,o=yield i.fetchFromAPI(t);return i.setPlayerStyles(o)},*getLanguages(){const e=yield i.fetchFromAPI("/beyondwords/v1/languages");return i.setLanguages(e)},*getVoices(e){const t=`/beyondwords/v1/languages/${e}/voices`,o=yield i.fetchFromAPI(t);return i.setVoices(o)}},u={isRegeneratingAudio:!1,playerStyles:[],languages:[],settings:{},voices:[]},_={reducer:(e=u,t)=>{switch(t.type){case"SET_IS_REGENERATING_AUDIO":return{...e,isRegeneratingAudio:t.value};case"SET_LANGUAGES":return{...e,languages:t.value||[]};case"SET_PLAYER_STYLES":return{...e,playerStyles:t.value||[]};case"SET_SETTINGS":return{...e,settings:t.value||{}};case"SET_VOICES":return{...e,voices:t.value||[]}}return e},actions:i,selectors:{getIsRegeneratingAudio:e=>e.isRegeneratingAudio,getLanguages:e=>e.languages,getPlayerStyles:e=>e.playerStyles,getSettings:e=>e.settings,getVoices:e=>e.voices},controls:l,resolvers:p},y=(0,r.createReduxStore)("beyondwords/settings",_);(0,r.register)(d),(0,r.register)(y)},790:e=>{"use strict";e.exports=window.ReactJSXRuntime},715:e=>{"use strict";e.exports=window.wp.blockEditor},427:e=>{"use strict";e.exports=window.wp.components},491:e=>{"use strict";e.exports=window.wp.compose},582:e=>{"use strict";e.exports=window.wp.coreData},143:e=>{"use strict";e.exports=window.wp.data},656:e=>{"use strict";e.exports=window.wp.editor},87:e=>{"use strict";e.exports=window.wp.element},619:e=>{"use strict";e.exports=window.wp.hooks},723:e=>{"use strict";e.exports=window.wp.i18n}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(54),o(455),o(320),o(165),o(387),o(396),o(365),o(278),o(841),o(940),o(62),o(808),o(57),o(357),o(23),o(8)})();