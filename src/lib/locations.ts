/** Cities & regions linked from nav and home hero. */
export type NavLocation = {
  label: string;
  href: string;
  soon?: boolean;
};

export const NAV_LOCATIONS: NavLocation[] = [
  { label: 'Pune', href: '/catering-in/pune' },
  { label: 'Mumbai', href: '/catering-in/mumbai' },
  { label: 'Delhi', href: '/catering-in/delhi' },
  { label: 'Bangalore', href: '/catering-in/bangalore' },
  { label: 'Hyderabad', href: '/catering-in/hyderabad' },
  { label: 'Chennai', href: '/catering-in/chennai' },
  { label: 'Goa', href: '/catering-in/goa' },
  { label: 'Pan India', href: '/catering-in/pan-india' },
  { label: 'Singapore', href: '/catering-in/singapore', soon: true },
];

/** Cities shown in the home hero eyebrow, in display order. */
const HERO_EYEBROW_LABELS = ['Pune', 'Mumbai', 'Chennai', 'Pan India'] as const;

/** Active cities for compact hero eyebrow (excludes coming-soon). */
export function heroLocationsEyebrow(locations: NavLocation[] = NAV_LOCATIONS): string {
  return HERO_EYEBROW_LABELS.map(
    (label) => locations.find((loc) => loc.label === label && !loc.soon)?.label,
  )
    .filter((label): label is string => Boolean(label))
    .join(' \u00a0·\u00a0 ');
}
