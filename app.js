const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarOpen = document.getElementById('sidebarOpen');

const titleMap = {
  overview: ['Обзор процесса', 'AS IS / TO BE для автоматизации подбора доп. кодов'],
  us1: ['US1 · Классификатор РБ', 'Настройка правил, уровней и условий формирования кода'],
  us2: ['US2 · Заполнение файла', 'Алгоритм подбора кодов и формирование выгрузки'],
  us3: ['US3 · Ошибки и ограничения', 'Контроль корректности классификатора и доработок'],
};

function activatePage(name) {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.page === name);
  });

  pages.forEach((page) => {
    page.classList.toggle('active', page.id === `page-${name}`);
  });

  const [title, subtitle] = titleMap[name];
  pageTitle.textContent = title;
  pageSubtitle.textContent = subtitle;
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    activatePage(link.dataset.page);

    if (window.innerWidth <= 900) {
      sidebar.classList.add('collapsed');
    }
  });
});

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.add('collapsed');
  sidebarOpen.classList.remove('hidden');
});

sidebarOpen.addEventListener('click', () => {
  sidebar.classList.remove('collapsed');
  sidebarOpen.classList.add('hidden');
});

if (window.innerWidth <= 900) {
  sidebar.classList.add('collapsed');
  sidebarOpen.classList.remove('hidden');
}
