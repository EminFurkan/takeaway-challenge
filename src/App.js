import { Header } from './components/Header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';

import { Provider } from 'react-redux';
import store from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <>
        <Header />
        <Dashboard />
      </>
    </Provider>
  )
}
