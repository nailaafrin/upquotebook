let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let response = await fetch(`https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`);
  console.log(response)
  let data = await response.json()
  console.log(data)

  //you forgot to call this function!
  useApiData(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  document.querySelector("#content").innerHTML += `Quote: ${data[0].excerpt.rendered}`;
  //document.querySelector("#content").innerHTML += data[0].title.rendered;
  document.querySelector("#content").innerHTML += `Quote: ${data[1].excerpt.rendered}`;
  document.querySelector("#content").innerHTML += data[1].title.rendered;
}
