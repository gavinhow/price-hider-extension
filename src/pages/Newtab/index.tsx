import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';
import './index.css';

render(<Newtab />, window.document.querySelector('#app-container'));

if ((module as any).hot) (module as any).hot.accept();
