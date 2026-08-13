async function getJoke() {
  try {
    // 1. Send network request
    // const response = await fetch('https://officia-joke-api.appspot.com/random_joke');
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');

    // 2. Check for HTTP errors (404, 500, etc.)
    // if (!response.ok) {
    //   throw new Error(`HTTP Error! Status: ${response.status}`);
    // }

    // 3. Convert response to JS Object
    // If JSON is malformed, JSON parsing will throw an error automatically and jump to catch!
    const data = await response.json();

    // 4. Use the data
    console.log(`${data.setup} - ${data.punchline}`);

  } catch (error) {
    // 5. Handle both Network Errors AND JSON Parsing Errors gracefully
    console.error("An error occurred while fetching the joke:", error.message);
  }
}

// getJoke();

async function makeJoke() {
     try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json()
        console.log(data.setup);

        
     }catch(error) {
    console.error("An error occurred while fetching the joke:", error.message);
     }
}
makeJoke()