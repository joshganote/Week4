console.log('js');

let parkedCars = [ 'PT Cruiser', 'Mustang', 'WRX STI', 'Firebird', 'Camero', 'Charger' ]
const maxCars = 7;

function parkCar( carName, color ){
  console.log( 'room for parkCar' );
  parkedCars.push( carName )
  if( maxCars >= parkedCars.length ){
  return true;
  } // end of park car
  else{
    return false;
  } // end no room
} // end of parkCar

parkCar( 'PT Cruiser', 'Red' );
parkCar( 'Mustang', 'Blue' );
parkCar( 'WRX STI', 'Black' );
parkCar( 'Firebird', 'Orange' );
parkCar( 'Camero', 'Silver' );
parkCar( 'Charger', 'Purple' );

console.log( parkCar() );

// Stretch Goals
// 1.
function isParkedHere( carName ){
  if( isParkedHere() = carName ){
    return true;
  } // end correct inventory
  else{
    return false;
  } // end not correct inventory
} // end of isParkedHere
isParkedHere( 'Porsche 911 GT3' );
console.log( 'Porsche 911 GT3', isParkedHere() );

// 2.
function takeForASpin( carName, color ){
  parkedCars.splice(0, 1);
  if( takeForASpin() >=carName ){
    return true;
  }
  else{
    return false
  }
}
