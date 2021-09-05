import React from 'react';
import Head from '../../components/Head.jsx';

export default class Preview extends React.Component {
  render() {
    return (
      <>

      <div className="mt-5"><Head text="Sapiens"/></div>
      <div className="container">
      <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">1</div>
          <div className="col align-middle" style={{ marginLeft: "2rem"}}>
            <a href="/sapiens-1" className="text-decoration-none text-dark"><h5>Глава 1 Ничем не выделяющееся животное </h5></a>
            <div className="text-muted">глава 1</div>
          </div>
          {/* <div >
            <div><a href="/magnet-1" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/n8Z7qZ5peeXwY96J6" className="text-decoration-none text-success">практика</a></div>
          </div> */}
        </div>
      </div >


      <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">2</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
            <a href="/sapiens-2" className="text-decoration-none text-dark"><h5>Цена разума</h5></a>
            <div className="text-muted">глава 1</div>
          </div>
          {/* <div >
            <div><a href="/magnet-1" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/n8Z7qZ5peeXwY96J6" className="text-decoration-none text-success">практика</a></div>
          </div> */}
        </div>
      </div >
       

      {/* <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">2</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
          <a href="/magnet-2" className="text-decoration-none text-dark"><h5>Магнитная индукция</h5></a>
            <div className="text-muted">Узнать как вычисляется магнитная индукция базовых элементов</div>
          </div>
          <div >
            <div><a href="/magnet-2" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/33GGJD5ciL5TuJ8N7" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div >

      <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">3</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
          <a href="/magnet-3" className="text-decoration-none text-dark"><h5>Линии вектора магнитной индукции.</h5></a>
            <div className="text-muted">Подробнее разобраться с вектора магнитной индукции</div>
          </div>
          <div >
            <div><a href="/magnet-3" className="text-decoration-none text-success">теория</a></div>
            <div><a href="https://forms.gle/ovsnHzaBgT9BPzgj7" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div > */}

      {/* <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">4</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
          <a href="/magnet-4" className="text-decoration-none text-dark"><h5>Закон Био – Савара и Лапласа.</h5></a>
            <div className="text-muted">Узнать формулу для расчета силы взаимодействия зарядов</div>
          </div>
          <div >
            <div><a href="/magnet-4" className="text-decoration-none text-success">теория</a></div>
            <div><a href="" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div > */}

      {/* <div className="row card" style={{ padding: "1rem"}}>
        <div className="d-flex">
          <div className="h3">5</div>
          <div className="col" style={{ marginLeft: "2rem"}}>
          <a href="/magnet-5" className="text-decoration-none text-dark"><h5>Поля кругового тока, прямолинейного проводника и внутри длинного соленоида. Параллельные токи.</h5></a>
            <div className="text-muted">Узнать формулу для расчета силы взаимодействия зарядов</div>
          </div>
          <div >
            <div><a href="/magnet-5" className="text-decoration-none text-success">теория</a></div>
            <div><a href="" className="text-decoration-none text-success">практика</a></div>
          </div>
        </div>
      </div > */}


</div>
        </>
    )
  }
}