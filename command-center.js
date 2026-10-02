/* Presentation only: roster and recommendation state remain in the app. */
(() => {
  const kicker = document.createElement('div');
  kicker.className = 'brand-kicker';
  kicker.textContent = 'Alliance command center';
  document.querySelector('header').prepend(kicker);
  document.querySelector('header h1').textContent = 'E&P Team Builder';
  document.querySelector('header p').textContent = 'Build your roster. Find your synergy. Lead your alliance.';
  const rosterNote = document.querySelector('#tab-roster > .note');
  const tips = document.createElement('details');
  const tipsTitle = document.createElement('summary');
  tipsTitle.textContent = 'Roster tips & power settings';
  tips.append(tipsTitle);
  rosterNote.replaceWith(tips);
  tips.append(rosterNote);
  document.getElementById('heroGrid').before(tips);
  const intro = document.createElement('p');
  intro.className = 'roster-intro';
  intro.textContent = 'Your heroes, ready for the next battle. Import your save or add heroes to begin.';
  document.querySelector('#tab-roster h2').after(intro);
  const grid = document.getElementById('heroGrid');
  const toolbar = document.createElement('div');
  toolbar.className = 'roster-view';
  toolbar.setAttribute('role', 'group');
  toolbar.setAttribute('aria-label', 'Roster layout');
  let layout = 'grid';
  try { layout = localStorage.getItem('epRosterLayout') === 'list' ? 'list' : 'grid'; } catch (_) {}
  const buttons = ['grid', 'list'].map(mode => {
    const button = document.createElement('button');
    button.className = 'chipbtn';
    button.textContent = mode === 'grid' ? '▦ Cards' : '☰ List';
    button.type = 'button';
    button.addEventListener('click', () => {
      layout = mode;
      try { localStorage.setItem('epRosterLayout', mode); } catch (_) {}
      renderLayout();
    });
    toolbar.append(button);
    return button;
  });
  function renderLayout() {
    grid.classList.toggle('roster-list', layout === 'list');
    buttons.forEach((button, i) => {
      const selected = layout === ['grid', 'list'][i];
      button.classList.toggle('on', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }
  document.getElementById('rvAll').parentElement.append(toolbar);
  renderLayout();
  function enhanceCards() {
    document.querySelectorAll('.hero,.sbslot').forEach(card => {
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      const name = card.querySelector('.nm,.n')?.textContent || 'Choose hero';
      card.setAttribute('aria-label', name);
      card.querySelectorAll('img').forEach(image => { image.alt = ''; });
      if (card.classList.contains('hero') && !card.querySelector('.hport,.hero-art')) {
        const art = document.createElement('div');
        art.className = 'hero-art';
        art.setAttribute('aria-hidden', 'true');
        art.textContent = name.split(/\s+/).slice(0,2).map(word => word[0]).join('');
        card.prepend(art);
      }
    });
    document.querySelectorAll('nav button').forEach(button => {
      button.setAttribute('aria-current', button.classList.contains('active') ? 'page' : 'false');
    });
  }
  document.addEventListener('keydown', event => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.hero,.sbslot')) {
      event.preventDefault();
      event.target.click();
    }
  });
  new MutationObserver(enhanceCards).observe(document.querySelector('main'), {childList:true, subtree:true});
  new MutationObserver(enhanceCards).observe(document.getElementById('nav'), {attributes:true, attributeFilter:['class'], subtree:true});
  enhanceCards();
})();