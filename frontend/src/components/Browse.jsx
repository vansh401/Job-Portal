import React from 'react'
import Job from './Job'

const randomJobs=[1,2,3]
const Browse = () => {
  return (
    <div>
        <div>
            <h1>Search Results ({randomJobs.length})</h1>
            {
                randomJobs.map((items,index)=>{
                    return (
                        <Job/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Browse