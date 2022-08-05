import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Row, Col, Button, Image } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faTruck} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer } from 'react-toastify'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import products from '../../utils/products.mock.js'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import 'react-toastify/dist/ReactToastify.css'
import "swiper/css";
import "swiper/css/navigation";

function ItemDetail({data}) {
    const { id } = useParams();
    const [galleryImages, setGalleryImages] = useState([]);
    const [quantitySelected, setQuantitySelected] = useState(0)
  
    useEffect(() => {
        getProductById()
    }, []);
    
    const getProductById = () => {
        setGalleryImages(products.find(product => product.id == id).gallery);
    }

  return (
    <>
    <Card className='itemdetail__card'>
        <Row>
            <Col className='col-12 col-lg-8 center'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper itemdetail__card__swiper">
                <SwiperSlide className='itemdetail__card__swiper'>
                    <Image src={data.image} className='itemdetail__card__image' />
                </SwiperSlide>
                {galleryImages.map((image, index) => (
                    <SwiperSlide key={index} className='itemdetail__card__swiper'>
                        <Image src={image} className='itemdetail__card__image' />
                    </SwiperSlide>
                ))}
            </Swiper>
                
            </Col>
            <Col className='col-12 col-lg-4 center'>
                <Card.Body>
                    <h2>{data.title}</h2>
                    <Link to={`/${data.category_slug}`}><span className='category'>{data.category}</span></Link>
                    <p>{data.description}</p>
                    <span className='old_price'>{data.old_price ? "$" + data.old_price : ""}</span>
                    <br/>
                    <div className='prices'>
                        <span className='price'>${data.price}</span>
                        <span className='discount'>{data.old_price ? '-' + (Math.round((data.old_price-data.price)*100/data.old_price)) + '% OFF' : ''}</span>
                    </div>
                    <br/>
                    <div>
                        {(data.free_shipping) ? <span><FontAwesomeIcon icon={faTruck}/> Envio gratis</span> : <span><FontAwesomeIcon icon={faTruck}/> Envio desde $29</span>}
                    </div>
                    <br/>
                    <div>
                    <ItemCount productData={data} setQuantitySelected={setQuantitySelected}/>
                    </div>
                    <Button className='buy__now'>
                        Comprar ahora
                    </Button>
                </Card.Body>
            </Col>
        </Row>
    </Card>
    <ToastContainer />
    </>
  )
}

export default ItemDetail