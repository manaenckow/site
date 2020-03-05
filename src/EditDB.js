import React from 'react';
import './App.css';
import { Panel } from '@vkontakte/vkui';

 class Schedule extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
             nname: '',
             name: '',
             cost: '',
             count: '',
             category: '',
             namee: '',
             card: '',
             pass: '',
             access: ''
         };
     }

      render() {

          const props = this.props;

          const del = (e, n)=> {
             if(n === 1) {
                 let arr = this.props.state.items.filter(a => a.name !== e);
                 this.props.setState({ items: arr });
             }
             if(n === 2) {
                  let arr = this.props.state.clients.filter(a => a.name !== e);
                  this.props.setState({ clients: arr });
              }
              if(n === 3) {
                  let arr = this.props.state.workers.filter(a => a.name !== e);
                  this.props.setState({ workers: arr });
              }
          };
          const add = e => {
              if(e === 2){
                  let arr = this.props.state.clients;
                  arr.push({ name: this.state.nname })
                  this.props.setState({ clients: arr });
              }
             if(e === 1){
                 let arr =  this.props.state.items;
                 arr.push(this.state)
                 this.props.setState({ items: arr });
             }
              if(e === 3){
                  let arr =  this.props.state.workers;
                  arr.push(this.state)
                  this.props.setState({ workers: arr });
              }
              this.setState({
                  nname: '',
                  name: '',
                  cost: '',
                  count: '',
                  category: '',
                  namee: '',
                  card: '',
                  pass: '',
                  access: ''
              })
          };
          const onChange = e => {
              this.setState({
                  [e.currentTarget.name]: e.currentTarget.value
              })
          }
          return (
              <Panel id={props.id}>
                  <div style={{ padding: 10 }}>
                      <div className='namePage' style={{ marginBottom: 10 }}>
                          Редактирование внутренней базы данных
                      </div>
                     <div style={{ display: 'flex' }}>
                         <div className='title' >
                             Товары
                         </div>
                         <div className='subtitle'>
                             Название
                         </div>
                         <div className='subtitle'>
                             Стоимость
                         </div>
                         <div className='subtitle'>
                             Количество
                         </div>
                         <div className='subtitle'>
                             Категория
                         </div>
                     </div>
                      {
                          this.props.state.items.map((e, key) => (

                              <div style={{ marginLeft: '13vw' }} key={key}>
                                  <input readOnly style={{ marginRight: '4vw', marginBottom: 5 }} value={e.name}/>
                                  <input readOnly style={{ marginRight: '4vw', marginBottom: 5 }} value={e.cost}/>
                                  <input readOnly style={{ marginRight: '5vw', marginBottom: 5 }} value={e.count}/>
                                  <input readOnly style={{ marginRight: '4vw', marginBottom: 5 }} value={e.category}/>
                                  <button onClick={() => del(e.name, 1)}> Удалить</button>
                              </div>
                          ))
                      }
                      <div style={{ marginLeft: '13vw' }}>
                          <input onChange={onChange} name='name' style={{ marginRight: '4vw' }} value={this.state.name}/>
                          <input onChange={onChange} name='cost' style={{ marginRight: '4vw' }} value={this.state.cost}/>
                          <input onChange={onChange} name='count' style={{ marginRight: '5vw' }} value={this.state.count}/>
                          <input onChange={onChange} name='category' style={{ marginRight: '4vw' }} value={this.state.category}/>
                          <button onClick={() => add(1)}> Добавить</button>
                      </div>
                      <div style={{ display: 'flex' }}>
                          <div className='title' >
                              Клиенты
                          </div>
                          <div className='subtitle'>
                              Имя
                          </div>
                      </div>
                      {
                          this.props.state.clients.map((e, key) => (

                              <div style={{ marginLeft: '13vw' }} key={key}>
                                  <input readOnly style={{ marginRight: '4vw' }} value={e.name}/>
                                  <button onClick={() => del(e.name, 2)}> Удалить</button>
                              </div>
                          ))
                      }
                      <div style={{ marginLeft: '13vw' }}>
                          <input onChange={onChange} name='nname' style={{ marginRight: '4vw' }} value={this.state.nname}/>
                          <button onClick={() => add(2)}> Добавить</button>
                      </div>
                      <div style={{ display: 'flex' }}>
                          <div className='title' >
                              Работники
                          </div>
                          <div className='subtitle'>
                              Имя
                          </div>
                          <div className='subtitle'>
                              Номер карты
                          </div>
                          <div className='subtitle'>
                              Пароль
                          </div>
                          <div className='subtitle'>
                              Уровень доступа
                          </div>
                      </div>
                      {
                          this.props.state.workers.map((e, key) => (

                              <div style={{ marginLeft: '13vw' }} key={key}>
                                  <input readOnly style={{ marginRight: '4vw', marginBottom: 5 }} value={e.name}/>
                                  <input readOnly style={{ marginRight: '4vw', marginBottom: 5 }} value={e.card}/>
                                  <input readOnly style={{ marginRight: '5vw', marginBottom: 5 }} value={e.pass}/>
                                  <input readOnly style={{ marginRight: '4vw', marginBottom: 5 }} value={e.access}/>
                                  <button onClick={() => del(e.name, 3)}> Удалить</button>
                              </div>
                          ))
                      }
                      <div style={{ marginLeft: '13vw' }}>
                          <input onChange={onChange} name='namee' style={{ marginRight: '4vw' }} value={this.state.namee}/>
                          <input onChange={onChange} name='card' style={{ marginRight: '4vw' }} value={this.state.card}/>
                          <input onChange={onChange} name='pass' style={{ marginRight: '5vw' }} value={this.state.pass}/>
                          <input onChange={onChange} name='access' style={{ marginRight: '4vw' }} value={this.state.access}/>
                          <button onClick={() => add(3)}> Добавить</button>
                      </div>
                      <div>
                          <button  onClick={() => {
                              props.go('home');
                          } } className='closeBtn'>
                              Назад
                          </button>
                      </div>
                  </div>
              </Panel>
          );
      }
 };

  export default Schedule;
