import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '@/lib/contact';

export const SITE_BRAND = 'Elamrit';
export const SITE_LEGAL_NAME = 'Elamrit Luxe Feast';
export const SITE_LOGO_PATH = '/apple-touch-icon.png';

/** Cities and regions served (local SEO / schema areaServed). */
export const AREA_SERVED = [
  'Pune',
  'Mumbai',
  'Delhi NCR',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Goa',
  'Pan India',
] as const;

/** Set when live profiles exist; footer icons render only for non-empty URLs. */
export const SOCIAL_URLS: Record<'instagram' | 'facebook' | 'linkedin', string> = {
  instagram: '',
  facebook: '',
  linkedin: '',
};

export const SITE_PHONE_SCHEMA = CONTACT_PHONE_TEL.replace('tel:', '');
export const SITE_EMAIL = CONTACT_EMAIL;
export const SITE_PHONE_DISPLAY = CONTACT_PHONE_DISPLAY;

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;
