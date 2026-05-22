(() => {
  let slideIndex = 1;

  const slides = Array.from(document.getElementsByClassName("slide"));
  const dots = Array.from(document.getElementsByClassName("dot"));

  // evita múltiplos timers caso o script seja carregado mais de uma vez
  let timerId = null;
  let autoplayIntervalMs = 5000;

  function clampIndex(n) {
    const count = slides.length;
    if (count === 0) return 1;
    if (n > count) return 1;
    if (n < 1) return count;
    return n;
  }

  function render() {
    const count = slides.length;
    if (count === 0) return;

    slideIndex = clampIndex(slideIndex);

    for (let i = 0; i < count; i++) {
      const isActive = i === slideIndex - 1;
      slides[i].classList.toggle("is-active", isActive);
      // fallback caso CSS ainda não esteja cobrindo opacity/visibility
      slides[i].style.display = isActive ? "block" : "none";
    }

    // ativa dots com base no índice atual (caso haja diferença de contagem, usa modulo)
    const activeDotIndex = dots.length ? (slideIndex - 1) % dots.length : -1;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle("active", i === activeDotIndex);
    }
  }

  function plusSlides(n) {
    slideIndex += n;
    render();
    restartAutoplay();
  }

  function currentSlide(n) {
    slideIndex = n;
    render();
    restartAutoplay();
  }

  function startAutoplay() {
    if (timerId) return;
    timerId = setInterval(() => {
      slideIndex++;
      render();
    }, autoplayIntervalMs);
  }

  function stopAutoplay() {
    if (!timerId) return;
    clearInterval(timerId);
    timerId = null;
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Pausar ao interagir (hover/focus) - melhora UX e evita “pulos”
  const carousel = document.querySelector(".carousel-container");
  if (carousel) {
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", startAutoplay);
  }

  // expõe funções globais para manter compatibilidade com onclick inline do HTML
  window.plusSlides = plusSlides;
  window.currentSlide = currentSlide;

  render();
  startAutoplay();
})();
