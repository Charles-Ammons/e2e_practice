import {Provider} from 'react-redux';
import store from './store/index.js';
import ListScreen from './components/ListScreen';

function App() {
  return (
    <Provider store={store}>
      <ListScreen />
    </Provider>
  );
}

export default App;
