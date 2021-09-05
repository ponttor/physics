import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import right from '../../images/magnet/right.png';
import induction from '../../images/magnet/induction.jpg';
import superP from '../../images/magnet/super.jpg'
import longm from '../../images/magnet/longm.jpg'
import tl from '../../images/magnet/tl.gif'
import coef from '../../images/magnet/coef.png'
import sol from '../../images/magnet/sol.jpg'

export default class Electricity1 extends React.Component {
  render() {
    return (
      <>
        <div className="mt-5 container">
          <div className="row">
            <main className="col">
              <div className="card" >
                <div className="card-body">
                  <h3 className="card-title">Магнитная индукция</h3>
                  <h6 className="card-subtitle mb-2 text-muted">теория</h6>
                  <p className="pt-3 card-text">Раньше для описания величины электрического поля, мы использовали понятие "напряженность", которая определяется силой, с которой электрическое поле действует на единичный положительный заряд, помещенный в соответствующую точку поля. 
                  Попробуем сделать тоже самое для магнитного поля. Для магнитного поля мы будем использовать прямолинейный отрезок проводника, по которому течет ток.
                  Величина, характеризующая этот индикатор магнитного поля, называется элементом тока, а значение равно произведению силы тока I на длину L проводника.
                  Экспериментально было установлено, что отношение силы (F), действующей на элемент тока, к величине этого элемента (IL) является для данной точки поля величиной постоянной и определяется исключительно свойствами магнитного поля в данной точке. Это отношение и есть магнитная индукция, она обозначается символом В.</p>
                  <div className="d-flex justify-content-center">
                      <img src={induction} className="m-5" style={{ width: "30rem" }}></img>
                    </div>
                  <p>Итак, <span className="fw-bold">магнитная индукция – это векторная величина, характеризующая свойства магнитного поля в данной точке и измеряемая отношением силы, действующей на пробный элемент тока, к его величине. </span>
                   Вектор В является аналогом вектора Е, характеризующего электрическое поле.</p>
                   <p>Единицей измерения магнитной индукции в СИ является тесла (тл). <span className="fw-bold">Тесла – индукция такого однородного магнитного поля, которое действует с максимальной силой 1 Н на каждый метр длины проводника, по которому течет ток силой 1 а.</span>
                   <div className="d-flex justify-content-center">
                      <img src={tl} className="m-5" style={{ width: "12rem" }}></img>
                    </div></p>
                   <p>Направление вектора магнитной индукции для прямого проводника в зависимости от направления тока можно определить с помощью правой руки, как на картинке ниже.</p>
                   <div className="d-flex justify-content-center">
                      <img src={right} className="m-5" style={{ height: "15rem" }}></img>
                    </div>
                    <h3 className="card-title">Суперпозиция магнитных полей</h3>
<p>Если в нашей системе несколько токов, индуцирующих магнитное поле, то cуммарная магнитная индукция будет определяться как векторная сумма значений магнитной индукции каждого отдельного тока.</p>
<div className="d-flex justify-content-center">
                      <img src={superP} className="" style={{ height: "30rem" }}></img>
                    </div>
                    <h3 className="card-title">Формулы для вычисления магнитной индукции</h3>
                    <div className="d-flex justify-content-center">
                      <img src={longm} className="m-5" style={{ height: "30rem" }}></img>
                    </div>
                    <p>где магнитная постоянная вычисляется как</p>
                    <div className="d-flex justify-content-center">
                      <img src={coef} className="mb-5" style={{ height: "5rem" }}></img>
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src={sol} className="mb-5" style={{ height: "30rem" }}></img>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center">
                      <p>Теперь вы можете перейти к практическим заданиям, чтобы закрепить изученную теорию</p>
                      <div className="ms-4"><a href="https://forms.gle/33GGJD5ciL5TuJ8N7">
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