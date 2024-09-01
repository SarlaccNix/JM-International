const BASE_URL: string = 'https://bigbang-cms-production.up.railway.app'

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export const fetchBrands = async () => {
  try {
    console.log('Fetching brands...');
    const response = await fetch(`${BASE_URL}/api/marcas`);
    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);
    return data.docs.map((brand: any) => ({
      id: brand.id,
      name: brand.nombre,
      logo: `${BASE_URL}${brand.logo.url}`,
    }));
  } catch (error) {
    console.error('Error fetching brands:', error);
  }
};