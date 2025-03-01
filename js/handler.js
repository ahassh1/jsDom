console.log('handler file added');

document.getElementById('btn-update-title')
.addEventListener('click', function () {
    // console.log('button clicked')
    const pageTitleElement = document.getElementById('page-title');
    console.log(pageTitleElement);
    pageTitleElement.innerText = "updated page title text "

    // polash
}) 