import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonPreview from '../components/LessonPreview.jsx';
import Head from '../components/Head.jsx';
import Lesson from '../components/Lesson.jsx';
import two from '../images/magnet/two-conductor.png'
import earth from '../images/magnet/earth.jpg'
import emp from '../images/magnet/newpa1.gif'
import tok from '../images/magnet/tok.png'

export default class Electricity1 extends React.Component {
  render() {
    return (
      <>
        <div className="mt-5 container">
          <div className="row">
            <main className="col">
              <div className="card" >
                <div className="card-body">
                  <h3 className="card-title">Магнитное поле</h3>
                  <h6 className="card-subtitle mb-2 text-muted">теория</h6>
                  <p className="pt-3 card-text">Хотя магнитные свойства были известны давно, то только в 1820 г. датский физик Эрстед впервые обнаружил связь между магнитными и электрическими явлениями. 
                  Например, если поместить магнитную стрелку, под или над проводником, то при пропускании тока по проводнику стрелка поворачивается.</p>
                  <div className="d-flex justify-content-center">
                      <img src={emp} className="m-5" style={{ width: "30rem" }}></img>
                    </div>
                  <p>В 1820 году Ампер установил закон взаимодействия проводников с током: <span className="fw-bold">два параллельных проводника с током взаимно притягиваются,
                    если токи в них имеют одинаковое направление и отталкиваются, если токи в них направлены в противоположные стороны.</span>
                  </p>
                  <div className="d-flex justify-content-center">
                      <img src={two} className="m-5" style={{ width: "30rem" }}></img>
                    </div>
                  <p>Оба эти эксперимента можно объяснить с помощью такого понятие как магнитное поле. <span className="fw-bold">Магнитное поле всегда связано с током, т.е. с движением зарядов. Пока заряженное тело неподвижно, оно окружено только электрическим полем, но как только оно придет в движение, кроме электрического поля возникает еще магнитное поле.</span></p>
                  <p>Ранее мы говорили о электрическом поле, оно оказывает механическое воздействие как на неподвижные, так и на движущиеся электрические заряды, <span className="fw-bold">магнитное поле – оказывает действие только на движущиеся заряды</span> (электрический ток - один из примеров движущихся зарядов).</p>
                  <p>Таким образом, оказалось, что явления Магнетизма и Электричества неразрывно связаны, по сути это разные проявления одного общего явления под названием <span className="fw-bold">Электромагнитное взаимодействие.</span> Пока заряды не двигаются, они генерируют только электрическое поле, но как только они начинают двигаться, они генерируют так же магнитное поле, которое оказывает действия только на другие движущиеся заряды. Поэтому в опыте Ампера два проводника с током (движущимися зарядами) взаимодействовали друг с другом.</p>
                  <h3 className="card-title">Примеры магнитных полей от разных источников</h3>
                  <p>Магнитное поле от проводника с током возникает в перпендикулятной плоскости</p>
                  <div className="d-flex justify-content-center">
                      <img src={tok} className="m-5" style={{ width: "30rem" }}></img>
                    </div>
                    <p>Так выглядит магнитное поле соленоида (проводник закрученный в спираль)</p>

                    <div className="d-flex justify-content-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1-jatNwBs7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </div>
                    <p>А это магнитное поле Земли.</p>
                    <div className="d-flex justify-content-center">
                      <img src={earth} className="m-5" style={{ width: "30rem" }}></img>
                    </div>

                    <hr />
                  <div className="d-flex align-items-center">
                    <p>Теперь вы можете перейти к практическим заданиям, чтобы закрепить изученную теорию</p>
                    <div className="ms-4"><a href="https://forms.gle/n8Z7qZ5peeXwY96J6">
                      <button className="mt-2 mb-4 btn btn-primary">Практические задания</button> </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    )
  }
} 