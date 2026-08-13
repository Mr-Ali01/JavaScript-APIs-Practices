const rawResponse = '{"status": 200, "data": {"title": "Mastering APIs", "views": 1500}}';
let jsObject = JSON.parse(rawResponse)
console.log(jsObject);
console.log(jsObject.data.views);

