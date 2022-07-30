import React from "react";
import "./Login.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogLeft from "../../assets/login-left.svg";
import LogRight from "../../assets/login.svg";
import Ellipse from "../../assets/ellipse.svg";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div>
			<div className="login-container">
				<Row>
					<Col md={3} className="left-login">
						<div className="left-login-cont">
							<Row>
								<Col>
									<Link to="/" style={{ textDecoration: "none" }}>
										<h2 className="icon">BITS N BYTES</h2>
									</Link>
								</Col>
							</Row>
							<Row>
								<Col>
									<img
										className="img-fluid left-login-img"
										src={LogLeft}
										alt=""
									/>
								</Col>
							</Row>
						</div>
					</Col>
					<Col md={9} className="right-login text-center">
						<Row className="justify-content-center">
							<Col className="text-center">
								<div className="right-login-img-container">
									<img
										src={LogRight}
										className="img-fluid right-login-img"
										alt=""
									/>
									<img src={Ellipse} className="img-fluid ellipse" alt="" />
								</div>
							</Col>
						</Row>

						<div className="right-login-input-container">
							<Row className="justify-content-center">
								<Col className="text-center">
									<Row>
										<Col>
											<input
												type="text"
												className="input"
												placeholder="Username"
											/>
										</Col>
									</Row>
									<Row className="justify-content-center">
										<Col className="text-center">
											<input
												type="text"
												className="input"
												placeholder="Password"
											/>
										</Col>
									</Row>
									<Row className="justify-content-center">
										<Col className="text-center">
											<button className="banner-btn">
												<span>Log In</span>
											</button>
										</Col>
									</Row>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Login;
