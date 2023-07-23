fetch('https://jsonplaceholder.typicode.com/posts')

.then(response => {
    return response.text()
})
.then(data => console.log(data))

.catch(error=> console.log('error'));