# weather-website
A dynamic weather dashboard built with Vanilla JS and Bootstrap 5. It uses the Open-Meteo API and local JSON data to display real-time weather conditions for 81 cities in Turkey.

🌦️ Turkey Weather Dashboard
A modern, responsive web application that fetches and displays real-time weather data for 81 cities across Turkey ``.

🚀 About the Project
This project demonstrates advanced asynchronous API integration and dynamic DOM manipulation using Vanilla JavaScript . By loading geographic coordinates from a local JSON file and communicating with the Open-Meteo API , the application delivers live weather updates seamlessly. The UI is designed with modern trends in mind, utilizing Bootstrap 5 and custom CSS for a polished, interactive experience ``.

✨ Key Features
Real-Time Data Integration: Asynchronously retrieves current temperature, wind speed, and weather conditions for 81 distinct locations simultaneously ``.

Instant Search Filtering: Includes a highly responsive live search input that instantly filters the displayed city cards as the user types ``.

Dynamic UI Theming: Automatically parses weather codes to adjust card themes (Sunny, Cloudy, Rainy, Snowy) and applies color-coded borders to visually represent the current climate ``.

Modern Aesthetic: Features a "glassmorphism" design with blurred backgrounds (backdrop-filter), smooth hover states, and continuous floating animations for weather icons ``.

🛠️ Technologies & Tools
Frontend Engine: HTML5, CSS3, JavaScript (ES6+) ``

CSS Framework: Bootstrap 5.3.0 ``

Data Sources:

Open-Meteo API (For live weather forecasting) ``

Local JSON (iller.json) containing latitude and longitude coordinates ``

📂 Project Structure
Plaintext
weather-app/
├── index.html       # Main semantic UI featuring the search bar and grid layout
├── css/style.css    # Custom styling, floating animations, and glassmorphism
├── assets/js/app.js # Fetch logic, data mapping, and dynamic DOM rendering
├── iller.json       # Geographic coordinate database
└── README.md        # Project documentation
⚙️ How to Run
No heavy backend setup is required, but a local server is recommended to fetch the local JSON file properly.

Clone the repository to your local machine.

Open the project folder in VS Code.

Start the project using the Live Server extension (or any other local HTTP server) to ensure iller.json is fetched correctly without CORS issues.

Search for your city and check the weather!

👨‍💻 Developer
Servet Can Kılınç
Front-End Software Development Student @ Ege University
