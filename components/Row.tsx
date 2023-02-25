import React, { useRef, useState } from 'react'
import { Movie } from '../typings'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import Thumbnail from './Thumbnail'

interface Props {
    title: string,
    movies: Movie[]
    // movies: Movie[] | DocumentData[]
}

function Row({title, movies}: Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMovied] = useState(false)

const handleClick = (direction: string) => {
    setIsMovied(true)
    if(rowRef.current) {
        const {scrollLeft, clientWidth} = rowRef.current
        const scrollTo = direction == "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
        rowRef.current.scrollTo({left:scrollTo, behavior:'smooth'})
    }
}

  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
        <h2 className='w-50 cursor-pointer text-sm font-sem
        text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'>{title}</h2>
        <div className='group relative md:-ml-2'>
            <FaChevronLeft className={`absolute top-0 bottom-0 left-2 z-40 h-9 w-9 m-auto cursor-pointer opacity-0
            transition hover: scale-125 group-hover:opacity-95 ${!isMoved && 'hidden'}`}
            onClick={() => handleClick("left")}/>

            <div ref={rowRef} className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2'>
                {movies.map((movie) => (
                    <Thumbnail key={movie.id} movie={movie}/>
                ))}
            </div>

            <FaChevronRight className='absolute top-0 bottom-0 right-2 z-40 h-9 w-9 m-auto cursor-pointer opacity-0
            transition hover: scale-125 group-hover:opacity-95'
            onClick={() => handleClick("right")}/>
        </div>
    </div>
  )
}

export default Row