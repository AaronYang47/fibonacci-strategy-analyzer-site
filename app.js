const supportEmail = "aaronyang4869@hotmail.com";

function setEmailStatus(message) {
  const status = document.querySelector("#email-status");
  if (status) {
    status.textContent = message;
  }
}

async function copySupportEmail() {
  try {
    await navigator.clipboard.writeText(supportEmail);
    setEmailStatus("Email address copied.");
  } catch {
    const input = document.createElement("input");
    input.value = supportEmail;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();

    try {
      document.execCommand("copy");
      setEmailStatus("Email address copied.");
    } catch {
      setEmailStatus(`Copy this address: ${supportEmail}`);
    } finally {
      input.remove();
    }
  }
}

document.querySelectorAll("[data-copy-email]").forEach((button) => {
  button.addEventListener("click", copySupportEmail);
});
