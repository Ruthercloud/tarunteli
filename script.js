 function toggleMenu() {
      document.getElementById("sidebar").classList.toggle("active");
    }

// 🔍 Blog Search Filter
  const searchInput = document.getElementById('searchInput');
  const blogCards = document.querySelectorAll('.blog-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    blogCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(query) ? 'block' : 'none';
    });
  });