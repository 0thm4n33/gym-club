import Service from ".";

export default class MaterielService{
    constructor(){
        this.api = Service.getTarget();
    }

    addMateriel(materiel){
        const materielJson = JSON.stringify(materiel);
        console.log(materiel);
        return fetch(`${this.api}/Materiels`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:materielJson
        })
    }
}