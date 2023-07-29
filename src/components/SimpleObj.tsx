import React from 'react'

function SimpleObj() {
  const users = [
    {
      id: 1,
      name: "Eshmat",
      vehicles: [
        {
          id: 1,
          vehicle: "car",
        },
        {
          id: 2,
          vehicle: "helicopter",
        },
      ],
      isMaried: true,
    },
    {
      id: 2,
      name: "Toshmat",
      vehicles: [
        {
          id: 1,
          vehicle: "car",
        },
        {
          id: 2,
          vehicle: "plane",
        },
      ],
      isMaried: false,
    },
  ];

  const mariedUsers = users.filter((user) => user.isMaried);

  return (
    <div>SimpleObj</div>
  )
}

export default SimpleObj