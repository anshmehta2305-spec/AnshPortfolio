document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyBtn');
  const toast = document.getElementById('toast');
  const portfolioUrl = 'https://anshmehta.in/';

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  // Copy Main Portfolio Link
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(portfolioUrl);
        showToast('Portfolio link copied: ' + portfolioUrl);
      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = portfolioUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Portfolio link copied: ' + portfolioUrl);
      }
    });
  }

  // Copy Snippet buttons
  const snippetButtons = document.querySelectorAll('.copy-snippet-btn');
  snippetButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const targetId = btn.getAttribute('data-target');
      const codeElement = document.getElementById(targetId);
      if (codeElement) {
        const text = codeElement.innerText;
        try {
          await navigator.clipboard.writeText(text);
          showToast('Snippet copied to clipboard!');
        } catch (err) {
          showToast('Failed to copy snippet');
        }
      }
    });
  });

  // QR Code Modal
  const qrBtn = document.getElementById('qrBtn');
  const qrModal = document.getElementById('qrModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (qrBtn && qrModal) {
    qrBtn.addEventListener('click', () => {
      qrModal.classList.add('open');
    });

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        qrModal.classList.remove('open');
      });
    }

    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) {
        qrModal.classList.remove('open');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && qrModal.classList.contains('open')) {
        qrModal.classList.remove('open');
      }
    });
  }

  // CV action
  const openCvBtn = document.getElementById('openCvBtn');
  if (openCvBtn) {
    openCvBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Scrolls down to the CV snippet section smoothly
      const cvSection = document.querySelector('.cv-section');
      if (cvSection) {
        cvSection.scrollIntoView({ behavior: 'smooth' });
        showToast('Portfolio link & CV formats ready below');
      }
    });
  }
});

