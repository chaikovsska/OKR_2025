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

// // Вивід інформації про розробника
// function showDeveloperInfo(surname, name, position = "студент") {
//     alert(`Розробник сторінки:\nПрізвище: ${surname}\nІм’я: ${name}\nПосада: ${position}`);
// }
// showDeveloperInfo("Чайковська", "Софія");

// Порівняння двох рядків і виведення більшого
function compareStrings() {
    let str1 = prompt("Введіть перший рядок:");
    let str2 = prompt("Введіть другий рядок:");
    if (str1 === null || str2 === null) return;

    if (str1.length > str2.length) {
        alert("Перший рядок довший:\n" + str1);
    } else if (str2.length > str1.length) {
        alert("Другий рядок довший:\n" + str2);
    } else {
        alert("Рядки однакової довжини:\n" + str1 + " | " + str2);
    }
}

// // Зміна фону на 30 секунд
// document.body.style.backgroundColor = "#d798ff";
// setTimeout(() => {
//     document.body.style.backgroundColor = "";
// }, 30000);

// // Перенаправлення на іншу сторінку через 10 секунд
// setTimeout(() => {
//     location.href = "https://gbar.com.ua/";
// }, 10000);

// // Додавання символу до заголовка через getElementById
// let title = document.getElementById("main-title");
// title.innerHTML += " 🌸";

// // Зміна кольору всіх посилань через querySelectorAll
// let links = document.querySelectorAll("a");
// links.forEach(link => {
//     link.style.color = "blue";
// });

// // Отримання та порівняння властивостей DOM-вузла
// let saleTitle = document.querySelector(".section-title");
// let inner = saleTitle.innerHTML;
// let outer = saleTitle.outerHTML;
// let texts = saleTitle.textContent;
// let nodeVal = saleTitle.firstChild.nodeValue;

// alert(
//     "Властивості DOM-вузла:\n\n" +
//     "innerHTML:\n" + inner + "\n\n" +
//     "outerHTML:\n" + outer + "\n\n" +
//     "textContent:\n" + texts + "\n\n" +
//     "nodeValue (перший дочірній вузол):\n" + nodeVal
// );

// // document.write
// document.write("<p><b>Акція діє до кінця тижня!</b></p>");

// // createElement + createTextNode + append
// let newBlock = document.createElement("div");
// let newText = document.createTextNode("💅 Нова процедура — догляд за руками!");
// newBlock.appendChild(newText);
// document.body.append(newBlock);

// // remove
// setTimeout(() => {
//     newBlock.remove();
// }, 10000); // видалимо блок через 10 секунд

// // prepend
// document.body.prepend(document.createElement("hr"));

// // replaceWith (заміна акційного блоку)
// let saleSection = document.querySelector(".sale-section");
// let newElem = document.createElement("div");
// newElem.innerHTML = "<h2>✨ Нова знижка на масаж!</h2>";
// saleSection.replaceWith(newElem);
