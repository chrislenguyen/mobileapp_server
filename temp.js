const fetch = require("node-fetch");

var url =
	"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyOFq8iN8xjxMYu5lsebfdBDaJm7fRrlU";

// async function postData(url = "", data = {}) {
// 	// Default options are marked with *
// 	const response = await fetch(url, {
// 		method: "POST", // *GET, POST, PUT, DELETE, etc.
// 		mode: "cors", // no-cors, *cors, same-origin
// 		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
// 		credentials: "same-origin", // include, *same-origin, omit
// 		headers: {
// 			"Content-Type": "application/json",
// 			// 'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 		redirect: "follow", // manual, *follow, error
// 		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// 		body: JSON.stringify(data), // body data type must match "Content-Type" header
// 	});
// 	return response.json(); // parses JSON response into native JavaScript objects
// }

// postData(url, { email: "khuong@gmail.com", password: "abc123" }).then(
// 	(data) => {
// 		console.log(data); // JSON data parsed by `data.json()` call
// 	}
// );

// const body = { a: 1 };

fetch(url, {
	method: "post",
	body: JSON.stringify({ email: "khuong@gmail.com", password: "abc123" }),
	headers: { "Content-Type": "application/json" },
})
	.then((res) => res.json())
	.then((json) => console.log(json));
