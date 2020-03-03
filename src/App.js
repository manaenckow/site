import React, { Component } from 'react';
import './App.css';

import Home from './Home.js';
import ClosedOrders from './ClosedOrders.js';
import Pay from './Pay.js';

import { Epic, View } from '@vkontakte/vkui';

 class App extends Component  {
     constructor(props) {
         super(props);

         this.state = {
             panel: 'home',
         };
     }

  render() {
         const setState = this.setState.bind(this);
         const state = this.state;

         const go =  e => {
             this.setState({
                 panel: e
             });
         };

         const props = { setState, state, go};
      return (
         <Epic activeStory={this.state.panel}>
             <View id='home' activePanel='home'>
                 <Home {...props} id='home'/>
             </View>
             <View id='closedOrders' activePanel='closedOrders'>
                 <ClosedOrders {...props} id='closedOrders'/>
             </View>
             <View id='pay' activePanel='pay'>
                 <Pay {...props} id='pay'/>
             </View>
         </Epic>
      );
  }
  }

     export default App;
