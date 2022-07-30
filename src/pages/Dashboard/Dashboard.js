import React from "react";
import "./Dashboard.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import EllipseWhite from "../../assets/EllipseWhite.svg";
import RectangleLeft from "../../assets/RectangleLeft.svg";
import { BsSearch } from "react-icons/bs";
import Card from "../../assets/card.svg";

const Dashboard = () => {
	return (
		<>
			<div>
				<div className="dash-container">
					<Row>
						<Col md={3} className="left-dash">
							<div className="left-dash-cont">
								<Row>
									<Col>
										<Link to="/" style={{ textDecoration: "none" }}>
											<h2 className="icon">BITS N BYTES</h2>
										</Link>
									</Col>
								</Row>
								<Row className="justify-content-center">
									<Col className="text-center">
										<img
											className="img-fluid left-dash-img"
											src={EllipseWhite}
											alt=""
										/>
									</Col>
								</Row>
								<Row className="justify-content-center shop-title">
									<Col className="text-center">
										<h1>Revada Stores</h1>
									</Col>
								</Row>
								<Row className="justify-content-center shop-desc">
									<Col className="text-center">
										<p>
											lorem-ipsum loremispsdfsdf asfav adsfasdfsdafasdf adfasdf
										</p>
									</Col>
								</Row>
								<Row className="justify-content-center shop-desc-large">
									<Col className="text-center">
										<p>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Nemo suscipit architecto incidunt eos blanditiis repellat
											esse obcaecati vel nostrum corporis earum delectus vitae
											nobis officiis sequi, dolore animi quasi officia!
										</p>
									</Col>
								</Row>
								<Row className="justify-content-center shop-desc-large">
									<Col className="text-center">
										<img
											className="dash-left-img img-fluid"
											src={RectangleLeft}
											alt=""
										/>
									</Col>
								</Row>
							</div>
						</Col>
						<Col md={9} className="right-dash text-center">
							<Row className="justify-content-center">
								<Col className="text-center">
									<div className="search-bar">
										<input type="text" />
										<BsSearch className="search-bar-icon" />
									</div>
								</Col>
							</Row>

							<div className="right-dash-disp-container">
								<Row className="justify-content-around">
									<Col md={2}>
										<div className="card">
											<img src={Card} className="img-fluid" alt="" />
										</div>
										<p className="card-text">Items</p>
									</Col>
									<Col md={2}>
										<Row>
											<Col>
												<div className="fullfilments">Delivery</div>
											</Col>
										</Row>
										<Row>
											<Col>
												<div className="fullfilments">Pickup</div>
											</Col>
										</Row>
									</Col>
									<Col md={2}>map</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
