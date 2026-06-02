/**
 * Services, clients, rates, compliance — Honos Broucher.pdf
 * Corporate, contact, leadership — Zauba Corp / MCA registry
 * Listing details — Google Maps, Justdial, Facebook (verified public profiles)
 */

export const brand = {
  logo: '/brand/honos-logo.png',
  logoAlt: 'Honos Protection Services Pvt. Ltd. logo',
  colors: {
    navy: '#1B365D',
    red: '#E31E24',
  },
};

export const contact = {
  phones: [
    { label: 'Primary', display: '+91 99987 53728', tel: '+919998753728', source: 'Google' },
    { label: 'Alternate', display: '+91 90334 07777', tel: '+919033407777', source: 'Facebook' },
  ],
  phone: '+91 99987 53728',
  phoneTel: '+919998753728',
  phoneDisplay: '+91 99987 53728',
  email: 'vivekforce1@hotmail.com',
  emailAlt: 'vivekforce1.singh@gmail.com',
  website: 'https://honossecurities.com',
  whatsapp: true,
  category: 'Security guard service',
  ratings: {
    google: { score: 4.8, count: 12 },
    justdial: { score: 4.6, count: 22 },
  },
  hours: 'Opens 10:00 AM (Monday)',
  addressLines: [
    'Shop No. 314, Sanskruti AC Market',
    'Opp. Aastik Party Plot, Nr. Capital Square',
    'Puna Godadara Road, Parvat Patia',
    'Surat, Gujarat 395010, India',
  ],
  registeredAddress:
    'TF/314, Sanskruti Market, Near Capital Square, Village Parvat, Taluka Chorasi, Surat, Gujarat 395010',
  locatedIn: 'Capital Square',
  plusCode: '5VMC+XJ Surat, Gujarat',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Honos+protection+service+pvt+ltd+Surat+Gujarat',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Honos+protection+service+pvt+ltd,+Sanskruti+AC+Market,+BRTS+Road,+Magob,+Surat,+Gujarat+395010&hl=en&z=17&output=embed',
  appleMapUrl:
    'http://maps.apple.com/?q=Honos+protection+service+pvt+ltd+Surat+Gujarat',
  justdialUrl: 'https://www.justdial.com/Surat/Honos-Protection-Service-Pvt-Ltd',
};

export const company = {
  legalName: 'Honos Protection Services Pvt. Ltd.',
  legalNameFull: 'HONOS PROTECTION SERVICES PRIVATE LIMITED',
  shortName: 'Honos Protection Services',
  cin: 'U74999GJ2017PTC095095',
  registrationNumber: '095095',
  incorporated: '12 December 2017',
  yearsInBusiness: 9,
  companyClass: 'Private · Non-government company',
  status: 'Active',
  registrar: 'Registrar of Companies, Ahmedabad',
  authorizedCapital: '₹1,00,000',
  paidUpCapital: '₹1,00,000',
  nicCode: '7499 — Other business activities (commercial client services)',
  lastAgm: '30 December 2023',
  lastBalanceSheet: '31 March 2023',
  tagline: 'Professional and trained security guards and bouncers',
  taglineBrochure: 'Reliable, disciplined, and efficient security solutions',
  location: 'Surat, Gujarat 395010',
  description:
    'Honos Protection Services Pvt. Ltd. is a leading total manpower solution provider. We specialize in delivering integrated security, housekeeping, facility management, and trained personnel for industrial, commercial, residential, and government establishments.',
  presence:
    'We have a strong presence across 6 states in India and are trusted by reputed organizations for our professionalism and service quality.',
  sectors:
    'With strong experience across government and private sectors, we ensure safety, vigilance, and professionalism at all levels. Our 2000+ strong workforce stands ready to serve.',
  verified: true,
};

export const directors = [
  {
    name: 'Vivek Harihar Singh',
    role: 'Director',
    appointed: '12 January 2017',
    din: '07605568',
  },
  {
    name: 'Manoj Harihar Singh',
    role: 'Director',
    appointed: '15 October 2018',
    din: '07605559',
  },
];

export const whyChooseUs = [
  'ISO 9001:2015 & PSARA Certified',
  'Presence in 6 states across India',
  '2000+ strong verified workforce',
  'Total manpower solutions: Security, Housekeeping & Facility Management',
  'Experience with Government & Corporate clients',
];

export const services = [
  {
    num: '01',
    title: 'Comprehensive Guarding & Protection Services',
    points: [
      'Site supervision, access control, frisking, and premises protection',
      'Dedicated lady guards for female visitors and ladies\' areas',
      'Deployment of trained and licensed armed personnel (Gunmen)',
      'Physically fit bouncers and bodyguards for VIPs and corporate gatherings',
      'Event security, crowd control, and emergency handling for all scales',
      'Maintenance of registers and highly disciplined operations',
    ],
  },
  {
    num: '02',
    title: 'Housekeeping Services',
    points: [
      'Cleaning and maintenance of premises',
      'Office, industrial & residential housekeeping',
      'Washroom hygiene and waste management',
      'Deployment of trained housekeeping staff',
    ],
  },
  {
    num: '03',
    title: 'Manpower Outsourcing (All Categories)',
    points: [
      'Skilled, semi-skilled, and unskilled manpower',
      'Office staff and helpers',
      'Factory and warehouse workers',
      'Technical and non-technical staff',
      'Data entry operators',
      'Facility management staff',
    ],
  },
  {
    num: '04',
    title: 'Facility Management',
    points: [
      'Comprehensive facility upkeep',
      'Vendor coordination',
      'Routine maintenance operations',
      'Energy management and conservation',
    ],
  },
  {
    num: '05',
    title: 'Specialized Corporate Security',
    points: [
      'Executive protection',
      'Risk assessment & consulting',
      'Corporate intelligence',
      'Loss prevention strategies',
    ],
  },
  {
    num: '06',
    title: 'Technical & Maintenance Staff',
    points: [
      'Electricians and plumbers',
      'HVAC technicians',
      'General maintenance personnel',
      'Equipment operation staff',
    ],
  },
  {
    num: '07',
    title: 'Cash Management Services',
    points: [
      'Secure cash transit',
      'ATM replenishment & monitoring',
      'Cash vault security',
      'Highly trained armed escorts',
    ],
  },
];

export const training = {
  title: 'Training & Deployment',
  intro: 'Pre-deployment training for all personnel',
  items: [
    'Fire safety',
    'First aid',
    'Security procedures',
    'Public dealing',
    'Deployment under experienced supervision initially',
  ],
};

export const supervision = {
  title: 'Supervision System',
  items: [
    'Minimum 5 site visits per day by field officers',
    'Weekly visit to all sites',
    'Surprise inspections (day & night)',
    'Signed visit reports from client',
    'Regular communication with management',
  ],
};

export const industryCategories = [
  {
    name: 'Cinema & Multiplex',
    clients: [
      'Rajhans Cinema Precia',
      'Rajhans Cinema Aagam Viviana',
      'Roongta Cinema Althan',
      'Rajhans Cinema Sitanagar',
      'Rajhans Cinema Katargam',
      'Rajhans Multiplex Gopi Talav',
      'Rajhans Multiplex AR Mall',
      'Pragati Cinema Mota Varachha',
      'Rajhans Cinema Kamrej',
      'Rajhans cinema Bardoli',
      'Rajhans Cinema Velanja',
      'Rajhans Cinema Indore',
      'Rajhans Cinema Vyara',
    ],
  },
  {
    name: 'Malls & Textile Market',
    clients: [
      'Rajhans Flamingo Mall, Katargam',
      'AR Mall, Mota Varachha',
      'Millenium Business Hub – 1, Sarthana',
      'Rajhans Olympia, Bhatar',
      'Rajhans Unnati, Gopipura',
      'Rajhans Fabrizo, Parvat Patiya',
      'Rajhans Textile Market, Bhatena',
      'Vardhan Textile market, Parvat Patiya',
      'Hi-Tech Crest',
    ],
  },
  {
    name: 'Commercial & Corporate Offices',
    clients: [
      'Rajhans Empire, Magdalla',
      'The Junomoneta Tower, Adajan',
      'Red Fm Titanium Square, Adajan',
      'Red Fm Haripur, Vadodra',
      'Red Fm Alphaone Mall, Vastrapur',
      'Sanskruti AC Market',
    ],
  },
  {
    name: 'Residential',
    clients: [
      'Rajhans Cremona',
      'Rajhans Zorista',
      'Rajhans Cornello',
      'Reshma Row House',
      'Shripad Conchem, Sachin',
    ],
  },
  {
    name: 'Construction',
    clients: [
      'Rajhans Nexora',
      'Swarg Texpa',
      'Swarg Home',
      'Ananta Business Hub',
      'Palia Lifestyle',
      'Shree Rohit Corporation',
      'Amazia Amusement Park',
      'Ashirwad Farmhouse',
      'Prakash M. Bhanderi, Umiyadham',
      'Dilip Saroli Gowdown',
      'Rajhans Evana, Khopoli',
    ],
  },
  {
    name: 'Diamond & Jewellery Industry',
    clients: [
      'Grown one Tech, Sachin',
      'Dia Mension Lab, Pandesara',
      'Bhanderi Lab Grown Diamond LLP, Varachha',
      'Bhanderi Lab Grown Diamond Pvt. Ltd., Varachha',
      'Janvi Jewellers LLP, Katargam',
      'Rajwadi jewellers, Valsad',
      'Akshar Jewellers, Katargam',
      'Unique Lab, Parvat Gam',
      'Unique Lab Bhanderi House, Umiyadham',
      'Parekh Park Bhagal',
    ],
  },
  {
    name: 'Hotels & Hospitality',
    clients: [
      'Shilpi Hotel & Resort, Saputara',
      'La casa lucido Club, Parvat Patiya',
      'La Imperial Hotel, Parvat Patiya',
      'Augusta Club & Resort, Kamrej',
    ],
  },
  {
    name: 'Institutional Sector',
    clients: [
      'Saputara International School, Saputara',
      'Maheshwari Public School, Ladvi',
      'Sadhana School, Varachha',
    ],
  },
  {
    name: 'Factory & Treatment Plants',
    clients: [
      'Sahaj Velvet, Hojiwala Sachin',
      'Saistar Impex Pvt. Ltd., devadhgam',
      'Moduco Innovation Pvt. Ltd., Palsana',
      'Beil Infrastructure Pvt. Ltd., Juhapur Ahmedabad',
      'Beil Infrastructure Pvt. Ltd., Jaspura Ahmedabad',
      'Beil Infrastructure Pvt. Ltd., Vinzol Ahmedabad',
    ],
  },
  {
    name: 'Hospital',
    clients: ['Kasturba Hospital, Valsad'],
  },
  {
    name: 'Public Infrastructure',
    clients: ['Iconic Road, Magdalla', 'Dindoli Flower Garden, Dindoli'],
  },
  {
    name: 'Retail Stores & Showrooms',
    clients: ['Luxury Retail Stores', 'Apparel & Saree Showrooms', 'Jewelry Boutiques'],
  },
  {
    name: 'Central Government / PSU',
    clients: [
      'Western Railway, Vadodara',
      'Archaeological Survey of India (ASI), Vadodara',
      'Income Tax Department, Bharuch',
      'Directorate General of Lighthouses & Lightships, Jamnagar',
      'Employees State Insurance Corporation (ESIC), Vadodara',
      'Software Technology Parks of India (STPI), Surat & Gandhinagar',
      'Rail Vikas Nigam Limited (RVNL), Vadodara',
    ],
  },
  {
    name: 'State Government Departments',
    clients: [
      'Banaskantha District Panchayat',
      'Forest Department (Social Forestry Division, Surat)',
      'Government Institutions',
      'Government Engineering College, Dahod',
      'Government Polytechnic College, Kheda',
      'Government ITI, Jam Jodhpur (Jamnagar)',
      'Government ITI, Tilakwada (Narmada)',
      'Government ITI, Kubernagar (Ahmedabad)',
      'Surat Urban Development Authority (SUDA)',
    ],
  },
  {
    name: 'Aviation & Airports',
    clients: [
      'Regional Airports',
      'Aviation Training Centers',
      'Cargo Terminals',
    ],
  },
  {
    name: 'Manufacturing Plants',
    clients: [
      'Automotive Plants',
      'Steel & Metal Works',
      'Textile Mills',
    ],
  },
];

export const terms = [
  'Duty Hours: 8/12 Hours (as per requirement)',
  'Monthly billing cycle',
  'Minimum wages will be as per Government norms',
  'Replacement of staff within 24 hours (if required)',
  'All statutory compliances (PF, ESI, Bonus, etc.) included',
];

export const rates = [
  {
    position: 'Security Supervisor',
    wage: 22800,
    serviceCharge: 2280,
    total: 25080,
  },
  {
    position: 'Security Guard',
    wage: 19200,
    serviceCharge: 1920,
    total: 21120,
  },
];

export const conclusion = [
  'We assure you of our best services at all times with a strong focus on discipline, reliability, and professionalism.',
  'Our team is committed to maintaining high standards of security and ensuring complete satisfaction at your premises.',
  'We look forward to the opportunity to serve your organization and build a long-term professional relationship.',
  'We assure prompt deployment and dedicated service support at all times.',
  'We assure disciplined manpower, strict supervision, and zero compromise on security standards.',
];

export const enquiryTypes = services.map((s) => s.title);
