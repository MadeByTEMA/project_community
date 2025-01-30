'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ManageBoardPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/board/manage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setData(await res.json());
    } else {
      setError(await res.json());
    }
  };

  return (
    <div>
      <h1>Manage Board</h1>
      <button onClick={handleClick}>Send POST Request</button>
        {data && (
          <div>
            <h4>DATA</h4>
            <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
        {error && 
          <div>
            <h4>ERROR</h4>
            <p>{JSON.stringify(error, null, 2)}</p>
          </div>
        }
    </div>
  );
}