import Image from 'next/image';
import Link from 'next/link';
import featureOrder from 'public/images/home/feature-order.png';
import featureImg1 from 'public/images/home/feature-img-1.png';
import featureImg2 from 'public/images/home/feature-img-2.png';
import featureImg3 from 'public/images/home/feature-img-3.png';

export const FeatureOrderSection = () => {
  return (
    <section className="relative bg-slate-50">
      <div className="flex gap-4 justify-center items-center">
        <div className="container max-w-screen-xl flex lg:flex-row flex-col items-center padding-10">
          <div className="lg:w-4/5 w-full xl:px-0 px-4">
            <h2
              className={`color-primary  text-right
                xl:leading-normal md:leading-normal leading-normal
                md:text-3xl text-2xl font-bold mb-0`}
            >
              {`Dễ dàng đặt đơn tại bàn`}
            </h2>
            <p className="color-primary text-xl leading-loose text-right">
              Nhân viên hoặc chính khách hàng có thể dễ dàng <br />
              chọn món và thêm vào đơn tại bàn. <br />
              Chỉ với thao tác quét QR code, khách hàng của bạn có thể lập tức
              đặt đồ.
            </p>
            <div className="flex flex-row justify-end">
              <Image className="w-1/5" src={featureImg1} alt="Feature 1" />
              <div className="w-[40px]"></div>
              <Image className="w-1/5" src={featureImg2} alt="Feature 2" />
              <div className="w-[40px]"></div>
              <Image className="w-1/5" src={featureImg3} alt="Feature 3" />
            </div>
          </div>
          <div className="flex justify-end lg:w-1/5 w-full xl:px-0 px-4 lg:text-left text-center py-[10vh]">
            <Image
              className="w-auto h-[50vh]"
              src={featureOrder}
              alt="MEZU App - Menu"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOrderSection;
