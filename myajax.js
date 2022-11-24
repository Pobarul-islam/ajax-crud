$(document).ready(function () {

    // Ajax code for insert

    $('#btnadd').click(function (e) {
        e.preventDefault();
        // console.log('button add clicked worked')
        let id = $('#stid').val();
        let nm = $('#nameid').val();
        let em = $('#emailid').val();
        let ps = $('#passwordid').val();

        let mydata = {id: id,name: nm,email: em, password: ps};
	
        $.ajax({
            url: 'insert.php',
            method: 'post',
            data: mydata,
            success: function (data) {
                //console.log(data)
               $('#msg').html(data);
				
            }

        })
        $('#myform')[0].reset();
		$('#stid').val('');
		$('#nameid').focus();
       show_Data();



    })


    // Ajax code for read data

    function show_Data() {
        let output = '';
        $.ajax({
            url: 'view.php',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                //  console.log(data[6].password);

                x = data;
                for (i = 0; i < x.length; i++) {
                    output +=
                        "<tr> <td>" + x[i].id + "</td> <td>" + x[i].name + "</td> <td>" + x[i].email + "</td> <td>" + x[i].password + "</td> <td><button class='btn btn-warning' id='btnedit' data-side=" + x[i].id + ">Edit</button> <button class='btn btn-danger' id='btndel' data-side=" + x[i].id + ">Delete</button></td></tr>"
                }
                $('#tbody').html(output);
            }
        })
    }

    show_Data();


    //    ajax code for delete data

    $('#tbody').on("click", "#btndel", function () {
        console.log("btn delete for clicked");
        let id = $(this).attr('data-side');
        console.log(id);

        let mydata = {
            id: id
        };

        mythis = this;
        $.ajax({
            url: 'delete.php',
            method: 'post',
            data: mydata,
            success: function (data) {
                console.log(data);
                $('#msg').html(data);
                $(mythis).closest('tr').fadeOut(500);
            }
        })

    })


      // ajax code for edited
    
     $('#tbody').on("click", "#btnedit", function () {
        // console.log("edit btn");
         let id = $(this).attr('data-side');
         console.log(id); 
         mydata= {id:id};
        
         $.ajax({
             url:'edit.php',
             method:'post',
              dataType:'json',
             data:mydata,
             success:function(data){
               //console.log(data);
                 x = data;
                 $('#stid').val(x.id);
                 $('#nameid').val(x.name);
                  $('#emailid').val(x.email);
                  $('#passwordid').val(x.password);
                 
             }
         })
     })
	 
	 

})



	 
	 function myfun1(){
	let given = $('#mytxt').val();
	mydata = {name: given};
	$.ajax({
		url: 'search.php',
		method: 'post',
		data: 'mydata',
		dataType: 'json',
		success:function(data){
			console.log(data)
		}
	})
}



