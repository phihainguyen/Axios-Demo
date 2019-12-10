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

//GET Request
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
//POST Request
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
//UPDATE Request
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
function removeTodo() {
  console.log("delete");
}
function getData() {
  console.log("simultaneaous Request");
}
function customHeader() {
  console.log("custom header");
}
function errorHandling() {
  console.log("error handling");
}
function cancelToken() {
  console.log("cancel token");
}
function transform() {
  console.log("transform");
}

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
