import { useState } from 'react'
import productData from '../../database/productData'
import InputCheckboxes from '../inputs/InputCheckboxes'
import InputSlider from '../inputs/InputSlider'
import Rating from '../rating/Rating'

function SideBarProductFilter() {
  const [filterMobileView, setFilterMobileView] = useState(false)

  const brands = productData.map((item) => item.brand.text)

  return (
    <>
      <div className="sidebar-opener">
        <button
          type="button"
          className="button button-alternate button-sidebar-opener"
          onClick={() => setFilterMobileView(!filterMobileView)}
        >
          Filter
        </button>
        <button
          type="button"
          className="button button-alternate button-sidebar-opener"
        >
          Sort
        </button>
      </div>
      <div
        className="sidebar"
        style={filterMobileView ? { display: 'block' } : { display: 'none' }}
      >
        <div className="sidebar-category">
          <h3 className="sidebar-category-heading">Price range</h3>
          <div className="sidebar-category-component">
            <InputSlider />
            <div className="sidebar-container-pricing-label">
              <div>Min</div>
              <div>Max</div>
            </div>
          </div>
        </div>
        <div className="sidebar-category">
          <h3 className="sidebar-category-heading">Rating</h3>
          <div className="sidebar-category-component">
            <button type="button" className="sidebar-button-rating">
              <Rating stars={4} />
            </button>
            <button type="button" className="sidebar-button-rating">
              <Rating stars={3} />
            </button>
            <button type="button" className="sidebar-button-rating">
              <Rating stars={2} />
            </button>
            <button type="button" className="sidebar-button-rating">
              <Rating stars={1} />
            </button>
          </div>
        </div>
        <div className="sidebar-category">
          <h3 className="sidebar-category-heading">Brand</h3>
          <div className="sidebar-category-component">
            <InputCheckboxes checkboxOptions={brands} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBarProductFilter
