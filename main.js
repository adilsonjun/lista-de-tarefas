$(document).ready(function() {
  
    $('form').on('submit', function(e) {
        e.preventDefault();
        const NovaTarefa = $('#nome-tarefa').val();
        const addTarefa = $('<li></li>');
        $(NovaTarefa).appendTo(addTarefa);
        $(`<div class="tarefa"> ${NovaTarefa} </div>;`).appendTo(addTarefa);
        $(addTarefa).appendTo('ul');
        $('#nome-tarefa').val('');

        $('.tarefa').click(function() {
            $(this).css('text-decoration', 'line-through');

          })
    })
 
})




$(`<div class="exemplo"> ${tarefaExemplo} </div> `).appendTo(novaTarefaExemplo);
