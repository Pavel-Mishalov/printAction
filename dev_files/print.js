/*
 * Äàííàÿ ôóíêöèÿ ïðèíèìàåò äâà ïàðàìåòðà
 * idPrint - èäåíòèôèêàòîð ýëåìåíòà, êîòîðûé ìû æåëàåì ðàñïå÷àòàòü
 * newPage - èäåíòèôèêàòîð ýëåìåíòà, êîòîðûé ïðè ïå÷àòè áóäåò íà÷èíàòüñÿ ñ íîâîé ñòðàíèöû
 */

function CallPrint(idPrint, newPage) {

	/*
	 *Áåðåì ýëåìåíò äëÿ ïå÷àòè
	 */
	var prtContent = document.getElementById(idPrint);

	/*
	 *Ñîçäàåì íîâîå îêíî ñ òåêóùèì äîêóìåíòîì
	 */

	var WinPrint = window.open('#',
								'',
								'left=50,top=50,width=800,height =640,toolbar=0,scrollbars=1,status=0'
								);

	/*
	 *Ôóíêöèÿ ñðîáàòûâàþùàÿ ïðè çàãðóçêå ñîçäàíîãî îêíà
	 */

	WinPrint.onload = function() {

		/*
		 *Óäàëÿåì âñå ñîäåðæèìîå òåëà äîêóìåíòà
		 */

		WinPrint.$('body *').detach();

		/*
		 *Ñîçäàåì íîâóþ êíîïêó äëÿ çàêðûòèÿ îêíà
		 */

		var closeWin = document.createElement("button");
		closeWin.setAttribute("id", "closeWin");
		closeWin.setAttribute("onClick", "javascript:CallCloseWin()");

		WinPrint.document.body.appendChild(closeWin);

		/*
		 *Ñîçäàåì íîâóþ êíîïêó äëÿ ïå÷àòè äîêóìåíòà
		 */

		var startPrint = document.createElement("button");
		startPrint.setAttribute("id", "startPrint");
		startPrint.setAttribute("onClick", "javascript:CallStartPrint()");

		WinPrint.document.body.appendChild(startPrint);

		/*
		 *Ñîçäàåì íîâûé áëîê è âñòàâëÿåì â íåãî ýëåìåíò äëÿ ïå÷àòè
		 */

		var print = document.createElement("div");
		print.className = "contentpane";
		print.setAttribute("id", "print");
		print.appendChild(prtContent.cloneNode(true));

		WinPrint.document.body.appendChild(print);

		/*
		 *Äîáàâëÿåì â ýëåìåíò íîâûé êëàññ ñî ñòèëÿìè äëÿ ðàçðûâà ñòðîíèö
		 */

		WinPrint.document.getElementById(newPage).setAttribute('class', 'nextpage');

		/*
		 * Äîáàâëÿåì ñòèëè, êîòîðûå ñðàáîòàþò òîëüêî âî âíîâü ñîçäàíîì îêíå
		 */

		WinPrint.$('#npa-text').css({ 'height' : '100%', 'overflow-y' : 'visible' });

		/*
		 * Çàäàåì ôîêóñ íà ñîçäàíîì îêíå
		 */

		WinPrint.focus();
		}
}

/*
 * Ôóíêöèÿ çàêðûòèÿ îêíà
 */

function CallCloseWin(){
	window.close();
}

/*
 * Ôóíêöèÿ ïå÷àòè äîêóìåíòà
 */

function CallStartPrint(){
	window.print();
}
