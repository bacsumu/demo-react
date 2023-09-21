export default function Home({ match, location, history }) {
  return (
    <>
      <h1>Home</h1>
      <pre>{JSON.stringify(match, null, 2)}</pre>
      <pre>{JSON.stringify(location, null, 2)}</pre>
      <pre>{JSON.stringify(history, null, 2)}</pre>
    </>
  );
}
