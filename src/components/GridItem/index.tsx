import { Level } from "../../imc"
import style from "./GridItem.module.css"
import upImage from "../../images/up.png"
import downImage from "../../images/down.png"

type Props = {
    item: Level
}

export const GridItem = ( {item}: Props) =>{
    return(
        <div className={style.main} style={{backgroundColor: item.color}}>
            <div className={style.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width='30' />
            </div>
            <div className={style.gridTitle}> {item.title} </div>

            {item.yourIMC &&
                <div className={style.yourimc}> O seu IMC é {item.yourIMC} kg/m²</div>
            }

            <div className={style.gridInfo}>
                <>
                    IMC entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}