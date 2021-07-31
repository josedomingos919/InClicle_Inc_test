import "./App.css";
import userImg from "./assets/img/jose.jpg";
import locationIcon from "./assets/icons/current-location-regular-24.png";
import localImage1 from "./assets/icons/city-solid-24.png";
import localImage2 from "./assets/icons/city-solid-27.png";

function App() {
  const user = {
    name: "kenedy Morais",
    img: userImg,
    email: "@Kenedymorais",
    skill: "Front-End Developer",
    location: "Rio Branco/Acre - Brasil",
    local: [
      {
        img: localImage1,
        text: "InCicle",
      },
      {
        img: localImage2,
        text: "Uninorte",
      },
    ],
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
                <img src={locationIcon} alt="" />
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

      <section className="sec-center">center</section>
      <section className="sec-right">right</section>
    </div>
  );
}

export default App;
