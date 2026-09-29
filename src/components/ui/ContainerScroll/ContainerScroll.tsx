'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import './ContainerScroll.css';

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const rotate = useTransform(scrollYProgress, (val) => (isMobile ? 0 : 20 * (1 - val)));
  const scale = useTransform(scrollYProgress, (val) => (isMobile ? 0.98 + 0.02 * val : 1.05 - 0.05 * val));
  const translate = useTransform(scrollYProgress, (val) => (isMobile ? 0 : -100 * val));

  return (
    <div
      className="containerScroll"
      ref={containerRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div className="containerPerspective" style={{ width: '100%', position: 'relative' }}>
        <ScrollHeader translate={translate} titleComponent={titleComponent} />
        <ScrollCard rotate={rotate} translate={translate} scale={scale} isMobile={isMobile}>
          {children}
        </ScrollCard>
      </div>
    </div>
  );
};

export const ScrollHeader = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => (
  <motion.div
    style={{ translateY: translate, willChange: 'transform' }}
    className="scrollHeader"
  >
    {titleComponent}
  </motion.div>
);

export const ScrollCard = ({
  rotate,
  scale,
  children,
  isMobile,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate?: MotionValue<number>;
  children: React.ReactNode;
  isMobile?: boolean;
}) => (
  <motion.div
    style={{
      rotateX: isMobile ? 0 : rotate,
      scale,
      boxShadow: isMobile
        ? '0 12px 36px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12)'
        : '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      willChange: 'transform',
    }}
    className="scrollCard"
  >
    <div className="scrollCardInner">
      {children}
    </div>
  </motion.div>
);
