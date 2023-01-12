export default function ImagePopup(props) {
  return (
    <div className="popup popup_image popup_opened">
      <div className="popup__container popup__container_image">
        <button
          className="popup__close"
          type="button"
          aria-label="Кнопка закрытия"
          onClick={props.onClose}
        ></button>
        <figure className="popup__figure">
          <img
            src={props.card.link}
            className="popup__image"
            alt={props.card.name}
          />
          <figcaption className="popup__text">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}
