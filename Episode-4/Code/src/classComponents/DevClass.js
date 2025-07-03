import React from "react";

class DevClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy User",
                img: "image",
                location: "location",
            },
        };
        console.log("Parent Contructor Called");
    }

    async componentDidMount() {
        console.log("Child Component Did Mount");
        const data = await fetch("https://api.github.com/users/hardiksrivastavaa");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        console.log("Child Component Did Update");
    }

    componentWillUnmount() {
        console.log("Child Component Will Unmount");
    }

    render() {
        console.log("Parent Render Method Called Called");

        const { name, bio, location, avatar_url } = this.state.userInfo;

        return (
            <>
                <div className="card shadow-sm border-1 border-dark rounded-4 overflow-hidden m-3">
                    <img
                        src={avatar_url}
                        alt={name}
                        className="card-img-top img-fluid"
                        style={{
                            height: "50vh",
                            objectFit: "cover",
                        }}
                    />
                    <div className="card-body p-4">
                        <h4 className="card-title fw-bold text-primary mb-2">
                            {name || "No Name"}
                        </h4>

                        {bio && (
                            <p className="card-text text-muted mb-2">
                                <i className="bi bi-info-circle me-2 text-secondary"></i>
                                {bio}
                            </p>
                        )}

                        {location && (
                            <p className="card-text text-muted">
                                <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
                                {location}
                            </p>
                        )}
                    </div>
                </div>

            </>
        );
    }
}

export default DevClass;
