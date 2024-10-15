# Vite React TypeScript Forge

This project provides a robust boilerplate for creating React applications using TypeScript, Vite, and Tailwind CSS.  It includes a well-structured routing system separating public and private routes, along with a clean layout system and utilizes Shadcn UI for components.  Basic testing is implemented using Jest and React Testing Library.

## Project Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd vitereactts-forge
    ```
3.  **Install dependencies:**  Ensure you have Node.js and npm (or yarn) installed. Then run:
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will start a development server at `http://localhost:5173`.

## Project Structure

The project is organized for maintainability and scalability:

-   **`src/`:** Contains the source code.
    -   **`components/`:** Reusable UI components.  Includes custom button components with tests.
    -   **`layouts/`:** Page layouts (`PublicLayout`, `DashboardLayout`).
    -   **`pages/`:** Individual page components.
        -   **`public/`:** Components for publicly accessible pages (Home, About, Contact, Login).
        -   **`private/`:** Components for protected dashboard pages (Dashboard).
    -   **`routes/`:** Routing configuration.
        -   **`index.tsx`:** Main routing configuration.
        -   **`public.tsx`:** Routing for public pages.
        -   **`private.tsx`:** Routing for private pages.
    -   **`styles/`:** Global styles (`globals.css`).
    -   **`App.tsx`:** Main application component.
    -   **`main.tsx`:** Entry point for the application.

-   **`public/`:** Static assets (index.html).

## Running the Application

After completing the setup steps, navigate to `http://localhost:5173` in your browser.  You'll find the homepage with links to About, Contact, and Login.  The Login page will take you to a basic dashboard.

## Technologies

-   **React:** The core JavaScript library for building user interfaces.
-   **TypeScript:** Provides static typing for improved code maintainability and error detection.
-   **Vite:** A fast build tool for development and production.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **React Router DOM:** For client-side routing.
-   **@shadcn/ui:**  Provides styled UI components, including buttons.
-   **@tanstack/react-query:** For efficient data fetching and caching.
-   **Jest:** JavaScript testing framework.
-   **React Testing Library:**  For testing React components.

## Testing

Basic unit tests are included for the Button component.  Run tests using:

```bash
npm test
```

To add end-to-end (e2e) tests, consider using Cypress:

1.  **Install Cypress:**
    ```bash
    npm install cypress --save-dev
    ```
2.  **Open Cypress:**
    ```bash
    npx cypress open
    ```
    This will open the Cypress Test Runner.  You can then create new e2e tests.

## Contributing

Contributions are welcome! Please feel free to submit pull requests.


## Troubleshooting

-   **Type Errors:** If you encounter TypeScript type errors related to `react-router-dom`, ensure that `react-router-dom` and `@types/react-router-dom` are correctly installed.  Run `npm install react-router-dom @types/react-router-dom` if necessary.  Similar type errors for `@shadcn/ui` can be resolved by installing `@types/shadcn-ui`.
