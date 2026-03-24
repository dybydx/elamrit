import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Maps to existing Elamrit utilities in `app.css` (@layer components).
 * No default shadcn theme — these classes carry all brand styling.
 */
export const buttonVariants = cva('', {
  variants: {
    variant: {
      primary: 'btn-primary',
      ghost: 'btn-ghost',
      cream: 'btn-cream',
      green: 'btn-green',
      outlineCream: 'btn-outline-cream',
      outlineCta: 'btn-outline-cta',
      /** Gallery intro row — pairs with `.gallery-intro a::after` in `app.css`. */
      linkDarkRed:
        'flex items-center gap-2.5 font-body text-[11px] tracking-[0.25em] text-dark-red uppercase',
      /** About story CTA — pairs with `.story-link` rules in `app.css`. */
      storyLink: 'story-link',
      /** Main nav quote CTA — pairs with `#mainNav .nav-cta` in `app.css`. */
      navCta: 'nav-cta',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
