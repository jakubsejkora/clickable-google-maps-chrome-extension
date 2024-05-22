// content.js
function makeDivClickable(className) {
  const mapDiv = document.querySelector(className);
  if (mapDiv) {
    const searchQuery = window.location.search.match(/q=([^&]+)/);
    if (searchQuery) {
      const decodedQuery = decodeURIComponent(searchQuery[1]);
      const mapsUrl = `https://www.google.com/maps/search/${decodedQuery}`;
      mapDiv.addEventListener("click", () => {
        window.open(mapsUrl, "_blank");
      });
      mapDiv.style.cursor = "pointer"; // Add this line to set the cursor style
    }
  }
}

// Apply the functionality to both divs
makeDivClickable(".Ggdpnf.kno-fb-ctx");
makeDivClickable(".TlfAte.fMnWhd.ef0Hld");
