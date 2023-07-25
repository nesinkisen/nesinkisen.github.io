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
			function btnMakeCall()
            {
				// Create request body
				let body = {
					'phoneNumber':$("#txtPhoneNumber").val()
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