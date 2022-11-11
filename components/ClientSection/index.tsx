import Image from 'next/image';
import Link from 'next/link';
import background from 'public/images/home/client-bg.png';
import sampleLogo from 'public/images/home/client-sample-logo.png';

export const ClientSection = () => {
  return (
    <section className="relative">
      <div className="w-full h-[50vh] relative overflow-hidden">
        <Image src={background} alt="" />
      </div>

      <div className="absolute top-0 left-0 right-0 flex gap-4 justify-center items-center place-self-center">
        <div className="flex flex-col flex-start justify-center items-center h-[50vh] ">
          <h2 className="text-3xl text-white uppercase">{`Khách hàng tiêu biểu`}</h2>
          <div className="flex flex-row">
            <Image className="w-1/6 p-8" src={sampleLogo} alt="" />
            <Image className="w-1/6 p-8" src={sampleLogo} alt="" />
            <Image className="w-1/6 p-8" src={sampleLogo} alt="" />
            <Image className="w-1/6 p-8" src={sampleLogo} alt="" />
            <Image className="w-1/6 p-8" src={sampleLogo} alt="" />
            <Image className="w-1/6 p-8" src={sampleLogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
