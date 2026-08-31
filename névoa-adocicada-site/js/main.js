// ============================================
// Névoa Adocicada CONFEITARIA — SCRIPT PRINCIPAL
// Menu mobile (hambúrguer) + destaque do link ativo no menu
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burgerBtn');
  var nav = document.getElementById('navLinks');

  // Abre e fecha o menu no celular
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em qualquer link (útil no celular)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Marca como "active" o link da página atual no menu
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.links a[href]').forEach(function (link) {
    var linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});
