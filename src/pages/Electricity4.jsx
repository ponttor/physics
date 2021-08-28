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
                  <h3 className="card-title">Свойства заряда</h3>
                  <h6 className="card-subtitle mb-2 text-muted">теория</h6>
                  <p className="pt-3 card-text">Электрический заряд – это важнейшее понятие во всей электродинамике (науке о электричестве). </p>                    
                    <p>Причина существования заряда скрыта внутри атома. Простейшая модель строение атома представляет его как массивное ядро и вращающиеся вокруг него электроны (это похоже на строение нашей солнечной системы, где в центре состредоточена вся основная масса всей системы. Масса солнца составляет 99,8 % всей Солнечной системы).</p>
                  <div className="d-flex justify-content-center">
                  <img src={atom} className="m-5"></img>
                  </div>
                  <p>Ядро атома состоит из нейтронов и протонов. В результате атом можно представить как комбинацию трех элементарных частиц: электронов, протонов и нейтронов. Все эти частицы обладают массой, но электроны и протоны так же обладают зарядом.            
                  Заряд электрона оказался отрицательным, заряд протона положительным, но величина заряда у них одинаковая. Электрон – это неделимая частица, поэтому ее заряд является минимальным возможным зарядом и называется <span style={{fontStyle: "italic"}}>"элементарным зарядом".</span></p>
                  
                  <p>Протоны и электроны обладают зарядом одинаковым по величине, но разным по знаку (протон положительный, электрон отрицательный). Поэтому если в атоме количество электронов и протонов одинаковое, то общий заряд атома равен нулю.   
                  А, если, например, удалить один электрон, то протонов станет больше и суммарный заряд будет равен заряду одного "лишнего" протона, поскольку заряд протона равен элементарному заряду, то общий заряд атома в данном случае будет равен элементарному заряду.  
                  <span style={{fontWeight: 'bold'}}> Элементарный заряд – это минимальный существующий заряд,</span> заряд тела не может быть меньше него, а может быть равен только целому числу умноженному на элементарный заряд Q = e * n (Q - заряд тела, e - элементарный заряд, n - целое число). 
                  <div className="d-flex justify-content-center">
                  <img src={ele} className="m-5" style={{ width: "30rem"}}></img>
                  </div>
                  </p>
                  <p style={{fontWeight: 'bold'}}>Заряд – это физическая величина, характеризующая способность тела к электрическому взаимодействию.</p>
                  <p>Другими словами, если у двух тел есть заряд, то они будут как-то взаимодействовать друг с другом: притягиваться либо отталкиваться.
                    В 1785 году Ш. Кулон на основании опытов с крутильными весами установил, что <span style={{fontWeight: 'bold'}}>сила взаимодействия двух заряженных тел, размеры которых малы по сравнению с расстоянием между ними, прямо пропорциональна произведению их зарядов и обратно пропорциональна квадрату расстояния между ними.</span>
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
<p>Итак, подведем итоги:</p>
<p style={{fontWeight: 'bold'}}>Свойства заряда:</p>
<ul>
                    <li>
                      Существует два типа заряда – отрицательные и положительные. Заряды одного знака отталкиваются, разного знака – притягиваются.
                    </li>
                    <li>
                      Единица измерения заряда 1 Кулон (Кл). Наименьший заряд частицы называется элементарным зарядом, е = 1,6 * 10-19 Кл
                    </li>
                    <li>
                      Заряд системы равен алгебраической сумме зарядов тел, входящих в систему. Заряд системы кратен элементарному, Q = N * e.
                    </li>
                    <li>
                      Закон сохранения заряда: заряд замкнутой системы сохраняется.
                    </li>
                    <li>
                      Заряды некоторых частиц: заряд электрона отрицателен и равен -е, заряд протона положителен и равен е, заряд нейтрона равен нулю.
                    </li>
                  </ul>
                  <hr />
                  <div className="d-flex align-items-center">
                    <p>Теперь вы можете перейти к практическим заданиям, чтобы закрепить изученную теорию</p>
                    <div className="ms-4"><a href="https://forms.gle/nkhGebwM7P66bxQf9">
                      <button href="/electricity-2" className="mt-2 mb-4 btn btn-primary">Практические задания</button> </a>
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