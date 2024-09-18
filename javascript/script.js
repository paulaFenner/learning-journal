import { posts } from './data-posts.js';
import { addCopyright } from './footer.js';
import { generateHeader } from './header.js';

const BlogModule = (function () {
  let visiblePosts = 3;
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  function initializePage() {
    generateHeader();
    renderHeroPost();
    renderPosts();
    addCopyright();
    setupEventListeners();
    updateVisiblePosts();
  }

  function renderHeroPost() {
    const heroPost = sortedPosts[0];
    const heroSection = document.querySelector('.hero-section');

    if (heroPost && heroSection) {
      heroSection.innerHTML = `
        <article class="hero-post">
          <p class="hero-date">${formatDate(heroPost.date)}</p>
          <h2>${heroPost.title}</h2>
          <p>${heroPost.content}</p>
        </article>
      `;
    }
  }

  function renderPosts() {
    const mainPosts = sortedPosts.slice(1);
    const postItemsContainer = document.getElementById('post-items');
    const loadMoreBtn = document.getElementById('load-more');

    if (postItemsContainer) {
      postItemsContainer.innerHTML = mainPosts
        .slice(0, visiblePosts)
        .map(
          (post) => `
        <li class="post-item">
          <img src="${post.image_url}" alt="${post.title}">
          <p class="post-date">${formatDate(post.date)}</p>
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        </li>
      `
        )
        .join('');
    }

    if (loadMoreBtn) {
      loadMoreBtn.classList.toggle('hidden', mainPosts.length <= visiblePosts);
    }
  }

  function updateVisiblePosts() {
    const width = window.innerWidth;
    visiblePosts = (width < 768 && 3) || (width < 1024 && 4) || 6;
    renderPosts();
  }

  function setupEventListeners() {
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        visiblePosts += 3;
        renderPosts();
      });
    }

    window.addEventListener('resize', () => {
      requestAnimationFrame(updateVisiblePosts);
    });
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options).toUpperCase();
  }

  return {
    init: initializePage,
  };
})();

document.addEventListener('DOMContentLoaded', BlogModule.init);
