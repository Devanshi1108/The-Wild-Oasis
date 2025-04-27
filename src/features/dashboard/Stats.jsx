import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, days, cabinCount }) {
  //1. Number of bookings
  const numBookings = bookings.length;

  //2. Total Sales
  const totalSales = bookings.reduce(
    (acc, booking) => acc + booking.totalPrice,
    0
  );

  //3.Check In
  const toalCheckins = confirmedStays.length;

  //4. Total Occupancy=num of checked in nights/all available nights
  // numNights= num of days * total cabins
  const numNights = days * cabinCount;
  const totalOccupancy =
    confirmedStays.reduce((acc, stay) => acc + stay.numNights, 0) / numNights;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />

      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={toalCheckins}
      />
      <Stat
        title="Occupancy"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={`${Math.round(totalOccupancy * 100)}%`}
      />
    </>
  );
}

export default Stats;
