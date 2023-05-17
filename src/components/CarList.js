import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();

    const cars = useSelector((state) => {
        return state.cars.data
    });

    const handleDeleteClick = (id) => {
        dispatch(removeCar(id));
    }

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className='panel'>
                <p>{car.name} - ${car.cost}</p>
                <button
                    className='button is-danger'
                    onClick={() => handleDeleteClick(car.id)}>
                    DELETE
                </button>
            </div>
        )
    });

    return <div className='car-list'>
        {renderedCars}
        <hr />
    </div>
};

export default CarList;