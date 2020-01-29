/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

jQuery(function($) {
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


const $tweetContainer = $(".tweet-container");

const renderTweets = function(tweets) {


  const $createdTweets = $(tweets.map(createTweetElement).join(" "));
  return $tweetContainer.append($createdTweets);
}

const createTweetElement = function(tweet) {

  const markup =
`
  <article class="tweet">
        <div class="tweet-header"> 
          <p class="user-name">${tweet.user.name}</p>
          <p class="handle">${tweet.user.handle}</p></div>
          <p class="tweet-text">${tweet.content.text}</p>
      <div class="tweet-footer">10 days ago</div></article> `;
      return markup;

}

renderTweets(tweetData);
});