import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

function App() {
  const startData=[
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ]
  
  const [data,setData]=useState(startData)
  

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateComparison = new Date(b.date) - new Date(a.date);
      return dateComparison !== 0 ? dateComparison : b.views - a.views;
    });

    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const viewsComparison = b.views - a.views;
      return viewsComparison !== 0
        ? viewsComparison
        : new Date(b.date) - new Date(a.date);
    });

    setData(sortedData);
  };


  return (
    <div className="App">
      <h1>A Basic HTML Table</h1>
      <button onClick={sortByDate}>Sort by date</button>
      <button onClick={sortByViews}>Sort by views</button>
      <table style={{marginLeft:"40%"}}>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.views}</td>
              <td>{entry.article}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default App;
