import calCancel from "../images/cal-cancel.svg";

export const CalendarCancel = (props) => {
  const { isActive } = props;
  return (
    <div className="calender-icon-flex">
      <img
        src={calCancel}
        alt="cal-cancel.svg"
        className={
          isActive ? "calendar-icon-wrapper-active" : "calendar-icon-wrapper"
        }
      />
    </div>
  );
};
