import TimelineItem from './TimelineItem';

const styles = {
    timelineContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      width: '100%', 
      height: '100%', // adjust as necessary
    }
  };

export default function EducationPage() {
  return (
    <div style={styles.timelineContainer}>
      {['Education 1', 'Education 2', 'Education 3', 'Education 4', 'Education 5', 'Education 6', 'Education 7'].map((label, index) => (
        <TimelineItem label={label} position={index % 2 === 0 ? 'left' : 'right'} key={label} />
      ))}
    </div>
  );
}
