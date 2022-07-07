import { useEffect } from 'react';
import { Header } from './components/ui/Header';

function App() {
  useEffect(() => {
    headerInitFunction();
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
