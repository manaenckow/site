import React, { Component } from 'react';
import './App.css';

import Home from './Home.js';
import ClosedOrders from './ClosedOrders.js';
import Pay from './Pay.js';
import ToRoom from './ToRoom.js';
import Schedule from "./Schedule";
import EditDB from "./EditDB";

import { Epic, View } from '@vkontakte/vkui';

 class App extends Component  {
     constructor(props) {
         super(props);

         this.state = {
             panel: 'home',
             items: [
                 {
                     id: 0,
                 name: '101',
                 cost: '1200',
                 count: '1',
                 category: '2 местные номера'
             },
                 {
                     id: 1,
                     name: 'Нижний хостел',
                     cost: '600',
                     count: '10',
                     category: 'Хостел'
                 }],
             clients: [{
                 id: 0,
                 name: 'Пётр Петров'
             }],
             workers: [{
                 name: 'Илья Шонин',
                 card: '123',
                 pass: '1234',
                 access: '4'
             }]
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
             <View id='trm' activePanel='trm'>
                 <ToRoom {...props} id='trm'/>
             </View>
             <View id='schedule' activePanel='schedule'>
                 <Schedule {...props} id='schedule'/>
             </View>
             <View id='db' activePanel='db'>
                 <EditDB {...props} id='db'/>
             </View>
         </Epic>
      );
  }
  }

     export default App;
