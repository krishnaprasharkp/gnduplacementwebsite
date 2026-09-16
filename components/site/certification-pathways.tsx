const providers=[
 ['IBM','ibm','https://www.ibm.com/training/'],
 ['Cisco','cisco','https://www.cisco.com/site/us/en/learn/training-certifications/certifications/index.html'],
 ['Oracle','oracle','https://www.oracle.com/education/certification/'],
 ['NVIDIA','nvidia','https://www.nvidia.com/en-us/learn/certification/'],
 ['Salesforce','salesforce','https://trailhead.salesforce.com/credentials'],
 ['Red Hat','redhat','https://www.redhat.com/en/services/certifications'],
 ['MongoDB','mongodb','https://learn.mongodb.com/pages/certification-program'],
 ['Databricks','databricks','https://www.databricks.com/learn/certification'],
 ['Snowflake','snowflake','https://www.snowflake.com/en/resources/learn/certifications/'],
 ['SAP','sap','https://learning.sap.com/certifications'],
 ['Palo Alto Networks','paloaltonetworks','https://www.paloaltonetworks.com/services/education/certification'],
 ['Fortinet','fortinet','https://www.fortinet.com/training-certification']
];
export function CertificationPathways(){return <div className="further-learning"><h3>Explore more certification pathways</h3><p>Discover professional credentials in cloud, AI, enterprise software, data and cybersecurity.</p><div className="certification-grid additional-certifications">{providers.map(([name,file,url])=><a className="certification-brand" key={name} href={url} target="_blank" rel="noopener noreferrer"><img src={'/images/certifications/'+file+'.svg'} alt="" width={130} height={60} loading="lazy"/><span>{name} ↗</span></a>)}</div></div>}
