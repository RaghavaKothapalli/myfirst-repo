const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  const Location = document.getElementById('Location').value;
  const checkIn = document.getElementById('check In').value;
  const checkOut = document.getElementById('check Out').value;

  
  fetchHotelData(Location, checkIn, checkOut, guests)
    .then((data) => {
      renderSearchResults(data);
    })
    .catch((error) => {
      console.error('Error fetching hotel data:', error);
    });
});

function fetchHotelData(Location, checkIn, checkOut) {
}

function renderSearchResults(data) {
}