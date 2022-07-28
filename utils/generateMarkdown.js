// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseData = ['GNU General Public License v3.0', 'MIT', 'Apache license 2.0', 'Mozilla Public License 2.0']
function renderLicenseBadge(license) {
  if (license === licenseData[0]){
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }
  else if (license === licenseData[1]){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === licenseData[2]){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === licenseData[3]){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }else{
    return '';
  }
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseData[0]){
    return `[${licenseData[0]}(https://www.gnu.org/licenses/agpl-3.0)`
  }
  else if (license === licenseData[1]){
    return `[${licenseData[1]}(https://opensource.org/licenses/MIT)`
  }
  else if (license === licenseData[2]){
    return `[${licenseData[2]}(https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === licenseData[3]){
    return `[${licenseData[3]}(https://opensource.org/licenses/MPL-2.0)`
  }else{
    return '';
  }
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseData[0]){
    return `Read more about ${licenseData[0]}`
  }else if (license === licenseData[1]){
    return `Read more about ${licenseData[1]}`
  }
  else if (license === licenseData[2]){
    return `Read more about ${licenseData[2]}`
  }
  else if (license === licenseData[3]){
    return `Read more about ${licenseData[3]}`
  }else{
    return '';
  }
}

// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Badges 
${renderLicenseBadge(data.license)}

---

## Table of Contents
- [License](#license)
- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Want to Contribute?](#want-to-contribute)
- [Testing](#testing)
- [Questions?](#questions)
- [Contact Me](#contact-me)

---

## License
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

---

## Description
${data.description}

---

## Usage
${data.usage}

---

## Installation
${data.install}

---

## Want to Contribute
${data.contribute}

---

## Testing
${data.test}

---

## Questions?
### Contact Me
- (https://github.com/${data.github})
- ${data.email}
`;
}

module.exports = generateMarkdown;
