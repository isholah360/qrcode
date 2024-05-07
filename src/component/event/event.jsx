import "./event.css";

function Event() {
  return (
    <div style={{overflowX:"hidden"}}>
      <div className="event-complete">
        <div className="the-main-event">
          <div className="event-golfer-img">
            <img src="assets/g3.jpeg" alt="" />
          </div>
          <div className="the-three-events">
            <div className="our-event">OUR EVENTS</div>
            <div className="let-plan">Let’s Make It A Golf Day</div>
            {/* Event two */}
            <div className="event-date-hr">
              <div className="the-event-date">
                <div className="eve-time-date">
                  <div className="event-date">20 AUGUST 2024</div>
                  <div className="event-time">10:00AM</div>
                </div>
                <div className="event-desc-name">
                  <div className="event-name">25th Goolfs Anniversary</div>
                  <div className="event-descript">
                    Celebrating 25 years of tradition, our polo club has
                    fostered excellence, camaraderie, and a vibrant community of
                    equestrian enthusiasts.
                  </div>
                </div>
                <div className="event-button">
                  <button>BOOK TICKET</button>
                </div>
              </div>

              <hr style={{ background: "#e08f5c", borderColor: "#e08f5c" }} />
            </div>
            {/* Event two */}
            <div className="event-date-hr">
              <div className="the-event-date">
                <div className="eve-time-date">
                  <div className="event-date">20 AUGUST 2024</div>
                  <div className="event-time">10:00AM</div>
                </div>
                <div className="event-desc-name">
                  <div className="event-name">25th Goolfs Anniversary</div>
                  <div className="event-descript">
                    Celebrating 25 years of tradition, our polo club has
                    fostered excellence, camaraderie, and a vibrant community of
                    equestrian enthusiasts.
                  </div>
                </div>
                <div className="event-button">
                  <button>BOOK TICKET</button>
                </div>
              </div>

              <hr style={{ background: "#e08f5c", borderColor: "#e08f5c" }} />
            </div>
            {/* Event three */}
            <div className="event-date-hr">
              <div className="the-event-date">
                <div className="eve-time-date">
                  <div className="event-date">20 AUGUST 2024</div>
                  <div className="event-time">10:00AM</div>
                </div>
                <div className="event-desc-name">
                  <div className="event-name">25th Goolfs Anniversary</div>
                  <div className="event-descript">
                    Celebrating 25 years of tradition, our polo club has
                    fostered excellence, camaraderie, and a vibrant community of
                    equestrian enthusiasts.
                  </div>
                </div>
                <div className="event-button">
                  <button>BOOK TICKET</button>
                </div>
              </div>

              <hr style={{ background: "#e08f5c", borderColor: "#e08f5c" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
