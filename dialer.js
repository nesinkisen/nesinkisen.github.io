function uploadContacts(file) 
            {
                var data = new FormData();
                data.append('id', "Mert_Test2_csv");
                data.append('file', file);
                data.append('fileType', 'contactlist');
                data.append('contact-id-name', 'inin-outbound-id');

                $.ajax({
                    url: 'https://apps.mypurecloud.ie/uploads/v2/contactlist',
                    type: 'POST',
                    headers: 
                    {
                        Authorization: 'bearer ' + "P89IrEtCQjwyHN1cV5jKXhADo5-yhSQFA20IttWn8rOGVeGOOtiqzZbxBwdxviPux6wSUYXNBKZGUkDiVRacUA"
                    },
                    data: data,
                    processData: false,
                    contentType: false,

                    success:function(dat2)
                    {
                        if(dat2==1) alert("Successful");
                        else alert("Unable to Upload");
                    }                    
                });
            }

            function uploadfile()
            {
                var filename = $('#filename').val();                    //To save file with this name
                var file_data = $('.fileToUpload').prop('files')[0];    //Fetch the file
                var form_data = new FormData();
                form_data.append('id', "58374fc5-d416-4de6-a19a-48e31d8939f7");
                form_data.append('file', file_data);
                form_data.append('fileType', 'contactlist');
                form_data.append('contact-id-name', 'Contact ID');
                //Ajax to send file to upload
                $.ajax({
                    url: 'https://apps.mypurecloud.ie/uploads/v2/contactlist',
                    type: 'POST',
                    headers: 
                    {
                        Authorization: 'bearer ' + "6oez6ZgpfXtoZroptySaXkwHWcoSlgI8HQNQkd7g-IVE1BW9nqRYa8HTEoHuy59r19lwYp9OWqfxsqpw39zUIQ"
                    },
                    data: form_data,
                    processData: false,
                    contentType: false,

                    success:function(dat2)
                    {
                        alert("Successful");
                    },
                    error:function(dat3)
                    {
                        alert(dat3);
                    } 
                });
            }   

            function uploadContacts2(file) 
            {
                const contactListId = $('#contactLists').find(':selected').val();
                console.log('contactListId: ' + contactListId);

                // Build form data object (POST request body)
                const data = new FormData();
                data.append('id', '58374fc5-d416-4de6-a19a-48e31d8939f7');
                data.append('file', file);
                data.append('fileType', 'contactlist');
                data.append('contact-id-name', 'inin-outbound-id');

                // Build request
                const request = {
                    url: 'https://apps.mypurecloud.ie/uploads/v2/contactlist',
                    headers: {
                        Authorization: 'bearer ' + "6oez6ZgpfXtoZroptySaXkwHWcoSlgI8HQNQkd7g-IVE1BW9nqRYa8HTEoHuy59r19lwYp9OWqfxsqpw39zUIQ"
                    },
                    data: data,
                    processData: false,
                    contentType: false
                };

                console.log(data);

                // Upload contact list
                $.post(request)
                    .then((data) => {
                        console.log('UPLOAD SUCCESS');
                        console.log(data);

                        // Show success
                        //$('#upload-result').html($('<div>').addClass('alert alert-success').text('File uploaded successfully'));
                    })
                    .catch((err) => {
                        let message = $('<span>').text('File uploaded failed!');
                        if (err.status) {
                            message.append($('<p>').text(`${err.status} ${err.statusText}`));
                            message.append($('<p>').text(`Response body: ${err.responseText}`));
                        }
                        console.error(err);

                        // Show failure
                        $('#upload-result').html($('<div>').addClass('alert alert-danger').html(message));
                    });
                    
		    }              