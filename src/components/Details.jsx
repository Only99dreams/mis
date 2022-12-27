import React from 'react'
import styles,{layout} from '../style';
import { facebook, instagram } from '../assets';


const Details = () => (
    <section className={`$className={layout.sectionReverse}`}>
      <div className='className={`flex-1 flex justify-start items-center flex-row m-3`}'>
      <div className={layout.sectionInfo}>
      <h2 className={styles.paragraph}><img src={facebook} className="w-[21px] h-[21px] relative z-[5]"/>
        facebook
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}><img src={instagram} className="w-[21px] h-[21px] relative z-[5]"/>
        instagram
      </p>
      </div> 
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Address
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        2972 westheimer Rd santa ana, illinios 85486
      </p>
      </div> 
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Email Address
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Geogia.young@example.com
    
      </p>

      </div> 
      </div> 
     
      
    </section>
  );
export default Details;
