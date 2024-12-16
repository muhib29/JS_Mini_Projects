let speech =  new SpeechSynthesisUtterance();
let voices  = [];
let selectvoice = document.querySelector("select");


window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice  = voices[0];
    voices.forEach((voice , i) => (selectvoice.options[i] = new Option(voice.name,i)))
};

selectvoice.addEventListener("change", () => {
    speech.voice = voices[selectvoice.value];
});

document.querySelector("button").addEventListener("click" , ()=>{
    speech.text = document.querySelector("textarea").value;
    // speech.volume = 1.0;
    // speech.rate = 0.9;
    // speech.pitch = 1;
    window.speechSynthesis.speak(speech);
})