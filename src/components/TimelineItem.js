import React, { useEffect, useState, useRef } from 'react';
import './TimelineItem.css';

const TimelineItem = ({ label, position }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); // this line will add the `is-visible` class
          observer.unobserve(domRef.current); // Optional: Stop observing after the element is in view
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className={`timeline-item ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
    {position === 'left' && <div className="timeline-label left">{label}</div>}
    <div className="timeline-dot"></div>
    {position === 'right' && <div className="timeline-label right">{label}</div>}
</div>

  );
};

export default TimelineItem;
