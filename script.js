// Make an XMLHttpRequest to the JSON data
const request = new XMLHttpRequest()
request.open('GET', 'map.json', true)

request.onload = function () {
  // Begin accessing JSON data here
  const data = JSON.parse(this.response)
}

request.send()