(function () {
  const includes = [
    ['include-nav', 'components/nav.html'],
    ['include-hero', 'components/hero.html'],
    ['include-marquee', 'components/marquee.html'],
    ['include-brand-intro', 'components/brand-intro.html'],
    ['include-services', 'components/services.html'],
    ['include-gallery', 'components/gallery.html'],
    ['include-experience', 'components/experience.html'],
    ['include-section-break', 'components/section-break.html'],
    ['include-food-junction', 'components/food-junction.html'],
    ['include-clients', 'components/clients.html'],
    ['include-testimonials', 'components/testimonials.html'],
    ['include-cta-section', 'components/cta-section.html'],
    ['include-footer', 'components/footer.html'],
  ];

  async function loadComponents() {
    await Promise.all(
      includes.map(async ([id, path]) => {
        const el = document.getElementById(id);
        if (!el) return;
        const res = await fetch(path);
        if (!res.ok) throw new Error('Failed to load ' + path + ': ' + res.status);
        el.innerHTML = await res.text();
      })
    );
  }

  function initNavScroll() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  window.toggleMute = function toggleMute() {
    const video = document.getElementById('heroVideo');
    const muteBtn = document.getElementById('muteBtn');
    const iconMuted = document.getElementById('iconMuted');
    const iconSound = document.getElementById('iconSound');
    if (!video || !muteBtn || !iconMuted || !iconSound) return;
    video.muted = !video.muted;
    if (video.muted) {
      iconMuted.style.display = 'block';
      iconSound.style.display = 'none';
      muteBtn.classList.remove('unmuted');
    } else {
      iconMuted.style.display = 'none';
      iconSound.style.display = 'block';
      muteBtn.classList.add('unmuted');
    }
  };

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      await loadComponents();
    } catch (e) {
      console.error(e);
    }
    initNavScroll();
  });
})();
