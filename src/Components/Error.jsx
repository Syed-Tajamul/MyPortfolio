import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <p>{error.error.message}</p>
      <Link className="text-blue-400" to="/">
        &larr; back
      </Link>
    </div>
  );
}
