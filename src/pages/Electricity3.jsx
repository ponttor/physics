import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonPreview from '../components/LessonPreview.jsx';
import Head from '../components/Head.jsx';
import Lesson from '../components/Lesson.jsx';
import atom from '../images/electricity/atom.gif'
import ele from '../images/electricity/elnabitie.webp'
import culon from '../images/electricity/culon.png'
import culon2 from '../images/electricity/culon3.gif'

export default class Electricity1 extends React.Component {
  render() {
    return (
      <>
        <div className="mt-5 container">
          <div className="row">
            <main className="col">
              <div className="card" >
                <div className="card-body">
                  <h3 className="card-title">Закон Кулона</h3>
                  <h6 className="card-subtitle mb-2 text-muted">теория</h6>
                 
                  
                  <p>В 1785 году Ш. Кулон на основании опытов с крутильными весами установил, что <span style={{fontWeight: 'bold'}}>сила взаимодействия двух заряженных тел, размеры которых малы по сравнению с расстоянием между ними, прямо пропорциональна произведению их зарядов и обратно пропорциональна квадрату расстояния между ними.</span>
                  </p>
                  <div className="d-flex justify-content-center">
                  <img src={culon} className="m-5" style={{ width: "30rem"}}></img>
                  </div>
                  <p>В этой формулировке указано, что <span style={{fontStyle: "italic"}}>размеры тел малы по сравнению с расстоянием между ними</span>. Это означает, что тела находятся на таком большом расстоянии друг от друга, что их геометрические особенности никак не влияют на их взаимодействия. В этом случае тела можно называть <span style={{fontStyle: "italic"}}>"точечными зарядами"</span>.</p>
                  <p> <span style={{fontStyle: "italic"}}>Сила пропорциональна зарядам,</span> значит при увеличении величины зарядов, сила увеличится и <span style={{fontStyle: "italic"}}>обратно пропорциональна расстоянию,</span> это значит, что при увеличении расстояния, сила уменьшается.</p>
                  <p>Кулон установил также, что силы взаимодействия двух точечных заряженных тел всегда направлены по прямой, соединяющей эти тела. Если заряды одноименны, то имеет место отталкивание, если же они разноименны – происходит их притяжение.</p>
                  <p>Опыты показали, что сила взаимодействия зарядов зависит и от среды, в которой находятся заряды. Любое вещество, разделяющее заряды, уменьшает силу их взаимодействия по сравнению с вакуумом. С учетом этого перепишем формулу Кулона.</p>
                  <div className="d-flex justify-content-center">
                  <img src={culon2} className="m-5" style={{ width: "10rem"}}></img>
                  </div>


                  <hr />
                  <div className="d-flex align-items-center">
                    <p>Теперь вы можете перейти к практическим заданиям, чтобы закрепить изученную теорию</p>
                    <div className="ms-4"><a href="https://forms.gle/52Q7QcfKB4JYCbzu7">
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