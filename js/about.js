(function () {
  const includes = [
    ['include-nav', 'components/about-nav.html'],
    ['include-page-hero', 'components/about-page-hero.html'],
    ['include-story', 'components/about-story.html'],
    ['include-philosophy', 'components/about-philosophy.html'],
    ['include-values-strip', 'components/about-values-strip.html'],
    ['include-stats', 'components/about-stats.html'],
    ['include-team', 'components/about-team.html'],
    ['include-locations', 'components/about-locations.html'],
    ['include-about-cta', 'components/about-cta.html'],
    ['include-footer', 'components/about-footer.html'],
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

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      await loadComponents();
    } catch (e) {
      console.error(e);
    }
  });
})();
