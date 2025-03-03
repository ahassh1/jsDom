console.log('handler file added');

        document.getElementById('btn-update-title')
        .addEventListener('click', function () {
            // console.log('button clicked')
            const pageTitleElement = document.getElementById('page-title');
            console.log(pageTitleElement);
            pageTitleElement.innerText = "updated page title text "

        }) 
        

        // set event listener 
        document.getElementById('btn-update') 
        .addEventListener('click', function(){
             console.log('update button clicked');
          //    get the text from the input field 
          const nameInput = document.getElementById('input-name');
          console.log(nameInput)
              const name = nameInput.value;
              console.log('name', name)
              // set the name 
              const nameP = document.getElementById('name')
              nameP.innerText = name; 
        })