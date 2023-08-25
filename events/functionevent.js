import React from 'react';

function Functionevent() {
    function ClickHandle(){
        console.log('welcome to react class');
    }

  return (
    <div>
        <button onClick={ClickHandle}>Clickme</button>
    </div>
  )
}
export default Functionevent
