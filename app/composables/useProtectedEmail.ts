// Contact e-mail kept out of prerendered HTML and out of the i18n bundle.
// It is assembled only in the browser after mount, so simple harvesters that
// scan HTML/JS for "x@y.tld" patterns never see it. Before mount (and without
// JavaScript) a human-readable obfuscated form is shown instead, so the
// Impressum still names the address (§ 5 DDG).
const USER='info';
const DOMAIN=['mapa-unternehmensberatung', 'de'];

export const useProtectedEmail=() => {
  const revealed=ref(false);

  onMounted(() => {
    revealed.value=true;
  });

  const address=computed(() =>
    revealed.value
      ? `${USER}${String.fromCharCode(64)}${DOMAIN.join('.')}`
      :`${USER} [at] ${DOMAIN.join(' [dot] ')}`
  );

  const mailto=(subject?: string) => {
    if(!revealed.value) return undefined;
    const query=subject? `?subject=${encodeURIComponent(subject)}`:'';
    return `mailto:${address.value}${query}`;
  };

  // HTML snippet for translations rendered with v-html (Impressum, Datenschutz)
  const html=computed(() =>
    revealed.value
      ? `<a href="${mailto()}">${address.value}</a>`
      :address.value
  );

  return { revealed, address, mailto, html };
};
