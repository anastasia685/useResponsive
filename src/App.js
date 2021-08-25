import React, {useContext} from 'react';

import ResizeContext from "./context/resize-context";

import {MODES} from "./hooks/use-responsive";

const App = () => {
  const mode = useContext(ResizeContext);
  /*useEffect(() => {
    console.log(mode);
  }, [mode]);*/
  return (
      <app>
        {mode === MODES[0] && <div>Show on mobile</div>}
        {mode === MODES[1] && <div>Show on tablet</div>}
        {mode === MODES[2] && <div>Show on desktop</div>}
      </app>
  );
};

export default App;
