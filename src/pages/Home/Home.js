import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import Banner from "../../assets/banner.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<>
			<div className="home-container">
				<Row className="navbar justify-content-between">
					<Col md={2} className="text-center">
						<h1 className="navbar-item">BITS N BYTES</h1>
					</Col>
					<Col md={2} className="text-center">
						<Link to="/login" style={{ textDecoration: "none" }}>
							<h1 className="navbar-item">LOGIN</h1>
						</Link>
					</Col>
				</Row>
				<div className="banner">
					<Row className="banner-row justify-content-between">
						<Col md={4} className="text-center">
							<img
								src={Banner}
								alt="banner-img"
								className="banner-img img-fluid"
							/>
						</Col>
						<Col md={6} className="banner-content-column">
							<Row>
								<Col>
									<h1 className="banner-content-title">
										ONDC <span>COMPLIANCE</span>
									</h1>
								</Col>
							</Row>
							<Row>
								<Col>
									<h1 className="banner-content-title">CHECK</h1>
								</Col>
							</Row>
							<Row>
								<Col>
									<p className="banner-content-para">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Praesentium fugit odit suscipit inventore dolore odio
										corporis, dicta harum reprehenderit rem vero id blanditiis
										alias dolor, vitae atque nesciunt sapiente quis.
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className="banner-btn-row justify-content-center">
						<Col md={12} className="text-center">
							<Link to="/login">
								<button className="banner-btn">
									Get Started <AiOutlineArrowRight className="arrow-icon" />
								</button>
							</Link>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
};

export default Home;
