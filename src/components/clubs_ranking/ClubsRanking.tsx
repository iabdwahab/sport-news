import Container from '../Container';
import SectionTitle from '../global/SectionTitle';
import { clubsRankingList } from './data';
import TableHead from './TableHead';

function ClubsRanking() {
  return (
    <section className="max-xl:mt-4">
      <Container className="h-full flex flex-col">
        <SectionTitle>Clubs Ranking</SectionTitle>
        <div className="w-full overflow-x-auto grow">
          <table className="w-full h-full  table-auto bg-placeholder rounded-md ">
            <TableHead />
            <tbody>
              {clubsRankingList.map((club, index) => (
                <tr key={index} className={`${index !== clubsRankingList.length - 1 ? 'border-b' : ''} border-[#B8C2CE]`}>
                  <td className="flex whitespace-nowrap w-max items-center gap-2 px-3 py-3">
                    <img src={club.Logo} alt={`${club} Logo`} className="w-6" />
                    {club.name}
                  </td>
                  {club.stats.map((stat, index) => (
                    <td key={index} className="text-center">
                      {stat}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
export default ClubsRanking;
