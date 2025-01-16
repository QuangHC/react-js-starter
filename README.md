React + Vite Starter Template

Getting Started

Follow these steps to set up and run the project:

1. Clone the Repository

git clone https://github.com/QuangHC/react-js-starter.git
cd react-js-starter

2. Install Dependencies

Using bun for package management ensures faster installation:

bun install

3. Run the Development Server

Start the development server with:

bun dev

This will launch the application locally, typically accessible at http://localhost:3000.

4. Build for Production

To create an optimized build for production:

bun build

The build files will be available in the dist folder.

Project Structure

react-js-starter/
├── src/                 # Application source code
│   ├── components/      # Reusable React components
│   ├── assets/          # Static assets
│   └── App.jsx          # Main application component
├── public/              # Static files served directly
├── .eslintrc            # ESLint configuration
├── vite.config.js       # Vite configuration
├── package.json         # Project metadata
└── bun.lockb            # Bun lock file for dependencies

Scripts

bun dev: Starts the development server with HMR.

bun build: Builds the application for production.

bun lint: Runs ESLint to check code quality.

Contributing

Feel free to fork this repository, create a new branch, and submit pull requests. Contributions are welcome!

License

This project is licensed under the MIT License.

Feedback

If you have any issues or suggestions, please open an issue on GitHub.

Enjoy coding! 🚀
