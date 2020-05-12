function generateMarkdown(data) {
  return`

# ${data.projectTitle}

## Project Description
### ${data.projectDescription}

## Table of Contents
* ${data.tableOfContents.checkbox}


Installation
* ${data.Installation} 

Usage
* ${data.Usage} 

License
* ${data.License} 

Contributing
* ${data.Contributing} 

Tests
* ${data.Tests} 

## Questions

Please reach out with any questions to ${data.gitUsername} via email at: ${data.gitEmail}

`;

}

module.exports = generateMarkdown;

