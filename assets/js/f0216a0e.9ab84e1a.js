"use strict";(self.webpackChunkbaked_docs=self.webpackChunkbaked_docs||[]).push([[9700],{1313:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(4848),s=n(8453);const o={title:"Tidbyt Status Monitor",authors:["cameron"],tags:["tidbyt","python"]},a=void 0,r={permalink:"/baked-docs/blog/2024/01/25/2024-01-25-tidbyt/tidbyt",source:"@site/blog/2024-01-25-tidbyt/2024-01-25-tidbyt.md",title:"Tidbyt Status Monitor",description:"Git repo//github.com/BakedStudios/baked-tools/tree/main/tidbyt-sg-monitor",date:"2024-01-25T00:00:00.000Z",tags:[{inline:!0,label:"tidbyt",permalink:"/baked-docs/blog/tags/tidbyt"},{inline:!0,label:"python",permalink:"/baked-docs/blog/tags/python"}],readingTime:2.485,hasTruncateMarker:!0,authors:[{name:"Cameron Target",title:"Pipeline Manager",url:"https://www.wearebaked.com/about",imageURL:"https://avatars.githubusercontent.com/u/127965975?s=400&u=9799eb0c2c2b7bcf45f47bb170c8a154fd4e7eb4&v=4",key:"cameron",page:null}],frontMatter:{title:"Tidbyt Status Monitor",authors:["cameron"],tags:["tidbyt","python"]},unlisted:!1,prevItem:{title:"Deep Dive | Syncthing",permalink:"/baked-docs/blog/2024/01/30/2024-01-30-syncthing/syncthing"},nextItem:{title:"Exploring 'knobChanged'",permalink:"/baked-docs/blog/2024/01/15/2024-01-15-knob-changed/knob-changed"}},d={authorsImageUrls:[void 0]},l=[{value:"Overview",id:"overview",level:2},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"1. LaunchAgent Configuration",id:"1-launchagent-configuration",level:3},{value:"To Start the Agent:",id:"to-start-the-agent",level:4},{value:"To Stop the Agent:",id:"to-stop-the-agent",level:4},{value:"2. SG_Data Script",id:"2-sg_data-script",level:3},{value:"3. Starlark Template",id:"3-starlark-template",level:3},{value:"Execution Flow",id:"execution-flow",level:2},{value:"Additional Notes",id:"additional-notes",level:2}];function c(t){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["Git repo: ",(0,i.jsx)(e.a,{href:"https://github.com/BakedStudios/baked-tools/tree/main/tidbyt-sg-monitor",children:"https://github.com/BakedStudios/baked-tools/tree/main/tidbyt-sg-monitor"})]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["You need a Tidbyt for this to work! ","\ud83e\udd16"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:'The Tidbyt SG Monitor is a custom application designed to display data from ShotGrid (SG), specifically focusing on the count of Versions with a status of "cnv" within active projects. This documentation outlines how to set up and run the Tidbyt SG Monitor, including the necessary scripts and LaunchAgent configuration.'}),"\n",(0,i.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(e.p,{children:"This solution involves three main components:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"LaunchAgent Configuration"}),": A plist file to schedule and manage the execution of the SG_Data script."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"SG_Data Script"}),": A Python script that connects to ShotGrid, retrieves data, generates Starlark code for Tidbyt display, and commands to render and push the display content."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Starlark Template"}),': A template used to dynamically generate Starlark code that defines what is displayed on the Tidbyt device, including fetching an SG icon and displaying the count of "cnv" statuses.']}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,i.jsx)(e.h3,{id:"1-launchagent-configuration",children:"1. LaunchAgent Configuration"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"File Location"}),": ",(0,i.jsx)(e.code,{children:"/Applications/tidbyt-sg-monitor/com.Tidbyt.SG_Data.plist"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Purpose"}),": Schedules the SG_Data script to run at a specified interval (every 30 seconds) and specifies output paths for standard output and errors."]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"to-start-the-agent",children:"To Start the Agent:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"sudo launchctl bootstrap gui/$(id -u) /Applications/tidbyt-sg-monitor/com.Tidbyt.SG_Data.plist\n"})}),"\n",(0,i.jsx)(e.h4,{id:"to-stop-the-agent",children:"To Stop the Agent:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"launchctl bootout gui/$(id -u) /Applications/tidbyt-sg-monitor/com.Tidbyt.SG_Data.plist\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2-sg_data-script",children:"2. SG_Data Script"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Location"}),": ",(0,i.jsx)(e.code,{children:"/Applications/tidbyt-sg-monitor/SG_Data.py"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Dependencies"}),": Requires ",(0,i.jsx)(e.code,{children:"shotgun_api3"})," Python package."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Functionality"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Connects to ShotGrid using provided credentials."}),"\n",(0,i.jsx)(e.li,{children:'Queries for Versions with "cnv" status in active projects.'}),"\n",(0,i.jsx)(e.li,{children:"Generates a Starlark script for the Tidbyt display, embedding the count of found records."}),"\n",(0,i.jsx)(e.li,{children:"Executes commands to render and push the content to a Tidbyt device."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-starlark-template",children:"3. Starlark Template"}),"\n",(0,i.jsx)(e.p,{children:'The template dynamically generates a Starlark script, embedding the count of "cnv" statuses into a visual format suitable for Tidbyt devices. It fetches an SG icon and formats the display to show the data alongside the icon.'}),"\n",(0,i.jsx)(e.h2,{id:"execution-flow",children:"Execution Flow"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Data Retrieval"}),': The SG_Data script connects to ShotGrid, retrieves the relevant data, and calculates the count of Versions with "cnv" status.']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Starlark Code Generation"}),": It then fills the Starlark template with this data, creating a script that defines the visual representation of the data on the Tidbyt device."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Rendering and Display"}),": Lastly, the script uses ",(0,i.jsx)(e.code,{children:"pixlet"})," commands to render the Starlark script into a format compatible with Tidbyt devices and pushes the rendered content to the device."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Ensure that ",(0,i.jsx)(e.code,{children:"pixlet"})," is installed and accessible from the command line."]}),"\n",(0,i.jsxs)(e.li,{children:["Replace ",(0,i.jsx)(e.code,{children:"<YOUR TIDBYT TOKEN HERE>"})," with your actual Tidbyt API token in the final command within the SG_Data script."]}),"\n",(0,i.jsx)(e.li,{children:"The paths and credentials used in the scripts should be adjusted according to your setup and security practices."}),"\n",(0,i.jsx)(e.li,{children:"The provided SG icon URL and other hardcoded values can be customized as needed."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"This documentation aims to provide a clear understanding of how to configure and use the Tidbyt SG Monitor. For further customization or troubleshooting, refer to the documentation of the individual technologies involved (ShotGrid API, Tidbyt API, and LaunchAgents)."})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);