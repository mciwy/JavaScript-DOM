const slider = document.querySelector('.slider');
const handle = document.querySelector('.handle');
const value = document.querySelector('.value');

const minValue = 0;
const maxValue = 100;
let currentValue = 0;

function updateValue() {
    value.textContent = currentValue;
}

function updateHandle() {
    const sliderWidth = slider.offsetWidth;
    const handleWidth = handle.offsetWidth;
    const range = maxValue - minValue;
    const percentage = (currentValue - minValue) / range;
    const position = (sliderWidth - handleWidth) * percentage;
    const newPosition = position + handleWidth / 2;
    handle.style.left = `${newPosition}px`;

    if (currentValue === maxValue) {
        handle.style.left = `${sliderWidth - handleWidth / 2}px`;
    }
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function handleMove(event) {
    const sliderLeft = slider.getBoundingClientRect().left;
    const sliderWidth = slider.offsetWidth;
    const handleWidth = handle.offsetWidth;
    const range = maxValue - minValue;
    const clickX = event.clientX - sliderLeft - handleWidth / 2;
    const percentage = clickX / (sliderWidth - handleWidth);
    currentValue = Math.round(clamp(percentage * range + minValue, minValue, maxValue));
    updateValue();
    updateHandle();

    const valueWidth = value.offsetWidth;
    const valuePosition = position + handleWidth / 2 - valueWidth / 2;
    const minValuePosition = 0;
    const maxValuePosition = sliderWidth - valueWidth;
    const correctedValuePosition = clamp(valuePosition, minValuePosition, maxValuePosition);
    value.style.left = `${correctedValuePosition}px`;
}

function handleStart() {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
}

function handleEnd() {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
}

handle.addEventListener('mousedown', handleStart);

updateValue();
updateHandle();