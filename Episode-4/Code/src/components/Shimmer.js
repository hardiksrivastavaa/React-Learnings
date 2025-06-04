
// Shimmer Component ⤵

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Shimmer = () => {
    return (
        <div className="shimmer-container container my-4">
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 d-flex items-center g-lg-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div className="col" key={index}>
                        <div className="card shimmer-card mb-4 rounded-4 w-100 p-2" style={{ height: "250px" }}>
                            <Skeleton height={140} className="rounded-3" />
                            <div className="mt-3">
                                <Skeleton height={20} width={`80%`} />
                                <Skeleton height={15} width={`60%`} className="mt-2" />
                                <Skeleton height={15} width={`50%`} className="mt-1" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shimmer;
