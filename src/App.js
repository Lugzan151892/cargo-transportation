import TableComponent from './components/TableComponent/TableComponent';
import MainContainer from './components/MainContainer/MainContainer';
import MapComponent from './components/MapComponent/MapContainer';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {

  return (
    <div className="App">
      <HeaderComponent/>
      <MainContainer>
        <TableComponent></TableComponent>
        <MapComponent/>  
      </MainContainer>
    </div>
  );
}

export default App;
