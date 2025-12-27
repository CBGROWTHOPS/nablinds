interface LocationData {
  city: string;
  region: string;
  country: string;
}

const SOUTH_FLORIDA_CITIES = [
  'miami', 'fort lauderdale', 'boca raton', 'coral springs', 'pompano beach',
  'hollywood', 'pembroke pines', 'miramar', 'davie', 'plantation', 'sunrise',
  'coral gables', 'miami beach', 'hialeah', 'doral', 'aventura', 'kendall',
  'homestead', 'key west', 'delray beach', 'boynton beach', 'west palm beach',
  'palm beach', 'wellington', 'jupiter', 'weston', 'coconut grove', 'pinecrest',
  'cutler bay', 'palmetto bay', 'north miami', 'north miami beach', 'sunny isles',
  'bal harbour', 'surfside', 'brickell', 'hallandale', 'dania beach'
];

export async function getUserLocation(): Promise<string> {
  const cachedLocation = sessionStorage.getItem('userLocation');
  if (cachedLocation) {
    return cachedLocation;
  }

  try {
    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(3000)
    });

    if (!response.ok) {
      throw new Error('Geolocation API failed');
    }

    const data: LocationData = await response.json();

    if (!data.city || data.country !== 'US') {
      sessionStorage.setItem('userLocation', 'South Florida');
      return 'South Florida';
    }

    const cityLower = data.city.toLowerCase();
    const isSouthFlorida = SOUTH_FLORIDA_CITIES.some(city =>
      cityLower.includes(city) || city.includes(cityLower)
    );

    const locationText = isSouthFlorida ? data.city : 'South Florida';
    sessionStorage.setItem('userLocation', locationText);

    return locationText;
  } catch (error) {
    sessionStorage.setItem('userLocation', 'South Florida');
    return 'South Florida';
  }
}
