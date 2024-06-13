"use client"
import { useSearchParams  } from 'next/navigation';

const ErrorPage = () => {
  const searchParams  = useSearchParams();
  const error = searchParams.get('error')
  console.log('search: ', error);

  let errorMessage = 'An error occurred during login.';
  if (error === 'ProviderMismatch') {
    errorMessage = `You tried signing in with a different method than the one used during signup. Please use your original method.`;
  }

  return (
    <div>
      <h1>Login Error</h1>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
