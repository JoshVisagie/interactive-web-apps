// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
   const {firstName, surname, id, races}= athlete //created an object ub the function called athlete
    
   
   
  // Get the latest race of the athlete
  const [latestRace] = races.reverse();
  const { date, time } = latestRace;
  
  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2');
  title.textContent = id;
  fragment.appendChild(title);

    const list = document.createElement('dl');
    //created a variable called theDate and extracted all the dates from it
    const theDate = new Date(date)
    const day = theDate.getDate();
    const month = MONTHS[theDate.getMonth()];
    const year = theDate.getFullYear();
  
    const [first, second, third, fourth] = time;
    const total = first + second + third + fourth;
  
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
  
    list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>
    <dt>Total Races</dt>
    <dd>${races.length}</dd>
    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>
    <dt>Total Time (Latest)</dt>
    <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>
    `;

    fragment.appendChild(list);
    return fragment;
  }
  
  const NM372 = data.response.data.NM372; //please explain what response is
  const SV782 = data.response.data.SV782;
  
  
  const containerNM372 = document.querySelector('[data-athlete="NM372"]');// creates a variable with the elements from the html
  const containerSV782 = document.querySelector('[data-athlete="SV782"]');
  
   containerNM372.appendChild(createHtml(NM372));
  containerSV782.appendChild(createHtml(SV782));