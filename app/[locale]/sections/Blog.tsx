'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Slider } from '@/components/ui/Slider';
import { eyebrow, headingMd, TextBlock, Section as BaseSection } from '@/components/ui/typography';
import { posts } from '@/lib/posts';

const Section = styled(BaseSection)`
  overflow: hidden;
`;

/* ── Layout ── */

const SliderWrap = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 var(--layout-pad);
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--layout-pad);
`;

const Eyebrow = styled.p`${eyebrow}`;
const Heading = styled.h2`${headingMd}`;

/* ── Card ── */

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  height: 100%;
`;

const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  background: var(--bg-subtle);
  position: relative;
`;

const CardBody = styled.div`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardTag = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brand);
  margin-bottom: 4px;
`;

const CardTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: var(--text);
  margin-bottom: 10px;
`;

const CardExcerpt = styled.p`
  font-size: 12px;
  line-height: 1.55;
  color: var(--text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
  margin-bottom: 16px;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const PostDate = styled.p`
  font-size: 11px;
  color: var(--text-muted);
  line-height: 1.2;
`;

const ReadBtn = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--button-primary-text);
  background: var(--button-primary-bg);
  border-radius: var(--radius-sm);
  padding: 8px 14px;
  align-self: flex-start;
`;

/* ── Component ── */

export function Blog() {
  const t = useTranslations('blog');
  const { locale } = useParams<{ locale: string }>();

  return (
    <Section id="blog">
      <Header>
        <TextBlock>
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <Heading>{t('heading')}</Heading>
        </TextBlock>
      </Header>

      <SliderWrap>
        <Slider>
          {posts.map((post) => (
            <Card key={post.slug} href={`/${locale}/blog/${post.slug}`}>
              <CardImage>
                {post.image && <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 422px" style={{ objectFit: 'cover' }} />}
              </CardImage>
              <CardBody>
                <CardMeta>
                  <CardTag>{post.tag}</CardTag>
                  <PostDate>{post.date}</PostDate>
                </CardMeta>
                <CardTitle>{post.title}</CardTitle>
                <CardExcerpt>{post.excerpt}</CardExcerpt>
                <ReadBtn>{t('readMore')}</ReadBtn>
              </CardBody>
            </Card>
          ))}
        </Slider>
      </SliderWrap>
    </Section>
  );
}
