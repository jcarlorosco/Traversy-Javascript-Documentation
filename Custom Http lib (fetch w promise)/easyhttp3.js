/**
 *   EasyHTTP Library
 *   Library for making HTTP Request
 *
 * @version 3.0.0
 * @author Carlo Rosco
 * @license MIT
 *
 **/

class EasyHTTP {
  //Make http get request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
  //Make Http post Request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //Make http put Request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //Make an http DELETE request
  async delete(url) {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    const resData = await "Resource deleted..";
    return resData;
  }
}
