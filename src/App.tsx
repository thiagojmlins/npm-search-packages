import { Provider } from 'react-redux';
import RepositoriesList from './components/RepositoriesList';
import { store } from './state';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
