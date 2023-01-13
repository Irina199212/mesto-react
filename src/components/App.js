import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "../components/ImagePopup";

import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      )}

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title="Обновить аватар"
        name="profile-avatar"
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <div className="form__row">
          <input
            type="url"
            name="avatar"
            required
            className="form__text form__text_name_link"
            id="avatar-link"
            placeholder="Ссылка на аватар"
          />
          <span className="error" id="avatar-link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        name="profile-form"
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <div className="form__row">
          <input
            type="text"
            name="name"
            className="form__text form__text_name_name"
            id="profile-name"
            minLength="2"
            maxLength="40"
            required
            placeholder="Имя"
          />
          <span className="error" id="profile-name-error"></span>
        </div>
        <div className="form__row">
          <input
            type="text"
            name="post"
            className="form__text form__text_name_post"
            id="profile-post"
            placeholder="О себе"
            minLength="2"
            required
            maxLength="200"
          />
          <span className="error" id="profile-post-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title="Новое место"
        name="add-card"
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <div className="form__row">
          <input
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            className="form__text form__text_name_name"
            id="card-name"
            required
            placeholder="Название"
          />
          <span className="error" id="card-name-error"></span>
        </div>
        <div className="form__row">
          <input
            type="url"
            name="link"
            required
            className="form__text form__text_name_link"
            id="card-link"
            placeholder="Ссылка на картинку"
          />
          <span className="error" id="card-link-error"></span>
        </div>
      </PopupWithForm>
    </>
  );
}

export default App;
