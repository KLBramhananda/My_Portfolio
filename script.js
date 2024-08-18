
const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

// ---------------getting input from user--------------------

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.querySelector('input[placeholder="Your Name"]').value;
  const email = document.querySelector('input[placeholder="Your Email"]').value;
  const phone = document.querySelector('input[placeholder="Your Phone"]').value;
  const message = document.querySelector('textarea[placeholder="Write your message"]').value;

  // Validate the form fields here
  
  fetch('your-server-side-script-url', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message
      }),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      // Show a success message or redirect the user
  })
  .catch((error) => {
      console.error('Error:', error);
      // Show an error message
  });
});

