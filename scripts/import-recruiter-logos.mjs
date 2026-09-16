import fs from 'node:fs';
import path from 'node:path';
const aliases={'Amdocs':'Amdocs','Berger Paints India':'Berger Paints','Haldirams':'Haldiram’s','Info Edge India':'Info Edge','CG Power':'Crompton Greaves','CG Power/Crompton Greaves':'Crompton Greaves','CG Power and Industrial Solutions':'Crompton Greaves','Josh Technology Group (JTG)':'JTG','Josh Technology Group':'JTG','Khanna Paper Mills':'Khanna','Jubilant Agri & Consumer Products':'Jubilant','IOL Chemicals & Pharmaceuticals':'IOL','IOL Chemicals and Pharmaceuticals':'IOL','TCS':'Tata Consultancy Services','SRF Limited':'SRF','Bharat Electronics Limited':'Bharat Electronics','Federal Bank India':'Federal Bank','Nestle':'Nestlé'};
const output=JSON.parse(fs.readFileSync('data/recruiter-assets.json','utf8'));
for(const group of ['a','b','c']){
 const dir=`C:/Users/krish/AppData/Local/Temp/gndu-logos-${group}`;
 const manifest=fs.existsSync(path.join(dir,'manifest.json'))?path.join(dir,'manifest.json'):path.join(dir,'partial.json');
 if(!fs.existsSync(manifest))continue;
 const parsed=JSON.parse(fs.readFileSync(manifest,'utf8').replace(/^\uFEFF/,''));
 const records=Array.isArray(parsed)?parsed:parsed.logos??parsed.assets??[];
 for(const r of records){
  if(!r.localPath||!fs.existsSync(r.localPath))continue;
  if(r.dimensions&&r.dimensions[0]<200&&r.format!=='svg')continue;
  const buffer=fs.readFileSync(r.localPath);const prefix=buffer.toString();
  if(/<html[\s>]/i.test(prefix))continue;
  let format=path.extname(r.localPath).slice(1).toLowerCase();
  if(/<svg[\s>]/i.test(prefix))format='svg';else if(buffer.subarray(0,4).toString()==='RIFF')format='webp';else if(buffer[0]===137&&buffer[1]===80)format='png';else if(buffer[0]===255&&buffer[1]===216)format='jpg';else if(buffer.subarray(0,3).toString()==='GIF')format='gif';else continue;
  const name=aliases[r.name]??r.name;
  const filename=name.normalize('NFKD').replace(/[^a-zA-Z0-9]+/g,'-').replace(/^-|-$/g,'').toLowerCase()+'.'+format;
  fs.copyFileSync(r.localPath,path.join('public/images/recruiters',filename));
  output[name]={src:'/images/recruiters/'+filename,sourcePage:r.sourcePage,assetUrl:r.assetUrl,needsDarkBackground:r.needsDarkBackground??false,caveats:r.caveats??'',format};
 }
}
fs.writeFileSync('data/recruiter-assets.json',JSON.stringify(output,null,2)+'\n');
console.log('Imported '+Object.keys(output).length+' standalone recruiter logo assets.');

