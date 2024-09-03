export const ErrorFallback = ({ error }) => (
  <div role="alert">
    <h2>Oops! Something went wrong</h2>
    <p>We're sorry, but we encountered an unexpected error.</p>
    <pre>{error?.message}</pre>
  </div>
);
