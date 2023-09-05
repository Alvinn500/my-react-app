import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl mb-3">Opss!</h1>
      <p className="font-medium text-lg">
        Sorry, an unexpected error has occured
      </p>
      <p className="font-medium text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
