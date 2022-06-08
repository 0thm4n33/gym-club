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
const packs = [
        {
            id:"1",
            title:"Pack Complet",
            prix:"600",
            services:[
                {serviceName:"Parrainage : jusqu’à 6 mois offerts(2)"},
                {serviceName:"Parrainage : jusqu’à 6 mois offerts(2)"},
                {serviceName:"Parrainage : jusqu’à 6 mois offerts(2)"},
                {serviceName:"Parrainage : jusqu’à 6 mois offerts(2)"},
            ],
            cours:[
                {coursName:"Cardio-Training"},
                {coursName:"Cardio-Training"},
                {coursName:"Cardio-Training"},
                {coursName:"Cardio-Training"},
            ]
        },
        {
            id:"2",
            title:"Pack Classic",
            prix:"400",
            services:[
                {serviceName:"Parrainage : jusqu’à 6 mois offerts(2)"},
                {serviceName:"Parrainage : jusqu’à 6 mois offerts(2)"},
                {serviceName:"Parrainage : jusqu’à 6 mois offerts(2)"},
                {serviceName:"Parrainage : jusqu’à 6 mois offerts(2)"},
            ],
            cours:[
                {coursName:"Cardio-Training"},
                {coursName:"Cardio-Training"},
                {coursName:"Cardio-Training"},
                {coursName:"Cardio-Training"},
            ]
        }
]

const cours = [
    {
        name:"Fitness",
        cours:[
            {coursName:"PILATES",duree:"45",niveau:"Debutant",temps:[
                {jour:"lundi",debut:"9h30",fin:"10h00"},
                {jour:"lundi",debut:"10h00",fin:"10h30"},
                {jour:"lundi",debut:"11h00",fin:"11h30"},
            ]
            },
            {coursName:"BODY BUMP",duree:"45",niveau:"Debutant",temps:[
                {jour:"mardi",debut:"9h40",fin:"10h01"},
                {jour:"mercredi",debut:"10h00",fin:"11h00"},
                {jour:"jeudi",debut:"11h00",fin:"11h30"},
            ]
            },
            {coursName:"BODY ATTACK",duree:"45",niveau:"Debutant",temps:[
                {jour:"",debut:"",fin:""},
                {jour:"",debut:"",fin:""},
                {jour:"",debut:"",fin:""},
            ]
            },
            {coursName:"BODY COMBAT",duree:"45",niveau:"Debutant",temps:[
                {jour:"",debut:"",fin:""},
                {jour:"",debut:"",fin:""},
                {jour:"",debut:"",fin:""},
            ]
            },
        ]
    },
    {
        name:"Cycling",
        cours:[
            {coursName:"SPRINT",duree:"45",niveau:"Debutant"},
            {coursName:"RRM",duree:"45",niveau:"Debutant",temps:[
                {jour:"mardi",debut:"12h00",fin:"13h00"},
                {jour:"jeudi",debut:"12h00",fin:"13h00"},
                {jour:"vendredi",debut:"12h00",fin:"13h00"},
            ]
            },
            {coursName:"BODY ATTACK",duree:"45",niveau:"Debutant",
            temps:[
                    {jour:"",debut:"",fin:""},
                    {jour:"",debut:"",fin:""},
                    {jour:"",debut:"",fin:""},
                ]
                },
            {coursName:"BODY COMBAT",duree:"45",niveau:"Debutant",temps:[
                {jour:"",debut:"",fin:""},
                {jour:"",debut:"",fin:""},
                {jour:"",debut:"",fin:""},
            ]
            },
        ]
    },
    {
        name:"TRX",
        cours:[
            {coursName:"TRX BLOCK",duree:"45",niveau:"Debutant",temps:[
                {jour:"",debut:"",fin:""},
                {jour:"",debut:"",fin:""},
                {jour:"",debut:"",fin:""},
            ]
            },
            {coursName:"TRX IRON",duree:"45",niveau:"Debutant",temps:[
                {jour:"",debut:"",fin:""},
                {jour:"",debut:"",fin:""},
                {jour:"",debut:"",fin:""},
            ]
            },
        ]
    },
]

const users = [
    {login:"admin@admin.com",password:"admin",role:"admin"},
    {
    login:"adh@ory.com",
    password:"admin",
    role:"adherent",
    adherent:{
        id:"1",
        nom:"ES-SAIDI",
        prenom:"Othmane",
        email:"essaidiothmane0@gmail.com",
        payment:"Visa Card",
        abonnement:{
            name:"COMPLET",
            services:[
                {
                name:"TRX",
                cours:[
                        {coursName:"TRX BLOCK",duree:"45",niveau:"Debutant",temps:[
                            {jour:"",debut:"",fin:""},
                            {jour:"",debut:"",fin:""},
                            {jour:"",debut:"",fin:""},
                        ]
                        },
                        {coursName:"TRX IRON",duree:"45",niveau:"Debutant",temps:[
                            {jour:"",debut:"",fin:""},
                            {jour:"",debut:"",fin:""},
                            {jour:"",debut:"",fin:""},
                        ]
                        },
                    ]
            }]
          }
        }
    }
]
const adhs = [
    {
        id:"1",
        nom:"ES-SAIDI",
        prenom:"Othmane",
        email:"essaidiothmane0@gmail.com",
        payment:"Visa Card",
        abonnement:{
            name:"COMPLET",
            service:[
                {
                name:"TRX",
                cours:[
                        {coursName:"TRX BLOCK",duree:"45",niveau:"Debutant",temps:[
                            {jour:"Jeudi",debut:"10h00",fin:"10h30"},
                            {jour:"Vendredi",debut:"11h30",fin:"12h00"},
                            {jour:"Samedi",debut:"12h30",fin:"13h00"},
                        ]
                        },
                        {coursName:"TRX IRON",duree:"45",niveau:"Debutant",temps:[
                            {jour:"Lundi",debut:"14h00",fin:"12h00"},
                            {jour:"Mercredi",debut:"10h00",fin:"11h00"},
                            {jour:"Samedi",debut:"15h00",fin:"16h00"},
                        ]
                        },
                    ]
            }]
          }
    },
    {
        id:"2",
        nom:"RATAYAL",
        prenom:"AMINE",
        email:"amine@gmail.com",
        payment:"Paypal",
        abonnement:{
            name:"COMPLET",
            service:[{
                name:"TRX",
                cours:[
                        {coursName:"TRX BLOCK",duree:"45",niveau:"Debutant",temps:[
                            {jour:"Jeudi",debut:"10h00",fin:"10h30"},
                            {jour:"Vendredi",debut:"11h30",fin:"12h00"},
                            {jour:"Samedi",debut:"12h30",fin:"13h00"},
                        ]
                        },
                        {coursName:"TRX IRON",duree:"45",niveau:"Debutant",temps:[
                            {jour:"Lundi",debut:"14h00",fin:"12h00"},
                            {jour:"Mercredi",debut:"10h00",fin:"11h00"},
                            {jour:"Samedi",debut:"15h00",fin:"16h00"},
                        ]
                        },
                    ]
            }]
          }
    }
]
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

    static getPacks(){
        return packs;
    }

    static getTarget(){
        return TARGET;
    }
    static getCours(){
        return cours;
    }

    static getAdhs(){
        return adhs;
    }
}