import assert from 'node:assert/strict';
import {validateEnquiry,submitEnquiry,recruitmentConfig} from './lib/recruitment.ts';
const valid={companyName:'Example Organisation',companyWebsite:'https://example.org',recruiterName:'Example Recruiter',designation:'Recruiter',email:'hr@example.org',recruitmentType:'Internship',role:'Engineering intern'};
assert.deepEqual(validateEnquiry(valid,true,null),{});
const errors=validateEnquiry({...valid,companyWebsite:'javascript:alert(1)',email:'bad',openings:'-1',cgpa:'11',preferredDate:'2020-01-01'},false,{name:'payload.exe',size:100});
for(const key of ['companyWebsite','email','openings','cgpa','preferredDate','authorised','jd'])assert.ok(errors[key],key);
assert.ok(validateEnquiry(valid,true,{name:'large.pdf',size:6*1024*1024}).jd);
assert.equal((await submitEnquiry(valid,true,null)).status,'unavailable');
const originalFetch=globalThis.fetch;
recruitmentConfig.endpoint='/api/recruitment';
try{
 globalThis.fetch=async()=>new Response(JSON.stringify({success:false}),{status:200});
 await assert.rejects(()=>submitEnquiry(valid,true,null),/not confirmed/);
 globalThis.fetch=async()=>new Response('Unavailable',{status:503});
 await assert.rejects(()=>submitEnquiry(valid,true,null),/could not accept/);
 globalThis.fetch=async()=>new Response(JSON.stringify({success:true,reference:'TEST-RECEIPT'}),{status:200});
 assert.deepEqual(await submitEnquiry(valid,true,null),{status:'success',reference:'TEST-RECEIPT'});
}finally{globalThis.fetch=originalFetch;recruitmentConfig.endpoint=null;}
console.log('Recruitment validation and delivery-state checks passed. No network requests were made.');
