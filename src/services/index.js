const API_ADRESSE = "localhost";
const API_PORT = "7187";
const API_PROTOCOL = "https";
const TARGET = `${API_PROTOCOL}://${API_ADRESSE}:${API_PORT}/api`
const gymServices = [
    {nom:"Fitness",imagePath:"images/gymServices/fitness.jpeg"},
    {nom:"Cycling",imagePath:"images/gymServices/cycling.jpeg"},
    {nom:"Boxing",imagePath:"images/gymServices/boxing.jpeg"},
    ]
//abonnement
const users = [];
export default class Service {
    static gymName = "ORY GYM";
    static authenticated = false;
    
    static getGymServices(){    
        return gymServices;
    }
    
    static authenticateUser(user){
      return users.find(u => u.login === user.login && u.password === user.password );
    }

    static isAuthenticated(){
        console.log("auth: "+this.authenticated);
        return this.authenticated;
    }

    static async getPacks(){
        const packs = await this.executeQuery('abonnements');
        return packs;
    }

    static getTarget(){
        return TARGET;
    }

    static async getCours(){
        const cours = [];
        const data = await this.executeQuery('ServicesGetService');
        data.forEach(c =>{
            cours.push(this.constructCours(c));
        })
        return cours;
    }

    static executeQuery = async (url) =>{
        const result = await fetch(`${TARGET}/${url}`);
        return result.json();
    }

    static constructCours = ({nom,cours})=>{
        let cs = [];
        cours.forEach(c=>{
            cs.push(c);
        });
        return {name : nom,cours:cs};
    }

}