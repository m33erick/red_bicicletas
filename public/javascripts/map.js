var map = L.map('main_map').setView([44.8333, -0.5667], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([44.8333, -0.5667]).addTo(map);
L.marker([44.8533, -0.5667]).addTo(map);
L.marker([44.8333, -0.5867]).addTo(map);
