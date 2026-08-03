document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.browse-btn')) return;
 
    const isZoomed = card.classList.contains('zoomed');
 
    document.querySelectorAll('.card').forEach(c => c.classList.remove('zoomed'));
 
    if (!isZoomed) {
      card.classList.add('zoomed');
    }
  });
});