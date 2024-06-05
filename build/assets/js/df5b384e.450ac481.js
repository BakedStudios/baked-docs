"use strict";(self.webpackChunkbaked_docs=self.webpackChunkbaked_docs||[]).push([[3580],{1918:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(4848),n=t(8453);const i={},d="Nodes List (For Render Template and Export Profiles)",o={id:"project_setup/nodes_list",title:"Nodes List (For Render Template and Export Profiles)",description:"This document is a comprehensive list of the default nodes that are set up in the Nuke Transcoder render_template.nk script and can be accessed with Export Profiles.",source:"@site/docs/project_setup/nodes_list.md",sourceDirName:"project_setup",slug:"/project_setup/nodes_list",permalink:"/docs/project_setup/nodes_list",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project Setup",permalink:"/docs/category/project-setup"},next:{title:"Coordinator Workflows",permalink:"/docs/category/coordinator-workflows"}},l={},c=[{value:"<strong>Baked Nodes</strong>",id:"baked-nodes",level:2},{value:"<strong>Client Nodes</strong>",id:"client-nodes",level:2}];function a(e){const r={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"nodes-list-for-render-template-and-export-profiles",children:"Nodes List (For Render Template and Export Profiles)"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["This document is a comprehensive list of the ",(0,s.jsx)(r.em,{children:"default"})," nodes that are set up in the Nuke Transcoder render_template.nk script and can be accessed with Export Profiles."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"baked-nodes",children:(0,s.jsx)(r.strong,{children:"Baked Nodes"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"For creating movies for Flow and internal review."}),"\n"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Node Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"read_in"}),(0,s.jsx)(r.td,{children:"Always where media is read in."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ingest.ingest_frames"}),(0,s.jsx)(r.td,{children:"Always where media is ingested."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"baked.render_ref_mov"}),(0,s.jsx)(r.td,{children:"Always where refs are rendered as movies for Flow."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"baked.render_plate_mov"}),(0,s.jsx)(r.td,{children:"Always where plates are rendered as movies for Flow."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"baked.render_artist_mov"}),(0,s.jsx)(r.td,{children:"Always where artist versions are rendered as movies for Flow."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"baked.render_rotopaint_mov"}),(0,s.jsx)(r.td,{children:"Always where roto and paint frames are rendered as movies for Flow."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"client-nodes",children:(0,s.jsx)(r.strong,{children:"Client Nodes"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"For creating movies for client deliveries that require a slate."}),"\n"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Node Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_v000_exr"}),(0,s.jsx)(r.td,{children:"EXR of a v000 version with client ready compression."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_v000_mov"}),(0,s.jsx)(r.td,{children:"Movie of a v000 version formatted at 1920x1080p."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_v000_mov_fullres"}),(0,s.jsx)(r.td,{children:"Movie of a v000 version formatted at same as source resolution."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_v000_mov_burnins"}),(0,s.jsx)(r.td,{children:"Movie of a v000 version formatted at 1920x1080p, with burn-ins."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_wip_exr"}),(0,s.jsx)(r.td,{children:"EXR of a wip version with client ready compression."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_wip_mov"}),(0,s.jsx)(r.td,{children:"Movie of a wip version formatted at 1920x1080p."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_wip_mov_fullres"}),(0,s.jsx)(r.td,{children:"Movie of a wip version formatted at same as source resolution."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_wip_mov_burnins"}),(0,s.jsx)(r.td,{children:"Movie of a wip version formatted at 1920x1080p, with burn-ins."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_asfinal_exr"}),(0,s.jsx)(r.td,{children:"EXR of an as final version with client ready compression."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_asfinal_mov"}),(0,s.jsx)(r.td,{children:"Movie of an as final version formatted at 1920x1080p."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_asfinal_mov_fullres"}),(0,s.jsx)(r.td,{children:"Movie of an as final version formatted at same as source resolution."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client.render_asfinal_mov_burnins"}),(0,s.jsx)(r.td,{children:"Movie of an as final version formatted at 1920x1080p, with burn-ins."})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>o});var s=t(6540);const n={},i=s.createContext(n);function d(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);