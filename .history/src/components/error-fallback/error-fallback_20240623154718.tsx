

export const ErrorFallback = ({
  error,
  resetErrorBoundary
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <>
      <h3>Algo deu errado!</h3>
      <pre>{error.message}</pre>

      <button onClick={resetErrorBoundary}>Reset</button>
    </>
  );
};
