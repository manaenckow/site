import React from 'react';
import './App.css';
import { Panel } from '@vkontakte/vkui';

 const ClosedOrders = props =>  {

      return (
          <Panel id={props.id}>
              <div>
                  <button  onClick={() => {
                      props.go('home');
                  } } className='closeBtn'>
                      Закрыть
                  </button>
                <div className='namePage'>
                    Закрытые заказы
                </div>
                  <div className='guest'>
                      Гость: 1
                  </div>
                  <div className='guestbox'>

                  </div>
              </div>
          </Panel>
      );
  };

  export default ClosedOrders;
