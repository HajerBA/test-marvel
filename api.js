import axios from 'axios'
// la classe Api regroupe les appels ajax envoyés à l'api
export default class Api {
  // on créé une variable qui contient la base de l'url du serveur
  constructor (){
    this.baseUrl = 'http://localhost'
  }
  // cette méthode permet d'obtenir un User et ses favorites à partir d'un id
  getUserById (userId){
    return axios.get(`${this.baseUrl}/user/${userId}`)
  }
  // cette méthode permet de créer un user et ses favorites
  setUser (user){
    return axios.post(`${this.baseUrl}/user`, user)
  }
  
}