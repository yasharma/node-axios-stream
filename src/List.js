import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

function List() {
  const [chunk, setChunk] = useState([])
  const renderSlice = useCallback((data, _timeout, _slice = 10000) => {
    if(data.length > 0) {
      clearTimeout(_timeout)
      const timeout = setTimeout(() => {
        renderSlice(data, timeout);
      }, 1000)
      setChunk(_chunk => _chunk.concat(data.splice(0, _slice)))
    } else {
      console.log('else')
    }
  }, [])
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/')
        renderSlice(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [renderSlice])

  return (
    <div className="App">
      <table border="1">
        <caption style={{color: 'green'}}>Renderd data count - {chunk.length}</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Certificate Number</th>
            <th>Business Name</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(chunk) && chunk.map((x, i) =>
            <tr key={i}>
              <td>{x.id}</td>
              <td>{x.certificate_number}</td>
              <td>{x.business_name}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
