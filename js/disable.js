// Description: This script will enable the timer button on the page if it is disabled.
const countdownElements = Array.from(document.querySelectorAll('input, button')); // Get all input and button elements
const countdownKeywords = ["seconds", "countdown", "wait", "remaining"]; // Keywords to look for in the countdown element

// Find the countdown element
const countdownElement = countdownElements.find(element => {
    if (element && element.value) {
        const text = element.value.trim().toLowerCase();
        
        // Check if the text contains any of the keywords
        if (countdownKeywords.some(keyword => text.includes(keyword))) {
            // Get any numbers in the text
            const anyNumbersInText = parseInt(text.match(/\d+/));
    
            // Check if the text contains any numbers between 1 and 60
            if (!isNaN(anyNumbersInText) && anyNumbersInText > 0 && anyNumbersInText <= 60) {
                return true;
            }
        }
    }
    return false
});

if (countdownElement) {

    const buttonElement = countdownElement.closest('button, input'); // Get the closest button or input element

    if (buttonElement) {
        buttonElement.removeAttribute('disabled');

        console.log('✅ Timer button enabled!')
    }
}