export const recruitmentConfig = {
  // Set a same-origin API route only after server-side validation, privacy review,
  // rate limiting, document scanning and a real delivery/storage integration exist.
  endpoint: null as string | null,
  maxDocumentBytes: 5 * 1024 * 1024,
  allowedExtensions: ['pdf', 'doc', 'docx'],
  recruitmentTypes: ['Full-Time', 'Internship', 'Internship + PPO', 'Both'],
  spamProtection: 'Server-side rate limiting and bot verification must be configured before enabling the endpoint.',
};
export type EnquiryValues = Record<string,string>;
export type EnquiryErrors = Record<string,string>;
export const requiredFields = ['companyName','companyWebsite','recruiterName','designation','email','recruitmentType','role'];
export function validateEnquiry(values:EnquiryValues, authorised:boolean, file:{name:string;size:number}|null):EnquiryErrors {
  const errors:EnquiryErrors={};
  for(const key of requiredFields) if(!values[key]?.trim()) errors[key]='This field is required.';
  if(values.companyWebsite){try{const url=new URL(values.companyWebsite);if(!['https:','http:'].includes(url.protocol)||!url.hostname.includes('.'))errors.companyWebsite='Enter a company website beginning with https:// or http://.';}catch{errors.companyWebsite='Enter a valid website, including https://.';}}
  if(values.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))errors.email='Enter a valid official company email address.';
  if(values.recruitmentType&&!recruitmentConfig.recruitmentTypes.includes(values.recruitmentType))errors.recruitmentType='Choose one of the listed recruitment types.';
  if(values.phone&&!/^[+()\d\s.-]{7,25}$/.test(values.phone))errors.phone='Enter a valid contact number, including country code where applicable.';
  if(values.openings&&(!/^\d+$/.test(values.openings)||Number(values.openings)<1||Number(values.openings)>100000))errors.openings='Enter a whole number between 1 and 100,000.';
  if(values.cgpa&&(!Number.isFinite(Number(values.cgpa))||Number(values.cgpa)<0||Number(values.cgpa)>10))errors.cgpa='Enter a CGPA between 0 and 10.';
  if(values.batch&&!/^\d{4}$/.test(values.batch))errors.batch='Enter a four-digit graduation year.';
  if(values.preferredDate){const today=new Date();today.setHours(0,0,0,0);const date=new Date(values.preferredDate+'T00:00:00');if(Number.isNaN(date.getTime())||date<today)errors.preferredDate='Choose today or a future date.';}
  for(const[key,value]of Object.entries(values))if(value.length>5000)errors[key]='Use no more than 5,000 characters.';
  if(!authorised)errors.authorised='Confirm that you are authorised to submit this enquiry.';
  if(file){const extension=file.name.split('.').pop()?.toLowerCase()??'';if(!recruitmentConfig.allowedExtensions.includes(extension))errors.jd='Choose a PDF, DOC or DOCX document.';else if(file.size===0||file.size>recruitmentConfig.maxDocumentBytes)errors.jd='Choose a non-empty document no larger than 5 MB.';}
  return errors;
}
export type SubmissionResult = {status:'success';reference:string}|{status:'unavailable';message:string};
export async function submitEnquiry(values:EnquiryValues,authorised:boolean,file:File|null):Promise<SubmissionResult>{
  if(Object.keys(validateEnquiry(values,authorised,file)).length)throw new Error('Please correct the form before submitting.');
  if(values.companyFax)throw new Error('The enquiry could not be submitted. Please try again.');
  if(!recruitmentConfig.endpoint)return{status:'unavailable',message:'Your enquiry has not been sent. Online submissions are not enabled, and no information or document has been uploaded. Official placement contact details are awaiting verification.'};
  if(!recruitmentConfig.endpoint.startsWith('/')||recruitmentConfig.endpoint.startsWith('//'))throw new Error('The enquiry service is not configured correctly.');
  const payload=new FormData();for(const[key,value]of Object.entries(values))payload.set(key,value.trim());payload.set('authorised',String(authorised));if(file)payload.set('jd',file);
  let response:Response;try{response=await fetch(recruitmentConfig.endpoint,{method:'POST',body:payload,signal:AbortSignal.timeout(20000)});}catch{throw new Error('We could not confirm delivery. Your entries remain on this page. Please check with the placement team before retrying.');}
  if(!response.ok)throw new Error(response.status===429?'Too many requests. Please wait before trying again.':'The service could not accept the enquiry. Your entries remain on this page.');
  const data:unknown=await response.json();if(!data||typeof data!=='object'||!('success'in data)||data.success!==true||!('reference'in data)||typeof data.reference!=='string'||!data.reference.trim())throw new Error('Delivery was not confirmed by the service. Please contact the placement team before retrying.');
  return {status:'success',reference:data.reference};
}
