
import React from 'react';

import line from '../images/magnet/lines.jpg'
import line2 from '../images/magnet/lines2.jpg'
import img3 from '../images/magnet/im3.png'

export default class Electricity1 extends React.Component {
  render() {
    return (
      <>
        <div className="mt-5 container">
          <div className="row">
            <main className="col">
              <div className="card" >
                <div className="card-body">
                  <h3 className="card-title">Линии вектора магнитной индукции</h3>
                  <h6 className="card-subtitle mb-2 text-muted">теория</h6>
                  <p className="pt-3 card-text"><span className="fw-bold">Магнитной силовой линией, или линией вектора В, называется линия, касательная к которой в каждой точке дает направление вектора В. </span>
                Другими словами, магнитные силовые линии характеризует магнитное поля, давая представление о направлении вектора B в каждой точке пространства.</p>
                    <p>
                    В тех случаях когда магнитные линии лежат в одной плоскости, их расположение можно наблюдать с помощью железных опилок. Железные опилка, насыпанные на кусок картона или стекла, расположенные в исследуемой области магнитного поля, намагничиваются и, взаимодействуя друг с другом, сцепляютя своими концами, образуя цепочки, изображающие магнитные линии.
                    </p>
                    <div className="pt-4 mb-2 d-flex justify-content-center">
                      <img src={line} style={{ width: "30rem" }}></img>
</div>
<div className="pt-4 mb-2 d-flex justify-content-center">

                      <img src={line2} style={{ width: "30rem" }}></img>
                    </div>
<p className="mt-4">Ранее мы рассматривали вектор напряженности электрического поля, эти линии всегда начинаются у положительных зарядов и оканчиваются на отрицательных зарядах. В отличие от этого в магнитные линии всегда замкнутые, поэтому магнитное поле является вихревым полем.</p>
                    <div className="pt-4 mb-2 d-flex justify-content-center">
                      <img src={img3} style={{ width: "20rem" }}></img> 
                    </div>
                    <hr />
                    <div className="d-flex align-items-center">
                      <p>Теперь вы можете перейти к практическим заданиям, чтобы закрепить изученную теорию</p>
                      <div className="ms-4"><a href="https://forms.gle/LctTPvsbswsp6sZT7">
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