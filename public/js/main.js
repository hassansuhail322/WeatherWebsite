const submibtn = document.getElementById('submitbtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_real = document.getElementById('temp_real');
const temp_dis = document.getElementById('temp_dis');

const datahide = document.querySelector(".middle_layer");




const getInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;


    if (cityVal === "") {
        city_name.innerText = `Please enter name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=155f1dce6d0fa057d40eac84fbe9e3bb`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;
            temp_dis.innerText = arrData[0].weather[0].main;
            datahide.classList.remove('data_hide');

        
        } catch {
            city_name.innerText = `Please enter name properly`;
            datahide.classList.add('data_hide');

        }
       

    }
}





submibtn.addEventListener('click', getInfo);

