import { lazy, Suspense } from 'react';

function App() {

  const Dash = lazy(() =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./components/Dashboard'));
      }, 10000); 
    })
  );

  return (
    <Suspense fallback={<div><h1>Loading...</h1></div>}>
      <Dash />
    </Suspense>
  );
}

export default App;
