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
import { motion } from "framer-motion";

function Brigth() {
  return (
    <div className="min-h-[100dvh]">
      {/* <img src={gradient} alt="gradient" className="w-full" /> */}
      {/* <div className="">
        <img src={todo} alt="todo" className="absolute top-[630px]" />
        <img
          src={tab}
          alt="tab"
          className="absolute left-[260px] top-[620px]"
        />
        <img
          src={card}
          alt="card"
          className="absolute left-[197px] top-[400px]"
        />

        <img
          src={cafe}
          alt="cafe"
          className="absolute left-[260px] top-[875px]"
        />
        <img
          src={newTicket}
          alt="new-ticket"
          className="absolute left-[174px] top-[1035px]"
        />
        <img
          src={todo2}
          alt="todo-2"
          className="absolute right-[240px] top-[342px]"
        />
        <img
          src={bookFlight}
          alt="bookFlight"
          className="absolute right-0 top-[756px]"
        />
        <img
          src={tripIdeas}
          alt="tripIdeas"
          className="absolute right-[50px] top-[820px]"
        />
        <img
          src={reservation}
          alt="reservation"
          className="absolute right-[270px] top-[920px]"
        />
      </div> */}

      <img
        src={gradient}
        alt="gradient"
        className="h-[60rem] w-full object-cover lg:h-fit"
      />
    </div>
  );
}

export default Brigth;
