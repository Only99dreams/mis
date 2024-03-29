import { card, } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => ( 
<section className={layout.sectionInfo}>
  <h2 className={styles.heading2}>
    Our core values
  </h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
    aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
  </p>

  
  <div className={layout.section}>
  

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
    </div>
    </div>
  </section>
);

export default CardDeal;
