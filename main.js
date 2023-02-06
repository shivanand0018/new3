var form=document.getElementById('addForm')
var item=document.getElementById('items')
var filter=document.getElementById('filter')

form.addEventListener('submit',addItem);
item.addEventListener('click',removeItem)
filter.addEventListener('keyup', filterList);

function addItem(e)
{
    e.preventDefault();

    var newItem=(document.getElementById('item').value).concat(document.getElementById('item2').value)
    console.log(newItem)
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    item.appendChild(li);

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    
    var editBtn=document.createElement('edit');
    editBtn.className='btn btn-info edit';
    editBtn.appendChild(document.createTextNode('edit'))
    li.appendChild(editBtn);
    li.appendChild(deleteBtn)
    item.appendChild(li);
}

function removeItem(e)
{
    console.log(e.target.parentElement)
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            item.removeChild(li);
         }
    }
}



function filterList(e)
{
    var text=e.target.value.toLowerCase();
    var items=item.getElementsByTagName('li')

    Array.from(items).forEach(function(itemList){
        var itemName=itemList.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            itemList.style.display = 'block';
          } else {
            itemList.style.display = 'none';
          }
    })
}
