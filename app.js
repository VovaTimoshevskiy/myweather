window.addEventListener('load',()=>{
   let long;
   let lat;
   let temperatureDescription = document.querySelector('.description');
   let temperatureDegree = document.querySelector('.temp');
   let locationTimezone = document.querySelector('.location');
   let icon = document.querySelector(".icon");

   if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=a88f29ed3e0b4983b2866d0b66c6532c`
    
    fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(response =>{
            console.log(response);
            temperatureDegree.textContent = Math.floor( response.data[0].temp);
            temperatureDescription.textContent = response.data[0].weather.description;
            locationTimezone.textContent = response.data[0].city_name;
            icon.src = `https://www.weatherbit.io/static/img/icons/${response.data[0].weather.icon}.png`;
       
           
        });
    
       });

       
      }
      else{
          h1.textContent = "No internet";
      }
     }); 