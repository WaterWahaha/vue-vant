const host='http://8890.com'//访问地址
/**
  * post方法，对应post请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
  export function post(url, params) {
    return new Promise((resolve,reject) => {
    this.axios.post(url,this.$qs.stringify(params))
      .then(res => {
        resolve(res.data);
      },err => {
        reject(err)
      })
  })
}
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
    return new Promise((resolve, reject) =>{
        this.axios.get(url, {
            params: params
        })
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.data)
        })
    });
}

//export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);

export default {
 url:host
}