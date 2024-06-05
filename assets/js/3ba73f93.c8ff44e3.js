"use strict";(self.webpackChunkbaked_docs=self.webpackChunkbaked_docs||[]).push([[8787],{8114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=n(4848),s=n(8453);const o={sidebar_position:2},r="Ingest",d={id:"coordinator/ingest/ingest",title:"Ingest",description:"The Ingest Tool is an application developed for the Flow Production Tracking Pipeline Toolkit which utilizes Nuke Assist and python to transcode and organize media in order to bring it into our pipeline in a uniform, efficient way.",source:"@site/docs/coordinator/ingest/ingest.md",sourceDirName:"coordinator/ingest",slug:"/coordinator/ingest/",permalink:"/baked-docs/docs/coordinator/ingest/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Statuses",permalink:"/baked-docs/docs/coordinator/statuses"},next:{title:"Publishing Support Files",permalink:"/baked-docs/docs/coordinator/support_files/"}},a={},l=[{value:"General Steps",id:"general-steps",level:2},{value:"Ingest Formats",id:"ingest-formats",level:2},{value:"Understanding Deadline",id:"understanding-deadline",level:2},{value:"The Jobs List",id:"the-jobs-list",level:3},{value:"The Task Monitor",id:"the-task-monitor",level:3},{value:"The Worker Monitor",id:"the-worker-monitor",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ingest",children:"Ingest"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"The Ingest Tool is an application developed for the Flow Production Tracking Pipeline Toolkit which utilizes Nuke Assist and python to transcode and organize media in order to bring it into our pipeline in a uniform, efficient way."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"general-steps",children:"General Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Sort your media in your file browser."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Open the Flow Production Tracking Desktop app"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Open Project"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Launch Nuke Assist"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Drag and drop folders into the ",(0,i.jsx)(t.a,{href:"https://learn.foundry.com/nuke/content/getting_started/using_interface/navigating_node_graph.html",children:"node graph"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Node Graph",src:n(155).A+"",width:"1212",height:"998"})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsx)(t.li,{children:'You can sort media in the "Node Graph" by selecting all and pressing "L" on your keyboard.'}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"You can drag and drop a maximum of 32 plates at a time."})}),"\n",(0,i.jsxs)(t.ol,{start:"7",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Select all the media and go up to the drop down menu called "Flow Production Tracking" and click Ingest Media.'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["You'll get to the below collector where you need to enter your Delivery Name (this can be the Package name) and then select the ",(0,i.jsx)(t.a,{href:"/docs/coordinator/ingest/#ingest-formats",children:"Ingest Format"})," you'd like to ingest with."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Collector",src:n(4880).A+"",width:"1162",height:"651"})}),"\n",(0,i.jsxs)(t.ol,{start:"9",children:["\n",(0,i.jsx)(t.li,{children:"Click continue and you'll see this window below which shows you all the matches the ingest tool was able to make - as well as the Source path and Output Path Preview."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Output Path",src:n(6855).A+"",width:"1380",height:"330"})}),"\n",(0,i.jsxs)(t.ol,{start:"10",children:["\n",(0,i.jsx)(t.li,{children:"Click Ingest and your the job will be published, and either copied/moved or sent to Deadline to be transcoded and uploaded to Flow Production Tracking if applicable - depending on the ingest format specified."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"ingest-formats",children:"Ingest Formats"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Ingest Foramts",src:n(3683).A+"",width:"1380",height:"550"})}),"\n",(0,i.jsx)(t.p,{children:"Here's a quick explanation of the ingest formats:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Format"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Slate"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Plate"}),(0,i.jsx)(t.td,{children:"Puts the plate where it should be and transcodes it."}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Plate Proxy"}),(0,i.jsx)(t.td,{children:"Takes the plate and turns it into a movie for SG."}),(0,i.jsx)(t.td,{children:'Yes - Orange "Plate"'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"REF"}),(0,i.jsx)(t.td,{children:"Generates an SG version of the REF with a Baked Slate, also puts the ref in the right folder."}),(0,i.jsx)(t.td,{children:'Yes - Blue "REF"'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Roto"}),(0,i.jsx)(t.td,{children:"Similar to 'Plate' - takes Roto from IO folder, but just copies it to the correct folder. No transcoding."}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Roto Proxy"}),(0,i.jsx)(t.td,{children:"Just like Plate Proxy, creates a movie for SG"}),(0,i.jsx)(t.td,{children:'Yes - Red "Roto/Paint"'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Paint"}),(0,i.jsx)(t.td,{children:"Similar to 'Plate' - takes Paint from IO folder, but just copies it to the correct folder. No transcoding."}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Paint Proxy"}),(0,i.jsx)(t.td,{children:"Takes Paint work and turns it into a movie for SG."}),(0,i.jsx)(t.td,{children:'Yes - Red "Roto/Paint"'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Version (External)"}),(0,i.jsx)(t.td,{children:"Ingests versions from external partners. Sorts renders into respective COMP task."}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Version Proxy (External)"}),(0,i.jsx)(t.td,{children:"Creates a movie from external version for SG."}),(0,i.jsx)(t.td,{children:'Yes - Yellow "In Progress"'})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The slated formats are generated by rendering with the color workflow except for the Plate (we want the raw) and REF (don't want double color)."})}),"\n",(0,i.jsx)(t.h2,{id:"understanding-deadline",children:"Understanding Deadline"}),"\n",(0,i.jsx)(t.p,{children:'Deadline is the way we manage our render farm. Imagine a bunch of mini computers that do work for us. Deadline is the Flow Production Tracking of these "nodes". You don\'t need to become a deadline expert but here are the things that will help.'}),"\n",(0,i.jsx)(t.h3,{id:"the-jobs-list",children:"The Jobs List"}),"\n",(0,i.jsx)(t.p,{children:"This just shows you what's coming up. You'll want to see that your jobs are being added after you hit INGEST in the ingest tool."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Jobs List",src:n(3391).A+"",width:"1380",height:"804"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Checking for errors:"}),' If you right click a job and click "View Job Reports" you\'ll see a list of logs from the job. This will include any errors the job encountered. You can drag the column open a bit or double click to view info about the error.']})}),"\n",(0,i.jsx)(t.h3,{id:"the-task-monitor",children:"The Task Monitor"}),"\n",(0,i.jsx)(t.p,{children:"This actually shows you what is being down within the job. So what frame range is being rendered, by what computer and where it's at in the progress. You'll want to wait until all these are 100% before you start verifying your media made it out the other end."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Task Monitor",src:n(9686).A+"",width:"1380",height:"802"})}),"\n",(0,i.jsx)(t.h3,{id:"the-worker-monitor",children:"The Worker Monitor"}),"\n",(0,i.jsx)(t.p,{children:"This you can largely ignore... It just shows you which computers are up and running, and how they're holding up. For ingest, we're assigned D001-D003 only, so if you see any others lighting up bright green, let me know!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Worker Monitor",src:n(927).A+"",width:"1380",height:"800"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["You can right click a job at any point and select ",(0,i.jsx)(t.code,{children:"Job Output"})," to view what you're making in the folder structure."]})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3683:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ingest_formats-c39a65f08320b6ccb59822f24664dbb9.png"},3391:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/jobs_list-4b587f8b702bdef795564b161dab2da2.png"},155:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/node_graph-9980dd223e3206eef8a10b24d948c2d6.png"},6855:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/output_path-6b2c7f91c6401f29d91b38c884901774.png"},4880:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/package_name-2a88ac5b748e21fe178243515fa55613.png"},9686:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/task_monitor-c684eb8b85d3b2552c0256ca5e691fc0.png"},927:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/worker_monitor-3dde7db523076d2ba8777b2a620baaaa.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);