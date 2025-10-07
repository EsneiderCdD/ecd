import { useEffect, useState } from "react";
import styles from "./Taskbar.module.css";

function Taskbar() {
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState("");

  // Obtener clima
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Envigado,CO&appid=c31ee456d9d96936bb8ad989fc7c666a&units=metric&lang=es"
        );
        const data = await res.json();
        setWeather({
          temp: Math.round(data.main.temp),
          desc: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        });
      } catch (error) {
        console.error("Error obteniendo clima:", error);
      }
    };

    fetchWeather();
  }, []);

  // Actualizar hora
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("es-CO", {
        timeZone: "America/Bogota",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatter.format(now));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.taskbar}>
      {/* Izquierda: Clima */}
      <div className={styles.left}>
        {weather ? (
          <>
            <img src={weather.icon} alt="icono clima" />
            <span>{weather.temp}°C</span>
            <span>{weather.desc}</span>
          </>
        ) : (
          <span>Cargando...</span>
        )}
      </div>

      {/* Centro: Buscador + Iconos */}
      <div className={styles.center}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input type="text" placeholder="Buscar" disabled />
        </div>

        <div className={styles.icons}>
          <button className={styles.iconBtn}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
              alt="GitHub"
            />
          </button>
          <button className={styles.iconBtn}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="LinkedIn"
            />
          </button>
          <button className={styles.iconBtn}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
            />
          </button>
        </div>
      </div>

      {/* Derecha: Hora */}
      <div className={styles.right}>
        <span>{time}</span>
      </div>
    </div>
  );
}

export default Taskbar;

