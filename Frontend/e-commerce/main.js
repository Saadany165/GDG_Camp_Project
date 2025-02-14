document.addEventListener('DOMContentLoaded', async function () {
    async function fetchData() {
        try {
            const response = await fetch('https://orientonline.info/api/products'); //الر
            const result = await response.json();
            const products = result.products;
            console.log(products);

            let parent = document.querySelector('.sales');

            if (!parent) {
                console.error("Element with class 'sales' not found.");
                return;
            }

            const productElements = products.map((product, index) => {
                let mainElement = document.createElement('div');
                let headingElement = document.createElement('h1');
                let paragraphElement = document.createElement('p');

                let headingText = document.createTextNode(`Product Title ${index + 1}: ${product.name}`);
                let paragraphText = document.createTextNode(product.description);

                headingElement.appendChild(headingText);
                paragraphElement.appendChild(paragraphText);

                mainElement.appendChild(headingElement);
                mainElement.appendChild(paragraphElement);

                mainElement.className = 'cart';

                return mainElement;
            });

            parent.append(...productElements);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    fetchData(); // يجب استدعاء الدالة هنا وليس داخلها
});
