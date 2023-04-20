import {useContext} from 'react'
import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'


function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback === 0)){
        return <p>No Feedback yet</p>
    }

    /*return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item)=>(
                <motion.div key={item.id}
                initial={{opacity: 0}}
                animate={{opacitiy: 1}}
                exit={{opacitiy:0}}
                >
                <FeedbackItem key={item.id} item={item} 
                handleDelete={handleDelete}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
      )*/

return isLoading ? <Spinner /> : (
    <div className='feedback-list'>
        {feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item} 
            />
        ))}
    </div>
)


}



export default FeedbackList
