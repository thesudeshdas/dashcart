import { useState } from 'react'
import { useProductListingContext } from '../../contexts/ProductListingContext'
import productData from '../../database/productData'
import InputCheckboxes from '../inputs/InputCheckboxes'
import InputSlider from '../inputs/InputSlider'
import Rating from '../rating/Rating'

function SideBarProductFilter() {
  const [filterMobileView, setFilterMobileView] = useState(false)
  const {
    state: { includeOutOfStock, oneDayDeliveryOnly },
    dispatch: productListingDispatch,
  } = useProductListingContext()

  const brands = [...new Set(productData.map((item) => item.brand.text))]

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
            <button
              type="button"
              className="sidebar-button-rating"
              onClick={() =>
                productListingDispatch({ type: 'FILTER_BY_RATING', payload: 4 })
              }
            >
              <Rating stars={4} />
            </button>
            <button
              type="button"
              className="sidebar-button-rating"
              onClick={() =>
                productListingDispatch({ type: 'FILTER_BY_RATING', payload: 3 })
              }
            >
              <Rating stars={3} />
            </button>
            <button
              type="button"
              className="sidebar-button-rating"
              onClick={() =>
                productListingDispatch({ type: 'FILTER_BY_RATING', payload: 2 })
              }
            >
              <Rating stars={2} />
            </button>
            <button
              type="button"
              className="sidebar-button-rating"
              onClick={() =>
                productListingDispatch({ type: 'FILTER_BY_RATING', payload: 1 })
              }
            >
              <Rating stars={1} />
            </button>
          </div>
        </div>
        <div className="sidebar-category">
          <h3 className="sidebar-category-heading">Other Filters</h3>
          <div className="sidebar-category-component">
            {/* <InputCheckboxes
              option="One-day delivery Only"
              dispatchType="TOGGLE_ONE_DAY_DELIVERY"
            />
            <InputCheckboxes
              option="Include Out of Stock"
              dispatchType="TOGGLE_OUT_OF_STOCK"
            /> */}
            <div className="InputCheckbox">
              <input
                type="checkbox"
                name="includeOutOfStock"
                checked={includeOutOfStock}
                onChange={() =>
                  productListingDispatch({ type: 'TOGGLE_OUT_OF_STOCK' })
                }
              />{' '}
              Include Out Of Stock
            </div>
            <div className="InputCheckbox">
              <input
                type="checkbox"
                name="oneDayDeliveryOnly"
                checked={oneDayDeliveryOnly}
                onChange={() =>
                  productListingDispatch({ type: 'TOGGLE_ONE_DAY_DELIVERY' })
                }
              />{' '}
              One Day Delivery Only
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBarProductFilter
