// ─────────────────────────────────────────────────────────────────────────────
//  THERAPIST CONFIG  ← THE ONLY FILE YOU NEED TO EDIT PER THERAPIST
//
//  Steps to publish a new site:
//  1. Drop the therapist's photo in  public/images/
//  2. Fill in the object below
//  3. Run  npm run dev  – done. No other file needs to change.
// ─────────────────────────────────────────────────────────────────────────────

export interface Service {
  icon: string   // lucide-react icon name (PascalCase)
  title: string
  description: string
}

/**
 * Full color scale for the site theme.
 * 50–900  : light → dark shades (used as bg, border, text, button colors)
 * bg      : page background (usually same as 50)
 * gradStart / gradEnd : gradient text colors (dark → light)
 */
export interface Palette {
  '50': string;  '100': string; '200': string; '300': string; '400': string
  '500': string; '600': string; '700': string; '800': string; '900': string
  bg: string
  gradStart: string
  gradEnd: string
}

export interface TherapistData {
  name: string
  title: string
  credentials: string
  tagline: string
  heroHeadline: string        // two lines separated by \n
  heroSubtext: string
  aboutText: string[]         // 2-3 paragraphs
  specialties: string[]       // shown as pills in Hero
  services: Service[]         // exactly 6
  highlights: { icon: string; label: string }[]  // 3 items (address auto-appended)
  stats: { experience: string; clients: string; satisfaction: string }
  heroImage: string           // /images/filename.ext  or  https://…
  profileImage: string
  palette: Palette
  whatsappNumber: string      // international digits only, e.g. 972501234567
  email: string
  address: string
  trustLogos: { name: string; abbr: string }[]
}

// ─── ACTIVE THERAPIST ────────────────────────────────────────────────────────
const therapistData: TherapistData = {
  name: 'דפנה לחוביץ׳',
  title: 'מטפלת רגשית CBT ומומחית למערכות יחסים',
  credentials: 'מטפלת רגשית מוסמכת CBT | מומחית לשיקום ממערכות יחסים רעילות',
  tagline: 'ניצוצות של שינוי – מלווה אותך לחיים של חופש ובחירה',
  heroHeadline: 'להשתחרר מהעבר,\nלבחור בעצמך מחדש',
  heroSubtext:
    'אני מאמינה שבכל אחד מאיתנו קיים הכוח לשינוי. אני כאן כדי להעניק לך את הכלים המקצועיים והמרחב הבטוח לשקם את הביטחון העצמי ולצאת לדרך חדשה.',
  aboutText: [
    'שמי דפנה לחוביץ׳, מטפלת רגשית CBT מוסמכת גם מטעם איגוד המטפלים הארצי בישראל. אני בעלת קליניקה פרטית בפתח תקווה ומלווה מטופלים גם אונליין.',
    'אני מתמחה בטיפול בטראומה, פוסט-טראומה, חרדות, העצמה אישית, אובדן, וליווי ותמיכה לגיל הזהב. המומחיות המרכזית שלי היא עבודה עם נשים וגברים בתהליכי יציאה ושיקום ממערכות יחסים רעילות - נרקיסיסטיות.',
    'הטיפול שלי מתבצע תוך דגש על שינוי המחשבות השליליות שמעכבות אותך, והחלפתן בדפוסי פעולה שמקדמים את איכות החיים והשלווה הפנימית שלך.',
  ],
  specialties: [
    'טיפול CBT',
    'יחסים רעילים',
    'פוסט טראומה',
    'חרדה ולחץ',
    'העצמה נשית',
    'גיל הזהב',
  ],
  services: [
    {
      icon: 'ShieldCheck',
      title: 'שיקום מיחסים רעילים',
      description: 'ליווי ושיקום לאחר פרידה ממערכת יחסים נרקיסיסטית או רעילה.',
    },
    {
      icon: 'Brain',
      title: 'אימון CBT ממוקד',
      description: 'עבודה על דפוסי חשיבה, הפרעות אכילה, OCD והתמכרויות.',
    },
    {
      icon: 'Heart',
      title: 'העצמה וביטחון עצמי',
      description: 'חיזוק הערך העצמי ומציאת הקול הפנימי שלך מחדש.',
    },
    {
      icon: 'UserPlus',
      title: 'ליווי בגיל הזהב',
      description: 'תמיכה רגשית וליווי ייחודי מותאם לאתגרי הגיל השלישי.',
    },
    {
      icon: 'Video',
      title: 'טיפול אונליין',
      description: 'מפגשים ב-Zoom המאפשרים נגישות מלאה מכל מקום ובכל זמן.',
    },
    {
      icon: 'Users',
      title: 'טיפול קבוצתי',
      description: 'קבוצות תמיכה וסדנאות ממוקדות שינוי וצמיחה הדדית.',
    },
  ],
  highlights: [
    { icon: 'Award',        label: 'מטפלת CBT מוסמכת מטעם האיגוד הארצי' },
    { icon: 'Clock',        label: 'מומחית לשיקום ממערכות יחסים נרקיסיסטיות' },
    { icon: 'CheckCircle2', label: 'קליניקה בפתח תקווה + טיפול אונליין' },
  ],
  stats: {
    experience: '10+',
    clients:    '350+',
    satisfaction: '98%',
  },
  heroImage:    '/images/daphnaTherapist.jpg',
  profileImage: '/images/daphnaTherapist.jpg',

  // ── COLOR PALETTE ──────────────────────────────────────────────────────────
  // Sky Blue – trust, clarity, freedom, openness
  palette: {
    '50':  '#f0f9ff',
    '100': '#e0f2fe',
    '200': '#bae6fd',
    '300': '#7dd3fc',
    '400': '#38bdf8',
    '500': '#0ea5e9',
    '600': '#0284c7',   // ← primary interactive (buttons, icons)
    '700': '#0369a1',   // ← brand primary / hover
    '800': '#075985',
    '900': '#0c4a6e',
    bg:        '#f0f9ff',
    gradStart: '#0369a1',
    gradEnd:   '#38bdf8',
  },

  whatsappNumber: '972504001102',
  email:          'dafna@alternativli.co.il',
  address:        'פתח תקווה / אונליין',
  trustLogos: [
    { name: 'איגוד המטפלים הארצי', abbr: 'איגוד' },
    { name: 'מוסמכת CBT',          abbr: 'CBT' },
    { name: 'אלטרנטיבלי',          abbr: 'מומחית' },
  ],
}

export default therapistData
