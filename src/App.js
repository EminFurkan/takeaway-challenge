import { CardContainer } from './components/CardContainer/CardContainer';
import { Header } from './components/Header/Header';

import { Provider } from 'react-redux';
import store from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <>
        <Header />
        <CardContainer />
      </>
    </Provider>
  )
}
