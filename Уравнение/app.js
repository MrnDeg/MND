window.onload = function() { // тогда скрипт будет выполняться после загрузки всей страницы

	var a = prompt("Введите коэффицент а", ""); // окно с текстом "Введите коэффицент а" и соответствующее поле для ввода
	var b = prompt("Введите коэффицент b", "");
	var c = prompt("Введите коэффицент c", "");
	korny = {};

	if(a == 0 && b == 0 && c == 0) {
		document.write("Любые числа"); // Вывод на экран
	}

	if (a != 0 && b != 0 && c != 0) {
		var d = b * b - 4 * a * c;

		if (d > 0) {
			alert("Дискриминант больше нуля (два корня)."); // выводим сообщение на экран с кнопкой "ок"
			var x1 = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
			var x2 = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
			korny.x1 = x1;
			korny.x2 = x2;
			//document.write("x1 = ", x1); // надпись х1= и вычисленное значение х1
			//document.write ("<br \/>"); // перевод на другую строку
			//document.write("x2 = ", x2);
		} else if (d == 0) {
			var x1 = -b / ( 2 * a );
			korny.x1 = x1;
			//document.write("Дискриминант равен нулю (два одинаковых корня).");
			//document.write("x1, x2 = ", x1); // выводим первый из одинаковых
		} else if (d < 0) {
			alert("Дискриминант отрицательный (комплексные корни)"); // формула (-b+-i*sqrt(-D))/2a
			korny.x1 = "(" + -b + " + " + "√( " + -d + " )i) / " + 2 * a;
			korny.x2 = "(" + -b + " - " + "√( " + -d + " )i) / " + 2 * a;
			//document.write("x1 = ");
			//document.write("(", -b, "+", "√(", - d, ")","i", ")", "/", 2 * a); // через запятую последовательно выводим символы
			//document.write ("<br \/>"); // новая строка
			//document.write("x2 = ");
			//document.write("(", -b, "-", "√(", - d, ")","i", ")", "/", 2 * a);
		}
	} else if (a == 0 && b != 0 && c != 0) {
		var x = -c / b;
		korny.x1 = x;
		//document.write("x = ",x);
	} else if (a != 0 && b == 0 && c != 0) {
		if (c < 0) {
			var x = -c/a;
			x = Math.sqrt(x);
			korny.x1 = x;
			//document.write("x = ",x);
		} else if (c > 0) {
			korny.x1 = "√" + -c/a;
			//document.write("x = ", "√", -c/a);
		}
	} else if (a == 0 && b == 0 && c != 0){
		korny.x1 = "Циферка не равна нулю :(";
		//document.write("Циферка не равна нулю :(");
	}

	
	let answers = document.getElementById('result-field');
	answers.insertAdjacentHTML('beforeend', '<p> x1 = ' + korny.x1 + '</p>');
	if (korny.x2)
		answers.insertAdjacentHTML('beforeend', '<p> x2 = ' + korny.x2 + '</p>');
}