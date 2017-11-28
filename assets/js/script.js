axios.get("https://swapi.co/api/films/7/")
  .then(response => {
    characters = response.data.characters
    randCharacter = characters[Math.floor(Math.random() * characters.length)]
    // console.log(randCharacter);
  })
  .then(response => {
    var vue = new Vue({
      el: '#app',
      created: function (){
        this.loadCharacter();
      },
      methods: {
        loadCharacter: function (){
          this.status = 'Page Loading...';
          axios.get(`${randCharacter}`)
          .then(response => {
            this.people = response.data
            console.log(people);
          })
          .catch(error => {
            this.status = 'An error occurred. ' + error;
          });
        }
      },
      data: {
        random: randCharacter,
        people: this.methods,
        status: '',
        images: [
        { text: 'https://swapi.co/api/people/1/',
          image: '/assets/images/luke.jpg',
          background: '/assets/images/wallpaper2.jpg'
        },
        { text: 'https://swapi.co/api/people/3/',
          image: '/assets/images/R2-D2.jpg',
          background: '/assets/images/wallpaper2.jpg'
        },
        { text: 'https://swapi.co/api/people/5/',
          image: '/assets/images/leya.jpg',
          background: '/assets/images/wallpaper2s.jpg'
        },
        { text: 'https://swapi.co/api/people/13/',
          image: '/assets/images/chew.jpg',
          background: '/assets/images/wallpaper2.jpg'
        },
        { text: 'https://swapi.co/api/people/14/',
          image: '/assets/images/han.jpg',
          background: '/assets/images/wallpaper2.jpg'
        },
        { text: 'https://swapi.co/api/people/27/',
          image: '/assets/images/ackbar.jpg',
          background: '/assets/images/wallpaper2.jpg'
        },
        { text: 'https://swapi.co/api/people/84/',
          image: '/assets/images/finn.jpg',
          background: '/assets/images/wallpaper2.jpg'
        },
        { text: 'https://swapi.co/api/people/85/',
          image: '/assets/images/rey.jpg',
          background: '/assets/images/wallpaper2.jpg'
        },
        { text: 'https://swapi.co/api/people/86/',
          image: '/assets/images/poe.jpg',
          background: '/assets/images/wallpaper2.jpg'
        },
        { text: 'https://swapi.co/api/people/87/',
          image: '/assets/images/bb8.jpg',
          background: '/assets/images/wallpaper2.jpg'
        },
        { text: 'https://swapi.co/api/people/88/',
          image: '/assets/images/phasma.jpg',
          background: '/assets/images/wallpaper2.jpg'
        }
      ]
    }

    })
  })
