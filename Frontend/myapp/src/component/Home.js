import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/1280x420/?mechanic" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Looking for a car service!!</h1>
                            <p>Book a service now...</p>
                            <p><Link to="/addVehicle" className="btn btn-danger" role="button">Book a service</Link></p>                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1280x420/?car" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Looking for a bike service!!</h1>
                            <p>Book a service now...</p>
                            <p><Link to="/addVehicle" className="btn btn-danger" role="button">Book a service</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1280x420/?bike" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Looking for a truck service!!</h1>
                            <p>Book a service now...</p>
                            <p><Link to="/addVehicle" className="btn btn-danger" role="button">Book a service</Link></p>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className='container my-5' style={{ display: 'flex' }}>

                <div className="col-lg-4" style={{ padding: '30px' }}>
                    <img className="rounded-circle" src="https://source.unsplash.com/random/300x300/?mechanic" alt="Generic placeholder image" width="140" height="140" />
                    <h2>New Paint</h2>
                    <p>Get a new look for you vehicle!!!</p>
                    <p><Link to="#" className="btn btn-danger" role="button">View details »</Link></p>

                </div>

                <div className="col-lg-4" style={{ padding: '30px' }}>
                    <img className="rounded-circle" src="https://source.unsplash.com/random/300x300/?truck" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Oil Replacement</h2>
                    <p>Get your vehicle ready for next 10000 Kms!!!</p>
                    <p><Link to="#" className="btn btn-danger" role="button">View details »</Link></p>

                </div>

                <div className="col-lg-4" style={{ padding: '30px' }}>
                    <img className="rounded-circle" src="https://source.unsplash.com/random/300x300/?bicycle" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Engine Clean</h2>
                    <p>Get your vehicle a new life!!!</p>
                    <p><Link to="#" className="btn btn-danger" role="button">View details »</Link></p>

                </div>

            </div>


            <div className='container'>
                <div className="row featurette">
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h2 className="featurette-heading">Revolutionizing Your Ride</h2>
                            <p className="lead text-left">At our car service center, we bring unparalleled expertise to every vehicle that rolls into our garage. With a team of seasoned professionals who eat, sleep, and breathe cars, we ensure that your ride receives the highest standard of care and attention, revolutionizing your driving experience.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://source.unsplash.com/random/1280x1280?mechanic" data-holder-rendered="true" style={{ width: "500px", height: "500px" }} />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row featurette">

                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://source.unsplash.com/random/1280x1280?bmw" data-holder-rendered="true" style={{ width: "500px", height: "500px" }} />
                    </div>

                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h2 className="featurette-heading">Precision Performance</h2>
                            <p className="lead text-left">From routine maintenance to complex repairs, we meticulously diagnose and address every issue, ensuring that your vehicle operates at peak performance levels. Trust us to redefine what it means to drive with confidence.

</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row featurette">
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h2 className="featurette-heading">Customer-Centric Excellence</h2>
                            <p className="lead text-left">At the heart of our service center lies a dedication to customer-centric excellence. We don't just fix cars; we build relationships. With transparent communication, personalized care, and a relentless pursuit of customer satisfaction, we're here to redefine the way you experience automotive service. Welcome to a new era of car care.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://source.unsplash.com/random/1280x1280?bicycle" data-holder-rendered="true" style={{ width: "500px", height: "500px" }} />
                    </div>
                </div>
            </div>

            <div className='container my-5'>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1. Q: What is the significance of horsepower in a car?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Horsepower is a measure of an engine's power, determining the vehicle's ability to accelerate and maintain speed. Higher horsepower generally correlates with increased performance.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2. Q: How does ABS (Anti-lock Braking System) enhance driving safety?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                ABS prevents wheel lock-up during braking, maintaining steering control and preventing skidding. This technology improves braking performance on slippery surfaces and in emergency situations.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3. Q: What role does the transmission play in a car?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            The transmission transfers power from the engine to the wheels. Automatic and manual transmissions control how a vehicle shifts gears, influencing fuel efficiency, acceleration, and overall driving experience.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            4. Q: What is the purpose of the catalytic converter in a car?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            The catalytic converter reduces harmful emissions by converting toxic gases from the engine into less harmful substances. It plays a crucial role in minimizing environmental impact.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            5. Q: How does aerodynamics impact a car's fuel efficiency?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            Aerodynamics refers to the way air interacts with a vehicle. Streamlined designs reduce air resistance, enhancing fuel efficiency. Cars with better aerodynamics experience less drag, requiring less energy to move through the air.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

        </div>
  )
}

export default Home