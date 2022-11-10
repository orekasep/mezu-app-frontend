import Image from "next/image";
import Link from "next/link";
import featureMenu from "public/images/home/feature-menu.png";
import featureImg1 from "public/images/home/feature-img-1.png";
import featureImg2 from "public/images/home/feature-img-2.png";
import featureImg3 from "public/images/home/feature-img-3.png";

export const FeatureMenuSection = () => {
  return (
    <section className="relative">
      <div className="flex gap-4 justify-center items-center">
        <div className="container max-w-screen-xl flex lg:flex-row flex-col items-center padding-10">
          <div className="lg:w-1/5 w-full xl:px-0 px-4 lg:text-left text-center py-[10vh]">
            <Image
              className="w-auto h-[50vh]"
              src={featureMenu}
              alt="MEZU App - Menu"
            />
          </div>
          <div className="lg:w-4/5 w-full xl:px-0 px-4">
            <h2
              className={`
                color-primary
                xl:leading-normal md:leading-normal leading-normal
                md:text-3xl text-2xl font-bold mb-0`}
            >
              {`Menu ăn uống cho quán`}
            </h2>
            <p className="text-xl leading-loose color-primary">
              Menu thời đại 4.0, ai ai cũng có một chiếc điện thoại thông minh.
              <br />
              Chỉ với một chiếc điện thoại hoặc máy tính bảng khách hàng có thể
              <br />
              tự xem danh mục đồ ăn trên chính thiết bị của mình
            </p>
            <div className="flex flex-row">
              <Image className="w-1/5" src={featureImg1} alt="Feature 1" />
              <div className="w-[40px]"></div>
              <Image className="w-1/5" src={featureImg2} alt="Feature 2" />
              <div className="w-[40px]"></div>
              <Image className="w-1/5" src={featureImg3} alt="Feature 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMenuSection;
