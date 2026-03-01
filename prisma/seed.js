const { PrismaClient } = require('@prisma/client')
const { PrismaLibSql } = require('@prisma/adapter-libsql')

const CAUSES_SEED = [
  {
    slug: 'education-for-all',
    title: 'Education for All',
    category: 'Education',
    icon: 'BookOpen',
    description: 'Providing quality education to 12,000+ underprivileged children in remote villages across Rajasthan and Bihar.',
    longDesc: 'Our education programme builds schools, trains teachers, provides digital learning tools, and offers scholarships so no child misses out due to poverty.',
    raised: 128500,
    goal: 200000,
    supporters: 1847,
    urgency: 'high',
    endDate: 'Dec 2025',
  },
  {
    slug: 'clean-water-access',
    title: 'Clean Water Access',
    category: 'Environment',
    icon: 'Droplets',
    description: 'Installing bore wells and water purification systems in 80+ drought-prone villages in Maharashtra and Madhya Pradesh.',
    longDesc: 'Access to clean water reduces waterborne diseases by 80%. We build infrastructure that lasts decades and train local communities to maintain it.',
    raised: 89200,
    goal: 150000,
    supporters: 1203,
    urgency: 'medium',
    endDate: 'Mar 2025',
  },
  {
    slug: 'medical-relief-fund',
    title: 'Medical Relief Fund',
    category: 'Healthcare',
    icon: 'HeartPulse',
    description: 'Supplying medicines, medical equipment, and funding mobile health camps for rural communities with no healthcare access.',
    longDesc: 'Our mobile health camps reach 500+ villages monthly, providing free consultations, medicines, and emergency care to those who cannot afford doctors.',
    raised: 203800,
    goal: 300000,
    supporters: 3241,
    urgency: 'critical',
    endDate: 'Jun 2025',
  },
  {
    slug: 'food-security-drive',
    title: 'Food Security Drive',
    category: 'Food',
    icon: 'Utensils',
    description: 'Providing nutritious meals to malnourished children and food-insecure families in urban slums and conflict zones.',
    longDesc: 'Our daily meal programme ensures 50,000 children receive nutritious food every day. We also run skill training for parents to achieve long-term food security.',
    raised: 72400,
    goal: 120000,
    supporters: 982,
    urgency: 'high',
    endDate: 'Sep 2025',
  },
  {
    slug: 'disaster-relief-response',
    title: 'Disaster Relief Response',
    category: 'Emergency',
    icon: 'AlertTriangle',
    description: 'Emergency relief for flood, earthquake, and cyclone victims — shelter, food, medicines, and rehabilitation support.',
    longDesc: 'We deploy within 24 hours of a disaster. Our trained response teams provide immediate relief and stay for long-term rehabilitation and community rebuilding.',
    raised: 156900,
    goal: 250000,
    supporters: 4102,
    urgency: 'critical',
    endDate: 'Ongoing',
  },
  {
    slug: 'women-empowerment',
    title: 'Women Empowerment',
    category: 'Social',
    icon: 'Users',
    description: 'Skill training, microfinance, and legal support for rural women — helping them achieve financial independence and dignity.',
    longDesc: 'We run vocational training centres, provide zero-interest microloans, offer legal aid for domestic abuse survivors, and support women entrepreneurs.',
    raised: 44700,
    goal: 80000,
    supporters: 623,
    urgency: 'medium',
    endDate: 'Nov 2025',
  },
]

const path = require('path')
const dbPath = path.resolve(__dirname, '..', 'dev.db').replace(/\\/g, '/')
const adapter = new PrismaLibSql({ url: `file:${dbPath}` })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Seeding causes...')
  for (const cause of CAUSES_SEED) {
    await prisma.cause.upsert({
      where: { slug: cause.slug },
      update: {},
      create: cause,
    })
  }
  console.log('Done seeding', CAUSES_SEED.length, 'causes.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
