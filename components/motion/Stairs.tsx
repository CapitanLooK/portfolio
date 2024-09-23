import { stairAnimation } from "@/app/utils/constants";
import { motion, Variants } from "framer-motion";

interface IStairAnimation extends Variants {
    [key: string]: any;
}

function Stairs() {
    const reverseIndex = (index: number) => {
        const totalSteps = 6;
        return totalSteps - index - 1;
    }
    return (
        <>
            {
                [...Array(6)].map((_, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={stairAnimation as IStairAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                ease: 'easeInOut',
                                delay: reverseIndex(index) * 0.1
                            }}
                            className="h-full w-full bg-black relative"
                        />
                    )
                }
                )}
        </>
    )
}

export default Stairs