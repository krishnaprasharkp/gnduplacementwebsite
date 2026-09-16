'use client';
import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs';
import {activityTabs} from '@/data/redesign';
export function ActivityTimeline(){return <Tabs defaultValue="codewars" className="activity-timeline"><TabsList variant="line" className="activity-tabs" aria-label="Explore student activities">{activityTabs.map(a=><TabsTrigger key={a.id} value={a.id}>{a.title}</TabsTrigger>)}</TabsList>{activityTabs.map((a,i)=><TabsContent key={a.id} value={a.id} className="activity-panel"><span className="activity-number">0{i+1}</span><div><div className="eyebrow">{a.category}</div><h3>{a.title}</h3><p>{a.description}</p><small>{a.evidence}</small></div><div className="activity-date">DATE & PARTICIPATION<span>To be verified</span></div></TabsContent>)}</Tabs>}
