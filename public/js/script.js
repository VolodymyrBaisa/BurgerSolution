const submitButtonEl = $(".submit");
const inputEl = $(".input-order");
const eatBurgerButtonEl = $(".eat-icon");

(() => {
    submitButtonEl.on("click", () => {
        $.ajax({
            url: "/add",
            method: "POST",
            data: {
                burger_name: inputEl.val(),
            },
        })
            .then(() => location.reload())
            .fail((err) => console.error(err));
    });

    eatBurgerButtonEl.on("click", (e) => {
        const id = $(e.target).parents(".burger").data("index");
        if (!id) return;
        $.ajax({
            method: "PUT",
            url: "/remove/" + id,
        })
            .then(() => location.reload())
            .fail((err) => console.error(err));
    });
})();
