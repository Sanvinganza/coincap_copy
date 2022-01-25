import './index.scss';
import { Briefcase } from './components/Header/Briefcase';
import { Header } from './components/Header/Header';
import CoinTable from './components/Main/CoinTable';

function App() {
  return (
      <>
        <Header />
        <Briefcase />
        <CoinTable />
      </>
    );
}

export default App;
