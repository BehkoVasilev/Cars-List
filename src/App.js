import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {
    return (
        <div>
            <CarForm />
            <CarSearch />
            <CarValue />
            <CarList />
        </div>
    )
};

export default App;