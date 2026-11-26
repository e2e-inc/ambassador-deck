/** Turns an email address or a bare URL into a link target. */
export function contactHref(value?: string) {
  if (!value) return undefined;
  if (/^(https?:|mailto:)/.test(value)) return value;
  return value.includes("@") && !value.includes("/") ? `mailto:${value}` : `https://${value}`;
}

/** The contact as shown on a slide: no scheme, as e2e.com writes its links. */
export function contactLabel(value?: string) {
  return value?.replace(/^(https?:\/\/|mailto:)/, "");
}
