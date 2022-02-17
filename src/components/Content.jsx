import React from 'react'
import { Link } from "react-router-dom";

export const Content = () => {
    return (
        <div className='d-flex justify-content-evenly flex-column container py-5'>
            <div className="banner text-primary d-flex flex-column flex-sm-row">
                <div className='px-5'>
                    <h1>See how much it will cost to install solar panels for your home.</h1>
                    <h5>Based on your:</h5>
                    <h6>Location</h6>
                    <h6>Electric use</h6>
                    <h6>Price of the best rated solar comapanies near you.</h6>
                     <div class="d-flex py-2">
                        <input class="me-2" type="number" max={99999} />
                        <Link to='forms' class="btn btn-primary">CALCULATE COST</Link>
                    </div>
                </div>
                <img src="https://www.pngfind.com/pngs/m/502-5023792_united-states-map-transparent-background-hd-png-download.png" className='img-fluid' alt="" width={350} />
            </div>
            <div className="content pt-5">
                 <div class="row row-cols-1 row-cols-sm-3 ">
                    <div class="col pb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ab reiciendis molestiae, recusandae totam, dolorum sapiente dolores explicabo debitis sed mollitia laboriosam ipsa harum architecto natus placeat asperiores hic officiis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ab reiciendis molestiae, recusandae totam, dolorum sapiente dolores explicabo debitis sed mollitia laboriosam ipsa harum architecto natus placeat asperiores hic officiis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ab reiciendis molestiae, recusandae totam, dolorum sapiente dolores explicabo debitis sed mollitia laboriosam ipsa harum architecto natus placeat asperiores hic officiis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ab reiciendis molestiae, recusandae totam, dolorum sapiente dolores explicabo debitis sed mollitia laboriosam ipsa harum architecto natus placeat asperiores hic officiis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ab reiciendis molestiae, recusandae totam, dolorum sapiente dolores explicabo debitis sed mollitia laboriosam ipsa harum architecto natus placeat asperiores hic officiis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ab reiciendis molestiae, recusandae totam, dolorum sapiente dolores explicabo debitis sed mollitia laboriosam ipsa harum architecto natus placeat asperiores hic officiis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
