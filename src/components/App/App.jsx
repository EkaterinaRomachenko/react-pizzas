import styles from './app.module.scss';
import '../../scss/app.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import Home from '../../pages/Home/Home';
import Menu from '../../pages/Menu/Menu';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
