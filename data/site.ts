export const pending = '[To be verified]';
export const university = { name: 'Guru Nanak Dev University', location: 'Amritsar, Punjab, India', website: 'https://www.gndu.ac.in/', crest: "/images/gndu-logo.png", campusImage: null };
export const navigation = [{label:"Home",href:"/"},{label:"About GNDU",href:"/about"},{label:"Events",href:"/culture"},{label:"Technology",href:"/technology"},{label:"Recruiters",href:"/recruiters"},{label:"Recent Drives",href:"/recent-drives"},{label:"Upcoming Companies",href:"/upcoming-companies"},{label:"Leadership",href:"/leadership"}];
export const credibility = ['NAAC Accreditation','Established','Engineering Disciplines','Recruitment Year','Location'].map(label=>({label,value:label==='Location'?'Amritsar, Punjab':pending}));
export const statistics = ['Engineering Students','Technical Projects','Internship Experiences','Hackathons & Technical Events','Industry Engagements','Recruiters'].map(label=>({label,value:null as number|null,status:'pending' as const}));
export type Domain = {name:string;category:string;description:string;technologies:string[];projects:number|null;work:string;involvement:string};
export const domains:Domain[] = [
{name:'Artificial Intelligence & Machine Learning',category:'AI/ML',description:'Model development, evaluation and responsible application of machine learning to practical problems.',technologies:['Python','PyTorch','scikit-learn'],projects:null,work:'Representative work awaits verification.',involvement:pending},
{name:'Software Engineering',category:'Software',description:'Reliable applications built around maintainable architecture, testing and collaborative development.',technologies:['Java','Python','Git','Testing'],projects:null,work:'Representative work awaits verification.',involvement:pending},
{name:'Cloud Computing',category:'Cloud',description:'Deploying and operating applications with attention to reliability, scalability and infrastructure.',technologies:['Containers','CI/CD','Cloud platforms'],projects:null,work:'Representative work awaits verification.',involvement:pending},
{name:'Data Engineering & Analytics',category:'Data',description:'Organising data pipelines, modelling information and translating analysis into useful decisions.',technologies:['SQL','Python','ETL','Visualisation'],projects:null,work:'Representative work awaits verification.',involvement:pending},
{name:'Cybersecurity',category:'Cybersecurity',description:'Understanding application and network security through threat analysis and defensive engineering.',technologies:['Linux','Network analysis','Secure coding'],projects:null,work:'Representative work awaits verification.',involvement:pending},
{name:'Web & Mobile Engineering',category:'Web/Mobile',description:'Accessible web and mobile experiences supported by APIs and well-structured application data.',technologies:['TypeScript','React','REST APIs'],projects:null,work:'Representative work awaits verification.',involvement:pending},
{name:'Systems Programming',category:'Systems',description:'Working close to the operating system, with attention to memory, concurrency and performance.',technologies:['C/C++','Linux','Concurrency'],projects:null,work:'Representative work awaits verification.',involvement:pending},
{name:'IoT & Emerging Technologies',category:'IoT',description:'Connecting sensors, embedded hardware and software to collect and respond to real-world signals.',technologies:['Embedded C','Sensors','MQTT'],projects:null,work:'Representative work awaits verification.',involvement:pending},
];
export type Event = {id:string;title:string;category:string;date:string|null;description:string;participation:string;speakers:string;topics:string;outcome:string;photo:string|null;source:string};
export const events:Event[] = [
{id:'cosmohacks',title:"CosmoHacks’25",category:'National-level hackathon',date:null,description:'A student-led hackathon connecting technical problem solving with engineering collaboration, organised within the Cosmogen Students Society ecosystem.',participation:'120+ participating teams',speakers:pending,topics:'Technical problem solving · Engineering collaboration',outcome:pending,photo:null,source:'Event title, national-level scope and participation supplied in the project brief; supporting documentation pending.'},
{id:'apple-talk',title:'Apple Software Engineering Tech Talk',category:'Industry knowledge exchange',date:null,description:'A forum for technical learning and professional engineering exchange. Speaker identities, session topics and outcomes await official confirmation.',participation:pending,speakers:pending,topics:pending,outcome:pending,photo:null,source:'Event title supplied in the project brief. This listing does not imply a recruitment partnership.'},
{id:'codewars',title:'CodeWars',category:'Coding competition',date:null,description:'Event details and supporting material will be added following university review.',participation:pending,speakers:pending,topics:pending,outcome:pending,photo:null,source:'Event name supplied in the project brief; details pending.'},
];
export const culture = ['Hackathons','Competitive programming','Research','Open source','Technical societies','Workshops','Engineering talks','Student-led initiatives'];
export const futureEvents = ['Hackathons','Coding competitions','Technical workshops','Guest engineering sessions','Research events','Student-led communities'];
export const recruiters: {name:string;logo:string;url?:string}[] = [];
export const recruitmentMetrics = ['Companies visiting campus','Offers','Internships','Placement percentage','Median / average CTC','Highest CTC'].map(label=>({label,value:null as number|null}));
export const reasons = [
{title:'Technical Foundations',description:'Discuss programme content and academic preparation against the knowledge your roles require.'},
{title:'Hands-on Engineering',description:'Evaluate project architecture, implementation decisions and problem-solving through technical discussions.'},
{title:'Cross-Domain Talent',description:'Define eligible disciplines and identify capabilities across software, data, systems and emerging technology.'},
{title:'Competitive & Innovation Culture',description:'Explore hackathons, student communities and research as contexts for collaborative problem solving.'},
{title:'Industry Exposure',description:'Review documented internships, engineering sessions and practical learning experiences.'},
{title:'End-to-End Recruitment Support',description:'Coordinate eligibility, assessments, interviews and offers with the university placement team.'},
];
export const processSteps = [
{title:'Share Requirement',description:'Share roles, hiring plans, location and the proposed compensation range.'},
{title:'Define Eligibility',description:'Agree on eligible disciplines, academic criteria and role-specific requirements.'},
{title:'Candidate Registration',description:'The placement team coordinates registration for eligible candidates.'},
{title:'Assessment',description:'Conduct your technical, coding or aptitude assessments.'},
{title:'Interviews',description:'Coordinate technical and professional interviews with the placement team.'},
{title:'Offers',description:'Communicate selections and coordinate offers under university policies.'},
];
export const screening = ['Academic / CGPA requirements','Eligible branches and disciplines','Coding and technical assessments','Aptitude requirements','Technical interviews','Role-specific requirements'];
export const infrastructure = ['Computer labs','Assessment facilities','Interview rooms','Auditoriums','Online assessment support','Placement coordination'];
export const leadership = ['University Leadership','Head of Department','Directorate of Placement & Career Enhancement'].map(designation=>({designation,name:null as string|null,message:null as string|null,photo:null as string|null,signature:null as string|null}));
export const contacts = [{department:'Directorate of Placement & Career Enhancement',name:null as string|null,designation:null as string|null,email:'placement@gndu.ac.in',phone:'0183-2257674'}];
export const achievements: {title:string;evidence:string;date:string}[] = [];



