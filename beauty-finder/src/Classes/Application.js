import React from 'react';
const AppContext = React.createContext();

class Application {
    constructor() {
        this.businessForm = null;
    }

    setBusinessForm(businessFormObject) {
        this.businessForm = businessFormObject;
    }

    setBusinessFormData(formData) {
        this.businessForm.setFormData(formData);
    }
}

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationInstance: new Application()
        };
    }
    render() {
        return (
            <AppContext.Provider value={{ application: this.state.applicationInstance }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export { AppContext, AppProvider };
