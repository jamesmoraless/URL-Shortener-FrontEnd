import React, { useState, useEffect } from 'react';
import "./urlTable.css";

export default function UrlTable() {
    const [urlData, setUrlData] = useState([]);
  
    useEffect(() => {
      const fetchUrlData = async () => {
        try {
            const token = localStorage.getItem('jwtToken');
          // Fetch data from API and store in state
          const response = await fetch('http://localhost:5000/api/v1/urlshortener/statistics', {
            headers: {
              'x-auth-token': token,
            },
          });
          const data = await response.json();
          setUrlData(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchUrlData();
    }, []);
  
    return (
        <section className="UrlTable-section"id='UrlTable'>
        <div className="urltable-container">
          <h2 className="urltable-title">YOUR URLS</h2>
          <table className="url-table">
            <thead>
              <tr>
                <th>Long URL</th>
                <th>Shortened URL</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over urlData and render each row */}
              {console.log(urlData)}
              {urlData.map((url) => (
                <tr key={url.short_id}>
                  <td>{url.long_url}</td>
                  <td>http://localhost:5000/api/v1/urlshortener/{url.short_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>
      );
    };
    
