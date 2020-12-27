import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter, useLocation } from 'react-router-dom';
import App from './app';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const Root = ({ store }) => (
  <Provider store={ store }>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);

export default Root;