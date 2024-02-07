

var row = null;

function Submit(){
    var dataEnterd = retrieveData();
    var readData = readingDataFromLocalStorage(dataEnterd);
    if(dataEnterd == false){
        msg.innerHTML = '<h3 style="color:red;">pleas enter data</h3>';
    }
    else{
        if(row == null){
            insert(readData);
            msg.innerHTML = '<h3 style="color:green;">data inserted!</h3>';
        }
        else{
            update();
           msg.innerHTML = '<h3 style="color:yellow";>data updated</h3>';
        }
    }
    document.getElementById('form').reset();

}


function retrieveData(){
    var name1 = document.getElementById('name').value;
    var job = document.getElementById('job').value;
    var exp = document.getElementById('exp').value;

    var arr = [name1, job , exp];
    if(arr.includes('')){
        return false;
    }
    else{
        return arr;
    }

}

function readingDataFromLocalStorage(dataEnterd){
    var n = localStorage.setItem('Name', dataEnterd[0]);
    var j = localStorage.setItem('Job', dataEnterd[1]);
    var e = localStorage.setItem ('Exp', dataEnterd[2]);

    var n1 = localStorage.getItem('Name', n);
    var j1 = localStorage.getItem('Job', j);
    var e1 = localStorage.getItem('Exp', e);

    var arr = [n1,j1,e1];
    return arr;
}

function insert(readData){
    var row = table.insertRow();
     row.insertCell(0).innerHTML = readData[0];
     row.insertCell(1).innerHTML = readData[1];
     row.insertCell(2).innerHTML = readData[2];
     row.insertCell(3).innerHTML = `<button onClick = edit(this)>Edit</button>
                                    <button onClick = remove(this)>Delete</button>`;
}

function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById('name').value = row.cells[0].innerHTML;
    document.getElementById('job').value = row.cells[1].innerHTML;
    document.getElementById('exp').value = row.cells[2].innerHTML;
}

function update(){
    row.cells[0].innerHTML = document.getElementById('name').value;
    row.cells[1].innerHTML = document.getElementById('job').value;
    row.cells[2].innerHTML = document.getElementById('exp').value;
    row = null;
}
     
function remove(td){
    var ans = confirm('Are You Sure You Want To Delete This Record?');
    if(ans == true){
        row = td.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex);
    }

}

    