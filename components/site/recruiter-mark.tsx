import type {RecruiterLogo} from '@/data/placements';
export function RecruiterMark({logo}:{logo:RecruiterLogo}){return logo.src?<img className={'recruiter-mark hd-logo '+(logo.needsDarkBackground?'logo-dark-surface':'')} src={logo.src} alt={logo.name} title={logo.name} width={172} height={71} decoding="async"/>:<span className="recruiter-name">{logo.name}</span>}
