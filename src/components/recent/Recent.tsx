import Container from '../Container';
import SectionTitle from '../global/SectionTitle';

import recentHero from '/public/imgs/recent/recent-hero.png';

function Recent() {
  return (
    <div>
      <Container>
        <SectionTitle>Recent News</SectionTitle>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden bg-no-repeat bg-cover min-h-96 relative" style={{ backgroundImage: `url('${recentHero}')` }}>
            <div className="absolute bottom-0 p-3 bg-gradient-to-tr from-[#B49574] to-[#E8D1AA] text-placeholder">
              <h5 className="text-sm">Day 5 highlights</h5>
              <h4 className="text-lg">Baku 2023 World Taekwondo Championships</h4>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
}
export default Recent;
