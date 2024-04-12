import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { ParallaxBanner } from 'react-scroll-parallax'
import photo from './assets/photo_1.png'
import background from './assets/background2.jpg'
import './styles.css'
import { person } from './assets/person'
function App() {
  return (
    <div class="container">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image: photo,
              speed: -20,
              expanded: false,
              opacity: [1.6, 0, -1],
            },
            {
              speed: 0,
              children: (
                <div className="name-container">
                  <h1 className="name">{person.name}</h1>
                </div>
              ),
              opacity: [1, 0, -1],
            },
          ]}
          style={{ aspectRatio: '16 / 9', height: '110vh' }}
        ></ParallaxBanner>
        <section className="basics">
          <h3>
            <span>Date of Birth:</span> {person.birthdate}
          </h3>
          <h3>
            <span>Place of Birth:</span> {person.place_of_birth}
          </h3>
          <h3>
            <span>{person.basic_info}</span>
          </h3>
          <h3>
            <span>Favorite Drink:</span> {person.favorite_drink}
          </h3>
        </section>
        <section className="family">
          <h3>
            <span>Spouse:</span> {person.family.spouse}
          </h3>
          <h3>
            <span>Spouse:</span> {person.family.spouse}
          </h3>
          <h3>
            <span>Spouse:</span> {person.family.spouse}
          </h3>
          <h3>
            <span>Spouse:</span> {person.family.spouse}
          </h3>
          <h3>
            <span>Spouse:</span> {person.family.spouse}
          </h3>
          <h3>
            <span>Spouse:</span> {person.family.spouse}
          </h3>
          <h3>
            <span>Spouse:</span> {person.family.spouse}
          </h3>
          <h3>
            <span>Spouse:</span> {person.family.spouse}
          </h3>
          <h3>
            <span>Spouse:</span> {person.family.spouse}
          </h3>
        </section>
      </ParallaxProvider>
    </div>
  )
}

export default App
