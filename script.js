const buttons = document.querySelectorAll('.grid-item');
const stopBtn = document.getElementById('stopBtn');
const fileInput = document.getElementById('fileInput');
const presetBtn = document.getElementById('presetBtn');

let audioElements = [];
let customSounds = [];

// Function to play sound
function playSound(index) {
    if (customSounds[index]) {
        customSounds[index].play();
    } else if (audioElements[index]) {
        audioElements[index].play();
    }
}

// Function to stop all sounds
function stopSound() {
    audioElements.forEach(audio => audio.pause());
    customSounds.forEach(audio => audio.pause());
}

// Load preset sounds
function loadPresetSounds() {
    audioElements = [
        new Audio('sounds/sound1.mp3'),
        new Audio('sounds/sound2.mp3'),
        new Audio('sounds/sound3.mp3'),
        new Audio('sounds/sound4.mp3'),
        new Audio('sounds/sound5.mp3'),
        new Audio('sounds/sound6.mp3'),
        new Audio('sounds/sound7.mp3'),
        new Audio('sounds/sound8.mp3'),
        new Audio('sounds/sound9.mp3')
    ];
}

// Event listeners for buttons
buttons.forEach((button, index) => {
    button.style.backgroundColor = `hsl(${index * 40}, 70%, 50%)`;
    button.addEventListener('click', () => playSound(index));
});

stopBtn.addEventListener('click', stopSound);

// Handle file input
fileInput.addEventListener('change', event => {
    customSounds = Array.from(event.target.files).map(file => new Audio(URL.createObjectURL(file)));
});

// Load preset sounds
presetBtn.addEventListener('click', loadPresetSounds);

// Initial load of preset sounds
loadPresetSounds();

