const joinButton = document.querySelector(".btn-join");
const closeButton = document.querySelector(".btn-close");

const goBackToHome = function () {
  window.location.href = "/index.html";
};

joinButton.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const message = `You have joined!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`;

  alert(message);

  goBackToHome();
});

closeButton.addEventListener("click", goBackToHome);
