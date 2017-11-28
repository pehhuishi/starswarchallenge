axios.get("https://swapi.co/api/films/7/")
  .then(response => {
    characters = response.data.characters
    randCharacter = characters[Math.floor(Math.random() * characters.length)]
  })
  .then(response => {
    var vue = new Vue({
      el: '#app',
      created: function (){
        this.loadRandCharacter();
        // this.loadCharacters();
      },
      methods: {
        loadRandCharacter: function (){
          this.status = 'Page Loading...';
          axios.get(randCharacter)
          .then(response => {
            this.people = response.data
            // console.log(people);
          })
          .catch(error => {
            this.status = 'An error occurred. ' + error;
          });
        }
        // loadCharacters: function (){
        //   this.status = 'Page Loading...';
        //   axios.get()
        //   .then(response => {
        //     let data = response.data
        //     peoples =data.results
        //     console.log(peoples);
        //   })
        //   .catch(error => {
        //     this.status = 'An error occurred. ' + error;
        //   });
        // }
      },
      data: {
        // characters: this.loadCharacters,
        random: randCharacter,
        people: this.loadRandCharacter,
        status: '',
        images: [
        { text: 'https://swapi.co/api/people/1/',
          image: '/assets/images/luke.png',
        },
        { text: 'https://swapi.co/api/people/3/',
          image: '/assets/images/r2-d2.png',
        },
        { text: 'https://swapi.co/api/people/5/',
          image: '/assets/images/leia.png',
        },
        { text: 'https://swapi.co/api/people/13/',
          image: '/assets/images/Chewbacca.png',
        },
        { text: 'https://swapi.co/api/people/14/',
          image: '/assets/images/HanSolo.png',
        },
        { text: 'https://swapi.co/api/people/27/',
          image: '/assets/images/Ackbar.png',
        },
        { text: 'https://swapi.co/api/people/84/',
          image: '/assets/images/finn.png',
        },
        { text: 'https://swapi.co/api/people/85/',
          image: '/assets/images/rey.png',
        },
        { text: 'https://swapi.co/api/people/86/',
          image: '/assets/images/poe-dameron.png',
        },
        { text: 'https://swapi.co/api/people/87/',
          image: '/assets/images/bb8.png',
        },
        { text: 'https://swapi.co/api/people/88/',
          image: '/assets/images/captain-phasma.png',
        }
      ]
    }

    })
  })
