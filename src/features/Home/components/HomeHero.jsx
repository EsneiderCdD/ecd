import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import FotoPortafolio from '@/assets/ft_produccion.png';
import { radarData } from '../data/homeData';
import styles from '../styles/HomeHero.module.css';

function HomeHero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.profilePhotoLayer}>
        <img
          src={FotoPortafolio}
          alt="Esneider Cadavid"
          className={styles.profilePhoto}
        />
      </div>

      <div className={styles.radarOverlay}>
        <div className={styles.radarContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              data={radarData}
              margin={{ top: 8, right: 20, bottom: 8, left: 20 }}
            >
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{
                  fontSize: 8,
                  fill: 'rgba(255,255,255,0.5)',
                  fontFamily: "'IBM Plex Sans', sans-serif",
                }}
              />
              <PolarRadiusAxis
                domain={[0, 5]}
                tick={false}
                axisLine={false}
              />
              <Radar
                dataKey="value"
                stroke="#c9a84c"
                fill="#c9a84c"
                fillOpacity={0.18}
                strokeWidth={1.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
