document.addEventListener("DOMContentLoaded", () => {
    const map = L.map("map").setView([0, 0], 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    const marker = L.marker([0, 0]).addTo(map);

    function updateLocation(position) {
        const { latitude, longitude } = position.coords;
        const newPos = [latitude, longitude];
        map.setView(newPos);
        marker.setLatLng(newPos);
    }

    function handleError(error) {
        console.error("Error getting location:", error.message);
        alert("Error getting location: " + error.message);
    }

    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(updateLocation, handleError);
    } else {
        alert("Geolocation is not supported in this browser");
    }
});
