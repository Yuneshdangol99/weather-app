const btn = document.getElementById('btn');
const popup = document.getElementById('popup');
const btn2 = document.getElementById('btn2');
const searchbox = document.getElementById('search-box');
const cityname = document.getElementById('city-name');
const citytime = document.getElementById('city-time');
const citytemp = document.getElementById('city-temp');

function openpopup() {
    popup.classList.add('open-popup'); 
}


btn.addEventListener('click', () => {
    const input = document.getElementById('donation-input').value;

    // Check if input is not a number
    if (isNaN(input)) {
        alert('Are you playing with me?');
        return;
    } else if (input === "") {
        alert('You need to pay some money to find out the weather.');
        return;
    } else if (input <= 100) {
        alert('amount should be more than 100 rs');
        return;
    } else {
        openpopup();
    }
    return;
});


async function getdata(cityname) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=e22f20ed3d1c4b7d95372016242006&q=${cityname}&aqi=yes`);
    return await promise.json();
}

btn2.addEventListener('click', async () => {
    const data = searchbox.value;
    const result = await getdata(data);
    setTimeout(() => {
        cityname.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
        citytime.innerText = `${result.location.localtime}`;
        citytemp.innerText = `${result.current.temp_c} ℃`;
    }, 1000);
})



// `http://api.weatherapi.com/v1/current.json?key=e22f20ed3d1c4b7d95372016242006&q=${cityname}&aqi=yes`


