import React from 'react'
import styles, {layout} from "../style"

const Help = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-0 mb-0 bg-orange p-0`}>
      <div className='className={`flex-1 flex justify-start items-center flex-row m-3`}'>

      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        We are here <br className="sm:block hidden" /> to help 24/7
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-orange`}>
      +234 -811-2695-212

      </p>
      </div> 
      
      </div> 
     
      
    </section>
)
export default Help