/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

jQuery(function($) {

const $tweetContainer = $(".tweet-container");

const renderTweets = function(tweets) {

  $tweetContainer.empty();
  tweets.reverse();
  const $createdTweets = $(tweets.map(createTweetElement).join(" "));
  return $tweetContainer.append($createdTweets);
}

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = function(tweet) {

  const safeHTML = escape(tweet.content.text);

  const dateToday = Date.now();
  const datePosted = tweet.created_at;
  const daysAgo = Math.round((dateToday - datePosted) / 86400000);

  const markUp=
`
  <article class="tweet">
        <div class="tweet-header"> 
          <p class="user-name"><img src=${tweet.user.avatars} height="60" width="60">${tweet.user.name}</p>
          <p class="handle">${tweet.user.handle}</p></div>
          <p class="tweet-text">${safeHTML}</p>
      <div class="tweet-footer">${daysAgo} days ago</div></article> `;
      return markUp;

}

//renderTweets(tweetData);
$("#nav-down").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#img-align").offset().top
  }, 1200);
});


$(document).ready(function(){

  $('#target').on('submit', function (event){
    event.preventDefault();
    const data = $(this).serialize();
   if (data.length > 145) {
    $("#error-message").text("Message length exceeded");
   } else if (data.length < 6) {
    $("#error-message").text("Please enter Message"); 
   } else {
    
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data,
    success: (data) => {
       
        loadTweets(data);
    },
    error: (error) => {
        console.log('this request failed and this was the error', error);
    }
  });
  
  function loadTweets(data) {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    data,
    success: (data) => {
        renderTweets(data);   
    }
  })
  }
}
 });
});
});