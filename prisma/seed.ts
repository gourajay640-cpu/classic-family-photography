import { PrismaClient, EventType, TeamRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

const p = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash('admin123', 12);
  
  await p.user.upsert({
    where: { email: 'admin@classicfamilyphotography.com' },
    update: {},
    create: {
      email: 'admin@classicfamilyphotography.com',
      name: 'Studio Admin',
      passwordHash: hash,
    },
  });

  await p.studioSettings.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      phone: '+91 99999 99999',
      whatsapp: '919999999999',
      email: 'hello@classicfamilyphotography.com',
      address: 'Bhopal, Madhya Pradesh, India',
      workingHours: 'Monday–Saturday, 9:00 AM–9:00 PM',
    },
  });

  if ((await p.package.count()) === 0) {
    await p.package.createMany({
      data: [
        {
          name: 'Classic Wedding Package',
          price: 60000,
          description: 'A timeless wedding coverage package.',
          features: ['Candid Photography', 'Traditional Photography', 'Wedding Cinematography', 'Highlight Film'],
        },
        {
          name: 'Premium Wedding Package',
          price: 100000,
          description: 'Full-service coverage for the complete celebration.',
          features: ['Candid Photography', 'Traditional Photography', 'Cinematography', 'Pre-Wedding', 'Drone Coverage', 'Highlight Film'],
        },
      ],
    });
  }

  if ((await p.teamMember.count()) === 0) {
    await p.teamMember.createMany({
      data: [
        { name: 'Amit', role: TeamRole.PHOTOGRAPHER },
        { name: 'Rohit', role: TeamRole.VIDEOGRAPHER },
        { name: 'Sameer', role: TeamRole.CINEMATOGRAPHER },
      ],
    });
  }

  // Purani demo images ko clear karke nayi local images load karne ke liye
  await p.galleryImage.deleteMany({});

  // APNI CLOCKED PHOTOS KE NAAM SKE ACCORDING CHANGE KAREIN
  const imgs = [
    '/uploads/wedding-1.jpg',
    '/uploads/bride-groom.jpg',
    '/uploads/pre-wedding.jpg',
    '/uploads/cinematic.jpg',
    '/uploads/modelling.jpg',
    '/uploads/reception.jpg',
  ];

  const cats = ['Weddings', 'Weddings', 'Pre-Wedding', 'Cinematography', 'Modelling', 'Events'];
  const titles = ['Wedding Ceremony', 'Bride & Groom Portrait', 'Pre-Wedding Couple Shoot', 'Cinematic Wedding', 'Model Portfolio', 'Reception'];

  for (let i = 0; i < imgs.length; i++) {
    await p.galleryImage.create({
      data: {
        title: titles[i],
        category: cats[i],
        url: imgs[i],
        featured: i < 4,
      },
    });
  }
}

main().finally(() => p.$disconnect());