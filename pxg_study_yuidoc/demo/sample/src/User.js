/**
* Userを管理するクラス
*
* @class User
* @constructor
*/
function User() {
}

/**
* データを設定したとき発火するイベント
*
*     var newUser = new User();
*
*     newUser.on('change', function(user) {
*       // user == newUser
*     });
*
*     // fire event
*     user.set('name', 'hokamura');
*
* @event change
* @param user {user} 変更されたユーザーモデル
*/

/**
* 名前のデータを文字列で返す
* 
* @method getName
* @return {String} 名前の文字列
**/
User.prototype.getName = function () {
};


/**
* 条件からユーザーを探す
*
* ### 名前から探す場合
*
*     var users = User.find({
*       name: 'hokamura'
*     });
*
* ### 名前と年齢から探す場合
*
* 条件を二つ指定するとand検索になる
*
*     var users = User.find({
*       name: 'hokamura',
*       age: 20
*     });
*
* ### limitの指定
*
* オプションでlimitを指定することで結果の件数の上限を指定する
*
*     var users = User.find({
*       name: 'hokamura'
*     }, {
*       limit: 10
*     });
* 
* @method find
* @static
* @param cond {Object} 検索条件
* @param cond.name {String} 名前から探す場合に指定する
* @param cond.email {String} メールアドレスから探す場合に指定する
* @param cond.age {Number} 年齢から探す場合に指定する
* @param [option] {Object} オプション
* @param [option.limit] {Number} 結果件数の上限数
* @return {Array} 条件にマッチしたユーザーのリスト
**/
User.find = function(cond, option) {
};
