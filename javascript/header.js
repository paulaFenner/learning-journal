export function generateHeader() {
  document.querySelector('header').innerHTML = `
    <div class="logo-container">
        <img class="logo" src="/assets/mlj-logo.jpg" alt="My Learning Journal logo in black & white" />
         <h1>My learning journal</h1>
    </div>
    <div class="navigation" aria-label="Menu">
        <nav class="menu" id="side-menu">
            <ul>
                <li><a href="/HTML/index.html" target="_blank" class="selected">Home</a></li>
                <li><a href="/HTML/about.html" target="_blank">About me</a></li>
            </ul>
        </nav>
        <div class="hamburger" id="hamburger-menu">
            <a href=""><i class="fa-solid fa-bars"></i></a>
        </div>
    </div>
        `;

  document.getElementById('hamburger-menu').addEventListener('click', toggleMenu);
}

export function toggleMenu(e) {
  e.preventDefault(); // Prevent the default behavior of the <a> tag
  document.getElementById('side-menu').classList.toggle('show-menu');
}
