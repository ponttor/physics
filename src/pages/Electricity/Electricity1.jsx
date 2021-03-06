import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import forces from '../../images/electricity/4forces.jpg'

export default class Electricity1 extends React.Component {
  render() {
    return (
      <>
        <div className="mt-5 container">
          <div className="row">
            <main className="col">
              <div className="card" >
                <div className="card-body">
                  <h3 className="card-title">Два рода электричества. Закон сохранения заряда</h3>
                  <h6 className="card-subtitle mb-2 text-muted">теория</h6>
                  <p className="pt-3 card-text">В природе существует всего четые силы (4 типа взаимодействия):</p>
                  <ul>
                    <li>
                      Гравитационная сила (действует между всеми телами)
                    </li>
                    <li>
                      Электромагнитная сила (действует между заряженными телами)
                    </li>
                    <li>
                      Ядерные силы (действует внутри ядра атома)
                    </li>
                    <li>
                      Слабые взаимодействия (вызывают превращения элементарных частиц друг в друга)
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center">
                    <img src={forces} className="m-5"></img>
                  </div>
                  <p>Сильное и слабое ядерные взаимодействия происходят глубоко в ядре атома и не проявляются в привычном для нас мире. Поэтому мы можем наблюдать только гравитационную и электромагнитные силы.
                    О гравитации мы говорили ранее, а сейчас поговорим об электромагнитном взаимодействии.
                  </p>
                  <p><span style={{ fontWeight: 'bold' }}>Электромагнитное взаимодействие – это взаимодействие, возникающее между заряженными телами.</span> Впервые на электрические явления обратили внимание еще в Древней Греции. Например, было замечено, что янтарь, потертый о шерстяную ткань, приобретает свойство притягивать к себе различные предметы.  Позже в 1600 году было установлено, что электризацию можно сообщить и многим другим телам. Однако по-настоящему фундаментальной наука стала лишь во времена Максвелла, который в 1864 году описал единую теорию электродинамики.</p>
                  <p>Французский ученый Дюфе установил наличие двух родово электричества, а американский общественный деятель и ученый Франклин придумал термины "положительное" и "отрицательное" электричество. Так совершенно случайно один вид зарядов стал называться отрицательным, а другой положительным.</p>
                  <p>В 1729 англичанин Грей ввел разделение тел на проводники (те, которые способны переносить заряд) и диэлектрики (или изоляторы, те, которые не переносят электричество). В проводниках электроны свободно движутся по всему объему тела, поэтому проводники проводят электрический ток. В диэлектриках (стекло, резина, шелк, воздух) электроны привязаны к атомам, поэтому диэлектрики не проводят электрический ток.</p>
                  <div className="pt-4">
                    <h3>Закон сохранения заряда</h3>
                  </div>
                  <p className="pt-3">На основании многочисленных опытов Фарадей установил закон сохранения заряда: <span style={{ fontWeight: 'bold' }}>алгебраическая сумма задов всех тел изоларованной системы сохраняется неизменной при любых явлениях или процессах внутри системы.</span> Например, если эбонитовая палочка и шерстяная ткань ранее не имели электрических зарядов, а в результате трения палочки о ткань она наэлектризовалась положительно, а палочка – отрицательно, то заряды ткани и палочки по абсолютному значению оказываются одинаковыми, а по знаку противоположными, т.е. их алгебраическая сумма по прежнему осталась равно нулю.
                  </p>
                  <hr />
                  <div className="d-flex align-items-center">
                    <p>Теперь вы можете перейти к практическим заданиям, чтобы закрепить изученную теорию</p>
                    <div className="ms-4"><a href="https://forms.gle/oDV3sTCVL4r8NYXE6">
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