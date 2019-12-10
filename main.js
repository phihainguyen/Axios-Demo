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
  axios({
    method: "get",
    url: "http://jsonplaceholder.typicode.com/todos"
  })
    .then(res => {
      showOutput(res);
      const datas = res.data;
      datas.forEach(data => {
        console.log(data);
      });
    })
    .catch(err => {
      console.log(err);
    });
}
//POST Request
function postTodo() {
  console.log("POST");
}
//UPDATE Request
function updateTodo() {
  console.log("update");
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
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}
