const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
function removeDestinationsForId(listPlaces){
    const filteredPlaces = [];
    for (const place of listPlaces) {
        if (place.id !== 11 && place.id !== 40) {
            filteredPlaces.push(place);
        }
    }
    return filteredPlaces;
}
console.log(removeDestinationsForId(placesToTravel));