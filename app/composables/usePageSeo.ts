export const usePageSeo=(options: {
  title: string;
  description: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}) => {
  const { locale }=useI18n();
  const route=useRoute();
  const siteUrl='https://mapa-unternehmensberatung.de';

  const currentPath=route.path;
  const canonicalUrl=`${siteUrl}${currentPath}`;

  const imageUrl=options.image
    ? `${siteUrl}${options.image}`
    :`${siteUrl}/og-image.jpg`;

  const locales=['de', 'en', 'pl'];
  const hreflangLinks=locales.map(loc => {
    const path=currentPath.replace(`/${locale.value}`, `/${loc}`);
    return {
      rel: 'alternate',
      hreflang: loc,
      href: `${siteUrl}${path}`
    };
  });

  hreflangLinks.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: `${siteUrl}/de${currentPath.replace(`/${locale.value}`, '')}`
  });

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: options.type||'website',
    ogUrl: canonicalUrl,
    ogImage: imageUrl,
    ogLocale: locale.value==='de'? 'de_DE':locale.value==='en'? 'en_US':'pl_PL',
    ogSiteName: 'MaPa Consulting',
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: imageUrl,
    robots: options.noindex? 'noindex, follow':undefined
  });

  useHead({
    link: [
      { rel: 'canonical', href: canonicalUrl },
      ...hreflangLinks
    ]
  });
};
