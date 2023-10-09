const synth = window.speechSynthesis;
const speech = new SpeechSynthesisUtterance();

const voiceSelect = document.querySelector("select");

let voices = [0];

synth.onvoiceschanged = () => {
  voices = synth.getVoices();
  speech.voice = voices[0];
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.value = i;
    voiceSelect.appendChild(option);
  }
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  synth.speak(speech);
});
