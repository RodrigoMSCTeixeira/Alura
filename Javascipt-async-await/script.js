const url = 'https://jsonplaceholder.typicode.com/todos/5'

const xhr = new XMLHttpRequest()

xhr.open("GET", url)

xhr.timeout = 10000

xhr.responseType = 'json'

xhr.send()

xhr.onload = function () {
  if (xhr.status != 200) {
    console.error(`Error ${xhr.status}: ${xhr.statusText}`)
  } else {
    console.log(xhr.response)
    console.info(`Success, got ${xhr.response.length} bytes`)
  }
}

xhr.onprogress = function (event) {
  console.log(event)
  if (event.lengthComputable) {
    console.info(`Received ${event.loaded} of ${event.total} bytes`)
  } else {
    console.info(`Received ${event.loaded} bytes`)
  }
}

xhr.onerror = function () {
  console.error("Resquest Failed")
}