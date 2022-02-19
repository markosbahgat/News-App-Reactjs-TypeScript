import './App.css';
import '/node_modules/@fortawesome/fontawesome-free/css/all.css';
import ImageSlider from './components/ImageSlider/ImageSlider';
import { SectionTwo } from './HOC/newsPostsSection.hoc';
import SlidingCard from './components/PostsSlider/SlidingCard';
import FixedBottomFooter from './components/footer/FixedBottomFooter';
import { PopularPostSection } from './HOC/popularPostsSection.hoc';
import { MiddelSection } from './HOC/middelSection.hoc';

function App() {
  return (
    <div className="App">
      <ImageSlider/>
      <SlidingCard/>
      <MiddelSection/>
      <FixedBottomFooter/>
    </div>
  );
}

export default App;
