//event listeners
document.getElementById("get").addEventListener("click", getTodo);
document.getElementById("post").addEventListener("click", postTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("header").addEventListener("click", customHeader);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
document.getElementById("transform").addEventListener("click", transform);

//==========AXIOS INSTANCES==========//
//allows us to custom such as creating a baseURL which allows us to create the base route and when it comes to adding prameter we are able to append that on
// const axiosInstance = axios.create({
//   baseURL: "http://jsonplaceholder.typicode.com"
// });
// axiosInstance.get("/comments").then(res => showOutput(res));

//===========AXIOS GLOBAL==========//

//bying having global it makes it convenient when you have many protected routes for auth, where it would require the token example of tokens can be found at jwt.io
//tokens would be passed through the headers
//now with this in the global we will see this auth token in the config

axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

//========GET Request==========//
function getTodo() {
  // axios({
  //   method: "get",
  //   url: "http://jsonplaceholder.typicode.com/todos",
  //   params: { _limit: 10 }
  // })
  //   .then(res => {
  //     showOutput(res);
  //     const datas = res.data;
  //     // datas.forEach(data => {
  //     //   console.log(data);
  //     // });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  //ALTERNATIVE METHOD of GET request and if we look at the URL/the route we see ?_limit=5 which is the param another way to do that is outside of the URL we can "http://jsonplaceholder.typicode.com/todos", {params:{_limits: 5}}
  axios
    .get("http://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

//============POST Request==========//
function postTodo() {
  console.log("POST");
  // axios({
  //   method: "post",
  //   url: "http://jsonplaceholder.typicode.com/todos",
  //   data: {
  //     title: "New Todo",
  //     completed: false
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.log(err));
  axios
    .post("http://jsonplaceholder.typicode.com/todos", {
      title: "New Todo",
      completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

//=============UPDATE Request==========//
//updating request can be done with PUT or PATCH method
//put will completely replace it meaning it will get rid of the current id and replace it with the new, while patch we just modify that data info but keep its ID
//but with any update request we must check the API on how to write the url to update the specific data we want to change, in this case we must append the /1 to change the data with the id:1 etc
function updateTodo() {
  console.log("update");
  // axios({
  //   method: "put",
  //   url: "http://jsonplaceholder.typicode.com/todos/1",
  //   data: {
  //     title: "Updated Todo",
  //     completed: true
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.log(err));

  axios
    .patch("http://jsonplaceholder.typicode.com/todos/1", {
      title: "Updated Todo",
      completed: true
    })
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

//============DELETE Request==========//
//with this method we wont need to pass any data since we are deleting the specific info we want in this case we pass the param of the id:1
function removeTodo() {
  console.log("delete");
  axios
    .delete("http://jsonplaceholder.typicode.com/todos/1")
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

//=============Simulataneous Requests==========//
//this will allow us to make multiple request of different type and handle it in one call through the .all()
//this method will take in an array of the methods we want to execute
function getData() {
  console.log("simultaneaous Request");
  axios
    .all([
      axios.get("http://jsonplaceholder.typicode.com/todos?_limit=10"),
      axios.get("http://jsonplaceholder.typicode.com/posts?_limit=10")
    ])
    .then(
      // res => {
      // console.log(res[0]);
      // console.log(res[1]);
      // showOutput(res[1]);
      //rather then the above method we can use the axios spread()
      axios.spread((todos, posts) => showOutput(todos))
    )
    .catch(err => console.log(err));
}

//===============CUSTOM HEADER==========//
//very important especially for authentications such as login where u give back a token which you would send in the header as a config
//looking below for our post request we now have 3 parameters the url, data we want to post, and the config
//the token is then passed to ur server side which allows u to do whats necessary ex: login auth
function customHeader() {
  console.log("custom header");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "sometoken"
    }
  };
  axios
    .post(
      "http://jsonplaceholder.typicode.com/todos",
      {
        title: "New Todo",
        completed: false
      },
      config
    )
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

//=========ERROR HANDLING==========//
function errorHandling() {
  console.log("error handling");
  axios
    .get("http://jsonplaceholder.typicode.com/todosssss", {
      validateStatus: function(status) {
        return status < 500;
        //reject status if only status is greater than or equal to 500
        //in a way this allows it to run but since its still an error it will give us 404 in the status, but as u can see no data has been returned
      }
    })
    .then(res => showOutput(res))
    .catch(err => {
      if (err.response) {
        //this error.response means the server didnt respond with the 200 status, which is the success range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        //means request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

//============CANCEL Request==========//
function cancelToken() {
  console.log("cancel token");
  const source = axios.CancelToken.source();
  axios
    .get("http://jsonplaceholder.typicode.com/todos", {
      cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log("request canceled", thrown.message);
      }
    });
  if (true) {
    source.cancel("request canceled");
  }
}

//============TRANSFORM method==========//
function transform() {
  console.log("transform");
  const option = {
    method: "post",
    url: "http://jsonplaceholder.typicode.com/todos",
    data: {
      title: "hello world"
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };
  axios(option).then(res => showOutput(res));
}

//==========Intercepting Requests and Response==========//
// basically a way for us to log the requests as its being made
axios.interceptors.request.use(
  config => {
    console.log(
      `${config.method.toUpperCase()} request was sent to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//=========================================================//
// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}
