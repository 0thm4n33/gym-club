const gymServices = [
    {nom:"Fitness",imagePath:"images/gymServices/fitness.jpeg"},
    {nom:"Cycling",imagePath:"images/gymServices/cycling.jpeg"},
    {nom:"Boxing",imagePath:"images/gymServices/boxing.jpeg"},
    ]
const users = [
    {login:"admin@admin.com",password:"admin"}
]
export default class Services {
    static getGymServices(){
        return gymServices;
    }
    static authenticate(user){
      console.log(`service: ${user.login}`);
      return users.find(u => u.login === user.login && u.password === user.password )
    }
}