//дожидаемся полной загрузки страницы
window.onload = function () {
//получаем идентификатор элемента
var a = document.getElementById('menubut');
//вешаем на него событие
    a.onclick = function() {
        var x = document.getElementById('topNav');
			if (x.className === "beforePress") {
			x.className += " responsive";
			}else{
			x.className = "beforePress";
		}
    }
}