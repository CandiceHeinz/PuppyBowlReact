export async function fetchPlayers() {
  try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-PT-B/players/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  };
};
