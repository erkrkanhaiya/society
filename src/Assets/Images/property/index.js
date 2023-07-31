// import Intro1 from './svg/intro1.svg'
// export const staticimg = {
//   intro1: Intro1,
// }
import * as React from 'react'
import { FC } from 'react'

import { Icons } from './icon'
import { TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'

export const SvgIcon = ({ size = '25', name, width, height, onpress, color, paddingTop }) => {
  const Icon = Icons[name]
  if (onpress) {
    return (
      <TouchableOpacity onPress={onpress}>
        <Icon width={width ? width : size} height={height ? height : size} color={color ? color :null} 
        paddingTop={paddingTop} />
      </TouchableOpacity>
    )
  }

  return <Icon width={width ? width : size} height={height ? height : size} color={color ? color : null } paddingTop={paddingTop}/>
}

export const PngIcon = {
  test1: require('./png/greenfield1.png'),
  test2: require('./png/greenfield2.png'),
}
export const PngIcon2 = {
  test1: require('./png/property1.png'),
  test2: require('./png/property2.png'),
}
export const newlisting = {
  test1: require('./png/newlisting.png'),
  test2: require('./png/newlisting.png'),
  test3: require('./png/wifi.png'),
  test4: require('./png/ele.png'),
  test5: require('./png/water.png'),
  test6: require('./png/news.png'),
  test7: require('./png/feature.png'),
  test8: require('./png/citibank.png'),
  newlist1: require('./png/newlist1.png'),
  newlist2: require('./png/newlist2.png'),
  newlist3: require('./png/newlist3.png'),
  service1: require('./png/service1.png'),
  service2: require('./png/service2.png'),
  service3: require('./png/service3.png'),
  customer1:require('./png/customer1.png'),
  customer2:require('./png/customer2.png'),
  customer3:require('./png/customer3.png'),
  customer4:require('./png/customer4.png'),
}

export const profileimg = {
  user: require('./png/user.png'),
   
}
export const newlogin={
  home1: require('./png/home1.png'),
 home2: require('./png/home2.png'),
 home3: require('./png/home3.png'),
 home4: require('./png/home4.png'),
 family1:require('./png/family1.png'),
family2:require('./png/family2.png'),
family3:require('./png/family3.png'),
family4:require('./png/family4.png'),
family4:require('./png/family4.png'),
update1:require('./png/update1.png'),
update2:require('./png/update2.png'),
}
 export const newproject={
  bill: require('./png/bill.png'),
  bills: require('./png/bills.png'),
  car: require('./png/car.png'),
  event: require('./png/event.png'),
  loudspeaker: require('./png/loudspeaker.png'),
  member: require('./png/member.png'),
  noticebord: require('./png/noticebord.png'),
  rent: require('./png/rent.png'),
  rule: require('./png/rule.png'),
  siciety: require('./png/siciety.png'),
  suggestion: require('./png/suggestion.png'),
  event1: require('./png/event1.png'),
  event2: require('./png/event2.png'),
  event3: require('./png/event3.png'),
 }