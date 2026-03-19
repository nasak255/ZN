'use client';

import React, { useState } from 'react';
import { Search, Shield, BarChart3, Globe, Languages, Zap, Loader2, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    status: 'trusted' | 'suspicious' | 'misleading';
    sentiment: string;
    virality: string;
  }>(null);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const handleAnalyze = () => {
    if (!query) return;
    setIsAnalyzing(true);
    setResult(null);
    
    // Mock analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        score: 85,
        status: 'trusted',
        sentiment: lang === 'ar' ? 'إيجابي / محايد' : 'Positive / Neutral',
        virality: lang === 'ar' ? 'متوسطة' : 'Medium'
      });
    }, 2000);
  };

  const t = {
    ar: {
      title: "حلل مصداقية المحتوى باستخدام",
      ai: "الذكاء الاصطناعي",
      desc: "منصة Verity AI توفر لك رؤى عميقة حول النصوص والروابط والصور لضمان السلامة الرقمية ونزاهة المعلومات.",
      placeholder: "أدخل نصاً أو رابطاً للتحليل...",
      button: "حلل الآن",
      features: "المميزات",
      start: "ابدأ الآن",
      why: "لماذا Verity AI؟",
      whyDesc: "أدوات متطورة لمحاربة المعلومات المضللة",
      score: "درجة المصداقية",
      sentiment: "تحليل المشاعر",
      virality: "توقع الانتشار",
      status: "الحالة",
      trusted: "موثوق",
      analyzing: "جاري التحليل...",
      results: "نتائج التحليل"
    },
    en: {
      title: "Analyze Content Credibility with",
      ai: "AI Power",
      desc: "Verity AI platform provides deep insights into text, URLs, and images to ensure digital safety and information integrity.",
      placeholder: "Enter text or URL to analyze...",
      button: "Analyze Now",
      features: "Features",
      start: "Get Started",
      why: "Why Verity AI?",
      whyDesc: "Advanced tools to combat misinformation",
      score: "Credibility Score",
      sentiment: "Sentiment Analysis",
      virality: "Virality Prediction",
      status: "Status",
      trusted: "Trusted",
      analyzing: "Analyzing...",
      results: "Analysis Results"
    }
  }[lang];

  return (
    <div className={cn("min-h-screen bg-background text-foreground flex flex-col", lang === 'ar' ? "font-sans" : "")} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">Verity AI</span>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
            >
              <Languages className="h-4 w-4" />
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
            <a href="#features" className="hidden md:block text-sm font-medium hover:text-primary transition-colors">{t.features}</a>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              {t.start}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-4 text-center bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            {t.title} <span className="text-primary">{t.ai}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.desc}
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.placeholder} 
                  className="w-full h-14 pl-12 pr-12 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <Search className={cn("absolute top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5", lang === 'ar' ? "right-4" : "left-4")} />
              </div>
              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing || !query}
                className="bg-primary text-primary-foreground h-14 px-8 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isAnalyzing ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
                {isAnalyzing ? t.analyzing : t.button}
              </button>
            </div>

            {/* Analysis Results Mockup */}
            {result && (
              <div className="w-full max-w-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="bg-card border rounded-3xl p-8 shadow-2xl text-right">
                  <div className={cn("flex items-center gap-3 mb-6", lang === 'ar' ? "flex-row" : "flex-row-reverse")}>
                    <h3 className="text-2xl font-bold">{t.results}</h3>
                    <div className="h-px flex-1 bg-border"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-2xl">
                        <span className="font-medium">{t.score}</span>
                        <span className="text-2xl font-bold text-green-600">%{result.score}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-2xl">
                        <span className="font-medium">{t.status}</span>
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle2 className="h-5 w-5" />
                          <span className="font-bold">{t.trusted}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-2xl">
                        <span className="font-medium">{t.sentiment}</span>
                        <span className="font-bold">{result.sentiment}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-2xl">
                        <span className="font-medium">{t.virality}</span>
                        <span className="font-bold">{result.virality}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.why}</h2>
            <p className="text-muted-foreground">{t.whyDesc}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Globe className="h-6 w-6" />}
              title={lang === 'ar' ? "تحليل متعدد الوسائط" : "Multi-modal Analysis"}
              description={lang === 'ar' ? "تحليل النصوص، الروابط، والصور بدقة عالية باستخدام نماذج متقدمة." : "High-precision analysis of text, URLs, and images using advanced models."}
            />
            <FeatureCard 
              icon={<BarChart3 className="h-6 w-6" />}
              title={t.score}
              description={lang === 'ar' ? "احصل على تقييم رقمي واضح يوضح مدى موثوقية المحتوى ومصادره." : "Get a clear digital score indicating content reliability and sources."}
            />
            <FeatureCard 
              icon={<Zap className="h-6 w-6" />}
              title={t.virality}
              description={lang === 'ar' ? "التنبؤ بمدى احتمالية انتشار المحتوى بشكل واسع عبر منصات التواصل." : "Predict the likelihood of content going viral across social platforms."}
            />
            <FeatureCard 
              icon={<Languages className="h-6 w-6" />}
              title={lang === 'ar' ? "دعم لغات متعددة" : "Multi-language Support"}
              description={lang === 'ar' ? "دعم كامل للغتين العربية والإنجليزية لفهم سياق المحتوى المحلي والعالمي." : "Full support for Arabic and English to understand local and global context."}
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6" />}
              title={lang === 'ar' ? "تطبيق PWA" : "PWA Ready"}
              description={lang === 'ar' ? "قابل للتثبيت كتطبيق هاتف لسهولة الوصول في أي وقت ومن أي مكان." : "Installable as a mobile app for quick access anytime, anywhere."}
            />
            <FeatureCard 
              icon={<Info className="h-6 w-6" />}
              title={t.sentiment}
              description={lang === 'ar' ? "فهم النبرة الأساسية والتأثير العاطفي للمحتوى المكتوب أو المرئي." : "Understand the underlying tone and emotional impact of written or visual content."}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-12 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Verity AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Verity AI. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl border bg-card hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
