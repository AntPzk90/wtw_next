import React from 'react'

function InfoReviews({ comments }) {

  return (
    <div className='movie-card__reviews movie-card__row'>
      <div className='movie-card__reviews-col'>
        {comments.map((comment) => (
          <div className='review' key={comment.id}>
            <blockquote className='review__quote'>
              <p className='review__text'>
                {comment.comment}
              </p>
              <footer className='review__details'>
                <cite className='review__author'>{comment.user.name}</cite>
                <time className='review__date' dateTime='2016-12-24'>
                  {new Date(comment.date).toDateString()}
                </time>
              </footer>
            </blockquote>
            <div className='review__rating'>{comment.rating}</div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default InfoReviews
