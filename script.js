document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const statusElement = document.getElementById('status');

    // Check for navigator.webdriver property
    if (navigator.webdriver) {
        body.classList.add('is-automated');
        statusElement.textContent = "Automated browser detected (e.g., Puppeteer).";
        console.log("navigator.webdriver is true - likely automated.");
    } else {
        body.classList.add('is-human');
        statusElement.textContent = "Likely a human-driven browser.";
        console.log("navigator.webdriver is false or undefined - likely human.");
    }

    // You could add more sophisticated checks here if needed,
    // for example, checking plugins, screen properties, etc.
    // but navigator.webdriver is the most standard approach.
});