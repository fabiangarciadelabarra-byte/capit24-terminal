async function getPrices() {
  const res = await fetch("https://capit24-prices.vercel.app/api/all", {
    next: { revalidate: 5 }
  });
  return res.json();
}

export default async function TerminalPage() {
  const data = await getPrices();

  return (
    <div style={{ padding: 40 }}>
      <h1>Terminal de Precios</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
