import './App.css';
import Home from './app/view/Home';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import { Routes, Route } from 'react-router-dom';
import PlayList from './app/view/PlayList';
import Nav from './app/component/Nav';
import NewPlayList from './app/view/NewPlayList';

function App() {
  return (
    
    
    <div className="App">
      <Provider store={store}>

      <Nav />
      <Routes>
          
          <Route path='/' element={<Home />}></Route>
          <Route path='/new_playlist' element={<NewPlayList />}></Route>
          <Route path='/playlist' element={<PlayList />}></Route>
          <Route path='/playlistsong/:id' element={<Home/>}></Route>

          </Routes>
      </Provider>
        
    </div>
    
    
  );
}

export default App;
