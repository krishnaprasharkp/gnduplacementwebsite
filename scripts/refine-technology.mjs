import fs from 'node:fs';
const p='app/page.tsx';let s=fs.readFileSync(p,'utf8');
s="import {TechnologyShowcase,Certifications} from '@/components/site/technology-showcase';\n"+s;
s=s.replace(/<section className="soft-section">[\s\S]*?<\/section>/,'<TechnologyShowcase/><Certifications/>');fs.writeFileSync(p,s);
const q='app/leadership/page.tsx';s=fs.readFileSync(q,'utf8').replace('<><PageHero','<><div className="director-heading"><PageHero').replace('/><div className="wrap leadership-recognition">','/></div><div className="wrap leadership-recognition">');fs.writeFileSync(q,s);
