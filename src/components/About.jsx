import React from 'react'
import styles, {layout} from "../style"

const About = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-0 mb-0 bg-orange p-0`}>
      <div className='className={`flex-1 flex justify-start items-center flex-row m-3`}'>

      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet consectetur. Fringilla vestibulum nisi
nam enim vel sit. Et augue vel commodo
      </p>
      <button type="button" className={`w-[150px] mx-8 my-1 py-2 px-5 font-poppins font-normal text-[16px] text-primary bg-white rounded-[40px] outline-none hover:bg-secondary`}>
    Learn more
  </button>
      </div> 
      
      </div> 
     
      
    </section>
)
export default About;