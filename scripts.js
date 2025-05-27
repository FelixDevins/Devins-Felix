document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.querySelector('.skills');
  
  const checkSectionInView = () => {
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      skillsSection.classList.add('show');
    }
  };

  window.addEventListener('scroll', checkSectionInView);
  checkSectionInView();  // Verifica imediatamente quando a página é carregada
});
