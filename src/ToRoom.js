import React from 'react';
import './App.css';
import { Panel } from '@vkontakte/vkui';

 const ToRoom = props =>  {

      return (
          <Panel id={props.id}>
              <div>
                  <div className='namePage'>
                      Заселение
                  </div>
              <div style={{ display: 'flex' }}>
                  <div className='box50'>
                      <button
                          className='box50btn'>
                          Назад
                      </button>
                      <button
                          className='box50btn or'>
                          2 местные номера
                      </button>
                      <button
                          className='box50btn or'>
                          Хостел
                      </button>
                  </div>
                  <div className='box50'>
                      <input
                          className='inputstyle'
                          placeholder='Имя Фамилия'
                      />
                  </div>
              </div>
                  <button
                      className='closeBtn'>
                      Сохранить
                  </button>
                  <button  onClick={() => {
                      props.go('home');
                  } } className='closeBtn'>
                      Отмена
                  </button>
                  <button
                      className='closeBtn'>
                      Чек
                  </button>
              </div>
          </Panel>
      );
  };

  export default ToRoom;
