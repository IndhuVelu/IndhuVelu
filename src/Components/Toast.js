import React, { Component } from "react";
export default class ToastMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            customClass: ""
        };
    }

    componentDidMount() {
        window.addEventListener('load', this.call);
    }


    call = (description, customClass) => {
        if (description && customClass) {
            document.getElementById('toastContainer').classList.add("show");
            document.getElementById('toastContainer').classList.add(customClass)
            document.getElementById('toastDescription').innerHTML = description;
            setTimeout(function () {
                document.getElementById('toastContainer').classList.remove("show");
                document.getElementById('toastContainer').classList.remove(customClass);
            }, 3000);
        }
    }

    hideToast = () => {
        document.getElementById('toastContainer').classList.remove("show");
    }

    render() {
        return (
            <React.Fragment>
                {/* Toast Message */}
                <div id="toastContainer" role="alert" >
                    <span id="toastDescription">Toast</span>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => this.hideToast()}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
            </React.Fragment>
        );
    }
}