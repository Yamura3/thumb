const fs = require('fs');
const path = require('path');

// Function to get all image file names from the current directory
function getImageFileNames() {
  const currentDir = __dirname;
  const files = fs.readdirSync(currentDir);
  
  const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif']; // Add more extensions as needed
  
  // Filter for image files and exclude the script itself and the output JSON
  const scriptName = path.basename(__filename);
  const outputName = 'image-files.json';
  
  return files.filter(file => 
    supportedExtensions.includes(path.extname(file).toLowerCase()) &&
    file !== scriptName &&
    file !== outputName
  );
}

// Write the list of image file names to a JSON file
function generateImageFileList() {
  const imageFileNames = getImageFileNames();
  const jsonContent = JSON.stringify(imageFileNames, null, 2);
  fs.writeFileSync(path.join(__dirname, 'image-files.json'), jsonContent);
}

generateImageFileList();
