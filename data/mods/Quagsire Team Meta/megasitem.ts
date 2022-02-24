infernapetite: {
		name: "Infernapetite",
		spritenum: 625,
		megaStone: "Infernape-Mega",
		megaEvolves: "Infernape",
		itemUser: ["Infernape"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
