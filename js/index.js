let count = 0;

function watchForm() {
    $('#include').on('submit', function(event) {
        event.preventDefault();
        count += 1;
        $('#list').append(`<li class="listedItem"><div class="new">
                           <div class="item">` + $("#items").val() + `</div>
                           <div class="btns"><button type="button" id="check">check</button> <button type="button" id="delete">delete</button></div>
                           </div></li>`);
        $('#items').val('');
    });

    $('#list').on('click', '.btns > #delete', function(element) {
        event.preventDefault();
        $(this).parent().parent().parent().remove();
    });

    $('#list').on('click', '.btns > #check', function(element) {
        event.preventDefault();

        if ($(this).parent().parent().children('.item').css("text-decoration") == "none solid rgb(0, 0, 0)") {
            $(this).parent().parent().children('.item').css("text-decoration", "line-through");
        } else {
            $(this).parent().parent().children('.item').css("text-decoration", "none");
        }
    });
}

watchForm();