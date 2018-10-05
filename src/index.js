import {injectGlobal} from 'styled-components'

injectGlobal `
  @import 'fortuner.css';
  @import 'app.css';

  :root {
    --button-border-radius: 2rem;
  }
`
