// Arrays of random headlines and subtexts
const headlines = [
    "BREAKING: Cats Now Speak Fluent French in Timeline 42",
    "Scientists Discover That Trees Have Been Secretly Dancing at Night",
    "Local Man Claims to Remember the Timeline Where Pizza Was a Vegetable",
    "BREAKING: Dolphins Elected to Congress in Parallel Universe",
    "Timeline Anomaly: Gravity Works Sideways on Tuesdays",
    "BREAKING: Clouds Found to Be Made of Cotton Candy in This Reality",
    "Scientists Confirm: Dreams Are Actually Just TV Shows from Other Timelines",
    "BREAKING: Time Travelers Union Announces Strike",
    "Local Man Discovers His Shadow Has a Different Personality",
    "BREAKING: Moon Confirmed to Be Made of Cheese in This Timeline",
    "BREAKING: Parallel Universe Where Coffee Makes You Sleepy Discovered",
    "Timeline Experts Baffled by Reality Where Weekends Last 5 Days",
    "BREAKING: In This Timeline, Plants Have Started Writing Poetry",
    "Scientists Find Universe Where Rain Falls Upward",
    "BREAKING: Local Man's Pet Rock Elected Mayor in Alternate Reality",
    "Timeline Anomaly: In This Reality, Computers Run on Lemonade",
    "BREAKING: Parallel Universe Where Silence is Actually Loud Discovered",
    "Scientists Confirm: In This Timeline, Time Moves Backwards on Thursdays",
    "BREAKING: Reality Where Socks Never Get Lost Found",
    "Timeline Experts Stunned by Universe Where Gravity is Optional",
    "BREAKING: Parallel World Where Traffic Lights Show Emojis Discovered",
    "Scientists Find Timeline Where Internet Runs on Snail Power",
    "BREAKING: Reality Where Pizza Delivery is Instantaneous Confirmed",
    "Timeline Anomaly: In This Universe, Clouds are Made of Marshmallows",
    "BREAKING: Parallel World Where Everyone Speaks in Rhyme Found",
    "Scientists Discover Timeline Where Weekends Last Forever",
    "BREAKING: Reality Where Coffee Grows on Trees Confirmed",
    "Timeline Experts Baffled by Universe Where Time Stands Still",
    "BREAKING: Parallel World Where Rainbows are Square Discovered",
    "Scientists Find Timeline Where Dreams are Broadcast on TV",
    "BREAKING: Reality Where Internet Never Crashes Confirmed",
    "Timeline Anomaly: In This Universe, Books Read Themselves",
    "BREAKING: Parallel World Where Traffic Jams Don't Exist Found",
    "Scientists Discover Timeline Where Weekdays are Optional",
    "BREAKING: Reality Where Coffee is Always the Perfect Temperature",
    "Timeline Experts Stunned by Universe Where Time is Currency",
    "BREAKING: Parallel World Where Emails Write Themselves Discovered",
    "Scientists Find Timeline Where Internet is Powered by Happiness",
    "BREAKING: Reality Where Weekends Last 7 Days Confirmed",
    "Timeline Anomaly: In This Universe, Clouds are WiFi Hotspots",
    "BREAKING: Parallel World Where Traffic Lights Show Memes Found",
    "Scientists Discover Timeline Where Time Moves in Circles",
    "BREAKING: Reality Where Coffee Never Gets Cold Confirmed",
    "Timeline Experts Baffled by Universe Where Time is Edible",
    "BREAKING: Parallel World Where Emails Sort Themselves Discovered",
    "Scientists Find Timeline Where Internet is Powered by Dreams",
    "BREAKING: Reality Where Weekends are 72 Hours Long Confirmed",
    "Timeline Anomaly: In This Universe, Books are Written by AI",
    "BREAKING: Parallel World Where Traffic is Always Green Found",
    "Scientists Discover Timeline Where Time is a Physical Object"
];

const subtexts = [
    "Experts are baffled by this timeline's peculiar characteristics.",
    "This timeline appears to be slightly more absurd than the standard one.",
    "Quantum physicists are having a field day with these readings.",
    "The timeline seems to be operating on a different set of physics.",
    "Reality checks indicate we're in a particularly interesting timeline.",
    "Timeline analysis suggests we're in a parallel universe.",
    "The laws of physics seem to be taking a coffee break in this timeline.",
    "This timeline appears to be running on a different version of reality.",
    "Quantum fluctuations suggest we're in a particularly unusual timeline.",
    "Timeline diagnostics indicate we're in a reality with extra features.",
    "Reality distortion levels are off the charts in this timeline.",
    "Quantum entanglement readings show unusual patterns.",
    "Timeline stability metrics indicate we're in a unique reality.",
    "Parallel universe experts are scratching their heads at these readings.",
    "Reality checks confirm we're in a particularly quirky timeline.",
    "Timeline analysis reveals unusual quantum fluctuations.",
    "The fabric of reality seems to be particularly flexible here.",
    "Quantum physicists report unprecedented timeline anomalies.",
    "Reality distortion field readings are through the roof.",
    "Timeline stability indicators suggest we're in a special universe.",
    "Quantum entanglement patterns show remarkable variations.",
    "Reality checks confirm we're in a timeline with extra features.",
    "Timeline analysis reveals quantum-level peculiarities.",
    "The laws of physics appear to be on vacation in this timeline.",
    "Quantum fluctuations indicate we're in a unique reality.",
    "Reality distortion metrics are showing unusual patterns.",
    "Timeline stability readings suggest we're in a parallel universe.",
    "Quantum physicists are amazed by these timeline readings.",
    "Reality checks indicate we're in a particularly interesting timeline.",
    "Timeline analysis shows quantum-level anomalies.",
    "The fabric of reality seems to be particularly stretchy here.",
    "Quantum entanglement readings are off the charts.",
    "Reality distortion field analysis reveals unique patterns.",
    "Timeline stability indicators suggest we're in a special reality.",
    "Quantum physicists are having trouble explaining these readings.",
    "Reality checks confirm we're in a timeline with unusual features.",
    "Timeline analysis reveals quantum-level peculiarities.",
    "The laws of physics seem to be particularly flexible here.",
    "Quantum fluctuations indicate we're in a unique universe.",
    "Reality distortion metrics are showing remarkable patterns.",
    "Timeline stability readings suggest we're in a parallel reality.",
    "Quantum physicists are puzzled by these timeline readings.",
    "Reality checks indicate we're in a particularly unusual timeline.",
    "Timeline analysis shows quantum-level anomalies.",
    "The fabric of reality appears to be particularly elastic here.",
    "Quantum entanglement readings reveal unique patterns.",
    "Reality distortion field analysis suggests we're in a special timeline.",
    "Timeline stability indicators show quantum-level peculiarities.",
    "Quantum physicists are amazed by these reality readings.",
    "Reality checks confirm we're in a timeline with extra features."
];

// Get DOM elements
const headlineElement = document.getElementById('headline');
const subtextElement = document.getElementById('subtext');
const checkButton = document.getElementById('checkButton');
const shareButton = document.getElementById('shareButton');
const currentDateElement = document.getElementById('current-date');
const footerYearElement = document.querySelector('.footer-text');

// Set current date and year
function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = now.toLocaleDateString('en-US', options);
    
    // Update copyright year
    const currentYear = now.getFullYear();
    footerYearElement.textContent = `© ${currentYear} The Timeline Chronicle. All rights reserved.`;
}

// Create notification element
const notification = document.createElement('div');
notification.className = 'copy-notification';
notification.textContent = 'URL copied to clipboard!';
document.body.appendChild(notification);

// Function to show notification
function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Function to copy text to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showNotification();
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

// Function to generate share URL
function generateShareURL(headline, subtext) {
    const baseUrl = window.location.href.split('?')[0];
    const params = new URLSearchParams({
        headline: encodeURIComponent(headline),
        subtext: encodeURIComponent(subtext),
        date: encodeURIComponent(currentDateElement.textContent)
    });
    return `${baseUrl}?${params.toString()}`;
}

// Function to handle sharing
function shareTimeline() {
    const headline = headlineElement.textContent;
    const subtext = subtextElement.textContent;
    const shareUrl = generateShareURL(headline, subtext);
    copyToClipboard(shareUrl);
}

// Function to load timeline from URL parameters
function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const headline = params.get('headline');
    const subtext = params.get('subtext');
    const date = params.get('date');
    
    if (headline && subtext) {
        headlineElement.textContent = decodeURIComponent(headline);
        subtextElement.textContent = decodeURIComponent(subtext);
        if (date) {
            currentDateElement.textContent = decodeURIComponent(date);
        }
        headlineElement.classList.add('changed');
    }
}

// Generate random timeline check
function checkTimeline() {
    // Remove previous animation class
    headlineElement.classList.remove('changed');
    
    // Force reflow
    void headlineElement.offsetWidth;
    
    // Add animation class
    headlineElement.classList.add('changed');
    
    // Get random headline and subtext
    const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
    const randomSubtext = subtexts[Math.floor(Math.random() * subtexts.length)];
    
    // Update the content
    headlineElement.textContent = randomHeadline;
    subtextElement.textContent = randomSubtext;
}

// Initialize
updateDate();
loadFromURL();

// Add event listeners
checkButton.addEventListener('click', checkTimeline);
shareButton.addEventListener('click', shareTimeline); 