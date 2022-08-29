export function getRandomCar (){
  let randomAuto = Math.floor(Math.random()*AUTOS.length)
  let randomModelo = Math.floor(Math.random()*AUTOS[randomAuto].modelo.length)

  let randomCar = {marca: AUTOS[randomAuto].auto, 
    modelo: AUTOS[randomAuto].modelo[randomModelo], 
    año: Math.floor(Math.random() * 22) + 2000}
    
  return randomCar
}

export const AUTOS = [
  {
    auto: 'BMW',
    modelo: [ 'X2', 'X4','X6' ]
  },
  {
    auto: 'Mercedez-Benz',
    modelo: [ 'Sedan','Glc','Coupe' ]
  },
  {
    auto: 'Audi',
    modelo: [ 'A5','A7', 'Q7' ]
  },
  {
    auto: 'Renault',
    modelo: [ 'KWID', 'STEPWAY', 'ALL NEW DUSTER' ]
  },
  {
    auto: 'Ford',
    modelo: [ 'Bronco','Edge','Evos' ]
  }
]