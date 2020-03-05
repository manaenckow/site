import React from 'react';
import './App.css';
import { Panel } from '@vkontakte/vkui';

 const Schedule = props =>  {

      return (
          <Panel id={props.id}>
              <div>
              <div style={{ padding: 10, textAlign: 'center' }}> Расписание не заполнено </div>
                  <button
                      className='closeBtn'>
                      Сохранить
                  </button>
                  <button  onClick={() => {
                      props.go('home');
                  } } className='closeBtn'>
                      Отмена
                  </button>
              </div>
          </Panel>
      );
  };

  export default Schedule;
