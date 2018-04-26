$(function() {

    $("#submit_btn").click(function(){
        $.ajax({
<<<<<<< HEAD
              type: 'POST',
              url: 'https://mandrillapp.com/api/1.0/messages/send.json',
              data: {
                'key': 'FY-9JKkoVH4ZXzrXrYkAsA',
=======
              crossDomain: true,
              headers: { 'Access-Control-Allow-Origin': '*' },
              type: 'POST',
              contentType: 'application/json; charset=utf-8',
              url: 'https://api.sendgrid.com/api/mail.send.json',
              dataType: 'jsonp',
              data: {
                'key': 'MW4HnMtXSG-51CjOaExMdg',
>>>>>>> 8adbf190e10fb180e95cd840018d4d5ecb45dec4
                'message': {
                    'from_email': $("#email").val(),
                     'to': [{
                        'email': 'duytontran@hotmail.com', // please change to ur own email to test
                        'name': 'Ton Tran', // please change to ur own name to test
                        'type': 'to'
                    }],
                    'autotext': 'true',
                    'subject': 'Testing Email',
                    'html': $("#help").val()
                }
<<<<<<< HEAD
             }
        }).done(function(response) {
           console.log(response);
        });
    });
=======
              },
              //success: callBackData()
              success: function(data){
                console.log(data);
              }

        }).done(function(response) {
           console.log(response);
        });

    });

    function callBackData(data){
      //alert("Thank you. Your email has been sent successfully!!! We will reach you very soon.");
      alert(data);
    }
>>>>>>> 8adbf190e10fb180e95cd840018d4d5ecb45dec4
});

