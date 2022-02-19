import './App.css';
import '/node_modules/@fortawesome/fontawesome-free/css/all.css';
import ImageSlider from './components/ImageSlider/ImageSlider';
import { SectionTwo } from './HOC/newsPostsSection.hoc';
import SlidingCard from './components/PostsSlider/SlidingCard';
import FixedBottomFooter from './components/footer/FixedBottomFooter';

function App() {
  return (
    <div className="App">
      <ImageSlider/>
      <SlidingCard/>   
      <SectionTwo/>
      <FixedBottomFooter/>
    </div>
  );
}

export default App;
