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
        'inline-block bg-cream px-11 py-4 font-body text-[11px] tracking-[0.25em] text-dark-red uppercase transition-all duration-300 hover:bg-dark-red hover:text-cream',
      ghost: 'btn-ghost',
      cream:
        'inline-block bg-cream px-9 py-3.5 font-body text-[11px] tracking-[0.2em] text-dark-red uppercase transition-all duration-300 hover:bg-dark-red hover:text-cream',
      green:
        'inline-block w-fit bg-green px-9 py-3.5 font-body text-[11px] font-semibold tracking-[0.2em] text-dark-brown uppercase transition-all duration-300 hover:bg-cream',
      outlineCream:
        'inline-block border border-cream/30 bg-transparent px-[38px] py-[15px] font-body text-[11px] tracking-[0.2em] text-cream uppercase transition-all duration-300 hover:border-cream',
      outlineCta:
        'inline-block border border-dark-red/35 bg-transparent px-[38px] py-[15px] font-body text-[11px] tracking-[0.2em] text-dark-red uppercase transition-all duration-300 hover:border-dark-red hover:bg-cream/75',
      /** Gallery intro row CTA. */
      linkDarkRed:
        "flex items-center gap-2.5 font-body text-[11px] tracking-[0.25em] text-dark-red uppercase after:content-['→'] after:transition-transform after:duration-200 hover:after:translate-x-1",
      /** About story CTA — pairs with `.story-link` rules in `app.css`. */
      storyLink: 'story-link',
      /** Main nav quote CTA — keeps the hook for nav state selectors. */
      navCta:
      'nav-cta border border-dark-red bg-dark-red px-[26px] py-2.5 font-body text-[13px] tracking-[0.16em] text-cream uppercase transition-all duration-300 hover:border-cream hover:bg-transparent hover:text-cream',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
