import { ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  ['01','Wedding Photography','Candid storytelling, family portraits, rituals and the details that make your day unmistakably yours.','Starting from ₹60,000',['Candid + traditional coverage','Couple portraits','Family moments','Wedding rituals']],
  ['02','Wedding Films','Warm, story-led wedding films that feel cinematic without losing the honesty of the day.','Contact for pricing',['Highlight film','Full-event coverage','Audio-led storytelling','Optional drone coverage']],
  ['03','Cinematography','Editorial visuals and motion-led storytelling for couples who want a more cinematic finish.','Contact for pricing',['Story-first direction','Cinematic sequences','Creative transitions','Social-ready cuts']],
  ['04','Pre-Wedding','Location-led couple shoots built around movement, chemistry and a strong visual concept.','Starting from ₹25,000',['Location planning','Concept development','Multiple looks','Cinematic portraits']],
  ['05','Editorial / Modelling','Portfolio, fashion and editorial photography with a clean, premium visual language.','Contact for pricing',['Portfolio sessions','Fashion/editorial','Studio or location','Retouched final selects']],
  ['06','Couples & Events','Engagements, birthdays, receptions and celebrations photographed with the same editorial care.','Contact for pricing',['Event coverage','Couple portraits','Guest candids','Custom timelines']],
];

export default function Services() {
  return <main>
    <section className="page-hero"><div className="shell"><div className="eyebrow">Services</div><h1>Beautiful coverage,<br />without the fuss.</h1></div></section>
    <section className="section"><div className="shell" style={{display:'grid', gap:22}}>
      {services.map(([num, title, desc, price, items]) => <article className="card-premium" key={title} style={{padding:'34px 32px', display:'grid', gridTemplateColumns:'100px 1.25fr .9fr', gap:30, alignItems:'start'}}>
        <div className="eyebrow">{num}</div>
        <div><h2 className="serif" style={{fontSize:'2.3rem',fontWeight:400,margin:0}}>{title}</h2><p className="muted" style={{lineHeight:1.7,marginTop:12,maxWidth:580}}>{desc}</p><ul style={{display:'grid',gap:8,marginTop:18,padding:0,listStyle:'none'}}>{(items as string[]).map(item => <li key={item} style={{display:'flex',gap:9,alignItems:'center',fontSize:'.9rem'}}><CheckCircle2 size={15} color="var(--gold)" />{item}</li>)}</ul></div>
        <div style={{textAlign:'right'}}><div className="muted" style={{fontSize:'.72rem',letterSpacing:'.14em',textTransform:'uppercase'}}>Investment</div><div className="serif" style={{fontSize:'1.9rem',marginTop:6}}>{price}</div><a href="/booking" className="text-link" style={{justifyContent:'flex-end',marginTop:22}}>Check availability <ArrowRight size={15}/></a></div>
      </article>)}
    </div></section>
  </main>;
}
