import "./App.css";
import {
  user,
  cardInfo,
  imgPending,
  imgUser,
  imgVideo,
  imgPublic,
  imgIndicator,
  imgLocation,
  imgPhoto,
  imgLock,
  imgCake,
  imgRelogio,
  imgDowArro,
  imgUser1,
  imgShare,
  imgComment,
  imgLike,
  imgLike_2,
} from "./util";

import { useState } from "react";

function App() {
  const [post, setPost] = useState([
    {
      name: "Patricia Santos",
      img: imgUser1,
      message: 'Essa publicação está configurada no modo privado "somente eu"',
      like: false,
      comments: 0,
      shares: 0,
    },
    {
      name: "Patricia Santos",
      img: imgUser,
      message: "Hoje eu vou a praia e levarei a Ana comigo",
      like: true,
      comments: 8,
      shares: 7,
    },
  ]);

  const handleChangePost = (index, isLike, isOther) => {
    const copy = [...post];

    if (isLike) {
      copy[index].like = !post[index].like;
    } else if (isOther) {
      copy[index][isOther]++;
    }

    setPost(copy);
  };

  return (
    <div className="container">
      <section className="sec-left">
        <div className="card-left">
          <div className="img-card-left"></div>
          <div className="container-card-left">
            <div className="img-user">
              <img className="img-user-d" src={user.img} alt="" />
            </div>
            <div className="user-info">
              <h1>{user.name}</h1>
              <label className="lbl-email-user">{user.email}</label>
              <span className="lbl-skill-user">{user.skill}</span>
            </div>
            <div className="card-footer">
              <div className="div-location">
                <img src={imgLocation} alt="" />
                <label> {user.location} </label>
              </div>

              <div className="div-more-info">
                {user.local.map((e, key) => (
                  <div key={key}>
                    <div className="div-footer-icon">
                      <img src={e?.img} alt="" />
                    </div>
                    <label> {e?.text} </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-center">
        <div className="div-public">
          <div className="div-public-main">
            <div className="public-icon-right">
              <img className="img-icon-public" src={imgPublic} alt="" />
            </div>
            <div className="text-div-public-1"> Escreva uma publicação... </div>
            <div className="public-icon-right">
              <img className="img-icon-public" src={imgPhoto} alt="" />
            </div>
            <div className="public-icon-right">
              <img className="img-icon-public" src={imgVideo} alt="" />
            </div>
          </div>
          <div className="div-footer-public">
            <p>
              ou <a href="http://localhost:3000"> publique um artigo </a> na
              InClicle
            </p>
          </div>
        </div>

        <div className="div-container-post">
          {post.map(({ name, img, message, comments, shares, like }, index) => (
            <div key={index} className="div-post">
              <div className="div-header-post">
                <div className="img-user post">
                  <img className="img-user-d post" src={img} alt="" />
                </div>
                <div className="div-post-info">
                  <h1 className="h-title-post">{name}</h1>
                  <p>
                    <img className="img-post-icon" src={imgRelogio} alt="" />
                    {"  "}há cerca de 8 horas{" "}
                    <img className="img-post-icon" src={imgLock} alt="" />{" "}
                    Somente eu
                  </p>
                </div>
                <div>
                  <img className="img-post-icon" src={imgDowArro} alt="" />
                </div>
              </div>
              <div className="div-post-message">
                <p>{message}</p>
              </div>

              <div className="div-post-coment">
                <div className="div-first-h">
                  <label className="lbl-like-post-1">
                    <img className="img-post-icon t16" src={imgLike} alt="" />{" "}
                  </label>
                  <label>
                    {like ? (
                      <p>1 Pessoa curtiu isso</p>
                    ) : (
                      <p>Seja o primeiro a curtir</p>
                    )}
                  </label>
                </div>

                <div className="div-info-share">
                  <div>
                    <p>{comments} comentários</p>
                  </div>
                  <div>
                    <p>{shares} compartilhamentos</p>
                  </div>
                </div>
              </div>

              <div className="div-btn-post-2">
                <button
                  className="btn-app"
                  onClick={() => {
                    handleChangePost(index, true);
                  }}
                >
                  <label className="lbl-like-post-1">
                    <img className="img-post-icon t16" src={imgLike_2} alt="" />{" "}
                  </label>{" "}
                  {!like ? "Curtir" : "Não Curtir"}
                </button>

                <button
                  onClick={() => {
                    handleChangePost(index, false, "comments");
                  }}
                  className="btn-app"
                >
                  <label className="lbl-like-post-1">
                    <img
                      className="img-post-icon t16"
                      src={imgComment}
                      alt=""
                    />{" "}
                  </label>{" "}
                  Comentários
                </button>
                <button
                  onClick={() => {
                    handleChangePost(index, false, "shares");
                  }}
                  className="btn-app"
                >
                  <label className="lbl-like-post-1">
                    <img className="img-post-icon t16" src={imgShare} alt="" />{" "}
                  </label>{" "}
                  Compartilhar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec-right">
        <div className="right-card-1">
          <div className="div-indicator">
            <img alt="" src={imgIndicator} /> <label>Eficiência</label>
          </div>
          <div className="div-second">
            <div className="div-chart-1">
              <div className="div-line-chart">
                <div>
                  <div>Atividades</div>
                  <div>23/106</div>
                </div>
                <div>50%</div>
              </div>

              <div>
                <div>
                  <div>Atividades</div>
                  <div>23/106</div>
                </div>
                <div>50%</div>
              </div>
            </div>

            <div className="div-chart-2">
              <div className="div-line-chart-2">
                <div>
                  <div>Atividades</div>
                  <div>23/106</div>
                </div>
                <div className="div-line-percentag">50%</div>
              </div>
            </div>

            <div className="div-square">
              {cardInfo.map(({ text, data, borderColor }, key) => (
                <div className="card-class" style={{ borderColor }} key={key}>
                  <header>{text}</header>
                  <div>
                    <ul>
                      {data.map(({ text, value }, key) => (
                        <li className="lbl-elemnt" key={key}>
                          <label>{text}</label>
                          <label>{value}</label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-card-1">
          <div className="div-indicator">
            <img alt="" src={imgCake} /> <label>Aniversário</label>
          </div>
          <div className="div-second">
            <div className="div-chart-1"></div>
            <div className="div-tex-brith-day">
              <p>Nenhum dos seus amigos comemora aniversário hoje</p>
            </div>
          </div>
        </div>

        <div className="right-card-1">
          <div className="div-indicator">
            <img alt="" src={imgPending} /> <label>Pendência</label>
          </div>
          <div className="div-second last">
            <div className="div-date-pend">Seg, 21 de Jun</div>
            <div className="div-tex-brith-day">
              <p>Você não possui nenhuma pendência para hoje</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
