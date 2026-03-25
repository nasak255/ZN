# نشر Verity AI على Vercel

دليل شامل لنشر تطبيق Verity AI على منصة Vercel.

## المتطلبات الأساسية

- حساب GitHub
- حساب Vercel (يمكن إنشاؤه باستخدام حساب GitHub)
- Node.js 18 أو أحدث

## خطوات النشر

### 1. إعداد المستودع على GitHub

```bash
# تأكد من أن جميع التغييرات مرفوعة
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. الربط مع Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. انقر على "New Project"
3. اختر "Import Git Repository"
4. ابحث عن مستودع `ZN` وانقر على "Import"

### 3. إعدادات المشروع

#### متغيرات البيئة (Environment Variables)

أضف المتغيرات التالية في لوحة تحكم Vercel:

```
NEXT_PUBLIC_APP_NAME=Verity AI
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

#### إعدادات البناء

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4. النشر

بعد إكمال الخطوات السابقة، سيتم نشر التطبيق تلقائياً عند كل push إلى الفرع الرئيسي.

## التحقق من النشر

بعد النشر، تحقق من:

1. **الصفحة الرئيسية**: تأكد من تحميل الصفحة بشكل صحيح
2. **الاستجابة السريعة**: تحقق من سرعة التحميل
3. **دعم الجوال**: اختبر على أجهزة مختلفة
4. **واجهة المستخدم**: تأكد من عمل جميع الأزرار والتفاعلات

## استكشاف الأخطاء

### مشكلة: فشل البناء

- تحقق من السجلات في Vercel Dashboard
- تأكد من أن جميع التبعيات مثبتة بشكل صحيح
- تأكد من عدم وجود أخطاء TypeScript

### مشكلة: الصفحة لا تحمل

- امسح ذاكرة التخزين المؤقت (Cache)
- تحقق من متغيرات البيئة
- تحقق من أن جميع الملفات موجودة

### مشكلة: بطء الأداء

- تحقق من حجم الحزمة (Bundle Size)
- استخدم Vercel Analytics لتحديد الاختناقات
- قم بتحسين الصور والموارد

## الصيانة المستمرة

1. **المراقبة**: استخدم Vercel Analytics لمراقبة الأداء
2. **التحديثات**: قم بتحديث التبعيات بانتظام
3. **النسخ الاحتياطية**: احتفظ بنسخة احتياطية من الكود

## موارد إضافية

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel CLI](https://vercel.com/cli)

---

**ملاحظة**: تأكد من أن جميع البيانات الحساسة (مثل مفاتيح API) محفوظة في متغيرات البيئة ولا تُرفع إلى المستودع.
