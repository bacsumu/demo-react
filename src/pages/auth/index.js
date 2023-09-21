import { Route } from "react-router-dom";
import Login from "./auth/Login";

export default function Auth({ match, location, history }) {
  return (
    <>
      <h1>Auth</h1>
      <pre>{JSON.stringify(match, null, 2)}</pre>
      <pre>{JSON.stringify(location, null, 2)}</pre>
      <pre>{JSON.stringify(history, null, 2)}</pre>

      <>
        <Route path={`${match.path}/login`} component={<Login />} />
      </>
    </>
  );
}
