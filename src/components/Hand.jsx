import Card from "./Card"
import { motion } from "framer-motion"

const Hand = ({cards}) => {


    return(
        <div className={`flex flex-col items-center relative bottom-24 right-64`}>
        <>
        {
            cards.map((card, i) => {
                return(
                    <motion.div animate={{ y: 25 * i, x: 20 * i }} >
                    <Card color={card} number={i + 1} />
                    </motion.div>
                    )
                })
            }
        </>
        </div>
    )
}

export default Hand