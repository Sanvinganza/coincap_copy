import './index.scss';
import { Briefcase } from './components/Briefcase';
import { Header } from './components/Header';
import CoinTable from './components/CoinTable';

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
