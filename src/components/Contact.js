import React, { useCallback, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import {
    GoogleMap,
    InfoWindow,
    Marker,
    useJsApiLoader,
} from "@react-google-maps/api";

const Styles = styled.div``;
const Contact = (props) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAJAiFkiZlLzGqL83a9R52URYvXQIt0JAQ",
        id: "google-map-script",
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = useCallback((map) => setMap(null), []);

    return (
        <Styles>
            <div className="main-bg  pt-5" id="contact">
                <Container>
                    <p
                        style={{
                            fontSize: "5rem",
                            color: "#585be6",
                            fontWeight: "bolder",
                            textShadow: "3px 3px #F18805",
                        }}
                    >
                        Want to get in touch?
                    </p>
                    <Row className="my-5">
                        <Col>
                            {isLoaded ? (
                                <GoogleMap
                                    mapContainerStyle={{
                                        width: "100%",
                                        height: "400px",
                                        borderRadius: "20px",
                                    }}
                                    center={{ lat: 43.636206, lng: -79.40283 }}
                                    zoom={12}
                                    onLoad={onLoad}
                                    onUnmount={onUnmount}
                                >
                                    <Marker
                                        position={{
                                            lat: 43.636206,
                                            lng: -79.40283,
                                        }}
                                        animation={1}
                                        title="Lance Location"
                                    />
                                    <InfoWindow
                                        position={{
                                            lat: 43.646206,
                                            lng: -79.40283,
                                        }}
                                    >
                                        <div style={{ fontSize: "2rem" }}>
                                            Lance Location
                                        </div>
                                    </InfoWindow>
                                </GoogleMap>
                            ) : (
                                <></>
                            )}
                        </Col>
                        <Col
                            xs={3}
                            className="pl-4"
                            style={{ fontSize: "1.5rem" }}
                        >
                            <p className="my-5">
                                290 Bremner Blvd, Toronto, ON M5V 3L9
                            </p>
                            <p className="my-5">+1 (647) 786-5754</p>
                            <p className="my-5">
                                <a href="mailto:info@lancerecruiter.ca">
                                    info@lancerecruiter.ca
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Styles>
    );
};

export default Contact;
