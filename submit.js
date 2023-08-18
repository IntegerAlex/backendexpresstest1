document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent form from submitting normally
  
      const formData = new FormData(form);
      const response = await fetch('/login', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.text();
      console.log(result); // Display result in the console
  
      if (result === 'Login successful') {
        // Redirect to the next page
        window.location.href = '/nextPage.html';
      }
    });
  });
  