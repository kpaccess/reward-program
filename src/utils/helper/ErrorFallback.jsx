/**
 * Renders a fallback UI when an error occurs in the application.
 * @param {Object} props - The component props.
 * @param {Error} props.error - The error object that was caught.
 * @returns { JSX.Element} The fallback UI to display when an error occurs in the application.
 */

export const ErrorFallback = ({ error }) => (
  <div role="alert">
    <h2>Oops! Something went wrong</h2>
    <p>We're sorry, but we encountered an unexpected error.</p>
    <pre>{error?.message}</pre>
  </div>
);
