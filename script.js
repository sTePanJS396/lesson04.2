let string;
// Объявим переменную

function isString(string) {
    let whichType = typeof string;
    if (whichType != 'string') {
        return 'Это не строка!';
    }; 
    // Проверяем, является ли string строкой

    string = string.trim();
    // console.log(string);
    // Удаляем все пробелы в начале и конце

    if (string.length >= 30) {
        string = string.slice(0, 30) + '…';
        console.log(string);
        // Используем срезы
    };


};

isString(' JavaScript - лучший язык программирования для FrontEnd разработчика  ');
