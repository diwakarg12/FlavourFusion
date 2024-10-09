import HandPickedCollectionCard from "./HandPickedCollectionCard"

const HandPickedCollections = () => {
  return (
    <div className='mx-10'>
        <h1 className="font-playfair font-bold text-5xl my-6  ">Hand-Picked Collections</h1>
        <div className="flex flex-wrap items-center justify-between">
            <HandPickedCollectionCard img={'images/handPicked1.jpg'} text={'Sushi Combo for your next party'} />
            <HandPickedCollectionCard img={'images/handPicked2.jpg'} text={'Everything Bagel'} />
            <HandPickedCollectionCard img={'images/handPicked3.jpg'} text={'Cook like a Chef'} />
            <HandPickedCollectionCard img={'images/handPicked4.jpg'} text={'Exquisite Dinner Recipe Ideas'} />
            <HandPickedCollectionCard img={'images/handPicked5.jpg'} text={'The Ultimate Cookie Frenzy'} />
            <HandPickedCollectionCard img={'images/handPicked6.jpg'} text={'For the love of Donuts'} />
        </div>
    </div>
  )
}

export default HandPickedCollections