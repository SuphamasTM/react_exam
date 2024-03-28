import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import List from "./components/List";
import Filter from "./components/Filter";
// import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export const DataContext = createContext(); // export DataContext

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const baseUrl = process.env.REACT_APP_BASE_URL;
      const response = await axios.get(baseUrl + "/api/v1/category");
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filteredResults = data.filter((profile) => {
      return profile.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <div
        style={{
          margin: "50px",
          justifyContent: "center",
          // marginBottom: "100px",
        }}
      >
        <div style={{ marginLeft: "16px" }}>
          <h1>About Team</h1>
          <Filter handleSearch={handleSearch} />
        </div>
        <DataContext.Provider value={filteredData}>
          <List />
        </DataContext.Provider>
        <BackToTopButton />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
