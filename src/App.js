import React from 'react';
import StartButton from './Start-button';
import RenderQuiz from './renderQuiz';

function App(props) {
  return (
    <div className="App">
      <StartButton className='start'/>
      <RenderQuiz store={props.store}/>
    </div>
  );
}

export default App;
