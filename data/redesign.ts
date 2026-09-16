
export const photos = {
 campus:{src:'/images/gndu-campus.jpg',alt:'Maharaja Ranjit Singh Block and landscaped courtyard at Guru Nanak Dev University',title:'Maharaja Ranjit Singh Block',date:'January 2009',credit:'Gopal Aggarwal',source:'https://commons.wikimedia.org/wiki/File:Guru_Nanak_Dev_University3.jpg',license:'https://creativecommons.org/licenses/by/2.0/',licenseLabel:'CC BY 2.0',width:1280,height:960},
 gate:{src:'/images/gndu-gate.jpg',alt:'Main entrance to Guru Nanak Dev University with landscaped median and trees',title:'The university, open to possibility.',date:'March 2009',credit:'Gopal Aggarwal',source:'https://commons.wikimedia.org/wiki/File:Guru_Nanak_Dev_University_(GNDU),_Amritsar-_main_gate_2009-03-05.JPG',license:'https://creativecommons.org/licenses/by/2.5/',licenseLabel:'CC BY 2.5',width:2592,height:1944},
};
export const platforms = [
{name:'LeetCode',url:'https://leetcode.com/',initial:'LC',active:null as number|null},
{name:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/',initial:'GfG',active:null as number|null},
{name:'CodeChef',url:'https://www.codechef.com/',initial:'CC',active:null as number|null},
{name:'Codeforces',url:'https://codeforces.com/',initial:'CF',active:null as number|null},
{name:'HackerRank',url:'https://www.hackerrank.com/',initial:'HR',active:null as number|null},
{name:'GitHub',url:'https://github.com/',initial:'GH',active:null as number|null},
];
export const codingMetrics=[
 {label:'Active problem solvers',value:'400+',detail:'Students engaged in problem solving'},
 {label:'Cumulative problems solved',value:'10,000+',detail:'LeetCode · CodeChef · GeeksforGeeks'},
 {label:'Contest participation',value:'200+',detail:'Collective contest participation'},
 {label:'Open-source contributions',value:'45,000+',detail:'Contributions to open-source development'},
];
export const milestones=[100,200,300,500].map(threshold=>({threshold,students:null as number|null}));
export const codingCulture=[{title:'Weekly DSA practice',description:'Practice schedules and participation records await review.'},{title:'Peer learning',description:'Verified community sessions and learning resources will be linked here.'},{title:'Coding contests',description:'Contest records and collective participation data are pending.'},{title:'Hackathons',description:'CosmoHacks’25 brought 120+ teams together, according to the supplied brief.'},{title:'Interview preparation',description:'Approved preparation programmes and resources are pending.'}];
export const technologyDetails:Record<string,string[]>={
'AI/ML':['Computer Vision','Natural Language Processing','Generative AI','AI Agents','Recommendation Systems','Predictive Modelling'],
'Cloud':['AWS','Azure','Google Cloud','Containers','Serverless','Cloud-native systems'],
'Data':['SQL','BigQuery','ETL','Data Pipelines','Dashboards','Analytics'],
'Software':['Backend','APIs','Distributed systems','Databases','Full-stack applications'],
'Cybersecurity':['Network security','Detection','Security analysis'],
'Systems':['C++','Networking','Concurrency','Performance engineering'],
'Web/Mobile':['Accessible interfaces','React','Mobile applications','REST APIs'],
'IoT':['IoT','Robotics','AR/VR','Blockchain — subject to verification'],
};
export const activityTabs=[
{id:'codewars',title:'CodeWars',category:'CODING COMPETITION',description:'A coding event included in the supplied brief. Dates, format and participation await confirmation.',evidence:'Official event record pending.'},
{id:'workshops',title:'Workshops',category:'LEARN BY DOING',description:'Hands-on sessions across engineering and technology. Approved schedules and technical topics will appear here.',evidence:'Session photographs, speakers and outcomes pending.'},
{id:'research',title:'Research events',category:'QUESTIONS INTO DISCOVERY',description:'A space for research presentations, academic exchanges and technical discussions.',evidence:'Verified research event records pending.'},
{id:'coding',title:'Coding events',category:'PRACTICE & COMPETE',description:'Community programming sessions and problem-solving events, documented through collective participation.',evidence:'Contest dates and participation pending.'},
{id:'talks',title:'Technical talks',category:'ENGINEERING PERSPECTIVES',description:'Knowledge exchange with engineering professionals and technical communities.',evidence:'Speaker identities and session outcomes pending.'},
{id:'innovation',title:'Innovation activities',category:'IDEAS INTO PROTOTYPES',description:'Student-led initiatives that explore a problem, test an approach and develop a prototype.',evidence:'Activity details and verified project outcomes pending.'},
];
export const primaryLeadership = ['Director, Placement Cell',].map(designation=>({designation,name:null as string|null,message:null as string|null,photo:null as string|null}));

