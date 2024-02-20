import React, { useEffect, useState } from 'react'
import { sendReview } from '../../api/api'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

function ReviewForm() {
  const [starValue, setStarValue] = useState(1)
  const [reviewValue, setReviewValue] = useState('')
  const [isReviewSent, setReviewSent] = useState(false)
  const { user } = useSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    console.log(starValue, reviewValue)
  }, [starValue, reviewValue])

  const onFormSubmit = () => {
    const body = {
      comment: reviewValue,
      rating: starValue
    }

    sendReview('POST', `https://9.react.pages.academy/wtw/comments/${router.query.id}`, user.token, body).then((res) => {
      setReviewSent(true)
      setTimeout(() => {
        router.push(`/film/${router.query.id}`)
      }, 1000)
    }).catch((e) => {
      throw new Error(e)
    })
  }

  return (
    <div className='add-review'>
      {isReviewSent && <div style={{ padding: 10, textAlign: 'center' }}>Review sent</div>}
      <form action='#' className='add-review__form' onSubmit={(evt) => {
        evt.preventDefault()
        onFormSubmit()
      }}>
        <div className='rating'>
          <div className='rating__stars'>
            <input
              className='rating__input'
              id='star-1'
              type='radio'
              name='rating'
              defaultValue={5}
              onChange={(evt) => {
                setStarValue(evt.target.value)
              }}
            />
            <label className='rating__label' htmlFor='star-1'>
              Rating 1
            </label>
            <input
              className='rating__input'
              id='star-2'
              type='radio'
              name='rating'
              defaultValue={4}
              onChange={(evt) => {
                setStarValue(evt.target.value)
              }}
            />
            <label className='rating__label' htmlFor='star-2'>
              Rating 2
            </label>
            <input
              className='rating__input'
              id='star-3'
              type='radio'
              name='rating'
              defaultValue={3}
              onChange={(evt) => {
                setStarValue(evt.target.value)
              }}
            />
            <label className='rating__label' htmlFor='star-3'>
              Rating 3
            </label>
            <input
              className='rating__input'
              id='star-4'
              type='radio'
              name='rating'
              defaultValue={2}
              onChange={(evt) => {
                setStarValue(evt.target.value)
              }}
            />
            <label className='rating__label' htmlFor='star-4'>
              Rating 4
            </label>
            <input
              className='rating__input'
              id='star-5'
              type='radio'
              name='rating'
              defaultValue={1}
              onChange={(evt) => {
                setStarValue(evt.target.value)
              }}
            />
            <label className='rating__label' htmlFor='star-5'>
              Rating 5
            </label>
          </div>
        </div>
        <div className='add-review__text'>
      <textarea
        className='add-review__textarea'
        name='review-text'
        id='review-text'
        placeholder='Review text'
        defaultValue={''}
        onChange={(evt) => {
          setReviewValue(evt.target.value)
        }}
      />
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit'>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default ReviewForm
