const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];
function deteleToyCat(listToys) {
    const listToysNoCat = [];
    for (const toy of listToys) {
        if (!toy.name.includes('gato')) {
            listToysNoCat.push(toy);
        }
    }
    return listToysNoCat;
}
console.log(deteleToyCat(toys));