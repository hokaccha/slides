function fetchUser(userId, onSuccess, onError) {
  var query = { user_id: userId };

  $.get('/api/users', query).then(onSuccess, onError);
}
