import bannerimg from '../../../../public/image/istockphoto-1250965435-612x612-1-removebg-preview.png'

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-around items-center '>
            <div className='text-center space-y-5'>
                <h2 className='text-5xl font-bold text-zinc-500' style={{ lineHeight: '1.5' }}>
                    Organize your work <br /> and life, finally.
                </h2>

                <button className='btn text-lg bg-sky-600 text-white hover:bg-sky-600  border-none'>
                    Let’s Explore
                </button>
            </div>
            <div>
                <img src={bannerimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;