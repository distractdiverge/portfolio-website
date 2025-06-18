const fs = require('fs');
const { createCanvas } = require('canvas');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'public', 'assets');

// Create projects directory if it doesn't exist
const PROJECTS_DIR = path.join(ASSETS_DIR, 'projects');
if (!fs.existsSync(PROJECTS_DIR)) {
  fs.mkdirSync(PROJECTS_DIR, { recursive: true });
}

// Function to create a placeholder image
function createPlaceholderImage(filename, width, height, text) {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // Fill background
  context.fillStyle = '#f0f0f0';
  context.fillRect(0, 0, width, height);

  // Add text
  context.fillStyle = '#666';
  context.font = 'bold 20px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(ASSETS_DIR, filename), buffer);
  console.log(`Created placeholder: ${filename}`);
}

// Create placeholder images
const placeholders = [
  {
    filename: 'education-hero.jpg',
    width: 1200,
    height: 600,
    text: 'Education Hero',
  },
  {
    filename: 'projects/collab-text-editor.jpg',
    width: 800,
    height: 600,
    text: 'Collaborative Text Editor',
  },
  {
    filename: 'projects/portfolio.jpg',
    width: 800,
    height: 600,
    text: 'Portfolio Website',
  },
  {
    filename: 'projects/research-team.jpg',
    width: 800,
    height: 600,
    text: 'Research Team',
  },
];

// Generate all placeholders
placeholders.forEach(({ filename, width, height, text }) => {
  createPlaceholderImage(filename, width, height, text);
});

console.log('All placeholder images have been generated!');
