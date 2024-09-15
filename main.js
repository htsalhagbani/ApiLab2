let url='https://rickandmortyapi.com/api/character';
let container=document.getElementById('container');


fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        data.results.map(item=>{

            let itemBox = document.createElement('div');
            itemBox.className = 'itemBox';

            console.log(item.name);
            
           let header= document.createElement('h1');
           header.textContent=item.name;
           itemBox.appendChild(header);
           header.className='header';

           let image= document.createElement('img');
           image.src=item.image;
           itemBox.appendChild(image);
           image.className='img';

           container.appendChild(itemBox);

        })
        
    });