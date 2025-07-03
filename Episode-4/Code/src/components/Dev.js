import React from "react";
import useDeveloper from "../../utils/useDeveloper";

const Dev = () => {
    const developer = useDeveloper();
    const {name, bio, avatar_url, location} = developer;

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
                        {name}
                    </h4>

                    <p className="card-text text-muted mb-2">
                        <i className="bi bi-info-circle me-2 text-secondary"></i>
                        {bio}
                    </p>

                    <p className="card-text text-muted">
                        <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
                        {location}
                    </p>
                </div>

            </div>
        </>
    );
};

export default Dev;
