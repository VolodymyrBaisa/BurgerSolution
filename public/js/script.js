const submitButtonEl = $(".submit");
const inputEl = $(".input-order");
const burgerDevouredEl = $(".burger-devoured");
const eatBurgerButtonEl = $(".eat-icon");

(() => {
    submitButtonEl.on("click", () => {
        $.ajax({
            url: "/add",
            method: "POST",
            data: {
                burger_name: inputEl.val(),
            },
        }).fail((err) => console.error(err));
    });

    eatBurgerButtonEl.on("click", () => {
        const id = burgerDevouredEl.data("index");
        if (!id) return;
        console.log(id);
        $.ajax({
            method: "PUT",
            url: "/remove/" + id,
        })
            .then(() => location.reload())
            .fail((err) => console.error(err));
    });
})();
