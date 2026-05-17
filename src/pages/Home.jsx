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
import frame2 from '@/assets/escudo_con_dis.png';
import styles from './Home.module.css';

const radarData = [
  { subject: 'Frontend', value: 4.0 },
  { subject: 'Backend', value: 3.7 },
  { subject: 'BDatos', value: 2.8 },
  { subject: 'DevOps', value: 1.5 },
  { subject: 'UI/UX', value: 3.0 },
  { subject: 'Data', value: 2.5 },
  { subject: 'Soft Skills', value: 4.1 },
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
        <div className={styles.frame} style={{ backgroundImage: `url(${frame2})` }}>
          <div className={styles.cardBody}>
            <div className={styles.header}>
              <span className={styles.posLabel}>POS</span>
              <div className={styles.rolesText}>
                <span className={styles.role}>Desarrollador FullStack</span>
                <span className={styles.roleSecondary}>Analista de Datos</span>
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

            <div className={styles.roles}>
              <div className={styles.rolesRight}>
                <img className={styles.badgeImg} src="https://i.imgur.com/68u42OA.png" alt="Trainit" />
                <img className={styles.badgeImg} src="https://i.imgur.com/arhQjJJ.png" alt="Antioquia" />
                <img className={styles.badgeImg} src="https://i.imgur.com/WrpdhzV.png" alt="Swaply" />
                <img className={styles.badgeImg} src="https://i.imgur.com/KDCOEW3.png" alt="badge" />
              </div>
              <div className={styles.rolesLeft}>
                <h1 className={styles.name}>Esneider Cadavid</h1>
              </div>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statsCol}>
                <div className={styles.statRow}>
                  <span className={styles.statNum}>{stats[0].value}</span>
                  <span className={styles.statName}>{stats[0].label}</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statNum}>{stats[1].value}</span>
                  <span className={styles.statName}>{stats[1].label}</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statNum}>{stats[2].value}</span>
                  <span className={styles.statName}>{stats[2].label}</span>
                </div>
              </div>
              <div className={styles.separator} />
              <div className={styles.statsCol}>
                <div className={styles.statRow}>
                  <span className={styles.statNum}>{stats[3].value}</span>
                  <span className={styles.statName}>{stats[3].label}</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statNum}>{stats[4].value}</span>
                  <span className={styles.statName}>{stats[4].label}</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statNum}>{stats[5].value}</span>
                  <span className={styles.statName}>{stats[5].label}</span>
                </div>
              </div>
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
