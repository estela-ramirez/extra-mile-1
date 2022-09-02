import React, { useEffect, useState} from 'react'

function App() {
    const [data, setData] = useState([{}]);

    // useEffect(()=>{
    //     fetch('/api')
    //     .then(response => response.json())
    //     .then((json) => { 
    //         setData(json);
    //     });
    // }, [])

  return (
    <div className="App">
      <p>Hello World</p>
      {/* {(typeof data.users == "undefined") ? (
        <p>Loading ....</p>
      ) : data.users.map((users, k) => (
        <p key = {k}>{users}</p>
      ))} */}
    </div>
  );
}

export default App;
