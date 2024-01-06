import { useState, useEffect } from 'react';
import FbPost from './Components/FbPost/index';

function App() {
  const [postObj, setPostObj] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        setPostObj(res.products)
      })
  }, [])

  if (!postObj.length) {
    return <div id="loader">
      <div class="loader"></div>
    </div>
  }

  return (

    <div className="App">

      <div className='container'>
        {postObj.map(element => {
          return <FbPost postObj={element} />
        })
        }
      </div>

    </div>
  );

};

export default App;