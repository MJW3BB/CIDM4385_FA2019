const FormInput = (props) => {
    return React.createElement('div', {className: "form-group"}, 
        [
            React.createElement('label1', 
                                {
                                    htmlFor: "exampleInputEmail1"
                                }, 
                                "Email address"
            ),
            React.createElement('input1', 
                                {
                                    className: "form-control",
                                    type: "email",
                                    id: "exampleInputEmail1",
                                    placeholder: "Enter email"
                                },
            ),
            React.createElement('label2', 
                                {
                                    htmlFor: "exampleInputZipCode1"
                                }, 
                                "Zip Code"
            ),
            React.createElement('input2', 
                                {
                                    className: "exampleInputZipCode1",
                                    type: "zip code",
                                    id: "exampleInputZipCode1",
                                    placeholder: "Enter Zip Code"
                                },
            ),
        ]
);}