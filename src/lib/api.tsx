// src/lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getData(endpoint: string) {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    next: { revalidate: 3600 }, // Cache data selama 1 jam (ISR)
  });

  if (!res.ok) throw new Error("Gagal mengambil data");
  return res.json();
}