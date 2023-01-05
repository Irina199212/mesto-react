export default function ImagePopup() {
  return (
    <div className="popup popup_image">
      <div className="popup__container popup__container_image">
        <button
          className="popup__close"
          type="button"
          aria-label="Кнопка закрытия"
        ></button>
        <figure className="popup__figure">
          <img src="./" className="popup__image" alt="..." />
          <figcaption className="popup__text">...</figcaption>
        </figure>
      </div>
    </div>
  );
}
