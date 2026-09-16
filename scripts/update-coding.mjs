import fs from 'node:fs';
const p='app/coding/page.tsx';let s=fs.readFileSync(p,'utf8');
s=s.replace("export default function Coding()", "const platformLogos:Record<string,string>={'LeetCode':'/images/coding/leetcode.svg','GeeksforGeeks':'/images/coding/geeksforgeeks.svg','CodeChef':'/images/coding/codechef.svg','Codeforces':'/images/coding/codeforces.svg','HackerRank':'/images/certifications/hackerrank.svg','GitHub':'/images/certifications/github.svg'};\nexport default function Coding()");
s=s.replace('<span>{p.initial}</span>','<img className="coding-platform-logo" src={platformLogos[p.name]} alt="" width={32} height={32}/>');
s=s.replace('Platforms shown as learning resources. GNDU participation and relationships are not implied; collective data awaits verification.','Explore coding practice, competitions and open-source learning across these platforms.');
s=s.replace('Aggregate participation only. No student names, rankings or unverified scores.','Collective problem solving, contest participation and open-source activity across our student community.');
s=s.replace("<strong>{m.value??'—'}</strong><span>{m.label}</span><small>Verified data pending</small>",'<strong>{m.value}</strong><span>{m.label}</span><small>{m.detail}</small>');
s=s.replace(' Verified activity data pending.','');fs.writeFileSync(p,s);
