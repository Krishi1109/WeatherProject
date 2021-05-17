// apikey = api.openweathermap.org/data/2.5/weather?q=Rajkot&units=metric&appid=b4dfbb5ab74ec9e80eab447b6a4c6659

const cityName = document.getElementById('cityName')
const submitButton = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const couyntryName = document.getElementById("country");
const data_hide = document.querySelector(".middle_layer");
const day = document.getElementById("day");
const today_date = document.getElementById("today_date");


const getinfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Plz write the name before`;
        data_hide.classList.add('data_hide');
    } else {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b4dfbb5ab74ec9e80eab447b6a4c6659`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            // couyntryName.innerText = arrData[0].sys[0].country;
            temp_real_val.innerText = arrData[0].main.temp;
            
            
            // const tempVal = await data.main.temp;
            // console.log(data.main);
            // temp.innerText = `${tempVal}`;



            const tempmood = arrData[0].weather[0].main; 
            if (tempmood == "Clear") {
                temp_status.innerHTML = '<i class="fas fa-sun"  style= "color : #eccc68; "></i>';
            }else if (tempmood == "Clouds") {
                temp_status.innerHTML = '<i class="fas fa-cloud" style= "color : #f1f2f6; ">';
            }else if (tempmood == "Rain") {
                temp_status.innerHTML = '<i class="fas fa-cloud-rain" style= "color : #a4b0be; "></i>';
            }else  {
                temp_status.innerHTML = '<i class="fas fa-cloud" style= "color : #f1f2f6;"></i>';
            }

            data_hide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = `Plz enter the city name properly`;
            data_hide.classList.add('data_hide');
        } 
        
    }
}
submitButton.addEventListener('click', getinfo)



const time = () => {
    var d = new Date();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day.innerText = days[d.getDay()];

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    today_date.innerText = `${d.getDate()} ${months[d.getMonth()]}`;
    
}

time();
 