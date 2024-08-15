
# Vite-Handlebars-Template

## About

Vite-Handlebars-Template is a starter template for building highly customizable, blazing-fast static pages using Handlebars and Vite. This template is designed to streamline the development process by providing essential tools and configurations, making it easy to build and deploy static sites with modern features and optimizations.

## Features

- **Vite Integration**: Utilize Vite's fast build process, hot module replacement, and modern development tools.
- **Handlebars Templating**: Leverage Handlebars for building dynamic, reusable components and layouts.
- **PostCSS**: Includes PostCSS with `postcss-preset-env` for modern CSS features with backward compatibility.
- **Minification**: Optimize your production build with the `vite-plugin-minify` and `lightningcss` for CSS minification.
- **ESLint and Prettier**: Code quality and formatting tools to maintain clean and consistent code.
- **Customizable API URLs**: Define base API URLs for different environments (development, testing, production).

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your system. This template requires Node.js version 14 or higher.

### Installation

Clone this repository and install the dependencies:

```bash
git clone https://github.com/yourusername/vite-handlebars-template.git
cd vite-handlebars-template
npm install
```

### Available Scripts

- **Development Server**: Start the development server with hot module replacement.
  ```bash
  npm run dev
  ```
- **Build for Production**: Create an optimized production build.
  ```bash
  npm run build:prod
  ```
- **Build for Testing**: Create a test build.
  ```bash
  npm run build:test
  ```
- **Preview Production Build**: Build and preview the production build locally.
  ```bash
  npm run preview
  ```

## Vite Configuration

The configuration file `vite.config.js` includes various settings and plugins to enhance your development experience:

- **Root and Output Directories**: The source files are located in the `src` directory, and the output files are generated in the `dist` directory.
- **Base URL and API URL**: Customize the base public path and API URLs based on the environment (development, test, production).
- **CSS Handling**: PostCSS is configured with `postcss-preset-env` for modern CSS transformations.
- **Handlebars Plugin**: Handles Handlebars templates with support for partials located in the `assets/html/partials` directory.
- **Minification**: The build process includes CSS and JavaScript minification using `lightningcss` and `terser`.

### Directory Structure

```
vite-handlebars-template/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   ├── html/
│   │   │   └── partials/
│   ├── index.html
│   ├── thank-you/
│   │   └── index.html
├── dist/
├── vite.config.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! If you have suggestions, bug fixes, or improvements, feel free to open a pull request or submit an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding! 🎉
