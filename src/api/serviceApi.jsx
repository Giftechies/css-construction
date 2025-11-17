// src/api/servicesApi.js

// Assuming your environment variable for the backend base URL is set
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; 

export async function fetchServices() {
  try {
    // We add { cache: 'force-cache' } or 'no-store' as needed.
    // By default, Next.js caches fetch() requests, which is great for SSG/ISR.
    const res = await fetch(`${BASE_URL}/api/service-category`); 

    if (!res.ok) {
      // Log the error but continue gracefully, perhaps returning an empty array
      console.error(`API Error: ${res.statusText}`);
      return []; 
    }

    const data = await res.json();
    return data; // Assuming the API returns an array of service objects
    
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return []; // Return empty array on network failure
  }
}