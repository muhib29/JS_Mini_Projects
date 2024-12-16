const api_url ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const urlInput = document.querySelector("#url-input");
const generateBtn = document.querySelector("#generate-btn");
const qrCodeImg = document.querySelector("#qr-code-img");

generateBtn.addEventListener("click", () => {
  if (urlInput.value.length > 0) {
    // Generate QR code
    const url = urlInput.value;
    qrCodeImg.src = `${api_url}${url}`;
    qrCodeImg.parentElement.style.display = "block";

    // Display the success message
    let span = document.createElement("span");
    span.textContent = "Your own QR Code is ready!";
    generateBtn.parentElement.appendChild(span);

    // Disable the button after generating the QR code
    generateBtn.disabled = true;
    generateBtn.style.cursor = "not-allowed";
  } else {
    // Display the error message
    let para = document.createElement("p");
    para.classList.add("span");   
    urlInput.classList.add("error")  // For shake the input
    para.textContent = "Please enter a URL or text";
    urlInput.parentElement.appendChild(para);
    para.style.display = "block";
    setTimeout(() => {
      para.style.display = "none";
    }, 3000);
    generateBtn.disabled = true;
    generateBtn.style.cursor = "not-allowed";
  }
});
// Re-enable the button when the input changes
urlInput.addEventListener("input", () => {
  // Clear the QR code and message if the input is changed
  qrCodeImg.parentElement.style.display = "none";

  // Remove the previously added span message if any
  const existingSpan = generateBtn.parentElement.querySelector("span");
  if (existingSpan) {
    existingSpan.remove();
  }

  // Re-enable the button
  generateBtn.disabled = false;
  generateBtn.style.cursor = "pointer";
});



// For dark mode
let dark =  document.querySelector(".dark");
dark.addEventListener("click" ,()=>{
  document.body.classList.toggle("dark-mode");
    if(dark.classList.contains("fa-moon")){
        dark.classList.remove("fa-moon");
        dark.classList.add("fa-sun");
    }else{
      dark.classList.add("fa-moon");
      dark.classList.remove ("fa-sun");
    }
    
})