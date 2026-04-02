import { cva, type VariantProps } from 'class-variance-authority';

/** Mirrors home services grid (accent bar + hover). */
const serviceCard =
  'service-card group relative cursor-pointer overflow-hidden rounded-sm border border-[rgba(189,148,118,0.38)] bg-cream px-9 py-11 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset,0_10px_36px_rgba(36,33,31,0.07)] transition-[background,border-color,box-shadow] duration-300 hover:border-dark-red/20 hover:shadow-[0_1px_0_rgba(255,255,255,0.75)_inset,0_16px_44px_rgba(81,3,12,0.1)]';

const foodJunctionFeature =
  'flex items-start gap-5 border border-[rgba(189,148,118,0.35)] border-l-[3px] border-l-green bg-[color-mix(in_srgb,var(--cream)_94%,var(--white)_6%)] px-6 py-5 shadow-[0_6px_28px_rgba(36,33,31,0.06)] transition-[border-color,background,box-shadow] duration-200 hover:border-dark-red/20 hover:border-l-dark-red hover:bg-cream hover:shadow-[0_10px_36px_rgba(81,3,12,0.08)]';

export const cardVariants = cva('', {
  variants: {
    variant: {
      /** Simple bordered cream panel — extend with `class` for padding. */
      default:
        'rounded-sm border border-[rgba(189,148,118,0.38)] bg-cream text-dark-brown',
      /** No base styles — full control via `class`. */
      bare: '',
      service: serviceCard,
      testimonial: 'testi-card relative bg-cream px-9 py-11',
      location:
        'location-card border border-[rgba(189,148,118,0.28)] bg-[rgba(255,248,240,0.94)] px-7 py-9 transition-all duration-300 hover:border-dark-red/22 hover:bg-cream',
      /** Singapore — same cream base as other cities; green only as a left accent (avoids green-on-green type). */
      locationSg:
        'location-card border border-[rgba(181,195,141,0.55)] border-l-[3px] border-l-green bg-light-blush px-7 py-9 transition-all duration-300 hover:border-dark-red/22 hover:bg-cream',
      /** About philosophy pillars — keep the variant self-contained. */
      pillar:
        'pillar relative border border-[rgba(189,148,118,0.28)] bg-cream px-10 py-[52px] shadow-[0_8px_28px_rgba(36,33,31,0.05)] transition-[background,border-color] duration-300 hover:border-[rgba(81,3,12,0.18)] hover:bg-[color-mix(in_srgb,var(--cream)_60%,var(--light-blush)_40%)]',
      /** Food Junction numbered feature rows. */
      foodJunction: foodJunctionFeature,
      /** Home experience section stat cells on dark red. */
      experienceTile: 'bg-cream/5 px-6 py-7',
      /** About stats grid cells. */
      statTile:
        'flex flex-col gap-2 border-t-[3px] border-dark-red bg-light-blush px-10 py-[52px]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type CardVariantProps = VariantProps<typeof cardVariants>;
