// const url = new URL('https://api.example.com/search');

// // Append parameters easily
// url.searchParams.append('q', 'javascript');
// url.searchParams.append('limit', '5');

// console.log(url.toString()); 
// // Output: https://api.example.com/search?q=javascript&limit=5

// const response = await fetch(url);
// // Example: Sending a GET request with custom headers
// const response = await fetch('https://api.example.com/data', {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//     'User-Agent': 'MyApp/1.0'
//   }
// });

const newUrl = new URL('https://api.example.com/search')
newUrl.searchParams.append('p','Java');
newUrl.searchParams.append('limit',4);
console.log(newUrl.toString());

const newResponse = await fetch(newUrl, {
    method: 'GET',
    headers:{
        'Accept': 'application/json',
    }
});
