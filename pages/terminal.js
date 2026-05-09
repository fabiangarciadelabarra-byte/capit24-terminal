// update
export async function getServerSideProps() {
  const res = await fetch("https://capit24-prices.vercel.app/api/all");
  const data = await res.json();

  return {
    props: { data },
  };
}

export default function TerminalPage({ data }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Terminal de Precios</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
