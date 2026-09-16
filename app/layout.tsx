import type { Metadata } from 'next';
import {Header} from '@/components/site/header';
import {ModernFooter} from '@/components/site/modern-footer';
import {Motion} from '@/components/site/motion';
import './globals.css';
import './redesign.css';
import './refinements.css';
export const metadata: Metadata = { title: { default: 'Corporate Recruitment & Engineering Talent | GNDU Amritsar', template: '%s | GNDU' }, description: 'Explore engineering capabilities, projects and campus recruitment at Guru Nanak Dev University, Amritsar.', openGraph: {title:'Corporate Recruitment & Engineering Talent | GNDU',description:'Engineering talent. Built beyond the classroom.',type:'website'},icons:{icon:'/images/gndu-logo.png'},robots:{index:false,follow:false} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><Motion/><Header/><main id="main">{children}</main><ModernFooter/></body></html>}



