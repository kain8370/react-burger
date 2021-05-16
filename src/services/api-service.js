class ApiService {
  DATA_URL = 'https://norma.nomoreparties.space/api/ingredients/';
  ORDER_URL = 'https://norma.nomoreparties.space/api/orders';

  getData = async () => {
    try {
      const res = await fetch(this.DATA_URL);
      if (!res.ok) throw new Error();
      const data = await res.json();
      return data.data;
    } catch(err) {
      return new Error();
    }
  }

  sendOrder = async ingredients => {
    try {
      const body = this._transformData(ingredients);
      const res = await fetch(this.ORDER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body)
      })
      const data = await res.json();
      return data;
    } catch(err) {
      console.log(err);
    }
  }

  _transformData(data) {
    return {
      'ingredients': data,
    }
  }
}

export default ApiService;