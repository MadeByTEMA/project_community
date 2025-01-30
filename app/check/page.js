'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckPage() {
  const [tokenData, setTokenData] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter(); // Next.js의 라우터 사용

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const res = await fetch('/api/check', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // 쿠키 전송 허용
        });

        if (!res.ok) {
          const { error } = await res.json();
          throw new Error(error || 'Failed to fetch token data.');
        }

        const data = await res.json();
        setTokenData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTokenData();
  }, []);

  const navigate = (path) => {
    router.push(path); // 버튼 클릭 시 경로 이동
  };

  return (
    <div>
      <h1>JWT Token Data</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : tokenData ? (
        <pre>{JSON.stringify(tokenData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}

      <div style={{ marginTop: '20px' }}>
        {/* 버튼 3개 추가 */}
        <button onClick={() => navigate('/login')} style={{ marginRight: '10px' }}>
          Login
        </button>
        <button onClick={() => navigate('/admin/board')} style={{ marginRight: '10px' }}>
          Admin
        </button>
        <button onClick={() => navigate('/manage/board')} style={{ marginRight: '10px' }}>
          Manage
        </button>
        <button onClick={() => navigate('/board')}>
          User
        </button>
      </div>
    </div>
  );
}