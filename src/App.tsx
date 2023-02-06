import { useState } from 'react';
import style from './App.module.css';
import { levels, calculateIMC, Level } from './imc';
import { GridItem } from './components/GridItem';
import leftArrowImage from './images/leftarrow.png'

const App = () =>{

  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const backButton = () =>{
    setToShow(null);
    setHeight(0);
    setWeight(0);
  }

  const calculate = () => {
    if( height > 0 && weight > 0){
      setToShow(calculateIMC(weight, height));
    }else{
      alert('Dados inválidos!');
    }
  }

  return(
    <div>
      <header>
        <div className={style.divHeader}>
          <div className={style.logo}>
            IMC
          </div>
        </div>
      </header>
      <div className={style.container}>
        <div className={style.leftSide}>
          <h1>Calculadora de IMC</h1>
          <p>
            O IMC, Índice de Massa Corporal, é um cálculo simples que aponta se o peso de uma pessoa está adequado ou se está abaixo ou acima do ideal.
          </p>

          <div className={style.subtitle}>
            Altura (em metro):
          </div>
          <input
            type='number'
            placeholder='Ex: 1.80 (metros)'
            value={height > 0 ? height : ''}
            onChange={e => setHeight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          
          <div className={style.subtitle}>
            Peso (em Kg):
          </div>
          <input
            type='number'
            placeholder='Ex: 85.4 (Kg)'
            value={weight > 0 ? weight : ''}
            onChange={e => setWeight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          
          <button onClick={calculate} disabled={toShow ? true : false}>Calcular</button>
        </div>
        
        <div className={style.rightSide}>
            {!toShow && 
              <div className={style.grid}>
                {levels.map((item, key) =>(
                  <GridItem key={key} item={item} />
                ))}
              </div>
            }
            {toShow &&
                <div className={style.rightBig}>
                  <div className={style.rightArrow} onClick={backButton}>
                    <img src={leftArrowImage} alt='' width={25}/>
                  </div>
                  <GridItem item={toShow} />
                </div>
            }
        </div>
      </div>
    </div>
  )
}

export default App;