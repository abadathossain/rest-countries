const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountries(data.slice(0, 20)))
}
const displayCountries = countries =>{
    // console.log(countries)
    countries.forEach(country => {
        // console.log(country)

        const countryContainer = document.getElementById('container')
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
        <h3>Name:${country.name.common}</h3>
                <p>Capital:${country.capital ? country.capital[0]:"No Capital" }</p>
                <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countryContainer.appendChild(countryDiv)
        
    });
}



const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v2/alpha/${code}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.demonym))
    .then(data => showCountryDetails(data.demonym))
}
const showCountryDetails = country =>{
    const countryDetail = document.getElementById('country-detail')
    const countryDiv = document.createElement('div')
    countryDiv.innerHTML = `
        <h3>Name:${country.nativeName}</h3>
        <p>Capital:</p>
        <img src="" alt="">
    `
    countryDetail.appendChild(countryDiv)
}

loadCountries()