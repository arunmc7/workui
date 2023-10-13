import "./App.css";
import { Button, TextField } from "@mui/material";
import Card from "react-bootstrap/Card";
import { ShoppingCart } from "react-feather";


function App() {
  return (
    <>
      <div>
        <div className="int">
          <div className="nav"></div>

          <div className="st1">
            <div style={{ marginLeft: "20px" }}>
              <span
                style={{
                  fontSize: "150px",
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "5px",
                }}
              >
                <b>
                  <i>SHOEfy</i>
                </b>
              </span>
              <br />
              <br />
              <h3>"Good shoes take you good places.” -</h3>
              <Button
                style={{
                  marginLeft: "35px",
                  padding: "15px 62px",
                  marginTop: "15px",
                  background: "red",
                }}
                variant="contained"
              >
                TRY NOW
              </Button>
            </div>
          </div>
        </div>
        <div className="crd">
          <div style={{ display: "flex", gap: "180px",margin:'10px' }} className="cd1">
            <Card style={{ width: "200px" }}>
              <Card.Img
                variant="top"
                src="https://www.superkicks.in/cdn/shop/files/FQ8368-902-4.jpg?v=1697110953&width=360"
              />
              <Card.Body>
                <h2 style={{ marginLeft: "10px" }}>ΑJ4 Retro Μilitary Βlack</h2>
                <br />
                <br />

                <h2 style={{ marginLeft: "10px" }}>₹ 1999</h2>
                <br /><br />
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  ADD TO CART{" "}
                  <span>
                    <ShoppingCart />
                  </span>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "200px" }}>
              <Card.Img
                variant="top"
                src="https://www.superkicks.in/cdn/shop/files/DM4044-102-4.jpg?v=1697110649&width=360"
              />
              <Card.Body>
                <h2 style={{ marginLeft: "10px" }}>
                  CORTEZ 'WHITE/CAMPFIRE ORANGE-JADE HORIZON'
                </h2>
                <br />
                <h2 style={{ marginLeft: "10px" }}>₹ 1999</h2>
                <br />
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  ADD TO CART{" "}
                  <span>
                    <ShoppingCart />
                  </span>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "200px" }}>
              <Card.Img
                variant="top"
                src="https://www.superkicks.in/cdn/shop/files/PHOTOSHOP42.jpg?v=1689169718&width=360"
              />
              <Card.Body>
                <h2 style={{ marginLeft: "10px" }}>
                  AIR VAPORMAX 2023 FLYKNIT 'TRACK RED/MYSTIC'
                </h2>
                <br />
                <h2 style={{ marginLeft: "10px" }}>₹ 1999</h2>
                <br />
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  ADD TO CART{" "}
                  <span>
                    <ShoppingCart />
                  </span>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "200px" }}>
              <Card.Img
                variant="top"
                src="https://www.superkicks.in/cdn/shop/files/2_11fbbbde-1fa6-4699-9a47-36b1133cc1ef.jpg?v=1691760727&width=360"
              />
              <Card.Body>
                <h2 style={{ marginLeft: "10px" }}>
                  RHUIGI CLYDE Q3 'INKY BLUE'
                </h2><br />
                <br />
                <h2 style={{ marginLeft: "10px" }}>₹ 1999</h2>
                <br /><br />
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  ADD TO CART{" "}
                  <span>
                    <ShoppingCart />
                  </span>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div style={{ display: "flex", gap: "180px",margin:'10px',marginTop:'15px' }} className="cd2">
            <Card style={{ width: "200px" }}>
              <Card.Img
                variant="top"
                src="https://www.superkicks.in/cdn/shop/files/1203A275.102-3.jpg?v=1689449519&width=360"
              />
              <Card.Body>
                <h2 style={{ marginLeft: "10px" }}>
                  GT-2160 'WHITE/PURE SILVER'
                </h2>
                <br /><br /><br />
                <h2 style={{ marginLeft: "10px" }}>₹ 1999</h2>
                <br /><br />
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  ADD TO CART{" "}
                  <span>
                    <ShoppingCart />
                  </span>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "200px" }}>
              <Card.Img
                variant="top"
                src="https://www.superkicks.in/cdn/shop/files/2_b93ab4f0-e968-4e3e-baf8-e3380e95af69.jpg?v=1692875611&width=360"
              />
              <Card.Body>
                <h2 style={{ marginLeft: "10px" }}>
                  SAMBA OG 'CLOUD WHITE/CORE BLACK/CLEAR GRANITE''
                </h2>
                <br />
                <h2 style={{ marginLeft: "10px" }}>₹ 1999</h2>
                <br />
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  ADD TO CART{" "}
                  <span>
                    <ShoppingCart />
                  </span>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "200px" }}>
              <Card.Img
                variant="top"
                src="https://www.superkicks.in/cdn/shop/files/2_78.jpg?v=1694093501&width=360"
              />
              <Card.Body>
                <h2 style={{ marginLeft: "10px" }}>
                  KEVIN DURANT KD16 EP 'BLACK/METALLIC SILVER-VIVID PURPLE'
                </h2>
                <br />
                <h2 style={{ marginLeft: "10px" }}>₹ 1999</h2>
                <br />
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  ADD TO CART{" "}
                  <span>
                    <ShoppingCart />
                  </span>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "200px" }}>
              <Card.Img
                variant="top"
                src="https://www.superkicks.in/cdn/shop/files/2_0e5bfacf-64a9-4017-ac63-fd0cf051fc8e.jpg?v=1689096510&width=360"
              />
              <Card.Body>
                <h2 style={{ marginLeft: "10px" }}>
                  DUNK LOW RETRO BTTYS 'WHITE/CLEAR JADE-WHITE'
                </h2>
                <br /><br />
                <h2 style={{ marginLeft: "10px" }}>₹ 1999</h2>
                <br /><br />
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  ADD TO CART{" "}
                  <span>
                    <ShoppingCart />
                  </span>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br />
        <br /><br />
        <br /><br />

        <div className="offlc">
          <div className="offer">
            <h2>🌟 Special Offer: ₹ 500 off your first purchase!</h2>
            <br />
            <br />
            <h2>🌟Women's Classic Leather Loafers: ₹ 799</h2>
            <br />
            <br />
            <h2>🌟 Men's Oxford Dress Shoes: ₹ 999</h2>
            <br />
            <br />
            <h2>🌟 Kids' Sneakers: ₹ 699</h2>
            <Button
              style={{
                marginLeft: "35px",
                padding: "15px 62px",
                marginTop: "15px",
                background: "red",
                color: "white",
              }}
              variant="contained"
            >
              <b> BUY NOW!!</b>
            </Button>
          </div>
          <div className="loc">
            <h2>ADD DELIVERY DETAILS</h2>
            <br />
            <TextField
              style={{ width: "600px" }}
              fullWidth
              id="outlined-basic"
              label="ADDRESS"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="outlined-basic"
              label="LANDMARK"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="outlined-basic"
              label="PHONE NO:"
              variant="outlined"
            />
            <br />
            <br />
            <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  ADD{" "}
                 
                </Button>
          </div>
        </div><br /><br /><br />


        <div  className="footerr">
        <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </div>
      </div>
    </>
  );
}

export default App;
