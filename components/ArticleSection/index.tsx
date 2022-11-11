import Image from 'next/image';
import Link from 'next/link';
import featureOrder from 'public/images/home/feature-order.png';
import featureImg1 from 'public/images/home/feature-img-1.png';
import featureImg2 from 'public/images/home/feature-img-2.png';
import featureImg3 from 'public/images/home/feature-img-3.png';
import { Carousel } from 'antd';
import styled from 'styled-components';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const ArticleItemWrapper = styled.div`
  img.thumbnail {
    transition: 0.3s all;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

interface ArticleItemProps {
  id: number;
  title: string;
  description: string;
  url: string;
}

const ArticleItem = (props: ArticleItemProps) => {
  return (
    <ArticleItemWrapper className='p-4 mt-4'>
      <img
        src={props.url}
        alt='Article image'
        className='thumbnail w-full h-[250px] object-cover rounded-2xl'
      />
      <h3 className='font-bold text-xl py-4 m-0'>{props.title}</h3>
      <h6 className='font-normal'>{props.description}</h6>
    </ArticleItemWrapper>
  );
};

const sampleData = [
  {
    id: 1,
    title: 'Top 8 Website cung cấp ảnh Vector xịn xò cho Designer',
    description:
      'Đóm xin giới thiệu đến các bạn những website cung cấp ảnh vector xịn xò miễn phí, cực hữu ích khi bạn thiết kế trên phần mềm Illustrator hoặc Figma nhé.',
    url: 'https://domstudiovn.s3.ap-southeast-1.amazonaws.com/dom_studio_8_website_cung_cap_mien_phi_vector_98fa48cc61.jpg',
  },
  {
    id: 2,
    title: 'Kiểm soát cảm xúc nơi công sở? Bạn có thể!',
    description:
      'Công việc đôi khi chiếm đến 50% quỹ thời gian trong ngày và kiểm soát cảm xúc nơi công sở là giải pháp để chúng ta giữ thăng bằng giữa công việc và cuộc sống riêng tư. Đã là công việc thì tất nhiên sẽ có áp lực và stress. Đơn giản là nếu Chủ Nhật bạn nghĩ đến ngày mai thứ 2 mà thấy ngán ngẩm, mỗi sáng phải cố gắng lắm để lết ra khỏi giường đi làm với tâm trạng chán chường, thì thế là stress rồi còn gì. Và tất nhiên là cũng không thiếu những lúc nóng giận/ tranh cãi chỉ muốn nghỉ việc ngay lập tức.',
    url: 'https://domstudiovn.s3.ap-southeast-1.amazonaws.com/web_design_43f652a499.jpeg',
  },
  {
    id: 3,
    title: 'Nên Học Thiết Kế Website Hay Thiết Kế Ứng Dụng Di Động',
    description:
      'Thiết kế ứng dụng di động là gì? Thiết kế website là gì? Với người mới bắt đầu thì nên học lĩnh vực nào? Đây hẳn là băn khoăn của rất nhiều người khi mới bắt đầu tìm hiểu về nghề lập trình viên. Đừng lo, bài chia sẻ dưới đây có thể sẽ là một số gợi ý hữu ích giúp bạn định hướng con đường sự nghiệp phù hợp của mình trong tương lai.',
    url: 'https://domstudiovn.s3.ap-southeast-1.amazonaws.com/lap_trinh_ung_dung_di_dong_2_20dc057ce0_18e096c115.jpeg',
  },
];

console.log(sampleData.map((d) => d.title));

export const ArticleSection = () => {
  return (
    <section className='relative bg-slate-50'>
      <div className='container max-w-screen-xl m-auto'>
        <Carousel slidesToShow={3} className='w-full h-full'>
          {sampleData.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ArticleSection;
