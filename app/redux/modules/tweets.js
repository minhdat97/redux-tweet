import { Map } from 'immutable'
import { saveTweet, fetchTweet } from 'helpers/api'
import { closeModal } from './modal'
import { addSingleUsersTweet } from './usersTweets'

const FETCHING_TWEET = 'FETCHING_TWEET'
const FETCHING_TWEET_ERROR = 'FETCHING_TWEET_ERROR'
const FETCHING_TWEET_SUCCESS = 'FETCHING_TWEET_SUCCESS'
const ADD_TWEET = 'ADD_TWEET'
const ADD_MULTIPLE_TWEETS = 'ADD_MULTIPLE_TWEETS'
const STOP_FETCHING = 'STOP_FETCHING'

function fetchingTweet () {
  return {
    type: FETCHING_TWEET
  }
}

function fetchingTweetError (error) {
  console.warn(error)
  return {
    type: FETCHING_TWEET_ERROR,
    error: 'Error fetching Tweet'
  }
}

function fetchingTweetSuccess (tweet) {
  return {
    type: FETCHING_TWEET_SUCCESS,
    tweet
  }
}

export function stopFetching () {
  return {
    type: STOP_FETCHING
  }
}

function addTweet (tweet) {
  return {
    type: ADD_TWEET,
    tweet
  }
}

export function addMultipleTweets (tweets) {
  return {
    type: ADD_MULTIPLE_TWEETS,
    tweets
  }
}

export function tweetFanout (tweet) {
  return function (dispatch, getState) {
    const uid = getState().users.authedId
    saveTweet(tweet)
      .then((tweetWithId) => {
        dispatch(addTweet(tweetWithId))
        dispatch(closeModal())
        dispatch(addSingleUsersTweet(uid, tweetWithId.tweetId))
      })
      .catch((err) => {
        console.warn('Error in tweetFanout', err)
      })
  }
}

export function fetchAndHandleTweet (tweetId) {
  return function (dispatch, getState) {
    dispatch(fetchingTweet())
    fetchTweet(tweetId)
      .then(tweet => dispatch(fetchingTweetSuccess(tweet)))
      .catch(err => dispatch(fetchingTweetError(err)))
  }
}

const initialState = Map({
  isFetching: true,
  error: ''
})

export default function tweets (state = initialState, action) {
  switch (action.type) {
    case FETCHING_TWEET :
      return state.merge({
        isFetching: true
      })
    case ADD_TWEET :
    case FETCHING_TWEET_SUCCESS :
      return state.merge({
        error: '',
        isFetching: false,
        [action.tweet.tweetId]: action.tweet
      })
    case FETCHING_TWEET_ERROR :
      return state({
        isFetching: false,
        error: action.error
      })
    case STOP_FETCHING :
      return state.merge({
        error: '',
        isFetching: false
      })
    case ADD_MULTIPLE_TWEETS :
      return state.merge(action.tweets)
    default :
      return state
  }
}
