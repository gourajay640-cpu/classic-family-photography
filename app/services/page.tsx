import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services: [string, string, string, string, string[]][] = [
    [
      "01",
      "Weddings & Pre-Weddings",
      "Comprehensive photographic coverage captured with artistic flair, cinematic detail, and authentic emotion.",
      "Custom Quote",
      ["Full Day Coverage", "Cinematic Teaser & Feature Film", "High-Res Edited Gallery", "Custom Album"]
    ],
    [
      "02",
      "Modelling & Portraits",
      "High-fashion portraits, portfolio builders, and creative individual shoots tailored to your distinct aesthetic.",
      "Custom Quote",
      ["Studio / Outdoor Location", "Professional Retouching", "Digital Delivery", "Multiple Looks"]
    ],
    [
      "03",
      "Birthdays & Family Events",
      "Timeless memory capture for family milestones, celebrations, and intimate gatherings.",
      "Custom Quote",
      ["Event Coverage", "Candid Captures", "Group Photographs", "Online Shareable Gallery"]
    ]
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="page-hero">
        <div className="shell">
          <div className="eyebrow">Services</div>
          <h1>Beautiful coverage,<br />without the fuss.</h1>
        </div>
      </section>

      <section className="section">
        <div className="shell" style={{ display: 'grid', gap: 22 }}>
          {services.map(([num, title, desc, price, items]) => {
            const itemKey = String(title);
            return (
              <article 
                className="card-premium" 
                key={itemKey} 
                style={{ padding: '34px 32px', display: 'grid', gridTemplateColumns: '100px 1.25fr .9fr', gap: 30, alignItems: 'start' }}
              >
                <div className="eyebrow">{num}</div>
                <div>
                  <h2 className="serif" style={{ fontSize: '2.3rem', fontWeight: 400, margin: 0 }}>{title}</h2>
                  <p className="muted" style={{ lineHeight: 1.7, marginTop: 12, maxWidth: 580 }}>{desc}</p>
                  <ul style={{ display: 'grid', gap: 8, marginTop: 18, padding: 0, listStyle: 'none' }}>
                    {items.map(item => (
                      <li key={item} style={{ display: 'flex', gap: 9, alignItems: 'center', fontSize: '.9rem' }}>
                        <CheckCircle2 size={15} color="var(--gold)" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="muted" style={{ fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase' }}>
                    Investment
                  </div>
                  <div className="serif" style={{ fontSize: '1.9rem', marginTop: 6 }}>{price}</div>
                  <a href="/booking" className="text-link" style={{ justifyContent: 'flex-end', marginTop: 22 }}>
                    Check availability <ArrowRight size={15}/>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}