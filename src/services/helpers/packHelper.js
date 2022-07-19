const service = require('../service');

const getPacks = async () =>{
    const packs = [];
    const data = await service.executeQuery('abonnements');
    data.forEach(p =>{
        packs.push({id:p.id,title: p.designation,prix:p.montant,cours:[],services:[]});
    })
    return packs;
}

module.exports = {
    getPacks
}