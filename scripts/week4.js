console.log('js');

let parkedCars = []
const maxCars = 7;

function parkCar( carName ){
  console.log( 'room for parkCar' );
  parkedCars.push( carName )
  if( maxCars >= parkedCars.length ){
  return true;
  } // end of park car
  else{
    return false;
  } // end no room
} // end of parkCar

console.log( parkCar() );
