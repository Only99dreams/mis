import styles, {layout} from "../style";
import { card, binance, dropbox, bill, coinbase, airbnb, } from "../assets";

const  Team = () => (
    <section className={layout.section}>
    
    <div className={layout.sectionImg}>
    <img src={dropbox} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
  </div>
  <div className={layout.sectionImg}>
    <img src={airbnb} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
  </div>
  <div className={layout.sectionImg}>
    <img src={binance} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
  </div>
  <div className={layout.sectionImg}>
    <img src={coinbase} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
  </div>
    
    </section>
  );


export default  Team;