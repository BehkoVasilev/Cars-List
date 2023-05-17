import { useSelector } from 'react-redux';

function CarValue() {
    const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
        data
            .filter(car =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .reduce((acc, car) => acc + car.cost, 0)

        // const filteredCars = data.filter((car) => {
        //     return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        // });
        // // let cost = 0
        // // filteredCars.map(car => cost += car.cost);
        // // return cost

        // return filteredCars.reduce((acc, car) => {
        //     return acc + car.cost
        // }, 0)
    )

    return <div className="car-value">
        Total Cost: ${totalCost}
    </div>
};

export default CarValue;