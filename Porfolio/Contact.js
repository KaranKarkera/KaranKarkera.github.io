document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const responseMessage = document.getElementById("response-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgzrwqr", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        responseMessage.textContent = "Thanks for your message!";
        responseMessage.style.color = "white";
        form.reset();
      } else {
        responseMessage.textContent = "Oops! Something went wrong.";
        responseMessage.style.color = "white";
      }
    } catch (error) {
      responseMessage.textContent = "There was an error submitting the form.";
      responseMessage.style.color = "white";
    }
  });
});
