import React from "react";
import Link from "next/link";
import Image from "next/image";

function List({list}) {
  const isPlay = true;
  if (list.length === 0 || list === null) return 'loading';

  return (
    <div className="catalog__movies-list">
      {list.map((film, id) => {
        return (
          <article className="small-movie-card catalog__movies-card"
                   key={film.id}
            // onMouseEnter={() => {
            //   onCardMouseEnter(film);
            //   onCardMouseHover();
            // }}
            // onClick={() => onCardClick(film)}
            // onMouseLeave={() => onCardMouseLeave()}>
          >
            <div className="small-movie-card__image"
                 onClick={() => {
                   history.push(`${AppRoute.FILM}/${film.id}`);
                 }}
            >
              {/*{isPlay &&*/}
              {/*  <VideoPlayer*/}
              {/*    film={film}*/}
              {/*  />*/}
              {/*}*/}
              {/*{isPlay ||*/}
              <Image src={film.previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280"
                     height="175"/>
              {/*}*/}
            </div>
            <h3 className="small-movie-card__title" onClick={(evt) => {
              // evt.preventDefault();
              // onCardClick(film);
            }}>
              <Link href={'/'} className="small-movie-card__link">{film.name}</Link>
            </h3>
          </article>
        );
      })}
    </div>
  )
}

export default List;
