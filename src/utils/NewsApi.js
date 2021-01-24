import DAYS from '../constants/timeConstants';

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
    const dateTo = new Intl.DateTimeFormat('en-US').format(Date.now());
    const dateFrom = new Intl.DateTimeFormat('en-US').format(Date.now() - DAYS);
    const to = `to=${dateTo}`;
    const from = `from=${dateFrom}`;
    const pageSize = 'pageSize=100'
    const sortBy = 'sortBy=popularity';
    const apiKey = 'apiKey=4763c1f24716448e9fe6bf5722f9a065';

    return fetch(`${this.baseUrl}/everything?${q}&${from}&${to}&${pageSize}&${sortBy}&${apiKey}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then(this._handleResponse);
  }

}

const newsApi = new NewsApi({
  baseUrl: 'https://nomoreparties.co/news/v2',
  // baseUrl: 'https://newsapi.org/v2',
});

export default newsApi;
