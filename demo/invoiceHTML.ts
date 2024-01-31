type Ride2 = {
    distance: number
    waitingTime: number
  }
  
  function generateInvoiceHTML(rides: Ride2[]): string {
    let totalFare = 0,
      totalRides = 0,
      totalWaitingTime = 0
    // let result = ''
    // result += 'Invoice:' + '\n'

    let result = '<h2>Invoice</h2><ul>';

    for (const ride of rides) {
      const roundedDistance = Math.ceil(ride.distance * 2) / 2
      const roundedWaitingTime = Math.ceil(ride.waitingTime)
  
      const fare = 4 * roundedDistance + roundedWaitingTime
      const minimumFare = fare < 35 ? 35 : fare
  
      totalFare += minimumFare
      totalRides += 1
      totalWaitingTime += roundedWaitingTime
  
    //   result +=
    //     `	Ride Fare: ฿${minimumFare.toFixed(
    //       2
    //     )} for Distance: ${roundedDistance.toFixed(
    //       1
    //     )} km, Waiting Time: ${roundedWaitingTime} minutes` + '\n'

    result += `
        <li>
            Ride Fare: ฿${minimumFare.toFixed(2)} for Distance: ${roundedDistance.toFixed(1)} km,
            Waiting Time: ${roundedWaitingTime} minutes
        </li>`;
    }
  
    const averageFarePerRide = totalFare / totalRides
  
    // result += 'Total Number of Rides: ' + totalRides + '\n'
    // result += 'Total Fare: ฿' + totalFare.toFixed(2) + '\n'
    // result += 'Average Fare Per Ride: ฿' + averageFarePerRide.toFixed(2) + '\n'

    result += '</ul>';
    result += `<p>Total Number of Rides: ${totalRides}</p>`;
    result += `<p>Total Fare: ฿${totalFare.toFixed(2)}</p>`;
    result += `<p>Average Fare Per Ride: ฿${averageFarePerRide.toFixed(2)}</p>`;
    
    return result
  }
  
  export {generateInvoiceHTML, Ride2}
  