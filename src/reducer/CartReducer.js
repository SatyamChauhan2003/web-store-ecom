const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product)
    let existing = state.cart.find((item) => item.id === id + color);

    if (existing) {
      let updatedProduct = state.cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;

          if (newAmount >= item.max) {
            newAmount = item.max;
          }
          return {
            ...item,
            amount: newAmount,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        let decAmount = item.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...item,
          amount: decAmount,
        };
      } else {
        return item;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        let decAmount = item.amount + 1;
        if (decAmount >= item.max) {
          decAmount = item.max;
        }

        return {
          ...item,
          amount: decAmount,
        };
      } else {
        return item;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updateCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cart: updateCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedValue = state.cart.reduce((acc, curr) => {
      let { amount } = curr;
      acc += amount;
      return acc;
    }, 0);

    return {
      ...state,
      total_item: updatedValue,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;

      initialVal = initialVal + price * amount;

      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }
  return state;
};

export default cartReducer;
