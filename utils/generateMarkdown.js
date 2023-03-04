// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ``;
  } else {
    return `![license](https://img.shields.io/badge/License-${license}-blue)`
  }
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ``;
  } else {
    return `[licence](#License)`
  }
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ``;
  } else {
    return `The licence used for this project was ${license}`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ${renderLicenseLink(data.license)}

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## License:
  ${data.license}

  ## Contribution:
  ${data.contribution}

  ## Test:
  ${data.test}

  ## Questions:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;