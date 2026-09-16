import fs from 'node:fs';
let p='components/site/technology-showcase.tsx';let s=fs.readFileSync(p,'utf8');
s=s.replace("import {CertificationPathways} from './certification-pathways';\n",'');
s=s.replace("['Microsoft Azure','azure']];","['Microsoft Azure','azure'],['IBM','ibm'],['Cisco','cisco'],['Oracle','oracle'],['NVIDIA','nvidia'],['Salesforce','salesforce'],['Red Hat','redhat'],['MongoDB','mongodb'],['Databricks','databricks'],['Snowflake','snowflake'],['SAP','sap'],['Palo Alto Networks','paloaltonetworks'],['Fortinet','fortinet']];");
s=s.replace('<CertificationPathways/>','');fs.writeFileSync(p,s);
const text=fs.readFileSync('C:/Users/krish/.codex/attachments/205e6277-0d39-482e-8a0f-c4f81c7869ce/pasted-text.txt','utf8');
const paragraphs=text.split(/\r?\n\s*\r?\n/).map(t=>t.trim()).filter(Boolean);
const selected=paragraphs.filter(t=>/^(It is with|In alignment with|Responding proactively|GNDU is distinguished|As we move forward)/.test(t));
fs.writeFileSync('data/vice-chancellor.json',JSON.stringify({name:'Prof. (Dr.) Karamjeet Singh',designation:'Vice-Chancellor, Guru Nanak Dev University',paragraphs:[...new Set(selected)]},null,2));
