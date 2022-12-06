import { Carousel } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { imgUrl } from '../apikeys';
import { fetchToprated } from '../redux/slice/topratedSlice';
import Slider from "react-slick";
import { PlayCircleFilled,PlusCircleOutlined,LikeOutlined } from '@ant-design/icons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Toprated() {
    const popular = useSelector(state => state.toprated);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchToprated());
    }, [])
    const { results } = popular.value;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5
      };
    return (
        <div>
            <h2>Top rated</h2>
            <Slider {...settings}>
                {results && results.map(e => (
                    <div>
                       

                        <img style={{height: "300px",width:"250px"}} src={imgUrl+"w500/"+e.poster_path} alt={e.title}/>
                        <p style={{display:"flex",justifyContent:"center",fontWeight:"bold"}}>{e.title}</p> 
                        <div style={{display:"flex",justifyContent:"space-evenly"}}>
                        <p style={{fontSize:"23px"}}><PlayCircleFilled /></p>
                        <p style={{fontSize:"23px"}}><PlusCircleOutlined /></p>
                        <p style={{fontSize:"23px"}}><LikeOutlined /></p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
