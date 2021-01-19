class MainApi {
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

  getArticles() {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then(this._handleResponse);
  }

  saveArticle(article) {
    const { keyword, title, description, publishedAt, source, url, urlToImage } = article;
    return fetch(`${this.baseUrl}/articles`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        source: source.name,
        keyword,
        title,
        description,
        publishedAt,
        url,
        urlToImage,
      }),
    }).then(this._handleResponse);
  }

  deleteArticle(articleId) {
    return fetch(`${this.baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then(this._handleResponse);
  }

}

const mainApi = new MainApi({
  // baseUrl: 'https://api.mgreen.students.nomoreparties.space',
  baseUrl: 'http://localhost:3001',
});

export default mainApi;
