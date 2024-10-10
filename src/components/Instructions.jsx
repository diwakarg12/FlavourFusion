/* eslint-disable react/prop-types */
const Instructions = ({instructions}) => {
  return (
    <div>
        <ul className='list-none'>
            {
            instructions.map((item, index)=>(
                <li key={index} className="flex gap-x-10 my-4">
                    <div className="relative">
                        <span className="absolute left-0 top-1 w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 text-white">{item.id}</span>
                    </div>
                    <div className="font-inter font-normal text-lg">{item.text}</div>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default Instructions