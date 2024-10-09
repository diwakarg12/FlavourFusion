import SweetToothCard from './SweetToothCard'

const SweetTooth = () => {
  return (
    <div className='m-10'>
        <h1 className='font-playfair font-bold text-4xl my-6'>Sweet Tooth</h1>
        <div className='flex items-center justify-between'>
            <SweetToothCard img={'images/sweet1.jpg'} text={'Caramel Strawberry milkshake'} />
            <SweetToothCard img={'images/sweet2.jpg'} text={'Chocolate and Banana Jar Cake'} />
            <SweetToothCard img={'images/sweet3.jpg'} text={'Berry Maddness Biscuts'} />
        </div>
    </div>
  )
}

export default SweetTooth;