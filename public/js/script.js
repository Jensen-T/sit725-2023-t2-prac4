const addButtons = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align" style="padding: 5px">'+
        '<a class="waves-effect waves-light btn-'+item.size+'">'+ //'small' or 'large' is inputted in item.size
        '<i class ="material-icons '+item.direction+'">cloud</i>'+ //'left' or 'right' is inputted in item.direction
        item.title+'</a></div>'; //text on button is inputted in item.title
        $("#card-section").append(itemToAppend)
    });
}

const formSubmitted = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.size = $('#size').val();
    formData.direction = $('#direction').val();

    console.log(formData);
    postButton(formData);
}

function postButton(button){
    $.ajax({
        url:'/api/button',
        type:'POST',
        data:button,
        success: (result)=>{
            if (result.statusCode === 201) {
                alert('button post successful');
            }
        }
    });
}

function getAllButtons(){
    $.get('/api/button', (response)=>{
        // response's data is in array format, so we can use it
        if (response.statusCode === 200) {
            addButtons(response.data);
        }
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSubmitted();
    });
    $('.modal').modal();
    getAllButtons();
});