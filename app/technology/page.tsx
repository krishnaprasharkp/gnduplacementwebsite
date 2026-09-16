import {TechnologyShowcase,Certifications} from '@/components/site/technology-showcase';
import {PageHero} from '@/components/site/shared';
export const metadata={title:'Student Technologies & Certifications',description:'Explore the technology skills and certification landscape of GNDU students.'};
export default function Technology(){return <><div className="placement-page-heading"><PageHero eyebrow="ENGINEERING & TECHNOLOGY" title="Technologies our students work with." description="From artificial intelligence and cloud platforms to secure software and connected devices, our students develop skills across modern computing."/></div><TechnologyShowcase/><Certifications/></>}
