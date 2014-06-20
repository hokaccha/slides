function fetchUser(userId, onSuccess, onError) {
  var query = { user_id: userId };

  $.ajax({
    method: 'GET',
    url: '/api/users',
    data: query,
    success: onSuccess,
    error: onError
  });
}
