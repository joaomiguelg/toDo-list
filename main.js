$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const newTask = $('#new-task').val();
        const newIten = $('<li></li>');

        $(`<p style="cursor: pointer" class="new-task">${newTask}</p>`).appendTo(newIten);
        $(newIten).appendTo('ul');
        $('#new-task').val('');

        $('.new-task').on('click', function(){
            this.style.textDecoration = 'line-through'

        })

        


    })

    


})


























