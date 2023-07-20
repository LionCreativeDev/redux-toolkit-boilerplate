import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import SearchBox from './container/components/SearchBox';
import Table from './container/components/Table';

import { useDispatch } from "react-redux"
import { setRecordsInStore } from "./store/slices/Records"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchRecords = () => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
        // handle success
        if (response.data.length > 0)
          dispatch(setRecordsInStore(response.data));
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
    }

    fetchRecords();
  }, [dispatch]);

  return (
    <>
      {/*Redux implemented using repo: https://github.com/LionCreativeDev/react-chat-app & https://www.learnbestcoding.com/post/112/how-to-use-mapstatetoprops-in-function-components*/}
      {/* Search Box To filter Records*/}
      <SearchBox />

      {/*Records Table*/}
      <Table />
    </>
  );
}

export default App;
