import Skeleton from "react-loading-skeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
    return (
        <div className="container my-5 shimmer-container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div className="col d-flex" key={index}>
                        <div className="card p-2 rounded-4 shadow-sm shimmer-card w-100 h-100 d-flex flex-column">
                            <Skeleton height={200} className="rounded-4" />
                            <div className="mt-3 px-2 d-flex flex-column justify-content-between flex-grow-1">
                                <div>
                                    <Skeleton height={20} width="70%" />
                                    <Skeleton height={15} width="50%" className="mt-2" />
                                </div>
                                <Skeleton height={15} width="40%" className="mt-3" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shimmer;
