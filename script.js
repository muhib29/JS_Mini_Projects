const fs = require('fs');
const path = require('path');

const projects = [
    { name: 'Age Calculator', folder: 'age-calculator', description: 'A tool to calculate age based on the date of birth.' },
    { name: 'Quiz App', folder: 'build quiz-app', description: 'A quiz application to test your knowledge with multiple-choice questions.' },
    { name: 'Calculator', folder: 'calculator', description: 'A simple calculator for performing arithmetic operations.' },
    { name: 'Circular Progress Bar', folder: 'Cicular Progress Bar', description: 'A visual component displaying progress in a circular format.' },
    { name: 'Crypto Currency', folder: 'Crypto Currency', description: 'An app to monitor cryptocurrency prices and trends.' },
    { name: 'Dark-Light Mode', folder: 'Dark-Light Mode', description: 'A feature to toggle between dark and light themes for better accessibility.' },
    { name: 'Digital Clock', folder: 'Digital clock', description: 'A live digital clock displaying the current time in real-time.' },
    { name: 'Drag and Drop', folder: 'Drag and Drop', description: 'An interactive app to drag and drop items within a container.' },
    { name: 'Email Subscription Form', folder: 'Email-Working Subscription', description: 'A working email subscription form with validation.' },
    { name: 'Form Validation', folder: 'form-validation', description: 'A form with real-time validation for user input fields.' },
    { name: 'Image Background Effect', folder: 'Image Background Effect', description: 'An app showcasing dynamic background effects for images.' },
    { name: 'Image Search Engine', folder: 'Image Search Engine', description: 'A search engine to find images using keywords.' },
    { name: 'Image Gallery', folder: 'Image-Gallery', description: 'An image gallery application with navigation and filtering features.' },
    { name: 'Menu Hover Effects', folder: 'Menu Effect', description: 'A demonstration of modern hover effects for navigation menus.' },
    { name: 'Mini Calender', folder: 'Mini-Calender', description: 'A small and functional calendar widget displaying current dates.' },
    { name: 'Mini Calendar', folder: 'Music-Player', description: 'A small and functional calendar widget displaying current dates.' },
    { name: 'Notes App', folder: 'Notes-App', description: 'A notes application to add, edit, and delete notes with local storage support.' },
    { name: 'Password Generator', folder: 'password-generator', description: 'A tool to generate secure passwords with custom length and options.' },
    { name: 'Password Visibility Toggle', folder: 'Password-hide', description: 'A feature to show or hide passwords in input fields.' },
    { name: 'Password Strength Checker', folder: 'password-strength', description: 'A tool to check the strength of passwords with visual feedback.' },
    { name: 'Popup Modal', folder: 'Popup', description: 'A reusable modal component for displaying custom messages.' },
    { name: 'Product Page Design', folder: 'Product-Page-Design', description: 'A design for showcasing products with modern styling and animations.' },
    { name: 'QR Code Generator', folder: 'QR Code Generator', description: 'An app to generate QR codes for URLs or custom text.' },
    { name: 'Quote App', folder: 'quote-app', description: 'An application to display random quotes with a refresh option.' },
    { name: 'Stopwatch', folder: 'Stop-Watch', description: 'A stopwatch app with start, stop, and reset functionalities.' },
    { name: 'Text-to-Voice Converter', folder: 'Text to voice', description: 'A tool to convert written text into speech using a text-to-speech engine.' },
    { name: 'Toast Notification', folder: 'Toast Bar', description: 'A toast bar component for displaying notifications with transitions.' },
    { name: 'Todo App', folder: 'Todo-App', description: 'A todo list app to manage daily tasks with add, edit, and delete options.' },
    { name: 'Weather App', folder: 'Wheather-App', description: 'An app to fetch and display weather data for various locations.' }
];


// Template for README.md
const generateReadmeContent = (project) => `
# ${project.name}

## Description
${project.description}

## How to Run
1. Open \`index.html\` in your browser.

## Technologies Used
- HTML
- CSS
- JavaScript
`;

// Process each project
projects.forEach((project) => {
    const folderPath = path.join(__dirname, project.folder);

    // Check if the folder exists
    if (!fs.existsSync(folderPath)) {
        console.error(`⚠️  Folder not found: ${project.folder}`);
        return;
    }

    // Path for the README.md file
    const readmePath = path.join(folderPath, 'README.md');

    // Check if README.md already exists
    if (fs.existsSync(readmePath)) {
        console.warn(`⚠️  README.md already exists in ${project.folder}. Skipping...`);
        return;
    }

    // Generate README content and write to file
    const readmeContent = generateReadmeContent(project);
    fs.writeFileSync(readmePath, readmeContent, 'utf8');
    console.log(`✅ README.md created for ${project.name} in ${project.folder}`);
});
