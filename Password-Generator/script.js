function generatePassword() {
  const length = 12;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  let characters  = "abcdefghijklmnopqrstuvwxyz";
  if(includeUppercase){
    characters  += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(includeNumbers){
    characters  += "0123456789";
  }
  if(includeSymbols){
    characters  += "!@#$%^&*()";
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex]

  }
  document.getElementById("password").value = password
}

// function copyPassword(text){
//     const copyText =  document.getElementById("password")
//     copyText.select();
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
// }
function copyPassword() {
    const copyText = document.getElementById("password").value;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(copyText)
   
}