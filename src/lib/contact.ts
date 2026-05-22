/** WhatsApp chat for quote and enquiries (+91 7972672518). */
const WHATSAPP_PHONE = '917972672518';

export const CONTACT_EMAIL = 'foodjunctioncaterers7@gmail.com';
export const CONTACT_PHONE_DISPLAY = '+91 79726 72518';
export const CONTACT_PHONE_TEL = `tel:+${WHATSAPP_PHONE}`;

const WHATSAPP_QUOTE_MESSAGE = [
  "Hi Elamrit, I'd like to request a catering quote.",
  '',
  'Occasion:',
  'Date:',
  'City / venue:',
  'Guest count:',
  '',
  'Thank you!',
].join('\n');

export const WHATSAPP_QUOTE_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_QUOTE_MESSAGE)}`;
