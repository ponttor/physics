import React from 'react';
import bigbang from '../../images/sapiens/bigbang.jpg'
import earthlive from '../../images/sapiens/live.png'
import family1 from '../../images/sapiens/family1.png'
import family2 from '../../images/sapiens/family2.png'
import homoE from '../../images/sapiens/homoE.jpg'
import homoR from '../../images/sapiens/homoR.jpg'
import homoN from '../../images/sapiens/homon.jpg'

export default class Sapiens2 extends React.Component {
  render() {
    return (
      <>
        <div className="mt-5 container">
          <div className="row">
            <main className="col">
              <div className="card" >
                <div className="card-body">
                  <h3 className="card-title">Цена разума</h3>
                  <h6 className="card-subtitle mb-2 text-muted">глава 1</h6>
                  <p className="pt-3 card-text">Примерно 14 миллиарда лет назад появились материя, энергия, время и пространство: произошел Большой взрыв. Через 300 тысяч лет от начала своего бытия материя и энер¬гия начали образовывать между собой сложные комплексы — атомы, а те стали комбинироваться в молекулы.</p>
                  <div className="d-flex justify-content-center">
                      <img src={bigbang} className="m-5" style={{ width: "30rem" }}></img>
                  </div>
                 


                 
                  <p className="card-text">Примерно 3,8 миллиарда лет назад на планете Земля некие молекулы соединились в большие и сложные структуры — организмы.</p>
                  <div className="d-flex justify-content-center">
                      <img src={earthlive} className="m-5" style={{ width: "30rem" }}></img>
                  </div>
                  <p className="card-text">Примерно 70 тысяч лет назад организмы, принадлежащие к виду Homo sapiens, породили нечто еще более изощренное — мы это называем культурой. 
Ход человеческой истории определили три крупнейшие революции: <span style={{ fontWeight: 'bold' }}>Когнитивная</span> (70 тысяч лет назад), <span style={{ fontWeight: 'bold' }}>Аграрная</span> (12 тысяч лет назад), <span style={{ fontWeight: 'bold' }}>Научная</span> (500 лет назад).</p>
                  <p className="card-text">Все началось с когнитивной революции, 70 тысяч лет назад, в результате нее обычное животное превратилось в нечно новое. Аграрная революция, произошедшая 12 тысяч лет назад, существенно ускорила прогресс. Научная революция — ей всего-то 500 лет — вполне способна покончить с историей и положить начало чему-то иному, небывалому. Дальше мы разберемся в том, как эти три революции отразились на людях и на других живых существах — верных спутниках людей.</p>
                  <h3 className="card-title pt-4">Наша родословная</h3>
                  <p className="card-text">Люди существовали задолго до начала истории, которую мы знаем. Животные, весьма схожие с современными людьми, впервые появились 2,5 миллиона лет тому назад, однако на протяжении многих поколений они никак не выделялись среди миллиардов других животных. Люди ничем не отличались от животных и оказывали на экологическую среду не большее влияние, чем гориллы, жуки-светляки или медузы.</p>
                  <p className="card-text">Биологи распределяют организмы по родам и видам. <span style={{ fontWeight: 'bold' }}>Homo sapiens,</span> то есть принадлежит к виду sapiens (разумный) рода Homo (человек). Роды в свою очередь объединяются в семейства — например: собачьи (волки, лисы, шакалы) или слоновые (слоны, мамонты, мастодонты). Все члены семейства могут проследить свою родословную до некоего родоначальника. Так, все кошки, от крошечного домашнего котенка до свирепого льва, восходят к единому предку, жившему примерно 25 миллионов лет назад.</p>
                  <p className="card-text">И Homo sapiens тоже принадлежит к особому семейству, мы — члены большого шумного семейства больших обезьян (высших приматов). Среди ныне живущих наши ближайшие родственники — шимпанзе, гориллы, орангутанги и гиббоны, из них ближе всего нам шимпанзе. Всего 6 миллионов лет назад у одной обезьяны родились две дочери. Одна стала предком всех ныне живущих шимпанзе, вторая доводится пра-пра-пра и так далее бабушкой нам.</p>
                  <p className="card-text">У нас не только имеется множество диких родственников, но были некогда родные братья и сестры, когда-то род «человек» включал в себя несколько видов. Люди — то есть животные из рода Homo — появились в Восточной Африке примерно 2,5 миллиона лет назад как ветвь более древнего рода обезьян Australopithecus, то бишь «южных обезьян». А два миллиона лет назад часть древних мужчин и женщин покинули родину и отправились блуждать по обширным пространствам Северной Африки, Европы и Азии, где и расселились. Поскольку для выживания в заснеженных лесах Северной Европы требовались иные качества, чем для существования в душных джунглях Индонезии, человеческие популяции развивались в разных направлениях, и в результате появились разные виды, каждому из которых ученые придумали пышное латинское название.</p>
                  <div className="d-flex justify-content-center">
                      <img src={family1} className="m-5" style={{ width: "30rem" }}></img>
                      <img src={family2} className="m-5" style={{ width: "30rem" }}></img>

                  </div>
                  
                  <p className="card-text">В Европе и Западной Азии закрепился <span style={{ fontWeight: 'bold' }}>Homo neanderthalensis</span> (человек из долины Неандер), обычно именуемый попросту «неандертальцем». Неандертальцы, более плотного и мускулистого сложения, чем современные люди, удачно приспособились к холодному климату Европы ледникового периода. На острове Ява обитал <span style={{ fontWeight: 'bold' }}>Homo soloensis</span> (человек из долины Соло), более приспособленный к жизни в тропиках. На другом индонезийском острове, маленьком островке Флорес, поселились существа, которых теперь популярная пресса склонна сравнивать с хоббитами. Эти вооруженные копьями карлики ростом не выше метра весили в среднем 25 килограммов, но в отваге им не откажешь. Они охотились даже на местных слонов — впрочем, и слоны тут были карликовые. Открытые пространства Азии осваивал <span style={{ fontWeight: 'bold' }}>Homo erectus</span> (человек прямоходящий), и этот самый устойчивый вид человека продержался там более 1,5 миллиона лет.
                  </p>

                  <p className="card-text">В 2010 году из пучин забвения вернулся еще один утраченный братец: при раскопках Денисовой пещеры в Сибири обнаружилась окаменевшая фаланга пальца. Генетический анализ доказал, что палец принадлежит неведомому прежде виду человека, который и назвали соответственно денисовским человеком, <span style={{ fontWeight: 'bold' }}>Homo denisova.</span> Кто знает, сколько еще забытых родичей дожидается, пока их обнаружат — в других пещерах, на островах, в иных климатических зонах!
</p>
                  <p className="card-text">Пока эти виды людей развивались в Европе и Азии, в Восточной Африке тоже продолжалась эволюция. Колыбель человечества взращивала все новые виды, в том числе <span style={{ fontWeight: 'bold' }}>Homo rudolfensis</span> (человек с озера Рудольф), <span style={{ fontWeight: 'bold' }}>Homo ergaster</span> (человек работающий) и в итоге наш собственный вид, который мы без ложной скромности окрестили <span style={{ fontWeight: 'bold' }}>Homo sapiens</span> (человек разумный).</p>

                  <p className="card-text">Некоторые виды людей удались крупными, другие были карлики. Имелись среди них бесстрашные охотники и робкие собиратели растительной пищи. Кто-то обитал исключительно в пределах одного острова, а кто-то осваивал целые континенты. Но все это были представители рода Homo, иными словами — человечества.
                  </p>
                  <p className="card-text">Популярно заблуждение, будто все эти виды сменяли друг друга как преемники: эргастер порождает эректуса, эректус — неандертальца, а от неандертальца ведем род мы с вами. Линейная модель создает ложное ощущение, будто в каждый момент времени на Земле обитал лишь один человеческий вид и все древние виды представляют собой устаревшие модели современного человека. На самом деле почти два миллиона лет — примерно до VIII тысячелетия до н.э. — несколько человеческих видов существовало одновременно. Собственно, почему нет? Живут же сейчас многие виды лис, медведей и свиней. Сто тысячелетий тому назад по Земле разгуливало по меньшей мере шесть видов человека. Исключением из правил (исключением, которое бросает на нас зловещую тень подозрения) является как раз нынешняя эксклюзивность, а не разнообразное прошлое. Скоро мы убедимся в том, что у Homo sapiens есть причины подавлять любое воспоминание о вымерших собратьях.</p>

                  <div className="d-flex justify-content-center">
                  <div className="d-flex justify-content-center flex-column">
                      <div><img src={homoR} className="m-2" style={{ width: "30rem" }}></img></div>
                      <div className="mt-0, pt-0"><p className="text-center">Homo rudolfensis (Восточная Африка, 2 миллиона лет назад).</p></div>
                  </div>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                  <div className="d-flex justify-content-center flex-column">
                      <img src={homoE} className="m-2" style={{ width: "30rem" }}></img>
                      <p className="card-text">Homo erectus (Азия, 2 миллиона — 50 тысяч лет назад).</p>
                      </div>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                  <div className="d-flex justify-content-center flex-column">
                      <img src={homoN} className="m-2" style={{ width: "30rem" }}></img>
                      <p className="card-text">Homo neanderthalensis (Европа и Западная Азия, 400-30 тысяч лет назад).
                      </p>
                  </div>
                  </div>




                    {/* <div className="d-flex justify-content-center">
                      <img src={earth} className="m-5" style={{ width: "30rem" }}></img>
                    </div> */}

                    <hr />

                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    )
  }
} 