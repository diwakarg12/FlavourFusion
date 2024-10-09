import SuperDeliciousCard from "./SuperDeliciousCard"

const SuperDelicious = () => {
  return (
    <div className="m-10">
        <h1 className="font-playfair font-bold text-4xl my-4">Super Delicious</h1>
        <div className="flex items-center justify-between">
            <SuperDeliciousCard img={'images/delicious1.jpg'} text={'Spinach and Cheese Pasta'} />
            <SuperDeliciousCard img={'images/delicious2.jpg'} text={'Fancy Glazed Dounts'} />
            <SuperDeliciousCard img={'images/delicious3.jpg'} text={'Mighty Cheesy Breakfast Burger'} />
        </div>
    </div>
  )
}

export default SuperDelicious