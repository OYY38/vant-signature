import App from './App.vue'
import { Popup, Button } from 'vant'
import './utils/rem'

export default {
  install: (app, options) => {
    app.use(Popup).use(Button).component('vant-signature', App)
  }
}

