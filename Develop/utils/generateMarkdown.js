function generateMarkdown(data) {
  return `
# ${data.question1}
# ${data.question2}
# ${data.name}

`;
}

module.exports = generateMarkdown;
