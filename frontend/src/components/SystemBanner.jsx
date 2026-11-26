
import React, { useEffect, useState } from "react";
import { Activity, Clock, CalendarDays } from "lucide-react";

function SystemBanner() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="system-banner">

      <div className="banner-left">
        <div className="online-icon">
          <Activity size={24} />
        </div>

        <div>
          <h3>Welcome to EventEase!</h3>
          <p>Your event experience starts here.</p>

          <span className="system-status">
            <span className="status-dot"></span>
            All Systems Operational
          </span>
        </div>
      </div>

      <div className="banner-time">
        <div>
          <CalendarDays size={18} />
          {currentTime.toLocaleDateString("en-IN")}
        </div>

        <div>
          <Clock size={18} />
          {currentTime.toLocaleTimeString("en-IN")}
        </div>
      </div>

    </div>
  );
}

export default SystemBanner;
