"use strict";
import Sort from './sort.js';

document.addEventListener('DOMContentLoaded', () => {
   
    document.addEventListener('click', function(e) {

        e = e || window.e;
        let target = e.target || e.srcElement;

        if (e.which !== 1) return;

        while (target !== this) {

            if (target.dataset.action) {

            	let sort = new Sort;

                let table = document.getElementById('table');
                let thead = table.tHead;
                let tbody = table.getElementsByTagName('tbody')[0];
                let th = thead.querySelectorAll("th");

                let rows = [].slice.call(tbody.rows);

                if (target.getAttribute('data-action') === 'default' || target.getAttribute('data-action') === 'down') {

                	[].forEach.call(th, (item) => {

                		if (item.dataset.action) item.setAttribute("data-action","default")

                	});

                    rows.sort((rowA, rowB) => {

                        return rowA.cells[target.cellIndex].innerHTML - rowB.cells[target.cellIndex].innerHTML;

                    });
                    
                    target.setAttribute('data-action', 'up');
                
                } else if (target.getAttribute('data-action') === 'up') {

                	[].forEach.call(th, (item) => {

                		if (item.dataset.action) item.setAttribute("data-action","default")

                	});

                    rows.reverse();
                    
                    target.setAttribute('data-action', 'down');

                }

                table.removeChild(tbody); 

                for (let i = 0; i < rows.length; i++) {

                    tbody.appendChild(rows[i]);
                
                }

                table.appendChild(tbody);

            }

            target = target.parentNode;

        }

    }, true);    

});