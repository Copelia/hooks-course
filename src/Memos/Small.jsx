import React from 'react';

export const Small = React.memo(({value}) => {

  console.log('Me volví a renderear');

  return(
    <>
      <small>{value}</small>
    </>
  )
});
