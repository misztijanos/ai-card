import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { ParallaxBanner } from 'react-scroll-parallax'
import photo from './assets/photo_1.png'
import background from './assets/background2.jpg'
import './styles.css'
import { person } from './assets/person'
import Info from './Info'
import { useState, useEffect } from 'react'
function App() {
  const [bannerHeight, setBannerHeight] = useState(
    Math.min(window.innerWidth, window.innerHeight)
  )
  useEffect(() => {
    const handleResize = () => {
      setBannerHeight(Math.min(window.innerWidth, window.innerHeight))
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ParallaxProvider>
      <div class="container">
        <ParallaxBanner
          layers={[
            {
              image: photo,
              speed: -20,
              expanded: false,
              opacity: [1.8, 0, -1],
            },
            {
              speed: 0,
              children: (
                <div className="name-container">
                  <h1 className="name">{person.name}</h1>
                </div>
              ),
              opacity: [1.2, 0, -1],
            },
          ]}
          style={{ aspectRatio: '16 / 9', height: bannerHeight }}
        ></ParallaxBanner>

        <Info person={person} />
      </div>
    </ParallaxProvider>
  )
}

export default App
