function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const studentClass = document.getElementById("class").value;
  const phone = document.getElementById("phone").value;

  const message =
`New Admission Request

Student Name: ${name}
Class: ${studentClass}
Phone: ${phone}`;

  const url = `https://wa.me/919934496349?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}