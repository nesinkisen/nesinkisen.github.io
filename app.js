function btnAvailable()
            {
                presenceApiInstance.patchUserPresence(userId, 'PURECLOUD', { presenceDefinition:{ id: "6a3af858-942f-489d-9700-5f9bcdcdae9b" } })
                    .then(() => {
                        console.log('Presence set successfully');
                    })
                    .catch((err) => console.error(err));
            }; 

            function btnBusy()
            {
                presenceApiInstance.patchUserPresence(userId, 'PURECLOUD', { presenceDefinition:{ id: "31fe3bac-dea6-44b7-bed7-47f91660a1a0" } })
                    .then(() => {
                        console.log('Presence set successfully');
                    })
                    .catch((err) => console.error(err));
            };    
            
            function btnPreparing()
            {
                presenceApiInstance.patchUserPresence(userId, 'PURECLOUD', { presenceDefinition:{ id: "66bf7dc1-d443-4a64-bb88-022cd4a60c76" } })
                    .then(() => {
                        console.log('Presence set successfully');
                    })
                    .catch((err) => console.error(err));
            };  

			// Handle dial button click
			function MakeCall(phone)
            {
				// Create request body
				let body = {
					'phoneNumber':phone
				};

				// Invoke API
				conversationsApi.postConversationsCalls(body).then(() => {
					// Clear dialstring from text box
					$('#txtPhoneNumber').val('');
				}).catch((err) => console.error(err));
			};            

            function btnDisableStatus()
            {
                $("table tbody tr td a").attr('href','https://apps.mypurecloud.ie');
            }; 

            function btnDisableAll()
            {
                // parent.document.getElementById("ember1262").style.pointerEvents = "none";
                // parent.document.getElementById("ember1262").style.opacity = "0.5"; 

                var frame = document.getElementById('https://nesinkisen.github.io');
                frame.contentWindow.postMessage(document.getElementById("ember1262").style.pointerEvents = "none", 'https://apps.mypurecloud.ie');
            }; 
            
function scheduleCallback()
{
    var rowsAdded = "testtt";

    for(var x=0; x<rowsAdded; x++) {
        var newRow = document.getElementById('tbl_id').insertRow();

        var newCell = newRow.insertCell();
        newCell.innerHTML="<tr><td><input type='text' name='user_name'></td></tr>";

        newCell = newRow.insertCell();
        newCell.innerHTML="<tr><td><input type='text' name='score'></td></tr>";

        newCell = newRow.insertCell();
        newCell.innerHTML="<tr><td><input type='text' name='points'></td></tr>";

        newCell = newRow.insertCell();
        newCell.innerHTML="<tr><td><input type='text' name='total'></td></tr>";

    }

    document.getElementById("ParisTab").style.display = "none";
    document.getElementById("Paris").style.display = "none";
    $("#LondonTab").css("background-color","yellow");
}       

function dueInCalculation(diffMinutes)
{
    if (diffMinutes < 0) //overdue
    {
        if (diffMinutes > -60)
        return Math.abs(diffMinutes) + " minutes overdue";
        else
        return Math.round(Math.abs(diffMinutes / 60)) + " hour(s) overdue";
    }
    else //due in
    {
        if (diffMinutes < 60)
        return "due in " + diffMinutes + " minutes";
        else
        return "due in " + Math.round(Math.abs(diffMinutes / 60)) + " hour(s)";
    }
}

function dateFormat(dateTime)
{
    var month = dateTime.getMonth() + 1;

    var formattedDateTime = dateTime.getFullYear() + "-" + 
    (month < 10 ? "0" + month : month) + "-" + 
    (dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate()) + " " +
    (dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours()) + ":" + 
    (dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes());

    return formattedDateTime;
}