import { readdirSync, statSync } from 'fs';
import { join } from 'path';

/**
 *2 Generates a tree structure of files and directories starting from the given directory path.
 *
 * @param {string} directoryPath - The path of the directory to generate the tree structure from.
 * @param {string} [prefix=''] - The prefix to be used for indentation in the tree structure. Defaults to an empty string.
 * @return {string} The generated tree structure.
 */
function generateTree(directoryPath, prefix = '') {
  // Get the list of files in the directory
  const files = readdirSync(directoryPath);
  // Initialize an empty string to store the tree structure
  let tree = '';

  // Iterate over each file in the directory
  files.forEach((file, index) => {
    // Get the full path of the file
    const filePath = join(directoryPath, file);
    // Get the stats of the file
    const stats = statSync(filePath);
    // Check if the file is a directory
    const isDirectory = stats.isDirectory();

    // Add the current file to the tree structure with the appropriate indentation
    tree += prefix + (index === files.length - 1 ? '└── ' : '├── ') + file + '\n';

    // If the file is a directory, recursively generate the tree for the nested directory
    if (isDirectory) {
      // Update the prefix for the nested directory
      const nestedPrefix = prefix + (index === files.length - 1 ? '    ' : '│   ');
      // Generate the tree for the nested directory and append it to the current tree structure
      tree += generateTree(filePath, nestedPrefix);
    }
  });

  // Return the generated tree structure
  return tree;
  // Note: The following line of code will not be executed as it is placed after the return statement
  console.log(tree);
}

const projectPath = '/home/student/home/student/Bureau/html/projet perso/portfolio2.0/src';
const tree = generateTree(projectPath);

console.log(tree);
