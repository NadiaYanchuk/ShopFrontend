import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

import React from "react";
import "./Filter.css";
import { useData } from "../../../../contexts/DataProvider";

export const Filter = () => {
  const { dispatch, state } = useData();
  const [isFilterMenuOn, setIsFilterMenuOn] = useState(false);

  return (
    <div>
      <div
        className={
          isFilterMenuOn
            ? "filter-container filter-container-mobile-open"
            : "filter-container filter-container-mobile-closed"
        }
      >
        <div
          className={
            !isFilterMenuOn
              ? "filter-header filter-header-mobile-closed"
              : "filter-header filter-header-mobile-open"
          }
        >
          <span
            className="close-tab"
            onClick={() => setIsFilterMenuOn(!isFilterMenuOn)}
          >
            {!isFilterMenuOn ? <TbAdjustmentsHorizontal /> : <RxCross2 />}
          </span>
          <h2>Фильтры</h2>
        </div>

        <div
          className={
            isFilterMenuOn
              ? "filter-types-container filter-types-container-mobile"
              : "filter-types-container"
          }
        >
          <div className="price-container">
            <h3>Цена</h3>
            <div className="price-input-container">
              <label htmlFor="below-200">
                Менее $200
                <input
                  checked={state.filters.price.find((price) =>
                    price.min === 0 ? true : false
                  )}
                  onChange={() =>
                    dispatch({
                      type: "ADD_PRICE",
                      payload: { min: 0, max: 200 },
                    })
                  }
                  id="below-200"
                  type="checkbox"
                />
              </label>

              <label htmlFor="201-999">
                $201 - $999
                <input
                  checked={state.filters.price.find((price) =>
                    price.min === 201 ? true : false
                  )}
                  onChange={() =>
                    dispatch({
                      type: "ADD_PRICE",
                      payload: { min: 201, max: 999 },
                    })
                  }
                  id="201-999"
                  type="checkbox"
                />
              </label>

              <label htmlFor="1000-1999">
                $1000 - $1999
                <input
                  checked={state.filters.price.find((price) =>
                    price.min === 1000 ? true : false
                  )}
                  onChange={() =>
                    dispatch({
                      type: "ADD_PRICE",
                      payload: { min: 1000, max: 1999 },
                    })
                  }
                  id="1000-1999"
                  type="checkbox"
                />
              </label>

              <label htmlFor="above 2000">
                Более $2000
                <input
                  checked={state.filters.price.find((price) =>
                    price.min === 2000 ? true : false
                  )}
                  onChange={() =>
                    dispatch({
                      type: "ADD_PRICE",
                      payload: { min: 2000, max: 5000 },
                    })
                  }
                  id="above 2000"
                  type="checkbox"
                />
              </label>
            </div>
          </div>

          <div className="category-container">
            <h3>Категории</h3>
            <div className="category-input-container">
              {state.allCategories?.map(({ categoryName }) => (
                <div className="category-input-container" key={categoryName}>
                  <label htmlFor={`category-${categoryName}`}>
                    {`${categoryName}`}
                    <input
                      checked={state.filters.categories.includes(categoryName)}
                      onChange={() =>
                        dispatch({
                          type: "ADD_CATEGORIES",
                          payload: categoryName,
                        })
                      }
                      id={`category-${categoryName}`}
                      type="checkbox"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="sorting-container">
            <h3>Сортировка</h3>

            <div className="sorting-input-container">
              <label htmlFor="high-to-low">
                Цена от высокой к низкой
                <input
                  checked={state.filters.sort === "highToLow"}
                  onChange={() =>
                    dispatch({ type: "ADD_SORT", payload: "highToLow" })
                  }
                  name="sort"
                  id="high-to-low"
                  type="radio"
                />
              </label>

              <label htmlFor="low-to-high">
                Цена от низкой до высокой
                <input
                  checked={state.filters.sort === "lowToHigh"}
                  onChange={() =>
                    dispatch({ type: "ADD_SORT", payload: "lowToHigh" })
                  }
                  name="sort"
                  id="low-to-high"
                  type="radio"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
