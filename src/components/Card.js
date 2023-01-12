export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <article className="element">
      <button
        className="element__delete"
        type="button"
        aria-label="Кнопка удаления"
      ></button>
      <img
        src={card.link}
        className="element__image"
        alt={card.name}
        onClick={handleClick}
      />
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
  );
}
