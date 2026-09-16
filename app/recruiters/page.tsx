import Link from 'next/link';
import {PageHero} from '@/components/site/shared';
import {RecruiterMarquee} from '@/components/site/recruiter-marquee';
export const metadata={title:'Previous Recruiters',description:'Previous recruiters listed in the supplied GNDU university recruiter material.'};
export default function Recruiters(){return <><PageHero eyebrow="UNIVERSITY–INDUSTRY RELATIONS" title="Previous recruiters." description="Organisations included in the university recruiter list supplied for this portal."/><RecruiterMarquee/><div className="wrap recruiter-partner"><span>CAMPUS RECRUITMENT AT GNDU</span><Link className="button" href="/recruit">Recruit From GNDU <span>↗</span></Link></div></>}
