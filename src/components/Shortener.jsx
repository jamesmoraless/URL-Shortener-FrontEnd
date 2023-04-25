import React, {useState, useEffect} from 'react';
import './shortener.css';

export default function Shortener() {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');//might have to start w my api and append later with the id 

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Call the API to register the user
        try{
            const token = localStorage.getItem('jwtToken'); // retrieve token from local storage
            //console.log(token);
            const response = await fetch('http://localhost:5000/api/v1/urlshortener/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
                body: JSON.stringify({ long_url: longUrl}),
            });
            //console.log(response);
            const data = await response.json();
            //console.log('Data:', data);
            if (data.short_id) {
                setShortUrl(`http://localhost:5000/api/v1/urlshortener/${data.short_id}`);
              } else {
                setShortUrl('An error occurred while shortening the URL.');
              }
        }catch(err){
            console.log('An error occured while calling the API.');
        }
    };

  return (
    
    <div className = "shortener-container">
        <h2 className="shortener-title">Shorten URL</h2>
        <form className="shortener-form" onSubmit={handleSubmit}>
            <input 
            type = "text"
            placeholder="http://helloWorld.com"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}/>
            <button type="submit">Shorten</button>        
            </form> 
            {shortUrl && <p className="shortener-url">{shortUrl}</p>}
    </div>
    
  )
}
