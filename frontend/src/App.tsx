import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((r) => r.json())
      .then((d) => setStatus(d.status))
      .catch(() => setStatus("backend not reachable"));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Paper Trading</h1>
      <p>Backend: {status}</p>
    </div>
  );
}

export default App;
