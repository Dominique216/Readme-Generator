// Creates a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return license === 'MIT' ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
        : license === 'BSD' ? '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
        : license === 'GPL' ?  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
        : ''
}

// Creates a function that returns the license link
function renderLicenseLink(license) {
  return license === 'MIT' ? '(https://opensource.org/licenses/MIT)'
        : license === 'BSD' ? '(https://opensource.org/licenses/BSD-3-Clause)'
        : license === 'GPL' ?  '(https://www.gnu.org/licenses/gpl-3.0)'
        : ''
}

//  Creates a function that returns the license section of README
function renderLicenseSection(license) {
  return license !== null  ? `This application is covered under a ${license} license. To learn more, click the license badge at the top of the page.`
  : ''
}

//Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license[0])}${renderLicenseLink(data.license[0])}
  # ${data.title}
  
  ## Description 
  ${data.des}
  
  ## Table of Contents
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [License](#license)  
  - [Contributing](#contributing)  
  - [Tests](#tests)  
  - [Questions](#questions)  
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license[0])}
  
  ## Contributing
  ${data.contr}
  
  ## Tests
  ${data.test}
  
  ## Questions
  GitHub: [${data.git}](https://github.com/${data.git})\n
  Email: ${data.email}\n
  This best way to contact me for questions is ${data.contact}

`;
}

module.exports = generateMarkdown;