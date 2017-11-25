// const ul = document.getElementById('characters');
//
// function createNode(element) {
//      return document.createElement(element);
//  }
//
//  function append(parent, el) {
//    return parent.appendChild(el);
//  }
//
// fetch('https://swapi.co/api/people/') // Call the fetch function passing the url of the API as a parameter
// .then((resp) => resp.json()) // Your code for handling the data you get from the API
// .then(function(data) { // Here you get the data to modify as you please
//     // Create and append the li's to the ul
//     let characters = data.results;
//     console.log(characters);
//     return characters.map(function(character) {
//       let li = createNode('li'),
//           span = createNode('span');
//
//       span.innerHTML = `${character.name}`;
//
//       append(li, span);
//       append(ul, li);
//     })
//     })
// .catch(function(error) {
//     console.log(error);
//   })
var characters = new Vue({
  el : '#app',
  data : {
    status: 'Hello I using vue.js'
  },
  created : function (){
    this.loadCharacters();
  },
  methods : {
    loadCharacters : function() {
      this.status = 'Loading...'//can add a loading animation if i want
      var characters = this;
      axios.get('https://swapi.co/api/people/')
      .then(function(response){

        let charactersArray = response.data.results;
        var randCharacter = charactersArray[Math.floor(Math.random()* charactersArray.length)]
        characters.status = randCharacter;
      })
      .catch(function(error) {
        characters.status = "An error has occured" + error;
      });
    }
  }
});
