let allWeatherData = [];

async function startApp() {
    const container = document.getElementById('weather-cards');
    
    try {
        // 1. Şehir listesini (JSON) çek [cite: 76]
        const response = await fetch('./iller.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        
        // 2. Her şehir için Hava Durumu API'sine bağlan [cite: 77, 78]
        for (const city of data.cities) {
            try {
                const apiRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`);
                const weather = await apiRes.json();
                const current = weather.current_weather;
                
                // Hava durumuna göre tema belirle [cite: 74]
                const theme = getTheme(current.weathercode);
                allWeatherData.push({ ...city, current, theme });
            } catch (e) { console.error(`${city.name} yüklenemedi`); }
        }

        render(allWeatherData);

        // Arama özelliği
        document.getElementById('citySearch').addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = allWeatherData.filter(c => c.name.toLowerCase().includes(term));
            render(filtered);
        });

    } catch (error) {
        container.innerHTML = '<div class="alert alert-danger">Sistem başlatılamadı. Dosya yollarını kontrol edin.</div>';
    }
}

function render(cities) {
    const container = document.getElementById('weather-cards');
    container.innerHTML = cities.length ? '' : '<p class="text-center">Sonuç bulunamadı.</p>';
    
    cities.forEach(city => {
        container.innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card weather-card h-100 ${city.theme.borderClass}">
                    <div class="card-body text-center p-4">
                        <h5 class="fw-bold mb-3">${city.name}</h5>
                        <img src="assets/images/${city.theme.icon}" class="weather-icon mb-3" alt="${city.theme.label}">
                        <h2 class="fw-bold mb-1">${Math.round(city.current.temperature)}°C</h2>
                        <p class="text-muted small">${city.theme.label}</p>
                        <div class="d-flex justify-content-between pt-3 border-top mt-3 small text-secondary">
                            <span>💨 ${city.current.windspeed} km/s</span>
                            <span>📍 ${city.lat}°</span>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

// Weathercode eşleştirmesi [cite: 74]
function getTheme(code) {
    if (code === 0) return { label: "Güneşli", icon: "sunny.gif", borderClass: "border-sunny" };
    if (code >= 1 && code <= 3) return { label: "Bulutlu", icon: "cloudy.gif", borderClass: "border-cloudy" };
    if (code >= 51 && code <= 67) return { label: "Yağmurlu", icon: "rainy.gif", borderClass: "border-rainy" };
    if (code >= 71 && code <= 77) return { label: "Karlı", icon: "snowy.gif", borderClass: "border-snowy" };
    return { label: "Parçalı Bulutlu", icon: "cloudy.gif", borderClass: "border-cloudy" };
}

startApp();