function fetchWithTimeout(url, options = {}) {
  const { timeout = 5000, retries = 3, ...fetchOptions } = options;
  
  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  // Add signal to fetch options
  const finalOptions = {
    ...fetchOptions,
    signal: controller.signal
  };

  // Function to attempt fetch with retries
  const attemptFetch = async (attemptsLeft) => {
    try {
      const response = await fetch(url, finalOptions);
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      if (attemptsLeft > 1 && (error.name === 'AbortError' || error.type === 'request-timeout')) {
        // Retry the request
        return attemptFetch(attemptsLeft - 1);
      }
      throw error;
    }
  };

  return attemptFetch(retries);
}

// Example usage:
// fetchWithTimeout('https://api.example.com/data', {
//   timeout: 3000,
//   retries: 3,
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .catch(error => console.error('Error:', error));
