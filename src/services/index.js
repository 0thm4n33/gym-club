const gymServices = [
    {nom:"Fitness",imagePath:"images/gymServices/fitness.jpeg"},
    {nom:"Cycling",imagePath:"images/gymServices/cycling.jpeg"},
    {nom:"Boxing",imagePath:"images/gymServices/boxing.jpeg"},
    ]

export default class Services {
    static getGymServices(){
        return gymServices;
    }
}