/* Global Variables */
const zipInput = document.querySelector('#zip');
const generateButton = document.querySelector('#generate');
const apiKey = '6c753462a5264baf80f705541b8570ca';
// let zipCode = 90001;
const countryCode = 'us'

// postData function 
const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match the content type header
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

// fetch data from the openweathermap api
const getTemp = (zipCode) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}`;

    fetch(url)
        .then((resp) => { return resp.json() }) // Convert data to json
        .then((data) => {
            console.log(data.main.temp);
        })
        .catch(() => {
            // catch any errors
        });

}

// event listener function to get zipcode value and fetch data with it
const getZipCode = (e) => {
    let zip = zipInput.value;
    getTemp(zip);
};

// get temprature data when generate button is clicked
generateButton.addEventListener('click', getZipCode);




// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();