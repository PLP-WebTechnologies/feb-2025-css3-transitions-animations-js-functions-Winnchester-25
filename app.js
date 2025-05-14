 // Load saved theme color
 window.onload = function () {
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      document.getElementById('themeSelector').value = savedColor;
    }
  };

  // Change theme and save to localStorage
  document.getElementById('themeSelector').addEventListener('change', function () {
    const selectedColor = this.value;
    localStorage.setItem('themeColor', selectedColor);
    document.body.style.backgroundColor = selectedColor;
  });

  // Animate box + show message
  document.getElementById('animateBtn').addEventListener('click', function () {
    const box = document.getElementById('box');
    const msg = document.getElementById('message');

    box.classList.add('bounce');
    msg.classList.add('show');

    // Remove animation class so it can be replayed on next click
    setTimeout(() => {
      box.classList.remove('bounce');
      msg.classList.remove('show');
    }, 800);
  });