import Button from "../components/Button" 
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section 
      id ="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">

        

        <h2 className='mt-10 font-palanquin text-4xl font-bold lg:max-w-lg'>
          
        We provide You <span className='text-coral-red inline-block mt-3'>Super</span>
          <span className='text-coral-red inline-block mt-3'>Quality</span>  Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style,our meticulously crafted footwear is designed to elevate your experience,providing you with unamtched quality innovation and a touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text" >
          Our dedication to details and excellence ensures your stisfaction
        </p>
        <div className="mt-11">
        <Button label='View Details' />
        </div>
        </div>
        <div className="flex-1 justify-center items-center">
          <img src={ shoe8 } alt="shoe8" />
        </div>
      </section>
  )
}

export default SuperQuality