$('#submit').click(event =>{
  event.preventDefault()
  const userElem = $(`
         <h3>Title: ${$(`#title`).val()}</h3>
         <h4>Your Rating:${$(`#rating`).val()}</h4>
         <button class="delete" id="delete">Delete</button>
         <hr>
       `).appendTo("div");


})

$(document).click(event => {
  if($(event.target).hasClass('delete')){
   $(event.target).parent().remove()
  }
})