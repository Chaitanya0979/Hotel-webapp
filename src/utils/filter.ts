export const filterHotelsByLocation = (hotels: any[], location: string) => {
    return hotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(location.toLowerCase())
    );
  };

  