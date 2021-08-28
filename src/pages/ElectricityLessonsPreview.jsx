import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonPreview from '../components/LessonPreview.jsx';
import Head from '../components/Head.jsx';
import pic from '../images/krug.png'

export default class Home extends React.Component {
  render() {
    return (
      <>
      {/* <div className="d-flex flex-column justify-content-center align-items-center min-vw-100 min-vh-100">
      <Head text="Электричество"/>
      </div> */}
      <div className="mt-5"><Head text="Электричество"/></div>
      <div className="container">
      <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">1</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
            <a href="/electricity-1" className="text-decoration-none text-dark"><h5>Два рода электричества. Закон сохранения заряда.</h5></a>
            <div className="text-muted">Разобраться в сущности электричества</div>
          </div>
          <div >
            <div><a href="/electricity-1" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/2TuxXao5zWgGZ4Hj7" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div >


      <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">2</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
          <a href="/electricity-2" className="text-decoration-none text-dark"><h5>Свойства заряда.</h5></a>
            <div className="text-muted">Узнать откуда берется заряд и какие у него свойства</div>
          </div>
          <div >
            <div><a href="/electricity-2" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/LyXpeZki5uBHsBeG8" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div >

      <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">3</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
          <a href="/electricity-2" className="text-decoration-none text-dark"><h5>Закон Кулона.</h5></a>
            <div className="text-muted">Узнать формулу для расчета силы взаимодействия зарядов</div>
          </div>
          <div >
            <div><a href="/electricity-3" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/52Q7QcfKB4JYCbzu7" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div >

      <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">3</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
            <h5>Закон КулонаЭлектрическое поле. Напряженность.</h5>
            <div className="text-muted">Понять, что такое электрическое поле</div>
          </div>
          <div >
            <div><a href="/electricity-2" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/2TuxXao5zWgGZ4Hj7" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div >

      <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">4</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
            <h5>Линии напряженности электрического поля.</h5>
            <div className="text-muted">Разобраться в графическом изображении электрического поля</div>
          </div>
          <div >
            <div><a href="/electricity-2" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/2TuxXao5zWgGZ4Hj7" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div >


      <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">5</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
            <h5>Работа электрического поля. Потенциал.</h5>
            <div className="text-muted">Узнать что такое потенциал и как вычисляется работа электрического поля</div>
          </div>
          <div >
            <div><a href="/electricity-2" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/2TuxXao5zWgGZ4Hj7" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div >
      </div>

      

     
      
      
      
      
      {/* <Head text="Электричеcтво"/>
      <div className="container-sm">
      <LessonPreview number="1" lesson="Введение" description="Разобраться в сущности электрических явлений"/>
      <LessonPreview number="2" lesson="Два рода электричества. Закон сохранения заряда" description="Узнать о том, что такое заряд и как заряды взаимодействуют друг с другом"/>
      <LessonPreview number="3" lesson="Электрическое поле. Напряженность, потенциал" description="Понять, что такое электрическое поле, за счет чего заряды притягивают или отталкивают друг друга "/>
      <LessonPreview number="4" lesson="Электрический ток" description="Познакомиться с понятием электрического тока"/>
      <LessonPreview number="5" lesson="Сопротивление" description="Понять, что такое электрическое сопротивление"/>
      <LessonPreview number="6" lesson="Напряжение" description="Понять, что такое электрическое напряжение"/>
      <LessonPreview number="7" lesson="Закон Ома" description="Разобраться с законом Ома"/>
      <LessonPreview number="8" lesson="Последовательное и параллельное соединение" description="Научиться рассчитывать параметры электрических контуров"/>
      </div> */}
        </>
    )
  }
}