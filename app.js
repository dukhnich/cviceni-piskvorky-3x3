import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4' // Tento řádek vám umožňuje používat funkci findWinner od jiného programátora. Více se o zápisu s import dozvíte v pozdějších lekcích.

const getEndText = (winner) => {
	switch (winner) {
		case 'o': return `Vyhrálo kolečko!`;
		case 'x': return `Vyhrál křížek!`;
		case 'tie': return `Remíza!`;
		default: return `Hra ještě probíhá`;
	}
}

const games = document.querySelectorAll('.hra');
games.forEach(hra => {
	const policka = hra.querySelectorAll('.policko');
	const vysledek = hra.querySelector('.vysledek');
	const gameArr = Array.from(policka).map(el => {
		if (el.classList.contains('kolecko')) {
			return 'o';
		}
		if (el.classList.contains('krizek')) {
			return 'x';
		}
		return '_';
	});
	
	const winner = findWinner(gameArr);
	vysledek.textContent = getEndText(winner);
})
