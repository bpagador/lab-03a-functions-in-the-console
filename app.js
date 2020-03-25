const cambodia = {country: 'Cambodia', continent: 'Asia', population: '17.2 mil'};
const france = {country: 'France', continent: 'Europe', population: '3.9 mil'};
const mexico = {country: 'Mexico', continent: 'North America', population: '9.5 mil'};
const peru = {country: 'Peru', continent: 'South America', population: '6.8 mil'};
const fiji = {country: 'Fiji', continent: 'Oceania', population: '3.2 mil'};

let countries_list = [cambodia, france, mexico, peru, fiji, 'middle earth'];

console.log (countries_list)

for (let i = 0; i < countries_list.length; i++) {
    console.log(countries_list[i])
}

function logOutThings() {
    console.log('Here are your', countries_list.length, 'countries!' );
}

logOutThings()