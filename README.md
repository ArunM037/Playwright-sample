# Playwright Sample Project

This repository demonstrates using [Playwright](https://playwright.dev/) for testing an Angular application. It includes integration with [Allure Reports](https://github.com/allure-framework/allure-js) for test reporting, and a Docker setup for seamless execution.

---

## Getting Started

Follow these steps to set up and run the Playwright tests for this project.

### Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later)
- [Docker](https://www.docker.com/) (if running tests inside a container)

---

## Clone the Repository

```bash
git clone https://github.com/ArunM037/Playwright-sample.git
cd Playwright-sample
```

---

## Install Dependencies

Install the required Node.js dependencies:

```bash
npm install
```

---

## Run Playwright Tests

To execute tests for a specific project, use:

```bash
npx playwright test --project="<projectname>"
```

Replace `<projectname>` with the name of the project you want to test, as defined in your Playwright configuration.

---

## Generate Allure Reports

To view detailed test reports:

1. Install the Allure command-line tool if you haven’t already:
   ```bash
   npm install -g allure-commandline
   ```
2. After running your tests, generate the report:
   ```bash
   allure generate --clean
   allure open
   ```

---

## Using Docker

You can run the Playwright tests inside a Docker container for a consistent environment. Build and run the Docker container as follows:

### Build the Docker Image

```bash
docker build -t playwright-sample .
```

### Run the Docker Container

```bash
docker run -it playwright-sample
```

---

## Project Structure

- **tests/**: Contains the test files written in Playwright.
- **playwright.config.ts**: Configuration file for Playwright.
- **Dockerfile**: Docker setup for the project.
- **package.json**: Contains the dependencies and scripts.

---

## Example Configuration (playwright.config.ts)

```javascript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
```

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## GitHub Repository

[Playwright Sample Project](https://github.com/ArunM037/Playwright-sample.git)

