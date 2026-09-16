import fs from 'node:fs';
const path='app/coding/page.tsx';let s=fs.readFileSync(path,'utf8');
s="import {CodingProgress} from '@/components/site/coding-progress';\n"+s;
s=s.replace('platforms,codingMetrics,milestones,codingCulture','platforms,codingMetrics,codingCulture');
s=s.replace('const maxActive=Math.max(1,...platforms.map(p=>p.active??0));','');
s=s.replace(/<section className="soft-section">[\s\S]*?<\/section>/,'<CodingProgress/>');
fs.writeFileSync(path,s);
