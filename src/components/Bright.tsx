import gradient from "../assets/gradient.svg";
import todo from "../assets/cards/todo.svg";
import todo2 from "../assets/cards/todo2.svg";
import tab from "../assets/cards/tab.svg";
import card from "../assets/cards/card.svg";
import newTicket from "../assets/cards/new-ticket.svg";
import tripIdeas from "../assets/cards/trip-ideas.svg";
import bookFlight from "../assets/cards/book-flight.svg";
import reservation from "../assets/cards/reservation.svg";
import cafe from "../assets/cards/cafe.svg";

function Brigth() {
  return (
    <div className='relative min-h-[100dvh]'>
      <img src={gradient} alt='gradient' className='w-full sticky top-0' />
      <div className=''>
        <img src={todo} alt='todo' className='absolute top-[630px]' />
        <img
          src={tab}
          alt='tab'
          className='left-[260px] top-[620px] absolute'
        />
        <img
          src={card}
          alt='card'
          className='left-[197px] top-[400px] absolute'
        />

        <img
          src={cafe}
          alt='cafe'
          className='left-[260px] top-[875px] absolute'
        />
        <img
          src={newTicket}
          alt='new-ticket'
          className='left-[174px] top-[1035px] absolute'
        />
        <img
          src={todo2}
          alt='todo-2'
          className='right-[240px] top-[342px] absolute'
        />
        <img
          src={bookFlight}
          alt='bookFlight'
          className='right-0 top-[756px] absolute'
        />
        <img
          src={tripIdeas}
          alt='tripIdeas'
          className='right-[50px] top-[820px]  absolute'
        />
        <img
          src={reservation}
          alt='reservation'
          className='right-[270px] top-[920px] absolute'
        />
      </div>
      <div className='absolute top-1/3 w-[668px] text-center inset-x-1/3'>
        <h1 className='text-[80px] '>Unlock Seamless Efficiency</h1>
        <button className='w-[167px] h-[52px] bg-white text-black rounded-[52px] shadow-sm shadow-white'>
          Join Waitlist
        </button>
      </div>
    </div>
  );
}

export default Brigth;
