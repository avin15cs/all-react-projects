const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year:${vehicle.year}`);
  console.log(`broken:${vehicle.broken}`);
};

printVehicle(oldCivic);

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year:${vehicle.year}`);
  console.log(`broken:${vehicle.broken}`);
};
