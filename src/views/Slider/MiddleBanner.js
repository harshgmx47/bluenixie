import { React } from 'react';
import { CardImg, Card, Col, Container, Row, Tooltip } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faHeart,faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function MiddleBanner() {
    return (
        <Container>
            <section className='text-center my-5'>
                <h2 className='h1-responsive font-weight-bold text-center my-5'>Our bestsellers</h2>
                <p className='grey-text text-center w-responsive mx-auto mb-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                </p>

                <Row className="justify-content-md-center">
                        <Col lg="4" md="12" className='mb-0 lg-0 mb-4'>
                            <Card bg='Secondary' className="mb-2">
                                <CardImg variant="top " className="img-fluid"
                                    src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/cms/Cms-banner-2.jpg"
                                    alt="Cms-banner-2.jpg"
                                />
                                <Card.Body className="view view-cascade text-center'">
                                    <a href='#!' className='text-muted'>
                                        <h5>Camera</h5>
                                    </a>
                                    <Card.Title>
                                        <strong>
                                            <a href='#!'>GoPro</a>
                                        </strong>
                                    </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.
                                    </Card.Text>
                                    <Card.Footer className='px-1'>
                                        <span className='float-start font-weight-bold'>
                                            <strong>1439$</strong>
                                        </span>
                                        <span className='float-end'>
                                                <i className="text-grey m-3"><FontAwesomeIcon icon={faEye}/></i>
                                            <Tooltip show placement='top'>
                                                <span>Quick Look</span>
                                            </Tooltip>{' '}                                                                                  
                                             <i className="text-grey"><FontAwesomeIcon icon={faHeart}/></i>
                                            <Tooltip show placement='top'>
                                                <span>Quick Look</span>
                                            </Tooltip>                                    
                                        </span>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="4" md="12" className='mb-0 lg-0 mb-4'>
                            <Card bg='Secondary' className="mb-2">
                                <CardImg variant="top " className="img-fluid"
                                    src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/cms/Cms-banner-2.jpg"
                                    alt="Cms-banner-2.jpg"
                                />
                                <Card.Body className="view view-cascade text-center'">
                                    <a href='#!' className='text-muted'>
                                        <h5>Camera</h5>
                                    </a>
                                    <Card.Title>
                                        <strong>
                                            <a href='#!'>GoPro</a>
                                        </strong>
                                    </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.
                                    </Card.Text>
                                    <Card.Footer className='px-1'>
                                        <span className='float-start font-weight-bold'>
                                            <strong>1439$</strong>
                                        </span>
                                        <span className='float-end'>
                                                <i className="text-grey m-3"><FontAwesomeIcon icon={faEye}/></i>
                                            <Tooltip show placement='top'>
                                                <span>Quick Look</span>
                                            </Tooltip>{' '}                                                                                  
                                             <i className="text-grey"><FontAwesomeIcon icon={faHeart}/></i>
                                            <Tooltip show placement='top'>
                                                <span>Quick Look</span>
                                            </Tooltip>                                    
                                        </span>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="4" md="12" xs className='mb-0 lg-0 mb-4'>
                            <Card bg='Secondary' className="mb-2">
                                <CardImg variant="top " className="img-fluid"
                                    src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/cms/Cms-banner-2.jpg"
                                    alt="Cms-banner-2.jpg"
                                />
                                <Card.Body className="view view-cascade text-center'">
                                    <a href='#!' className='text-muted'>
                                        <h5>Camera</h5>
                                    </a>
                                    <Card.Title>
                                        <strong>
                                            <a href='#!'>GoPro</a>
                                        </strong>
                                    </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.
                                    </Card.Text>
                                    <Card.Footer className='px-1'>
                                        <span className='float-start font-weight-bold'>
                                            <strong>1439$</strong>
                                        </span>
                                        <span className='float-end'>
                                                <i className="text-grey m-3"><FontAwesomeIcon icon={faEye}/></i>
                                            <Tooltip show placement='top'>
                                                <span>Quick Look</span>
                                            </Tooltip>{' '}                                                                                  
                                             <i className="text-grey"><FontAwesomeIcon icon={faHeart}/></i>
                                            <Tooltip show placement='top'>
                                                <span>Quick Look</span>
                                            </Tooltip>                                    
                                        </span>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
            </section>
        </Container>
    );
}
export default MiddleBanner;