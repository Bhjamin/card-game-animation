

const Card = ({number, color}) => {

    return(
        <div className={` absolute border-[3px] border-black lg:h-40 lg:w-28 ${color} hover:z-50 hover:scale-105 transition-all duration-150 flex justify-center items-center rounded`}>
            <p className=" text-3xl text-white">{number}</p>
        </div>
    )
}

export default Card