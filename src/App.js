import { useEffect, useState } from 'react';

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async() => {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    
    if(!response.ok) console.log('Error');
    else{
      const data = await response.json();
      const slip = data.slip.advice;
      setAdvice(slip);
    }
  }

  useEffect(()=>{fetchAdvice()}, []);
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className='button' onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
