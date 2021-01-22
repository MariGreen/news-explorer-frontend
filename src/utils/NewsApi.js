class NewsApi {
  constructor({ baseUrl = {} }) {
    this.baseUrl = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      console.log('Ошибка при обработке запроса');
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getNews(keyWord) {
    const q = `q=${keyWord}`;
    const DAYS = 7 * 24 * 60 * 60 * 1000;
    const dateTo = new Intl.DateTimeFormat('en-US').format(Date.now());
    const dateFrom = new Intl.DateTimeFormat('en-US').format(Date.now() - DAYS);
    const to = `to=${dateTo}`;
    const from = `from=${dateFrom}`;
    const pageSize = 'pageSize=100'
    const sortBy = 'sortBy=popularity';
    const apiKey = 'apiKey=4763c1f24716448e9fe6bf5722f9a065';

    console.log(from);
    console.log(to);

    return fetch(`${this.baseUrl}/everything?${q}&${from}&${to}&${pageSize}&${sortBy}&${apiKey}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then(this._handleResponse);
  }

}

const newsApi = new NewsApi({
  // baseUrl: 'https://api.mgreen.students.nomoreparties.space',
  // baseUrl: 'http://localhost:3001', 
  baseUrl: 'https://newsapi.org/v2',
});

export default newsApi;
