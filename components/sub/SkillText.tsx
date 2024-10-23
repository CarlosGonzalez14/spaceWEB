"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        {/* <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[60px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            APPS WITH GLOBAL IMPACT
        </motion.div> */}
                <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-7xl font-bold text-white max-w-[600px] w-auto h-auto text-center"
        >
          <span>
            APPS WITH
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300">
              {" "}GLOBAL IMPACT{" "}
            </span>
            {/* IMPACT */}
          </span>
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[30px] text-gray-400 max-w-[600px] my-3'
        >
            Using cutting edge technologies...
        </motion.div>
    </div>
  )
}

export default SkillText