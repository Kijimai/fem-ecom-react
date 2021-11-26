// Component Tree structure
// **** Major - Minor ****
// Navigator - Navbar, UserControls
// UserControls - CartButton, ProfileButton
// Main - ItemImages, ItemInfo
// ItemImages - FeaturedImage, CarouselImages
// 

import React from "react"
import Navigator from "./components/Navigator"

const App = () => {
  return (
    <>
      <Navigator />
    </>
  )
}

export default App
