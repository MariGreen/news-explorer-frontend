//key = '4763c1f24716448e9fe6bf5722f9a065';

class NewsApi {
  constructor({ baseUrl = {} }) {
    this.baseUrl = baseUrl;
    // this.apiKey = apiKey;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      console.log('Ошибка при обработке запроса');
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  // getDefaultUserInfo() {
  //   return fetch(`${this.baseUrl}/me`, {
  //     method: 'GET',
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(this._handleResponse);
  // }



  getNews(keyWord) {
    const q = `q=${keyWord}`;
    const date = 'from=2021-01-16';
    const pageSize = 'pageSize=100'
    const sortBy = 'sortBy=popularity';
    const apiKey = 'apiKey=4763c1f24716448e9fe6bf5722f9a065';

    return fetch(`${this.baseUrl}/everything?${q}&${date}&${pageSize}&${sortBy}&${apiKey}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then(this._handleResponse);
  }


  // getInitialCards() {
  //   return fetch(`${this.baseUrl}/cards`, {
  //     method: 'GET',
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(this._handleResponse);
  // }

  // getUsers() {
  //   return fetch(`${this.baseUrl}/users`, {
  //     method: 'GET',
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(this._handleResponse);
  // }

  // createCard(data) {
  //   return fetch(`${this.baseUrl}/cards`, {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: data.name,
  //       link: data.link,
  //     }),
  //   }).then(this._handleResponse);
  // }

  // editUser(data) {
  //   return fetch(`${this.baseUrl}/users/me`, {
  //     method: 'PATCH',
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: data.name,
  //       about: data.about,
  //     }),
  //   }).then(this._handleResponse);
  // }

  // changeLikeCardStatus(cardID, isLiked) {
  //   return fetch(`${this.baseUrl}/cards/${cardID}/likes`, {
  //     method: isLiked ? 'PUT' : 'DELETE',
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       'Content-Type': 'application/json',
  //     },      
  //   }).then(this._handleResponse);
  // }

  // deleteCard(cardId) {
  //   return fetch(`${this.baseUrl}/cards/${cardId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       'Content-Type': 'application/json',
  //     },      
  //   }).then(this._handleResponse);
  // }

  // deleteUser(userId) {
  //   return fetch(`${this.baseUrl}/users/${userId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       'Content-Type': 'application/json',
  //     },      
  //   }).then(this._handleResponse);
  // }

  // updateAvatar(avatar) {
  //   return fetch(`${this.baseUrl}/users/me/avatar`, {
  //     method: 'PATCH',
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       avatar: avatar,
  //     }),
  //   }).then(this._handleResponse);
  // }
}

const newsApi = new NewsApi({
  // baseUrl: 'https://api.mgreen.students.nomoreparties.space',
  // baseUrl: 'http://localhost:3001', 
  baseUrl: 'https://newsapi.org/v2',
});

export default newsApi;
