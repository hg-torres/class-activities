
document.getElementById('generate').addEventListener('click', (event)=>{
  event.preventDefault();
  axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`).then(res => {

    const quote = res.data
    //changing the html stuff
    document.getElementById('randomQuote').innerHTML = `${quote} <br><button class="btn btn-warning saveBtn">save</button>`

  })
    .catch(err => console.log(err))
})

document.getElementsByClassName('saveBtn').addEventListener('click', () => {

  let saveQuotes = JSON.parse(localStorage.getItem('randomQuoteDisplay')) || []

  console.log(document.getElementById('randomQuote').textContent)
  const record = { saveQuotes: document.getElementById('randomQuote').textContent }

  //get saved quote and push to the array of record
  saveQuotes.push(record)

  localStorage.setItem('randomQuoteDisplay', JSON.stringify(saveQuotes))
  //for every saved quote we have in the array do this
  saveQuotes.forEach(saveQuotes => {
    document.getElementById('savedQuoteDisplay').innerHTML = `${quote} <br>`

  });

})






