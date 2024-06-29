// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // return license;
  if (license === 'mit') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }

  if (license === 'apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }

  if (license === 'bsd3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }

  if (license === 'isc') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }

  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

![Project Preview](./utils/ScreenRecording2024-06-29at9.06.24AM-ezgif.com-speed.gif)

## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## License 
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation 
${data.install}

## Usage 
${data.info}

## Contributing 
${data.guide}

## Test
${data.test}

## Questions
${data.git}
${data.contact}
`;
}

module.exports = generateMarkdown;
