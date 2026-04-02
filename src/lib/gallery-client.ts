type FilterId = 'all' | 'moments' | 'weddings' | 'corporate' | 'celebrations' | 'menus';

export function initFilterableGallery(root: HTMLElement): void {
  const toolbar = root.querySelector<HTMLElement>('[data-gallery-toolbar]');
  const grid = root.querySelector<HTMLElement>('[data-gallery-grid]');
  const countEl = root.querySelector<HTMLElement>('[data-gallery-count]');
  const emptyEl = root.querySelector<HTMLElement>('[data-gallery-empty]');
  const dialog = root.querySelector<HTMLDialogElement>('[data-gallery-lightbox]');
  const lightboxImg = root.querySelector<HTMLImageElement>('[data-gallery-lightbox-img]');
  const lightboxCaption = root.querySelector<HTMLElement>('[data-gallery-lightbox-caption]');

  if (!toolbar || !grid) return;

  const items = [...grid.querySelectorAll<HTMLElement>('[data-gallery-item]')];
  const filterButtons = [...toolbar.querySelectorAll<HTMLButtonElement>('[data-filter]')];

  function setPressed(active: FilterId): void {
    for (const btn of filterButtons) {
      const id = btn.getAttribute('data-filter') as FilterId | null;
      const isOn = id === active;
      btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    }
  }

  function applyFilter(active: FilterId): void {
    let visible = 0;
    for (const el of items) {
      const raw = el.getAttribute('data-categories') ?? '';
      const cats = raw.split(/\s+/).filter(Boolean);
      const show = active === 'all' || cats.includes(active);
      el.hidden = !show;
      if (show) visible += 1;
    }
    if (countEl) {
      const total = items.length;
      countEl.textContent =
        active === 'all'
          ? `${total} image${total === 1 ? '' : 's'}`
          : `${visible} of ${total} image${total === 1 ? '' : 's'}`;
    }
    if (emptyEl) {
      emptyEl.hidden = visible > 0;
    }
  }

  function openLightbox(src: string, alt: string): void {
    if (!dialog || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    if (lightboxCaption) lightboxCaption.textContent = alt;
    dialog.showModal();
  }

  toolbar.addEventListener('click', (e) => {
    const t = e.target as HTMLElement | null;
    const btn = t?.closest<HTMLButtonElement>('[data-filter]');
    if (!btn || !toolbar.contains(btn)) return;
    const id = btn.getAttribute('data-filter') as FilterId | null;
    if (!id) return;
    setPressed(id);
    applyFilter(id);
  });

  grid.addEventListener('click', (e) => {
    const t = e.target as HTMLElement | null;
    const trigger = t?.closest<HTMLButtonElement>('[data-gallery-open]');
    if (!trigger || !grid.contains(trigger)) return;
    const src = trigger.getAttribute('data-src');
    const alt = trigger.getAttribute('data-alt') ?? '';
    if (src) openLightbox(src, alt);
  });

  if (dialog) {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (lightboxImg) {
        lightboxImg.src = '';
        lightboxImg.alt = '';
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dialog?.open) dialog.close();
  });

  setPressed('all');
  applyFilter('all');
}
