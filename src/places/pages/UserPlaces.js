import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../../places/components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Dam Square",
    description: "Dam Square lies in the historical center of Amsterdam",
    imageUrl:
      "https://cdn.pixabay.com/photo/2012/10/10/10/49/dam-square-60599_960_720.jpg",
    address: "1 Plein Plein, Amsterdam, 1000AMS",
    location: {
      lat: 52.3730983,
      long: 4.8909126
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Dam Square",
    description: "Dam Square lies in the historical center of Amsterdam",
    imageUrl:
      "https://cdn.pixabay.com/photo/2012/10/10/10/49/dam-square-60599_960_720.jpg",
    address: "1 Plein Plein, Amsterdam, 1000AMS",
    location: {
      lat: 52.3730983,
      long: 4.8909126
    },
    creator: "u2"
  }
];

const UserPlaces = props => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
