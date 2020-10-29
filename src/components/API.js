import React, { useState} from "react";
import axios from 'axios';
import City from './City';

function API(props) {

    const [message, setMessage] = useState('')
    const [city, setCity] = useState('');
    const [data, setData] = useState({});
    const instance = axios.create({
      baseURL: 'https://api.teleport.org/api',
      headers: {'Accept': 'application/json'}
  })

    function citySearch(url){
        instance.get(url)
        .then(function (response) {
          const city_data = {
            full_name: response.data.full_name,
            population: response.data.population,
            latitude: response.data.location.latlon.latitude,
            longitude: response.data.location.latlon.longitude
          }
            setData(city_data)
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    function handleChange(e) {
        setCity(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      if (city === ''){
        setMessage('Enter a City');
        return
      }else{
        setMessage('Lookin\' it up')
      }
       const params = {
           search: city,    
       }
        instance.get('/cities',
        {params})
        .then(function (response) {
        citySearch(response.data._embedded['city:search-results'][0]._links['city:item'].href);
        })
        .catch(function (error) {
            setMessage("Could not locate city")
            setData({})
        });
    }

    return (
        <div>
    <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
          Lookup a City
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={city}
        onChange={handleChange}
        />
        <button 
        type="submit" className="btn btn__primary btn__lg">
          Search
        </button>
        {message}
      </form>
      <City
        data={data}/>
      </div>
      );
      


}

export default API;