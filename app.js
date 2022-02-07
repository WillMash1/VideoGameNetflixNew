let game; 
let button = document.querySelector('#button');
const autoComplete = document.querySelector('.autocomplete');
const genreDropdown = document.querySelector('.genre-dropdown');
const genreDropdownTitle = document.querySelector('.genre-dropdown h1');
const publisherDropdown = document.querySelector('.publisher-dropdown');
const platformDropdown = document.querySelector('.platform-dropdown');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperWrapperTwo = document.querySelector('.swiper-wrapper-two');
const swiperWrapperThree = document.querySelector('.swiper-wrapper-three');
 

  //Swiper JS Carousel
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 5,
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    loopAdditionSlides: 0,
    speed: 500,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        //when window width is >= 640px
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: true,
            freeMode: false
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            loop: true,
            freeMode: false
        },
        1500: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            loop: true,
            freeMode: false
        },
        1700: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            loop: true,
            freeMode: false
        }
    }
  });


  const populateResults = function(gameData, delay=0) {
    let infoContainer = document.querySelector('.info-container');

  
      infoContainer.innerHTML = 
      `
      <div class="results-content">
      <div class="content-cover"> </div>
      <div class="results-text">
 
     
      <h1 class="results-title">${gameData.name}</h1>
      <p class="tags"> </p>
    
      <p class="results-desc">${gameData.description}</p>

      

      </div>

      
      <div class="results-img-div">
  
      <img class="results-image" src="${gameData.background_image}" alt="">
      
      </div>
      </div>

      <button class="content-button"> &#11205; </button>

    
      `

      const tagsContainer = document.querySelector('.tags');
      for(let i = 0; i<gameData.tags.length;i++) {
        tagsContainer.innerText += `${gameData.tags[i].name + ','}  `
        
        }
        tagsContainer.innerText = tagsContainer.innerText.split(',').join(', ');
  
    

  }


  const showResults = function(resultsContent,resultsText, resultsImage ) {
    resultsContent.classList.add('results-content-active');
    const height = (resultsText.scrollHeight + resultsImage.scrollHeight) +  'px'
    console.log(`This is the height ${height}`)
    resultsContent.style.maxHeight = height;
  }


         
let coverText =  function(resultsText,resultsContent,readMore,resultsImage  ) {
  readMore.addEventListener('click', ()=> {
      resultsContent.classList.toggle('results-content-active');
      if(resultsContent.classList.contains('results-content-active')) {
        
        resultsContent.style.maxHeight ='900px'
        readMore.innerHTML = `&#11205;`;

        setTimeout(()=> {
          
          cover.classList.add('content-cover-disappear');
          active = false;
        }, 600);
        

      } else {
        cover.classList.remove('content-cover-disappear');
        readMore.innerHTML = `&#9660;`;
        
        setTimeout(()=> {
          resultsContent.style.maxHeight = 0;
        }, 1000);
      }
    })


  // resultsContent.classList.toggle('results-content-active');
   let cover = document.querySelector('.content-cover');
   if(resultsContent.classList.contains('results-content-active')) {
    //resultsContent.style.maxHeight = resultsText.scrollHeight + 'px'
    setTimeout(()=> {
      cover.classList.add('content-cover-disappear');
    }, 600);
   } 
    
}


const scrollBtn = document.querySelector('.scrollBtn');

let active = false;

    getGame = function(chosenGameSlug){
    
      
        window.scrollTo({
            top: 330,
            behavior: 'smooth'
        });
    
      getSingleGame(chosenGameSlug)
      .then(data => {
        const gameData = data;
    
        // console.log(gameData);
        // console.log(gameData.name);
        // console.log(gameData.description);
        // for(let i = 0; i<gameData.tags.length;i++) {
        //   console.log(gameData.tags[i].name) + ", "
        // }
        // location.href = 'http://127.0.0.1:5500/infoPage.html';
    
        //<P>${gameData.tags}, ${gameData.tags[1].name}, ${gameData.tags[2].name}</P>
        let cover = document.querySelector('.content-cover');
        if(active === false) {
        populateResults(gameData);
        
  
        const resultsText = document.querySelector('.results-text');
        const resultsContent = document.querySelector('.results-content');
        const resultsImage = document.querySelector('.results-image');
        // resultsContent.classList.toggle('results-content-active');
        // resultsContent.style.maxHeight = resultsText.scrollHeight + 'px'
  
        showResults(resultsContent,resultsText, resultsImage);
        let readMore = document.querySelector('.content-button');
         
          coverText(resultsText,resultsContent,readMore, resultsImage);
          active = true;
        } 
        
        else {
         
          setTimeout(()=> {
            cover.classList.add('content-cover-disappear');
            
            populateResults(gameData);
            const resultsText = document.querySelector('.results-text');
            const resultsContent = document.querySelector('.results-content');
            const resultsImage = document.querySelector('.results-image');

            // cover.classList.toggle('content-cover-disappear');
            

            showResults(resultsContent,resultsText, resultsImage);
            let readMore = document.querySelector('.content-button');
           
            coverText(resultsText,resultsContent,readMore, resultsImage);
            active = true;
          }, 500)

        }


         active = true;
  
      })
      .catch(err => console.log(err))
  
    if(!chosenGameSlug){
      console.log('ERROR Undefined')
    }
    }
       
// }

let bool = false;
//Adding the dropdown on the genre row title
genreDropdown.addEventListener('click', ()=> {
  console.log('click')
  if(!bool){
    genreDropdown.innerHTML += `
    <div class="dropdown-section">
    <div data-genre="action" class="dropdown" id="option-one">
    <p data-genre="action"> Action</p>
    </div>
    <div data-genre="indie" class="dropdown" id="option-two">
    <p data-genre="indie" > Indie</p>
    </div>
    <div data-genre="role-playing-games-rpg" class="dropdown" id="option-three">
    <p data-genre="role-playing-games-rpg" > RPG</p>
    </div>
    </div>
    `;
    const dropdownSection = document.querySelector('.dropdown-section');

  dropdownSection.addEventListener('click', event => {
    console.log(event.target.innerText);
    let selected = event.target;
    let gameType= event.target.innerText;
    let genre = selected.dataset['genre'];
    console.log(genre);
    setBackgroundImg(swiperWrapper, 20, genre, 'genre');
    genreDropdown.innerHTML = `<h1 > ${gameType} </h1> <p> &#9660; </p> `

  });

    bool = true;
  } else {
    const name = document.querySelector('.genre-dropdown h1').innerText;
    genreDropdown.innerHTML = `<h1 > ${name} </h1> <p> &#9660; </p> `

    bool = false;
  }
  
})

//Adding the dropdown on the publisher row
publisherDropdown.addEventListener('click', ()=> {
  console.log('click')
  if(!bool){
    publisherDropdown.innerHTML += `
    <div class="dropdown-section">
    <div data-publisher="activison" class="dropdown" id="option-one">
    <p data-publisher="activison"> Activison</p>
    </div>
    <div data-publisher="thq-nordic" class="dropdown" id="option-two">
    <p data-publisher="thq-nordic" > THQ Nordic</p>
    </div>
    <div data-publisher="microsoft-studios" class="dropdown" id="option-three">
    <p data-publisher="microsoft-studios" > Microsoft</p>
    </div>
    </div>
    `;
    const dropdownSection = document.querySelector('.dropdown-section');

  dropdownSection.addEventListener('click', event => {
    console.log(event.target.innerText);
    let selected = event.target;
    let gameType = event.target.innerText;
    let publisher = selected.dataset['publisher'];
    console.log(publisher);
    setBackgroundImg(swiperWrapperTwo, 20, publisher, 'publisher');
    publisherDropdown.innerHTML = `<h1 > ${gameType}     </h1> <p> </p> <p> &#9660; </p> `

  });

    bool = true;
  } else {
    const name = document.querySelector('.publisher-dropdown h1').innerText;
    publisherDropdown.innerHTML = `<h1 > ${name} </h1>  <p> &#9660; </p> `

    bool = false;
  }
  
})


platformDropdown.addEventListener('click', ()=> {
  console.log('click')
  if(!bool){
    platformDropdown.innerHTML += `
    <div class="dropdown-section">
    <div data-platform="18" class="dropdown" id="option-one">
    <p data-platform="18"> PS4</p>
    </div>
    <div data-platform="1" class="dropdown" id="option-two">
    <p data-platform="1" > Xbox One</p>
    </div>
    <div data-platform="4" class="dropdown" id="option-three">
    <p data-platform="4" > PC</p>
    </div>
    </div>
    `;
    const dropdownSection = document.querySelector('.dropdown-section');

  dropdownSection.addEventListener('click', event => {
    console.log(event.target.innerText);
    let selected = event.target;
    let gameType = event.target.innerText;
    let platform = selected.dataset['platform'];
    console.log(platform);
    setBackgroundImg(swiperWrapperThree, 20, platform, 'platform');
    platformDropdown.innerHTML = `<h1 > ${gameType} </h1> <p> &#9660; </p> `
  });

    bool = true;
  } else {
    const name = document.querySelector('.platform-dropdown h1').innerText;

    platformDropdown.innerHTML = `<h1 > ${name} </h1> <p> &#9660; </p> `
    bool = false;
  }
  
})



//Creating the rows of cards that call the api for a game image, and title
function setBackgroundImg(row, amount, request, type) {
  row.innerHTML = '';
  if(type === 'genre') {
    gameListGenre(request, amount)
    .then(data => {
      for(let i = 0;i<amount;i++) {
        console.log(i);
        row.innerHTML += `
        <div class="swiper-slide" onclick="getGame('${data.results[i].slug}')" data-slug="${data.results[i].slug}">
        <a data-slug="${data.results[i].slug}" class="thumbTile">
        <img data-slug="${data.results[i].slug}" class="thumbTile__image" src="${data.results[i].background_image}" 
        alt="The Queen's Gambit">
        </a>
        
          `;
      }
      
    })
  } else if (type === 'publisher') {
    gameListPublisher(request, amount)
    .then(data => {
      console.log(data.results)
      
      for(let i = 0;i<amount;i++) {
        console.log(i);
        
        row.innerHTML += `
        <div class="swiper-slide" onclick="getGame('${data.results[i].slug}')" data-slug="${data.results[i].slug}">
        <a data-slug="${data.results[i].slug}" class="thumbTile">
        <img data-slug="${data.results[i].slug}" class="thumbTile__image" src="${data.results[i].background_image}" 
        alt="The Queen's Gambit">
        </a>
        
          ` ;
       
      }
      
     
    })
  } else if (type === 'platform') {
    gameListPlatform(request, amount)
    .then(data => {
      console.log(data.results)
      for(let i = 0;i<amount;i++) {
        console.log(i);
        
          row.innerHTML += `
          <div class="swiper-slide" onclick="getGame('${data.results[i].slug}')" data-slug="${data.results[i].slug}">
          <a data-slug="${data.results[i].slug}" class="thumbTile">
          <img data-slug="${data.results[i].slug}" class="thumbTile__image" src="${data.results[i].background_image}" 
          alt="The Queen's Gambit">
          </a>
          
            `;
        
      
       
      }
      
    })
  }
 
  
}


 setBackgroundImg(swiperWrapper, 20, 'indie', 'genre');
setBackgroundImg(swiperWrapperTwo, 20, 'activison', 'publisher');
setBackgroundImg(swiperWrapperThree, 20, '18', 'platform');







//Creating the autocomplete html and putting it inside the autocomplete div
autoComplete.innerHTML = 
        `
        <div class="input-container">
            
       
        <label>
        <b class="search-title">Search for a game</b>
    </label>
        <input id="game" data-game="" type="text" placeholder="The Witcher 3: Wild Hunt">
        </div>


    <div class="container">
       
    </div>
        `






// Using a debounce function so that the api can only be called after 1 second of inaction by the user
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if(timeoutId){
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(()=> {
      func.apply(null, args);
    }, delay)
  }
}


const onInput =  debounce(event => {
      getData(event.target.value)
      .then(data => {
        
        const container = document.querySelector('.container');
        if(data.results.length !== 0){
          container.innerHTML = 
          `  
          <div data-slug="${data.results[0].slug}" class="suggestion" id="one">
            <p data-slug="${data.results[0].slug}"> ${data.results[0].name}</p>  
           </div>
          <div data-slug="${data.results[1].slug}" class="suggestion" id="two">
            <p data-slug="${data.results[1].slug}" > ${data.results[1].name}</p>  
           </div>
          <div data-slug="${data.results[2].slug}" class="suggestion" id="three">
            <p data-slug="${data.results[2].slug}"> ${data.results[2].name}</p>  
           </div>
          <div data-slug="${data.results[3].slug}" class="suggestion" id="four">
            <p data-slug="${data.results[3].slug}"> ${data.results[3].name}</p>  
           </div>
          <div data-slug="${data.results[4].slug}" class="suggestion" id="five">
            <pdata-slug="${data.results[4].slug}"> ${data.results[4].name}</pdata-slug=>  
           </div>
           `
        } else {
          container.innerHTML = `
          <div class="suggestion" id="one">
            <p> No Results for That Query </p>  
           </div>
           `
        }
        
        for(let i =0;i<data.results.length;i++) {
          //console.log(data.results[i].name);
          console.log(data.results[i].slug);
        }
       
      })
      .catch(err => console.log(err))
}, 500);


const input = document.querySelector('#game');
input.addEventListener('input', onInput);




let options = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games?key=8828ecda53174b9d950215de30a85444',
  headers: {
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'bec55457e7msh2b12e46915c97c2p1851a7jsnf44750cf1241'
  }
};


document.addEventListener('click', event => {
  const container = document.querySelector('.container');
  if(!autoComplete.contains(event.target)){
    container.innerHTML = ``;
  }
}  )

const autoCompleteContainer = document.querySelector('.container');

autoCompleteContainer.addEventListener('click', event => {
  const container = document.querySelector('.container');
  if(autoComplete.contains(event.target)){
    // container.innerHTML = ``;
    container.innerHTML = ``;
    let chosenSuggestion = event.target;
    console.log(`chosen suggestion ${chosenSuggestion}`)
    let chosenGame = chosenSuggestion.innerText.trim();
    let chosenGameSlug = chosenSuggestion.dataset.slug;
    console.log(chosenSuggestion);
    console.log(chosenGame);
    console.log(`chosen game slug ${chosenGameSlug}`);

    
      getSingleGame(chosenGameSlug)
      .then(data => {
        const gameData = data;
    
       
        // for(let i = 0; i<gameData.tags.length;i++) {
        //   console.log(gameData.tags[i].name) + ", "
        // }
     
        // let infoContainer = document.querySelector('.info-container');
        // infoContainer.innerHTML = 
        //     `
        //     <div class="results-content">
        //     <div class="content-cover"> </div>
        //     <div class="results-text">
       
           
        //     <h1 class="results-title">${gameData.name}</h1>
        //     <p class="tags"> </p>
          
        //     <p class="results-desc">
        //     ${gameData.description}
        //     </p>

            

        //     </div>

            
        //     <div class="results-img-div">
        
        //     <img class="results-image" src="${gameData.background_image}" alt="">
            
        //     </div>
        //     </div>

        //     <button class="content-button"> &#11205; </button>

          
        //     `

        // const tagsContainer = document.querySelector('.tags');
        // for(let i = 0; i<gameData.tags.length;i++) {
        //   tagsContainer.innerText += `${gameData.tags[i].name + ','}  `
          
        // }
        // tagsContainer.innerText = tagsContainer.innerText.split(',').join(', ');
        
        
        
        populateResults(gameData);
        const resultsText = document.querySelector('.results-text');
        const resultsImage = document.querySelector('.results-image');
        const resultsContent = document.querySelector('.results-content');
     
        
        
        showResults(resultsContent,resultsText, resultsImage);
    
        let readMore = document.querySelector('.content-button');
         
        coverText(resultsText, resultsContent, readMore, resultsImage);

      })
      .catch(err => console.log(err))

    if(!chosenGameSlug){
      console.log('ERROR Undefined')
    }  
  }
})




//Logging a list of games so I can inspect the returned objects
// gameListGenre('action')
//   .then( data => {
//     console.log(data.results)
//   }
    
//   )

//   getSingleGame('call-of-duty')
//   .then( data => {
//     console.log(data)
//   }
    
//   )

gameListPlatform('18')
  .then( data => {
    console.log(data)
  }
    
  )






  // //Scrolling practice
  // const scrollBtn = document.querySelector('.scrollBtn');

  // scrollBtn.addEventListener('click', ()=> {
  //   window.scrollTo(0, 330);
  // })