import React from 'react';
import './App.css';
import { Panel } from '@vkontakte/vkui';

 const Pay = props =>  {

      return (
          <Panel id={props.id}>
              <div>
                  <div className='namePage'>
                      Оплата
                  </div>
                 <div style={{ display: 'flex', padding: 5 }}>
                     <button style={{ width: '70vw', height: '5vh', fontSize: '1.5vw' }}>
                         Наличные
                     </button>
                     <button style={{ width: '30vw', marginLeft: 5, height: '5vh', fontSize: '1.5vw' }}>
                        Банковская карта
                     </button>
                 </div>
                  <div className='summ'>
                     Cумма к оплате:
                  </div>
                 <button className='paybtn'>
                     Рассчет
                 </button>
                  <div className='namePage'>
                      Ввод
                  </div>
                  <div style={{ marginLeft: '2vw' }}>
                  <button className='enterbtn' >
                      1
                  </button>
                  <button className='enterbtn' >
                      2
                  </button>
                  <button className='enterbtn' >
                      3
                  </button>
                  <button className='enterbtn' >
                      4
                  </button>
                  <button className='enterbtn' >
                      5
                  </button>
                  <button className='enterbtn' >
                      6
                  </button>
                  <button className='enterbtn' >
                      7
                  </button>
                  <button className='enterbtn' >
                      8
                  </button>
                  <button className='enterbtn' >
                      9
                  </button>
                  <button className='enterbtn' >
                      C
                  </button>
                  <button className='enterbtn' >
                      0
                  </button>
                  <button className='enterbtn' >
                      CA
                  </button>
                  </div>
                  <button
                      onClick={() => { props.go('home') }}
                      className='closeBtn' >
                     Отмена
                  </button>
              </div>
          </Panel>
      );
  };

  export default Pay;
