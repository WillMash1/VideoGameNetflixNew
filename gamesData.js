
//Get a list of 5 games that relate to a specific string
function getData(searchTerm, pageSize="5"){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=8828ecda53174b9d950215de30a85444&search=${searchTerm}&page_size=${pageSize}`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'bec55457e7msh2b12e46915c97c2p1851a7jsnf44750cf1241'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }



//Get a list of games according to genre
function gameListGenre(genres, pageSize="5"  ){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=8828ecda53174b9d950215de30a85444&genres=${genres}&page_size=${pageSize}`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'bec55457e7msh2b12e46915c97c2p1851a7jsnf44750cf1241'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }


//Get a list of games according to publisher
function gameListPublisher(publishers, pageSize="5"  ){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=8828ecda53174b9d950215de30a85444&publishers=${publishers}&page_size=${pageSize}`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'bec55457e7msh2b12e46915c97c2p1851a7jsnf44750cf1241'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }

//Get a list of games according to platform i.e. PS4, PC, Xbox One
function gameListPlatform(platform, pageSize="5"  ){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=8828ecda53174b9d950215de30a85444&platforms=${platform}&page_size=${pageSize}`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'bec55457e7msh2b12e46915c97c2p1851a7jsnf44750cf1241'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }


//Get a list of games according to tags i.e. multiplayer, singleplayer
function gameListTags(tags, pageSize="5"  ){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=8828ecda53174b9d950215de30a85444&tags=${tags}&page_size=${pageSize}`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'bec55457e7msh2b12e46915c97c2p1851a7jsnf44750cf1241'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }



//Get details about a single game  
function getSingleGame(searchTerm){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games/${searchTerm}?key=8828ecda53174b9d950215de30a85444`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'bec55457e7msh2b12e46915c97c2p1851a7jsnf44750cf1241'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }
  