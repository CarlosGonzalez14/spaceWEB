"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[60px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            APPS WITH GLOBAL IMPACT
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[30px] text-gray-400 max-w-[600px]'
        >
            Using cutting edge technologies...
        </motion.div>
    </div>
  )
}

export default SkillText