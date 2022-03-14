// Component Tree structure
// **** Major - Minor ****
// Navigator - Navbar, UserControls
// UserControls - CartButton, ProfileButton
// Main - ItemImages, ItemInfo
// ItemImages - FeaturedImage, CarouselImages
//

import React from "react"
import Navigator from "./components/Navigator"
import "./styles/app.css"

const App = () => {
  return (
    <div className="app">
      <Navigator />
    </div>
  )
}

export default App
