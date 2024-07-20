export async function getVans(){
    try {
        const response = await fetch("/api/vans");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.vans; // Make sure this is the correct path to the vans data
      } catch (error) {
        console.error('Fetching vans failed', error);
        return null; // Return null if there is an error
      }  
}

