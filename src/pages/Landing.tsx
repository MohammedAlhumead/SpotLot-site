import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, MapPin, Car, Navigation2, Search, Languages,
  Globe, Shield, Zap, Star
} from "lucide-react";

// Import images from img folder
import logoImg from "@img/Logo.png";
import headerImg from "@img/header.png";
import searchImg from "@img/searshing f.png";
import parkImg from "@img/parking f.png";
import returnImg from "@img/return to car f.png";
import carsImg from "@img/manage cars f.png";
import devPhoto from "@img/photo2025.jpg";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function BehanceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#1969FF"/>
      <text x="12" y="17" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">
        Bē
      </text>
    </svg>
  );
}

type Lang = "ar" | "en";

const content = {
  ar: {
    dir: "rtl" as const,
    nav: {
      about: "عن المشروع",
      features: "المزايا",
      tryApp: "جرب التطبيق",
      developer: "المطور",
      tryBtn: "جرب التطبيق",
    },
    hero: {
      badge: "تطبيق ذكي لإدارة مواقف السيارات",
      title: ["ابحث.", "اركن.", "حدد."],
      titleAccent: 1,
      desc: "دليلك الذكي لتجاوز عناء المواقف المزدحمة. تطبيق يمنحك ملاحة دقيقة ترشدك للعودة لسيارتك بكل سهولة.",
      cta: "جرب التطبيق الآن",
      ctaSub: "استكشف المزايا",
    },
    about: {
      tag: "عن المشروع",
      title: "من الفكرة إلى التجربة",
      p1: "SpotLot هو مشروع تصميم واجهة وتجربة مستخدم (UI/UX) متكامل، يغطي كامل مراحل عملية التصميم — من تحليل المستخدمين وتوليد الأفكار والنمذجة الأولية، وصولاً إلى نموذج تفاعلي احترافي جاهز للعرض.",
      p2: "صُمم SpotLot لحل معاناة إيجاد سيارتك داخل المواقف الضخمة، حيث يقدم حلاً ذكياً لتثبيت موقع وقوفك، وإدارة مركباتك، والملاحة خطوة بخطوة للعودة إليها بكل سهولة وثقة.",
    },
    features: {
      tag: "المزايا",
      title: "كل ما تحتاجه، في مكانٍ واحد",
      items: [
        {
          icon: "search",
          title: "استكشف المواقف القريبة",
          desc: "خريطة تفاعلية حية تُظهر لك أقرب المواقف المتاحة مع بيانات التوافر الفوري وعدد الأماكن الشاغرة قبل أن تصل.",
        },
        {
          icon: "car",
          title: "حدد موقفك بدقة",
          desc: "اختر موقفك من مخطط الطابق بضغطة واحدة، وسجّل مكانك الدقيق مع الطابق والقسم دون أي جهد.",
        },
        {
          icon: "navigation",
          title: "عُد لسيارتك بلا تردد",
          desc: "نظام ملاحة داخلي دقيق يقودك مباشرةً إلى سيارتك في المواقف المتشعبة — لن تضطر لالتقاط صورة للأعمدة بعد الآن.",
        },
        {
          icon: "shield",
          title: "أدر سياراتك المتعددة",
          desc: "سجّل أكثر من سيارة وتابع موقف كل واحدة منها بشكل مستقل — مثالي للعائلات ورجال الأعمال.",
        },
      ],
    },
    prototype: {
      tag: "نموذج تفاعلي",
      title: "جرّب التطبيق بنفسك",
      desc: "تفاعل مع النموذج الأولي المبني بـ Figma مباشرةً من هنا.",
    },
    developer: {
      tag: "عن المطور",
      name: "محمد الحميد",
      nameEn: "Mohammed Alhumead",
      role: "Software Engineer | UI/UX Designer",
      bio: "متخصص في هندسة البرمجيات، وشغوف بتصميم واجهة وتجربة المستخدم (UI/UX) . أركز على تحويل الأفكار المعقدة إلى منتجات رقمية تفاعلية، بتصميم عصري، وأداء عالٍ، وتجربة مستخدم استثنائية.",
      linkedin: "LinkedIn",
      behance: "Behance",
    },
    footer: {
      rights: "جميع الحقوق محفوظة · تصميم محمد الحميد",
    },
  },

  en: {
    dir: "ltr" as const,
    nav: {
      about: "About",
      features: "Features",
      tryApp: "Try App",
      developer: "Developer",
      tryBtn: "Try the App",
    },
    hero: {
      badge: "Smart Parking Management App",
      title: ["find.", "park.", "pin."],
      titleAccent: 1,
      desc: "Your smart guide to navigating crowded parking lots with ease. An app that gives you precise navigation to return to your car effortlessly.",
      cta: "Try the App Now",
      ctaSub: "Explore Features",
    },
    about: {
      tag: "About",
      title: "From Problem to Experience",
      p1: "SpotLot is a complete UI/UX design project covering the full design process — from user analysis and ideation to prototyping, all the way to a professional interactive prototype ready for presentation.",
      p2: "SpotLot was designed to solve the struggle of finding your car in large parking lots, offering a smart solution for pinning your parking spot, managing your vehicles, and navigating step-by-step back to them with confidence.",
    },
    features: {
      tag: "Features",
      title: "Everything You Need, In One Place",
      items: [
        {
          icon: "search",
          title: "Discover Nearby Lots",
          desc: "An interactive live map showing the nearest available parking lots with real-time availability data before you even arrive.",
        },
        {
          icon: "car",
          title: "Pin Your Spot Precisely",
          desc: "Select your spot from the floor plan with one tap, recording your exact location including floor and section — effortlessly.",
        },
        {
          icon: "navigation",
          title: "Return Without Hesitation",
          desc: "A precise indoor navigation system guides you directly to your vehicle in complex garages — no more photographing pillar numbers.",
        },
        {
          icon: "shield",
          title: "Manage Multiple Vehicles",
          desc: "Register multiple cars and track each one's parking location independently — perfect for families and professionals.",
        },
      ],
    },
    prototype: {
      tag: "Interactive Prototype",
      title: "Try the App Yourself",
      desc: "Interact with the Figma prototype directly from here.",
    },
    developer: {
      tag: "About the Developer",
      name: "Mohammed ALhumead",
      nameEn: "Mohammed ALhumead",
      role: "Software Engineer | UI/UX Designer",
      bio: "A Software Engineering professional passionate about UI/UX design. I focus on transforming complex ideas into interactive digital products with modern designs, high performance, and an exceptional user experience.",
      linkedin: "LinkedIn",
      behance: "Behance",
    },
    footer: {
      rights: "All rights reserved · Designed by Mohammed Alhumead",
    },
  },
};

const featureImages = [searchImg, parkImg, returnImg, carsImg];
const featureIcons = [Search, Car, Navigation2, Shield];

const FADE_UP = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("ar");

  const t = content[lang];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  return (
    <div
      className="min-h-screen bg-[#0C1220] text-white overflow-x-hidden"
      style={{ fontFamily: lang === "ar" ? "'Cairo', 'Plus Jakarta Sans', sans-serif" : "'Plus Jakarta Sans', 'Cairo', sans-serif" }}
      dir={t.dir}
    >

      {/* ─── NAV ─────────────────────────────────────────── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0C1220]/90 backdrop-blur-xl border-b border-[#2ECC71]/15 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5">
            <img src={logoImg} alt="SpotLot" className="h-9 w-9 object-contain" />
            <span className="text-[1.25rem] font-black tracking-tight">SpotLot</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: t.nav.about, href: "#about" },
              { label: t.nav.features, href: "#features" },
              { label: t.nav.tryApp, href: "#prototype" },
              { label: t.nav.developer, href: "#developer" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-semibold text-white/55 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-1.5 text-sm font-bold text-[#2ECC71] border border-[#2ECC71]/30 px-3 py-1.5 rounded-full hover:bg-[#2ECC71]/10 transition-all"
              data-testid="button-lang-toggle"
            >
              <Languages size={15} />
              {lang === "ar" ? "EN" : "عربي"}
            </button>

            <a
              href="#prototype"
              className="bg-[#2ECC71] text-[#0C1220] font-black px-5 py-2 rounded-full text-sm hover:bg-[#27ae60] transition-all shadow-[0_0_20px_rgba(46,204,113,0.3)]"
              data-testid="button-nav-cta"
            >
              {t.nav.tryBtn}
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="text-[#2ECC71] text-xs font-bold border border-[#2ECC71]/30 px-2.5 py-1 rounded-full"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>
            <button onClick={() => setMenuOpen(true)} className="text-white" data-testid="button-mobile-menu">
              <Menu size={25} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: t.dir === "rtl" ? "100%" : "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: t.dir === "rtl" ? "100%" : "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[60] bg-[#0C1220] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <img src={logoImg} alt="SpotLot" className="h-9 w-9 object-contain" />
                <span className="text-xl font-black">SpotLot</span>
              </div>
              <button onClick={() => setMenuOpen(false)} data-testid="button-close-menu"><X size={25} /></button>
            </div>
            <div className="flex flex-col gap-6 text-lg font-bold">
              {[
                { label: t.nav.about, href: "#about" },
                { label: t.nav.features, href: "#features" },
                { label: t.nav.tryApp, href: "#prototype" },
                { label: t.nav.developer, href: "#developer" },
              ].map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── HERO ────────────────────────────────────────── */}
      <section id="hero" className="relative pt-24 md:pt-32 pb-16 px-6 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#2ECC71]/6 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[140px] pointer-events-none" />

        <div className={`max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center`}>

          {/* Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="flex flex-col gap-6 order-1"
          >
            <motion.div variants={FADE_UP}>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#2ECC71] bg-[#2ECC71]/10 border border-[#2ECC71]/20 px-4 py-2 rounded-full">
                <Zap size={13} />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.div variants={FADE_UP} className="flex flex-col gap-1">
              {t.hero.title.map((line, i) => (
                <h1
                  key={i}
                  className={`font-black leading-[1.15] tracking-tight ${i === t.hero.titleAccent ? "text-[#2ECC71]" : "text-white"} text-4xl md:text-5xl lg:text-6xl`}
                >
                  {line}
                </h1>
              ))}
            </motion.div>

            <motion.p variants={FADE_UP} className="text-white/55 text-base md:text-lg leading-loose max-w-lg">
              {t.hero.desc}
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-wrap gap-3 mt-2">
              <a
                href="#prototype"
                className="inline-flex items-center gap-2 bg-[#2ECC71] text-[#0C1220] font-black px-7 py-3.5 rounded-xl text-base hover:bg-[#27ae60] transition-all shadow-[0_0_28px_rgba(46,204,113,0.25)] hover:shadow-[0_0_40px_rgba(46,204,113,0.4)]"
                data-testid="button-hero-cta"
              >
                {t.hero.cta}
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-white/60 font-semibold px-7 py-3.5 rounded-xl border border-[#2ECC71]/20 hover:bg-[#2ECC71]/8 hover:border-[#2ECC71]/40 transition-all text-base"
                data-testid="button-hero-secondary"
              >
                {t.hero.ctaSub}
              </a>
            </motion.div>

            {/* Stars */}
            <motion.div variants={FADE_UP} className="flex items-center gap-3 mt-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#2ECC71] text-[#2ECC71]" />)}
              </div>
              <span className="text-white/35 text-sm font-medium">
                {lang === "ar" ? "تجربة تصميم استثنائية" : "Exceptional design experience"}
              </span>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: t.dir === "rtl" ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center order-2"
          >
            <div className="absolute inset-0 bg-[#2ECC71]/8 blur-[100px] rounded-full pointer-events-none" />
            <motion.img
              src={headerImg}
              alt="SpotLot App Screens"
              whileHover={{ scale: 1.04, rotate: -1 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl cursor-pointer"
              data-testid="img-hero"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ───────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-28 px-6 border-y border-[#2ECC71]/10 bg-[#0f1929]/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={STAGGER}
          >
            <motion.p variants={FADE_UP} className="text-[#2ECC71] text-xs font-black tracking-widest uppercase mb-4">
              {t.about.tag}
            </motion.p>
            <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-black text-white mb-10">
              {t.about.title}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={FADE_UP} className="bg-white/3 border border-[#2ECC71]/15 rounded-2xl p-7 hover:border-[#2ECC71]/30 transition-all">
                <Globe className="text-[#2ECC71] mb-4" size={28} />
                <p className="text-white/60 text-base leading-loose">{t.about.p1}</p>
              </motion.div>
              <motion.div variants={FADE_UP} className="bg-white/3 border border-[#2ECC71]/15 rounded-2xl p-7 hover:border-[#2ECC71]/30 transition-all">
                <MapPin className="text-[#2ECC71] mb-4" size={28} />
                <p className="text-white/60 text-base leading-loose">{t.about.p2}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={STAGGER}
            className="mb-16 space-y-3"
          >
            <motion.p variants={FADE_UP} className="text-[#2ECC71] text-xs font-black tracking-widest uppercase">
              {t.features.tag}
            </motion.p>
            <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-black text-white">
              {t.features.title}
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {t.features.items.map((feat, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
                  className="group flex items-center gap-5 bg-white/[0.03] border border-[#2ECC71]/10 rounded-2xl p-5 hover:border-[#2ECC71]/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  {/* Phone image */}
                  <div className="shrink-0 relative">
                    <div className="absolute inset-0 bg-[#2ECC71]/8 blur-[40px] rounded-full pointer-events-none" />
                    <motion.img
                      src={featureImages[i]}
                      alt={feat.title}
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                      className="relative z-10 w-28 md:w-32 h-auto object-contain drop-shadow-xl cursor-pointer"
                      data-testid={`img-feature-${i}`}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 space-y-2.5 min-w-0">
                    <div className="inline-flex items-center gap-2 bg-[#2ECC71]/10 text-[#2ECC71] px-3 py-1.5 rounded-lg">
                      <Icon size={15} strokeWidth={2} />
                      <span className="text-xs font-black">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-black text-white leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed text-xs md:text-sm">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROTOTYPE ───────────────────────────────────── */}
      <section id="prototype" className="py-20 md:py-28 px-6 border-y border-[#2ECC71]/10 bg-[#0f1929]/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={STAGGER}
            className="mb-12 space-y-3"
          >
            <motion.p variants={FADE_UP} className="text-[#2ECC71] text-xs font-black tracking-widest uppercase">
              {t.prototype.tag}
            </motion.p>
            <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-black text-white">
              {t.prototype.title}
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-white/50 text-base max-w-xl">
              {t.prototype.desc}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#2ECC71]/4 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-[#2ECC71]/15 shadow-2xl bg-[#0a101c">
              <div className="flex items-center gap-3 px-5 py-3 border-b border-[#2ECC71]/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-[#2ECC71]/60" />
                </div>
                <span className="text-white/25 text-xs font-mono">figma.com · SpotLot</span>
              </div>
              <iframe
                style={{ border: "none" }}
                width="100%"
                height="580"
                src="https://embed.figma.com/proto/166BJbD3iJX3E9crbGouLh/SpotLot?page-id=28%3A10&node-id=28-11&viewport=-1938%2C77%2C0.92&scaling=scale-down&content-scaling=fixed&embed-host=share"
                allowFullScreen
                title="SpotLot Figma Prototype"
                data-testid="iframe-prototype"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── DEVELOPER ───────────────────────────────────── */}
      <section id="developer" className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={STAGGER}
            className="mb-12 space-y-3"
          >
            <motion.p variants={FADE_UP} className="text-[#2ECC71] text-xs font-black tracking-widest uppercase">
              {t.developer.tag}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/4 via-transparent to-blue-600/3 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative border border-[#2ECC71]/15 bg-white/[0.02] backdrop-blur-sm rounded-3xl p-8 md:p-12 hover:border-[#2ECC71]/30 transition-all">
              <div className={`flex flex-col md:flex-row items-center gap-10 ${t.dir === "rtl" ? "md:flex-row" : "md:flex-row"}`}>

                {/* Photo */}
                <div className="shrink-0 relative">
                  <div className="absolute inset-0 bg-[#2ECC71]/15 rounded-full blur-2xl" />
                  <motion.img
                    src={devPhoto}
                    alt={t.developer.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative z-10 w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-[3px] border-[#2ECC71]/35 shadow-2xl cursor-pointer"
                    data-testid="img-developer"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 space-y-5 text-center md:text-start">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-white">{t.developer.name}</h2>
                    <p className="text-[#2ECC71] font-bold text-sm mt-1">{t.developer.role}</p>
                  </div>
                  <p className="text-white/50 leading-loose text-base max-w-lg">{t.developer.bio}</p>
                  <div className="flex items-center gap-3 justify-center md:justify-start flex-wrap">
                    <a
                      href="https://www.linkedin.com/in/mohammed-alhumead-6398b23bb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#006397] text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
                      data-testid="link-linkedin"
                    >
                      <LinkedinIcon size={15} />
                      {t.developer.linkedin}
                    </a>
                    <a
                      href="https://www.behance.net/78206d4c"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1769ff] hover:bg-[#1257e0] text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
                      data-testid="link-behance"
                    >
                      <BehanceIcon size={15} />
                      {t.developer.behance}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────── */}
      <footer className="border-t border-[#2ECC71]/10 bg-[#090e18] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="SpotLot" className="h-8 w-8 object-contain" />
            <span className="font-black text-white">SpotLot</span>
            <span className="text-[#2ECC71] text-sm font-bold mx-1">·</span>
            <span className="text-[#2ECC71] text-sm font-semibold">Find. Park. Pin.</span>
          </div>
          <p className="text-white/25 text-xs">{t.footer.rights}</p>
          <div className="flex items-center gap-5 text-white/35 text-xs font-medium">
            <a href="#about" className="hover:text-white/70 transition-colors">{t.nav.about}</a>
            <a href="#features" className="hover:text-white/70 transition-colors">{t.nav.features}</a>
            <a href="#prototype" className="hover:text-white/70 transition-colors">{t.nav.tryApp}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
