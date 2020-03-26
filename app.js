const cambodia = {country: 'Cambodia', continent: 'Asia', population_mil: 17.2};
const france = {country: 'France', continent: 'Europe', population_mil: 3.9};
const mexico = {country: 'Mexico', continent: 'North America', population_mil: 9.5};
const peru = {country: 'Peru', continent: 'South America', population_mil: 6.8};
const fiji = {country: 'Fiji', continent: 'Oceania', population_mil: 3.2};

let countries_list = [cambodia, france, mexico, peru, fiji, 'middle earth'];

console.log (countries_list)

function logOutThings() {
    console.log('Here are your', countries_list.length, 'countries!' );
    for (let i = 0; i < countries_list.length; i++) {
        console.log(countries_list[i])
    }
}

logOutThings()

if (countries_list[i].population_mil < 5) {
    console.log ('Small population')
}
if else (countries_list.population_mil > 10) {
    console.log 
}