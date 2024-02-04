// import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import { INITIAL_EVENTS, createEventId } from "../assets/event";

export default function Calender() {
  const [state, setState] = useState({
    weekendsVisible: true,
    currentEvents: [],
  });

  const [viewMode, setViewMode] = useState("dayGridMonth");
  const [timeDuration, setTimeDuration] = useState(30);

  console.log(timeDuration);

  // const handleWeekendsToggle = () => {
  //   setState({
  //     weekendsVisible: !state.weekendsVisible,
  //   });
  // };

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setState({
      currentEvents: events,
    });
  };

  function renderEventContent(eventInfo) {
    setViewMode(eventInfo?.view?.type);

    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        <p>{eventInfo.event.extendedProps.description}</p>
      </>
    );
  }

  useEffect(() => {
    if (viewMode === "timeGridWeek" || viewMode === "timeGridDay") {
      let first_th = document.querySelectorAll(
        ".fc-col-header > thead > tr > th"
      )[0];

      first_th.innerHTML = `<div class="fc-timegrid-axis-frame h-full w-full !justify-center">
      <div class="flex h-max gap-1">
      <button id="time-contract" class="bg-slate-400 p-1" type="button">
        <
      </button>
      <button id="time-expand" class="bg-slate-400 p-1" type="button">
        >
      </button>
    </div>
    </div>`;

      document.getElementById("time-contract").addEventListener("click", () => {
        setTimeDuration((prevTD) =>
          prevTD > 15
            ? prevTD - 15
            : (document.getElementById("time-contract").disabled = true)
        );
      });
      document.getElementById("time-expand").addEventListener("click", () => {
        setTimeDuration((prevTD) => prevTD + 15);
      });
    }
  }, [viewMode]);

  // function renderSidebarEvent(event) {
  //   return (
  //     <li key={event.id}>
  //       <b>
  //         {formatDate(event.start, {
  //           year: "numeric",
  //           month: "short",
  //           day: "numeric",
  //         })}
  //       </b>
  //       <i>{event.title}</i>
  //     </li>
  //   );
  // }

  // const handleDateSet = (dateInfo) => {
  // console.log(dateInfo);

  // dateInfo.el.innerHTML = "World";

  // dayRenderInfo.el.insertAdjacentHTML(
  //   "beforeend",
  //   '<i class="fc-content" aria-hidden="true">Hello</i>'
  // );
  // };

  return (
    <div className="demo-app">
      {/* <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className="demo-app-sidebar-section">
          <label>
            <input
              type="checkbox"
              checked={state.weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className="demo-app-sidebar-section">
          <h2>All Events ({state.currentEvents.length})</h2>
          <ul>{state.currentEvents.map(renderSidebarEvent)}</ul>
        </div>
      </div> */}

      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          // plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          buttonText={{
            today: "Today",
            month: "Month",
            week: "Week",
            day: "Day",
            // list: "Agenda",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */

          // my editable props
          allDaySlot={false}
          slotLabelInterval={{ minutes: timeDuration }}
          slotDuration={{ minutes: timeDuration }}
          slotLabelFormat={[
            {
              hour: "2-digit",
              minute: "2-digit",
              omitZeroMinute: false,
              meridiem: false,
            },
          ]}
          contentHeight="auto"
          // aspectRatio={5}

          // eventTimeFormat={{
          //   hour: "2-digit",
          //   hour12: true,
          //   minute: "2-digit",
          //   meridiem: "short",
          // }}

          // views={{
          //   dayGridMonth: {
          //     titleFormat: { year: "numeric", month: "short" },
          //   },

          //   timeGridDay: {
          //     titleFormat: { day: "2-digit", year: "numeric", month: "short" },
          //   },

          //   timeGridWeek: {
          //     titleFormat: { year: "numeric", month: "short" },
          //   },
          // }}
        />
      </div>
    </div>
  );
}
