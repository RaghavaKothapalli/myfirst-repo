const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  const Location = document.getElementById('Location').value;
  const checkIn = document.getElementById('check In').value;
  const checkOut = document.getElementById('check Out').value;

  // Make API call to fetch hotel data based on the user's input
  fetchHotelData(Location, checkIn, checkOut, guests)
    .then((data) => {
      // Display the search results on the page
      renderSearchResults(data);
    })
    .catch((error) => {
      console.error('Error fetching hotel data:', error);
    });
});

function fetchHotelData(Location, checkIn, checkOut) {
  // Implement the API call logic here
  // Return the fetched hotel data as a Promise
}

function renderSearchResults(data) {
  // Implement the logic to display the search results on the page
}