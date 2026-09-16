import fs from 'node:fs';
const map=JSON.parse(fs.readFileSync('data/recruiter-assets.json','utf8'));
const groups={b:[['EPAM','epam.svg','https://logotyp.us/logo/epam/'],['Fidelity International','fidelity.svg','https://careers.fidelityinternational.com/'],['DMart Ready','dmart.svg','https://www.dmart.in/'],['ICICI Prudential Life Insurance','icicipru.png','https://en.wikipedia.org/wiki/ICICI_Prudential_Life_Insurance'],['Jubilant','jubilant-hd.png','https://valoremadvisors.com/jubilant'],['ITC Limited','itc.svg','https://commons.wikimedia.org/wiki/File:ITC_Limited_Logo.svg']],c:[['Nagarro','nagarro.svg','https://www.nagarro.com/'],['Nucleus Software','nucleus.svg','https://www.nucleussoftware.com/'],['Panacea Biotec','panacea.webp','https://www.panaceabiotec.com/'],['SAP','sap.svg','https://commons.wikimedia.org/wiki/File:SAP_2011_logo.svg'],['Deloitte','deloitte-black.svg','https://www.deloitte.com/'],['Stylumia','stylumia.png','https://www.stylumia.ai/'],['SBI Mutual Fund','sbi.svg','https://www.sbimf.com/'],['SRF','srf.svg','https://www.srf.com/'],['Tech Mahindra','techmahindra.png','https://www.techmahindra.com/'],['IOL','iol.webp','https://www.iolcp.com/'],['Bharat Electronics','bel.png','https://bel-india.in/'],['Wipro','wipro.svg','https://www.wipro.com/'],['Zscaler','zscaler.svg','https://www.zscaler.com/']],a:[['Azim Premji Foundation','apf-0-1-Image8.jpg','https://azimpremjiuniversity.edu.in/media/resources/Media-Kit-English-18-June-2025.pdf']]};
for(const [group,items] of Object.entries(groups)) for(const [name,file,sourcePage] of items){
 const bytes=fs.readFileSync(`C:/Users/krish/AppData/Local/Temp/gndu-logos-${group}/${file}`);
 let ext=file.split('.').pop();
 if(/<svg[\s>]/i.test(bytes.toString()))ext='svg';else if(bytes.subarray(0,4).toString()==='RIFF')ext='webp';else if(bytes[0]===137)ext='png';else if(bytes[0]===255)ext='jpg';else throw Error('Invalid logo '+name);
 const dest=name.toLowerCase().replace(/[^a-z0-9]+/g,'-')+'.'+ext;
 fs.writeFileSync('public/images/recruiters/'+dest,bytes);
 map[name]={src:'/images/recruiters/'+dest,sourcePage,format:ext,needsDarkBackground:false};
}
for(const [name,file,sourcePage] of [['Tata Consultancy Services','tcs.jpg','https://commons.wikimedia.org/wiki/File:TCS_Logo_(cropped).jpg'],['Nestlé','nestle.svg','https://commons.wikimedia.org/wiki/File:Nestl%C3%A9_textlogo.svg'],['Infosys','infosys.svg','https://commons.wikimedia.org/wiki/File:Infosys_logo.svg']]) map[name]={src:'/images/recruiters/'+file,sourcePage,needsDarkBackground:false};
fs.writeFileSync('data/recruiter-assets.json',JSON.stringify(map,null,2)+'\n');
console.log(Object.keys(map).length+' logos connected');
