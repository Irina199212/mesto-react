export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Кнопка закрытия попапа"
        ></button>
        <form className="form" action="./" method="post" name={props.name}>
          <h3 className="form__title">{props.title}</h3>
          {props.children}
          <input type="submit" className="form__button" value="Сохранить" />
        </form>
      </div>
    </div>
  );
}
