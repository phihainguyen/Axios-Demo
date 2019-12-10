//event listeners
document.getElementById("get").addEventListener("click", getTodo);
document.getElementById("post").addEventListener("click", postTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("header").addEventListener("click", customHeader);
document.getElementById(error).addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);

//GET Request
function getTodo() {
  console.log("GET");
}
function postTodo() {
  console.log("POST");
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
