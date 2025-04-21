// Діалог з користувачем
function makeAppointment() {
    let surname, name, time, service;
    let times = ["10:00", "12:00", "14:00", "16:00"];
    let services = {
        "1": "Професійний догляд за волоссям",
        "2": "Фарбування волосся",
        "3": "Манікюр та педикюр",
        "4": "Косметологічні процедури",
        "5": "Масаж та догляд за тілом"
    };

    surname = prompt("Введіть ваше прізвище:");
    if (surname === null) return;
    while (surname.trim() === "") {
        alert("Прізвище є обов’язковим.");
        surname = prompt("Введіть ваше прізвище:");
        if (surname === null) return;
    }

    name = prompt("Введіть ваше ім’я:");
    if (name === null) return;
    while (name.trim() === "") {
        alert("Ім’я є обов’язковим.");
        name = prompt("Введіть ваше ім’я:");
        if (name === null) return;
    }

    time = prompt("Оберіть зручний для вас час: " + times.join(", "));
    if (time === null) return;
    while (!times.includes(time.trim())) {
        alert("Будь ласка, оберіть час зі списку.");
        time = prompt("Оберіть зручний для вас час: " + times.join(", "));
        if (time === null) return;
    }

    service = prompt(
        "Оберіть послугу:\n" +
        "1 — Професійний догляд за волоссям\n" +
        "2 — Фарбування волосся\n" +
        "3 — Манікюр та педикюр\n" +
        "4 — Косметологічні процедури\n" +
        "5 — Масаж та догляд за тілом"
    );
    if (service === null) return;
    while (!services[service.trim()]) {
        alert("Будь ласка, виберіть правильний номер послуги.");
        service = prompt(
            "Оберіть послугу:\n" +
            "1 — Професійний догляд за волоссям\n" +
            "2 — Фарбування волосся\n" +
            "3 — Манікюр та педикюр\n" +
            "4 — Косметологічні процедури\n" +
            "5 — Масаж та догляд за тілом"
        );
        if (service === null) return;
    }

    alert(`Дякуємо, ${name} ${surname}! Ви записані на "${services[service]}" о ${time}.`);
    alert("Ласкаво просимо на сайт 'Well beauty'!");
}
