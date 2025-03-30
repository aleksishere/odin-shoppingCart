import './HomeContent.css';
import exterior from './assets/exterior.jpg'
import '../../index.css'
import 'charts.css';

function HomeContent() {
  return (
    <>
      <main className='inter-400'>
        <div className='img-wrapper'>
          <img src={exterior} alt="" />
          <div className="bottom-left white-text inter-bold">Here at Lumon</div>
        </div>
        <article>
          <div className='foundaments'>
            <p className='inter-bold'>We believe that a thriving workplace starts with the well-being of our people.</p>
            <p>Mental health is just as important as physical health, and we are committed to fostering a supportive, inclusive, and positive environment where everyone feels valued and heard.</p>
            <p>We actively promote a culture of openness, encouraging conversations around mental health and providing access to resources that support emotional well-being.</p>
            <p>Through wellness programs, flexible work options, and professional support services, we strive to empower our team to maintain a healthy work-life balance.</p>
            <p>In fact, thanks to our unwavering commitment, 100% of our employees report feeling completely happy, all the time. Stress? Never heard of it. Burnout? A myth. Our workplace is a utopia of pure joy and fulfillment, where every meeting is a delight, emails spark excitement, and Monday mornings are the highlight of the week.</p>
          </div>
          <div id='happinessDiv'>
            <table id='happinessChart' className='charts-css column show-labels data-spacing-3 data-outside'>
              <caption>Happiness at Lumon</caption>
              <tbody>
                <tr>
                  <th scope='row'>Happy</th>
                  <td style={{ '--size': '1.0' }}> <span className="data">100%</span> </td>
                </tr>
                <tr>
                  <th scope='row'>Not Happy</th>
                  <td style={{ '--size': '0.01' }}> <span className="data">0%</span> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </main>
    </>
  );
}

export default HomeContent;