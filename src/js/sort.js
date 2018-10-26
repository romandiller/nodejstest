'use strict';

export default class Sort {

	constructor() {

	}

	up(array, collNumber) {

		array.sort((rowA, rowB) => {

            return rowA.cells[collNumber].innerHTML - rowB.cells[collNumber].innerHTML;

        });

        return array;

	}

}
