class Api {
  constructor({ baseUrl = {} }) {
    this.baseUrl = baseUrl;
    // this.headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      console.log('Ошибка при обработке запроса');
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getDefaultUserInfo() {
    return fetch(`${this.baseUrl}/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then(this._handleResponse);
  }

  createCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._handleResponse);
  }

  // changeLikeCardStatus(cardID, isLiked) {
  //   return fetch(`${this.baseUrl}/cards/${cardID}/likes`, {
  //     method: isLiked ? 'PUT' : 'DELETE',
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
  //       'Content-Type': 'application/json',
  //     },      
  //   }).then(this._handleResponse);
  // }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then(this._handleResponse);
  }

}

const api = new Api({
  // baseUrl: 'https://api.mgreen.students.nomoreparties.space',
  baseUrl: 'http://localhost:3001',
});

export default api;
