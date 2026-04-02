import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Small reusable button primitives live here to avoid repeating long
 * Tailwind class strings in page markup. Effect-heavy button rules that rely
 * on pseudo-elements still live in `app.css`.
 */
export const buttonVariants = cva('', {
  variants: {
    variant: {
      primary:
        'inline-flex items-center justify-center whitespace-nowrap bg-cream px-11 py-4 font-body text-[13px] leading-none tracking-[0.22em] text-dark-red uppercase transition-all duration-300 hover:bg-dark-red hover:text-cream',
      ghost: 'btn-ghost',
      cream:
        'inline-flex items-center justify-center whitespace-nowrap bg-cream px-9 py-3.5 font-body text-[13px] leading-none tracking-[0.18em] text-dark-red uppercase transition-all duration-300 hover:bg-dark-red hover:text-cream',
      green:
        'inline-flex w-fit items-center justify-center whitespace-nowrap bg-green px-9 py-3.5 font-body text-[13px] leading-none font-semibold tracking-[0.18em] text-dark-brown uppercase transition-all duration-300 hover:bg-cream',
      outlineCream:
        'inline-flex items-center justify-center whitespace-nowrap border border-cream/30 bg-transparent px-[38px] py-[15px] font-body text-[13px] leading-none tracking-[0.18em] text-cream uppercase transition-all duration-300 hover:border-cream',
      outlineCta:
        'inline-flex items-center justify-center whitespace-nowrap border border-dark-red/35 bg-transparent px-[38px] py-[15px] font-body text-[13px] leading-none tracking-[0.18em] text-dark-red uppercase transition-all duration-300 hover:border-dark-red hover:bg-cream/75',
      /** Gallery intro row CTA. */
      linkDarkRed:
        "flex items-center gap-2.5 font-body text-[13px] tracking-[0.22em] text-dark-red uppercase after:content-['→'] after:transition-transform after:duration-200 hover:after:translate-x-1",
      /** About story CTA — pairs with `.story-link` rules in `app.css`. */
      storyLink: 'story-link',
      /** Main nav quote CTA — keeps the hook for nav state selectors. */
      navCta:
      'nav-cta inline-flex min-h-[44px] items-center justify-center whitespace-nowrap border border-dark-red bg-dark-red px-[26px] py-3 font-body text-[13px] leading-none tracking-[0.16em] text-cream uppercase transition-all duration-300 hover:bg-cream hover:text-dark-red hover:shadow-[0_12px_30px_rgba(81,3,12,0.18)]',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
