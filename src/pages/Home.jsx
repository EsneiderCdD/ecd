import frame2 from '@/assets/hOME.png';
import HomeHeader from '@/features/Home/components/HomeHeader';
import HomeHero from '@/features/Home/components/HomeHero';
import HomeFlagsAndName from '@/features/Home/components/HomeFlagsAndName';
import HomeStats from '@/features/Home/components/HomeStats';
import HomeFooter from '@/features/Home/components/HomeFooter';
import styles from '@/features/Home/styles/Home.module.css';

function Home() {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.cardContainer}>
        <div className={styles.cardFrame} style={{ backgroundImage: `url(${frame2})` }}>
          <div className={styles.cardBody}>
            <HomeHeader />
            <HomeHero />
            <HomeFlagsAndName />
            <HomeStats />
            <HomeFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
