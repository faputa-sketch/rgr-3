import React from 'react';
import classes from './app.module.scss';

const App = () => {
  /* изменяемые: input-data.ts, infinity, graph, вывод */

  const wrapperStyle: React.CSSProperties = { minHeight: window.innerHeight };

  return <div className={classes.wrapper} style={wrapperStyle} />;
};

export default App;
