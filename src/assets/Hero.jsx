import Family from "../images/carfarm-dealership.png"

const Hero = () => {
  return (
    <>
    <div className="introContainer">
      <img className="IntroImage"src={Family}/>
      <div className="introText">
        <div className="introHeader">Buy, Rent, Sell</div>
        <div className="introHero">We believe in connecting buyers, sellers, and renters in a secure, efficient, and transparent environment</div>
      </div>
      <button className="introButton">EXPLORE SHOP</button>
    </div>
    </>
  )
}

export default Hero