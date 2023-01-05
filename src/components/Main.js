import { api } from "../utils/api";
import { useEffect, useState } from "react";

import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "../components/ImagePopup";
import Card from "../components/Card";

export default function Main() {
  const handleEditAvatarClick = () => {
    document
      .querySelector(".popup_profile-avatar")
      .classList.add("popup_opened");
  };
  const handleEditProfileClick = () => {
    document.querySelector(".popup_profile-form").classList.add("popup_opened");
  };
  const handleAddPlaceClick = () => {
    document.querySelector(".popup_add-card").classList.add("popup_opened");
  };

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([info, initialCards]) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <button
            className="profile__avatar"
            type="button"
            onClick={handleEditAvatarClick}
          >
            <img
              src={userAvatar}
              alt="Фото"
              className="profile__avatar-picture"
            />
          </button>
          <div className="profile__info">
            <div className="profile__block">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__button-edit"
                type="button"
                aria-label="Кнопка редактирования профиля"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            className="profile__button-add"
            type="button"
            aria-label="Кнопка добавления"
            onClick={handleAddPlaceClick}
          ></button>
        </section>
        <section className="elements" aria-label="Фото мест">
          {cards.map((card) => (
            <article className="element" key={card._id}>
              <button
                className="element__delete"
                type="button"
                aria-label="Кнопка удаления"
              ></button>
              <img src={card.link} className="element__image" alt={card.name} />
              <div className="element__body">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__likes">
                  <button
                    className="element__button"
                    type="button"
                    aria-label="Кнопка лайка"
                  ></button>
                  <div className="element__counter-like"></div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
