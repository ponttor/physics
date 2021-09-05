import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import napr from '../../images/electricity/napr.jpg'
import n from '../../images/electricity/n.png'
import n2 from '../../images/electricity/n2.jpg'
import s from '../../images/electricity/s.jpg'
import s3 from '../../images/electricity/s3.png'

export default class Electricity1 extends React.Component {
  render() {
    return (
      <>
        <div className="mt-5 container">
          <div className="row">
            <main className="col">
              <div className="card" >
                <div className="card-body">
                  <h3 className="card-title">Напряженность электрического поля</h3>
                  <h6 className="card-subtitle mb-2 text-muted">теория</h6>
                  <p>Заряды создают вокруг себя <span style={{ fontWeight: 'bold' }}>электрическое поле (т.е. изменяют некоторым образом окружающее пространство), </span>посредством
                  которого они взаимодействуют друг с другом. Графически это поле показывают с помощью <span style={{ fontWeight: 'bold' }}>силовых линий. Силовые линии указывают на направление в котором будет действовать сила на помещенный в эту точку электрического поля положительный заряд.</span></p>
                  <div className="d-flex justify-content-center">
                  <img src={napr} className="m-5" style={{ width: "30rem"}}></img>
                  </div>
                  <p>Напряженность характеризует электрическое поле и является его <span style={{ fontWeight: 'bold' }}>силовой характеристикой.</span> Она численно равна силе, которая будет действовать на единичный положительный заряд, помещенный в данную точку. Это векторная величина.
                    Это видно из формулы для напряженности. </p>
                  <div className="d-flex justify-content-center">
                  <img src={n} className="m-5" style={{ width: "10rem"}}></img>
                  </div>
                  <div className="d-flex justify-content-center">
                  <img src={n2} className="m-5" style={{ width: "30rem"}}></img>
                  </div>
                  <h3 className="card-title">Однородное электрическое поле</h3>
                  <p>Электрическое поле зависит от своего источника.</p>
                  <div className="d-flex justify-content-center">
                  <img src={s} className="m-5" style={{ width: "50rem"}}></img>
                  </div>
                  <p>Обратите внимание на поле в последнем примере, такое поле, когда вектор напряженности одинаковый в любой точке называют <span style={{ fontWeight: 'bold' }}>однородным.</span> Такое поле можно создать с помощью одной или двух бесконечно длинных равнозаряженных пластин.</p>
                  <p><span style={{ fontStyle: 'italic' }}>Электрическое поле называется однородным, если его напряженность в каждой точке одинакова по величине и направлению.</span>
</p>
<div className="d-flex justify-content-center">
                  <img src={s3} className="m-5" style={{ width: "40rem"}}></img>
                  </div>
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