export const translations = {
  en: {
    header: {
      name: "Aviran Katz",
      title: "Senior Frontend Contractor",
      cta: {
        audit: "Start Audit (paid)",
        packages: "See Packages"
      }
    },
    hero: {
      title: "FROM VIBE-CODED TO PRODUCTION-GRADE",
      subtitle: "You’ve built something people use. Now make it reliable, fast, and scalable.",
      description: "I turn scrappy Airtable, Google Sheets, WordPress, JetEngine, Fireberry, Make, and Zapier builds into robust products with clean data models, snappy UIs, and predictable operations.",
      outcomes: [
        { title: "Faster", desc: "Sub-second interactions, smooth lists." },
        { title: "Safer", desc: "Backups, migrations, data integrity." },
        { title: "Cheaper", desc: "Smarter infra, reduced tool sprawl." },
        { title: "Clear", desc: "Weekly shipping, transparent metrics." }
      ],
      cta: {
        packages: "See Packages",
        audit: "Start Audit (paid)"
      }
    },
    proof: {
      title: "PROOF",
      subtitle: "OF SCALE",
      sections: {
        myWork: {
          title: "My Work",
          desc: "Independent contracting for startups and SMEs.",
          clients: "Tel Aviv University, Technion, Private Founders."
        },
        sofi: {
          title: "Through Sofi Cooperative",
          desc: "Collaborative development for enterprise scale.",
          clients: "Lightricks, Run.ai."
        }
      },
      demo: {
        title: "SCALABLE ARCHITECTURE",
        caption: "Synthetic dataset generated client-side",
        controls: {
          filter: "Filter",
          sort: "Sort",
          reset: "Reset"
        },
        proves: [
          "Efficient list virtualization (10k+ items)",
          "Stable 60FPS rendering on main thread",
          "Accessible keyboard navigation",
          "Type-safe data handling"
        ]
      }
    },
    packages: {
      title: "PACKAGES &",
      subtitle: "PROCESS",
      list: [
        { id: 'audit', title: 'Audit', time: '1–2 weeks', desc: 'Deep-dive on stack. Architecture map, risk list, roadmap.' },
        { id: 'prod', title: 'Productionize', time: '3–6 weeks', desc: 'Data model, migrations, backend services, auth, backups.' },
        { id: 'scale', title: 'Scale', time: '2–4 weeks', desc: 'Indexing, caching, job queues, rate-limits, load-testing.' },
        { id: 'polish', title: 'Polish', time: '2–4 weeks', desc: 'UX refinements, accessibility, component library.' },
        { id: 'ai', title: 'AI Assist', time: '1–3 weeks', desc: 'Practical automations and chat interfaces. No hype.' },
      ],
      process: {
        title: "THE PROCESS",
        steps: [
          { title: "1. MAP", desc: "Understand goals & system." },
          { title: "2. STABILIZE", desc: "Fix reliability risks first." },
          { title: "3. ACCELERATE", desc: "Make interactions instant." },
          { title: "4. SCALE", desc: "Observability & guardrails." }
        ]
      },
      caseStudies: {
        title: "CASE STUDIES",
        items: [
          { title: "Airtable → Backend", desc: "Migrated inventory workflows to service + Postgres.", stats: ["Instant loading", "Reduced manual entry"] },
          { title: "WordPress/JetEngine → API", desc: "Split content and operations.", stats: ["Eliminated sync errors", "Lower hosting costs"] },
          { title: "Sheets + Zapier → Queue", desc: "Replaced brittle triggers with job queue.", stats: ["Reliable execution", "Full error visibility"] }
        ]
      }
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "Will you rebuild everything?", a: "No. We keep what works; we replace the parts that break." },
        { q: "How do we measure success?", a: "We agree on metrics upfront: p95 latencies, error rates, uptime, and unit costs." },
        { q: "Timeline & cost?", a: "Start with the Audit; it gives clear scope and options." },
        { q: "Tools we can keep?", a: "Yes—keep the tools that serve you; we decouple the rest." }
      ]
    },
    contact: {
      title: "READY TO UPGRADE?",
      email: "EMAIL ME",
      linkedin: "LINKEDIN",
      github: "GITHUB",
      location: "Israel-based. English/Hebrew. EMEA/US timezone overlap."
    },
    footer: {
      built: "BUILT WITH VITE + REACT + TAILWIND",
      habits: "Production habits: logs, metrics, alerts, backups, and runbooks by default."
    }
  },
  he: {
    header: {
      name: "אבירן כץ",
      title: "קבלן פרונט-אנד בכיר",
      cta: {
        audit: "התחל אודיט (בתשלום)",
        packages: "ראה חבילות"
      }
    },
    hero: {
      title: "מ-VIBE CODING ל-PRODUCTION GRADE",
      subtitle: "בניתם משהו שאנשים משתמשים בו. עכשיו בואו נהפוך אותו לאמין, מהיר וסקיילבילי.",
      description: "אני הופך בנייני Airtable, Google Sheets, WordPress, Make ו-Zapier למוצרים יציבים עם דאטה מסודר, ממשק מהיר ותפעול צפוי.",
      outcomes: [
        { title: "מהיר יותר", desc: "אינטראקציות מיידיות, רשימות חלקות." },
        { title: "בטוח יותר", desc: "גיבויים, מיגרציות, שלמות נתונים." },
        { title: "זול יותר", desc: "תשתית חכמה, צמצום כלי מיותרים." },
        { title: "ברור", desc: "שחרור גרסאות שבועי, מדדים שקופים." }
      ],
      cta: {
        packages: "ראה חבילות",
        audit: "התחל אודיט (בתשלום)"
      }
    },
    proof: {
      title: "הוכחת",
      subtitle: "יכולת",
      sections: {
        myWork: {
          title: "העבודה שלי",
          desc: "פיתוח עצמאי לסטארטאפים ועסקים.",
          clients: "אוניברסיטת תל אביב, הטכניון, יזמים פרטיים."
        },
        sofi: {
          title: "דרך קואופרטיב סופי",
          desc: "פיתוח שיתופי בקנה מידה גדול.",
          clients: "Lightricks, Run.ai."
        }
      },
      demo: {
        title: "ארכיטקטורה סקיילבילית",
        caption: "דאטה סינתטי שנוצר בצד-לקוח",
        controls: {
          filter: "סינון",
          sort: "מיון",
          reset: "איפוס"
        },
        proves: [
          "וירטואליזציה יעילה (10k+ פריטים)",
          "רינדור יציב ב-60FPS",
          "ניווט מקלדת נגיש",
          "טיפול בטוח במידע (Type-safe)"
        ]
      }
    },
    packages: {
      title: "חבילות",
      subtitle: "ותהליך",
      list: [
        { id: 'audit', title: 'אודיט (Audit)', time: '1–2 שבועות', desc: 'צלילה לעומק הסטאק. מפת ארכיטקטורה, רשימת סיכונים, מפת דרכים.' },
        { id: 'prod', title: 'פרודקשן (Productionize)', time: '3–6 שבועות', desc: 'מודל נתונים, מיגרציות, שירותי באקנד, אימות משתמשים, גיבויים.' },
        { id: 'scale', title: 'סקייל (Scale)', time: '2–4 שבועות', desc: 'אינדקסים, caching, תורים, rate-limits, בדיקות עומסים.' },
        { id: 'polish', title: 'פוליש (Polish)', time: '2–4 שבועות', desc: 'שיפורי UX, נגישות, ספריית קומפוננטות.' },
        { id: 'ai', title: 'עוזרי AI', time: '1–3 שבועות', desc: 'אוטומציות פרקטיות וממשקי צ׳אט שעוזרים באמת.' },
      ],
      process: {
        title: "התהליך",
        steps: [
          { title: "1. מיפוי", desc: "הבנת המטרות והמערכת." },
          { title: "2. ייצוב", desc: "תיקון סיכוני אמינות תחילה." },
          { title: "3. האצה", desc: "הופכים אינטראקציות למיידיות." },
          { title: "4. סקייל", desc: "ניטור ומגבלות בטיחות." }
        ]
      },
      caseStudies: {
        title: "מקרי בוחן",
        items: [
          { title: "Airtable ← Backend", desc: "מיגרציית מלאי לשירות + Postgres.", stats: ["טעינה מיידית", "צמצום הזנה ידנית"] },
          { title: "WordPress/JetEngine → API", desc: "הפרדת תוכן ותפעול.", stats: ["אפס שגיאות סנכרון", "הוזלת עלויות אחסון"] },
          { title: "Sheets + Zapier → Queue", desc: "החלפת טריגרים שבירים בתור משימות.", stats: ["ביצוע אמין", "נראות מלאה לשגיאות"] }
        ]
      }
    },
    faq: {
      title: "שאלות נפוצות",
      items: [
        { q: "האם תבנה הכל מחדש?", a: "לא. שומרים את מה שעובד; מחליפים את מה שנשבר." },
        { q: "איך מודדים הצלחה?", a: "מסכימים על מדדים מראש: זמני תגובה (p95), אחוזי שגיאה, זמינות ועלויות." },
        { q: "לוחות זמנים ועלות?", a: "מתחילים עם האודיט; הוא נותן תמונת מצב ברורה ואפשרויות." },
        { q: "כלים שאפשר לשמור?", a: "כן—שומרים את הכלים שמשרתים אתכם; מנתקים את השאר." }
      ]
    },
    contact: {
      title: "מוכנים לשדרג?",
      email: "שלח מייל",
      linkedin: "לינקדאין",
      github: "גיטהאב",
      location: "מבוסס בישראל. עברית/אנגלית. חפיפה לשעות אירופה/ארה״ב."
    },
    footer: {
      built: "נבנה עם VITE + REACT + TAILWIND",
      habits: "הרגלי פרודקשן: לוגים, מטריקות, התראות, גיבויים ו-runbooks כברירת מחדל."
    }
  }
};
