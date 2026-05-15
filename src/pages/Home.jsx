import { Link } from 'react-router-dom';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import FotoPortafolio from '@/assets/images/FotoPortafolio-removebg.png';
import styles from './Home.module.css';

const radarData = [
  { subject: 'Frontend', value: 4.0 },
  { subject: 'Backend', value: 2.8 },
  { subject: 'BDatos', value: 2.8 },
  { subject: 'DevOps', value: 1.3 },
  { subject: 'UI/UX', value: 3.0 },
  { subject: 'Ágil', value: 3.5 },
];

const stats = [
  { label: 'Frontend', value: 81 },
  { label: 'Backend', value: 76 },
  { label: 'B. Datos', value: 77 },
  { label: 'M. Ágiles', value: 80 },
  { label: 'Comunic.', value: 90 },
  { label: 'Data', value: 72 },
];

function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <div className={styles.frame}>
          <div className={styles.cardBody}>
            <div className={styles.header}>
              <h1 className={styles.name}>Esneider Cadavid</h1>
              <div className={styles.country}>
                <span className={styles.flag}>🇨🇴</span>
                <span>Colombia</span>
              </div>
            </div>

            <div className={styles.hero}>
              <div className={styles.photoLayer}>
                <img
                  src={FotoPortafolio}
                  alt="Esneider Cadavid"
                  className={styles.photo}
                />
              </div>

              <div className={styles.overlay}>
                <div className={styles.radarWrap}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      data={radarData}
                      margin={{ top: 5, right: 15, bottom: 5, left: 15 }}
                    >
                      <PolarGrid stroke="rgba(255,255,255,0.1)" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{
                          fontSize: 9,
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

            <div className={styles.roles}>
              <span className={styles.role}>Desarrollador FullStack</span>
              <span className={styles.roleSecondary}>Analista de Datos</span>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statBox}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <Link to="/about" className={styles.btn}>
                Sobre mí
              </Link>
              <Link to="/projects" className={`${styles.btn} ${styles.btnOutline}`}>
                Proyectos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
