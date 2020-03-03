import React from 'react';
import './App.css';
import moment from 'moment'
import { Panel } from '@vkontakte/vkui';
require('moment/locale/ru');

 const Home = props =>  {

      return (
          <Panel id={props.id}>
          <div className="App">
              <div className='timeblock'>
                  <div style={{ padding: 10 }}>
                      Информация
                  </div>
                  <div className='time'>
                      {moment().format('LLLL')}
                  </div>
              </div>
              <div style={{ display: 'inline-flex', marginLeft: '2vw' }}>
                  <button className='btn'>
                      Заселить
                  </button>
                  <button className='btn'>
                      Текущие
                  </button>
                  <button className='btn'>
                      Бронирование
                  </button>
                  <button
                      onClick={() => {
                      props.go('pay');
                      }}
                      className='btn'>
                      Рассчет
                  </button>
              </div>
              <div style={{ marginLeft: '2vw', marginTop: '5px' }}>
                  <button className='btn'>
                      Расписание
                  </button>
                  <button
                      onClick={() => {
                      props.go('closedOrders');
                      }}
                      style={{ marginLeft: '20.5vw' }}
                      className='btn'
                  >
                      Закрытые заказы
                  </button>
              </div>
              <div style={{ marginLeft: '2vw', marginTop: '5px' }}>
                  <button style={{ color: 'red' }} className='LowBtn'>
                      Выйти в виндовс
                  </button>
                  <button style={{ color: 'green'}} className='LowBtn'>
                      Открыть кассу
                  </button>
                  <button style={{ color: 'green'}} className='LowBtn'>
                      Закрыть смену
                  </button>
                  <button style={{ color: 'green'}} className='LowBtn'>
                      Печать Х отчета
                  </button>
              </div>
          </div>
          </Panel>
      );
  };

  export default Home;
