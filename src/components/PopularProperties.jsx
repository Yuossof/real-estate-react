import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react'
import { cardItems } from '../constant/data'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

/* swiper styles */
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const PopularProperties = () => {
  return (
    <section className='section pb-[90px] md:pb-[150px]'>
        <div className="container">
            {/* Title wrapper */}
            <div className="lg:flex lg:justify-between lg:items-center mb-10">
                {/* title */}
                <div>
                    <h2>popular properties</h2>
                    <p className="mt-4 mb-7 text-gray-600 max-w-[500px]">Lorem ipsum dolor sit amet consectetur. Faucibus tristique auctor mauris velit varius. Eu duis viverra.</p>
                </div>
                {/* navigation buttons */}
                <div className="flex items-center gap-5 mb-5">
                    <button className="prev-btn bg-sky-600 text-white h-12 w-12 flex items-center justify-center rounded-full active:bg-sky-700 hover:bg-sky-800 transition-colors">
                        <RiArrowLeftSLine size={24} />
                    </button>
                    <button className="next-btn bg-sky-600 text-white h-12 w-12 flex items-center justify-center rounded-full active:bg-sky-700 hover:bg-sky-800 transition-colors">
                        <RiArrowRightSLine size={24} />
                    </button>
                </div>
            </div>

            {/* card wrapper */}
            <Swiper
                modules={[Navigation,Pagination,Autoplay]}
                breakpoints={{
                    575:{
                        slidesPerView:2
                    },
                    992:{
                        slidesPerView:3
                    }
                }}
                autoplay={true}
                loop={true}
                navigation={{
                    prevEl:'.prev-btn',
                    nextEl:'.next-btn'
                }}
                pagination={{clickable:true}}
                spaceBetween={30}>
                {cardItems.map((item)=>(
                    /* card swiper slide */
                    <SwiperSlide className="mb-20">
                        {/* card */}
                        <div className="border border-gray-200">
                            <div>
                                <img src={item.imgURL} alt={item.name} className="w-full h-48 object-cover" />
                            </div>
                            <div className="p-5">
                                <b className="text-xl text-gray-900">{item.price}</b>
                                <a href="#" className="block font-semibold text-2xl my-2 text-gray-700 hover:text-sky-600 transition">
                                {item.name}
                                </a>
                                <p className="">{item.location}</p>

                                {/* Icons Section */}
                                <div className="flex flex-wrap items-center gap-4 mt-4">
                                    <p>{item.bed}</p> |
                                    <p>{item.bath}</p> |
                                    <p>{item.area}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    </section>
  )
}

export default PopularProperties