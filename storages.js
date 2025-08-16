const addtolocalstorges = () =>{
   const idInput = document.getElementById('storages_id')
     const id = idInput.value ;
     const valueInput = document.getElementById('storages_value');
     const value = valueInput.value;

     localStorage.setItem(id,value);
     idInput.value='';
     valueInput.value='';
}