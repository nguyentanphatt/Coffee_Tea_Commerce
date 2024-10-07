import React from 'react'
import about_us from '../assets/frontend/about-us.jpg'
import AboutContactDetail from '../Components/AboutContactDetail/AboutContactDetail'
import './Style/AboutUs.css'
const AboutUs = () => {

    let title01 = "Discover Our Passion for Coffee"
    let title02 = "Embrace the Art of Tea Culture"
    let title03 = "From Earth to Cup: Nurturing Nature's Bounty"
    let content01 = "At Valimar, our journey with coffee began with a simple passion: to share exceptional coffee experiences with everyone. From sourcing the finest beans to crafting each cup with precision and care, we invite you to explore our world of rich flavors and aromatic blends. Join us in celebrating the artistry of coffee-making and the joy it brings to every sip."
    let content02 = "Dive into the enchanting world of tea at Valimar. With a reverence for tradition and a commitment to quality, we curate a diverse selection of teas from around the globe. From soothing herbal infusions to bold, complex brews, each tea in our collection tells a story of craftsmanship and flavor. Experience the warmth and tranquility of tea culture with every cup, crafted to elevate your tea-drinking moments"
    let content03 = "Welcome to Valimar, where our love for beans and seeds transcends mere ingredients. Rooted in sustainability and respect for nature, we offer a range of premium beans and seeds that embody freshness and purity. Whether it's the robust flavors of coffee beans or the wholesome goodness of seeds, each product reflects our dedication to ethical sourcing and wholesome goodness. Join us in savoring the natural essence of earth's bounty, thoughtfully harvested for your enjoyment."

  return (
    <div className="aboutus_container">
        <h1>About us</h1>
        <div className="aboutus_content">
            <AboutContactDetail 
                image={about_us}
                title={title01}
                content={content01}
                isReversed={false}
            />
            <AboutContactDetail 
                image={about_us}
                title={title02}
                content={content02}
                isReversed={true}
            />
            <AboutContactDetail 
                image={about_us}
                title={title03}
                content={content03}
                isReversed={false}
            />
        </div>
    </div>
  )
}

export default AboutUs