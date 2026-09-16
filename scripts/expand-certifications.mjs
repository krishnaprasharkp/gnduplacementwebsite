import fs from 'node:fs';
const p='components/site/technology-showcase.tsx';let s=fs.readFileSync(p,'utf8');
s="import {CertificationPathways} from './certification-pathways';\n"+s;
s=s.replace(/<div className="further-learning">[\s\S]*?<\/div><\/div><\/section>/,'<CertificationPathways/></section>');fs.writeFileSync(p,s);
