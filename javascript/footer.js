export { addCopyright };

// ELEMENT REFERENCES -----------------------------------------------------------
function addCopyright() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  const footerEl = document.getElementById('footer'); // Make sure to query inside the function

  if (footerEl) {
    footerEl.innerHTML = `
         <p class="title">
        My learning journal
        <br />
        <span>Copyright &copy;${currentYear}</span>
      </p>
        `;
  } else {
    console.error('Footer element not found');
  }
}
